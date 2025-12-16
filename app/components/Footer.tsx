export default function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-background border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                S
              </span>
            </div>
            <span className="text-lg font-bold text-foreground">Siona</span>
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Siona. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://siona.mihma.com"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              siona.mihma.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
