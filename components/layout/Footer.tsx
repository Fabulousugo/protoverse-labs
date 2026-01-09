import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-void-black text-protoverse-white border-t border-quantum-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-quantum-cyan">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-quantum-cyan transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-quantum-cyan transition-colors">Careers</Link></li>
              <li><Link href="/partnerships" className="hover:text-quantum-cyan transition-colors">Partnerships</Link></li>
              <li><Link href="/contact" className="hover:text-quantum-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-quantum-cyan">Programs</h3>
            <ul className="space-y-2">
              <li><Link href="/sky-academy" className="hover:text-quantum-cyan transition-colors">Sky Academy</Link></li>
              <li><Link href="/afrospace" className="hover:text-quantum-cyan transition-colors">AfroSpace</Link></li>
              <li><Link href="/programs" className="hover:text-quantum-cyan transition-colors">Events</Link></li>
              <li><Link href="/outreach" className="hover:text-quantum-cyan transition-colors">Outreach</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-quantum-cyan">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-quantum-cyan transition-colors">Blog</Link></li>
              <li><Link href="/skymart" className="hover:text-quantum-cyan transition-colors">SkyMart</Link></li>
              <li><a href="#" className="hover:text-quantum-cyan transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-quantum-cyan transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-quantum-cyan">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {['facebook', 'youtube', 'twitter', 'instagram', 'tiktok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-deep-space flex items-center justify-center hover:bg-quantum-cyan hover:text-void-black transition-all"
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

        {/* Bottom Bar */}
        <div className="border-t border-protoverse-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-protoverse-white/60">
            © {currentYear} Protoverse Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link href="#" className="text-protoverse-white/60 hover:text-quantum-cyan">Privacy Policy</Link>
            <Link href="#" className="text-protoverse-white/60 hover:text-quantum-cyan">Terms of Use</Link>
            <Link href="#" className="text-protoverse-white/60 hover:text-quantum-cyan">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
