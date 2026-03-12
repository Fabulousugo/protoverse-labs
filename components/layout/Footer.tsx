import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-30 border-t border-quantum-cyan/20 bg-void-black text-protoverse-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-quantum-cyan">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="transition-colors hover:text-quantum-cyan">About Us</Link></li>
              <li><Link href="/careers" className="transition-colors hover:text-quantum-cyan">Careers</Link></li>
              <li><Link href="/partnerships" className="transition-colors hover:text-quantum-cyan">Partnerships</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-quantum-cyan">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-quantum-cyan">Programs</h3>
            <ul className="space-y-2">
              <li><Link href="/sky-academy" className="transition-colors hover:text-quantum-cyan">Sky Academy</Link></li>
              <li><Link href="/afrospace" className="transition-colors hover:text-quantum-cyan">AfroSpace</Link></li>
              <li><Link href="/programs" className="transition-colors hover:text-quantum-cyan">Events</Link></li>
              <li><Link href="/outreach" className="transition-colors hover:text-quantum-cyan">Outreach</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-quantum-cyan">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="transition-colors hover:text-quantum-cyan">Blog</Link></li>
              <li><Link href="/skymart" className="transition-colors hover:text-quantum-cyan">SkyMart</Link></li>
              <li><a href="#" className="transition-colors hover:text-quantum-cyan">Documentation</a></li>
              <li><a href="#" className="transition-colors hover:text-quantum-cyan">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-quantum-cyan">Connect</h3>
            <div className="mb-4 flex space-x-4">
              {["facebook", "youtube", "twitter", "instagram", "tiktok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-deep-space transition-all hover:bg-quantum-cyan hover:text-void-black"
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
            <p className="text-sm text-protoverse-white/60">
              Subscribe to our newsletter
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-protoverse-white/10 pt-8 md:flex-row">
          <p className="text-sm text-protoverse-white/60">
            © {currentYear} Protoverse Labs. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 text-sm md:mt-0">
            <Link href="#" className="text-protoverse-white/60 hover:text-quantum-cyan">Privacy Policy</Link>
            <Link href="#" className="text-protoverse-white/60 hover:text-quantum-cyan">Terms of Use</Link>
            <Link href="#" className="text-protoverse-white/60 hover:text-quantum-cyan">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}