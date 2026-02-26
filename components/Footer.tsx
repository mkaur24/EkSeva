export function Footer() {
  return (
    <footer className="hairline bg-white/70">
      <div className="container-shell py-10 md:py-12">
        <div className="mb-8 flex flex-col gap-4 border-b border-line pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium tracking-tight text-ink">EkSeva®</p>
            <p className="mt-1 text-sm text-mute">Thoughtful food for community kitchens and households.</p>
          </div>
          <a href="#top" className="focus-ring text-sm tracking-tight text-mute hover:text-ink">
            Back to top
          </a>
        </div>

        <div className="space-y-1 text-sm leading-6 text-mute">
          <p>© 2026 EkSeva Ltd. All rights reserved.</p>
          <p>EkSeva® is a registered trademark of EkSeva Ltd.</p>
          <p>Company registered in England and Wales.</p>
          <p>Company No: 16606226</p>
        </div>
      </div>
    </footer>
  );
}
