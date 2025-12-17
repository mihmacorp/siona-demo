import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { fullName, workEmail, companyName, role, instanceCount } = body;

    if (!fullName || !workEmail || !companyName || !role || !instanceCount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check for duplicate email
    const emailExists = await kv.sismember("early-access:emails", workEmail);
    if (emailExists) {
      return NextResponse.json(
        { error: "This email has already been registered for early access" },
        { status: 409 }
      );
    }

    // Generate a unique ID for this submission
    const timestamp = Date.now();
    const submissionId = `submission:${timestamp}:${workEmail}`;

    // Store the submission data
    const submissionData = {
      id: submissionId,
      fullName,
      workEmail,
      companyName,
      role,
      instanceCount,
      submittedAt: new Date().toISOString(),
      timestamp,
    };

    // Store in Redis with the submission ID as key
    await kv.set(submissionId, submissionData);

    // Also add to a sorted set for easy retrieval of all submissions
    await kv.zadd("early-access:submissions", {
      score: timestamp,
      member: submissionId,
    });

    // Optional: Store email in a set for quick lookup/duplicate checking
    await kv.sadd("early-access:emails", workEmail);

    return NextResponse.json(
      {
        success: true,
        message: "Submission received successfully",
        submissionId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing early access submission:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve submissions (for admin use)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    // Get all submission IDs from the sorted set
    const submissionIds = await kv.zrange(
      "early-access:submissions",
      offset,
      offset + limit - 1,
      { rev: true }
    );

    // Fetch all submissions
    const submissions = await Promise.all(
      submissionIds.map(async (id) => {
        return await kv.get(String(id));
      })
    );

    // Get total count
    const total = await kv.zcard("early-access:submissions");

    return NextResponse.json({
      success: true,
      data: submissions,
      pagination: {
        total,
        limit,
        offset,
      },
    });
  } catch (error) {
    console.error("Error retrieving submissions:", error);
    return NextResponse.json(
      { error: "Failed to retrieve submissions" },
      { status: 500 }
    );
  }
}
