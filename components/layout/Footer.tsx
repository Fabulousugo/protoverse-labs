import Link from "next/link";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
  { name: "Facebook", href: "https://www.facebook.com/share/1CXDPef2Yz/?mibextid=wwXIfr", icon: FaFacebook },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCHNYcRP8aFmE2wryREnKuJQ", icon: FaYoutube },
  // { name: "Twitter", href: "https://twitter.com/protoverse", icon: FaTwitter },
  // { name: "Instagram", href: "https://www.instagram.com/protoverse/", icon: FaInstagram },
  // { name: "TikTok", href: "https://www.tiktok.com/@protoverse", icon: FaTiktok },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/protoverse-labs/?", icon: FaLinkedin },
];

  return (
    <footer className="relative z-30 border-t border-quantum-cyan/20 bg-void-black text-protoverse-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-quantum-cyan">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-quantum-cyan">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-quantum-cyan">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-quantum-cyan">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-quantum-cyan">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-quantum-cyan">
              Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sky-academy" className="hover:text-quantum-cyan">
                  Sky Academy
                </Link>
              </li>
              <li>
                <Link href="/afrospace" className="hover:text-quantum-cyan">
                  AfroSpace
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-quantum-cyan">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/outreach" className="hover:text-quantum-cyan">
                  Outreach
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-quantum-cyan">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-quantum-cyan">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/skymart" className="hover:text-quantum-cyan">
                  SkyMart
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-quantum-cyan">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-quantum-cyan">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-quantum-cyan">
              Connect
            </h3>

            <div className="mb-4 flex space-x-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-deep-space transition-all duration-300 hover:bg-quantum-cyan hover:text-void-black hover:shadow-[0_0_15px_#00ffff]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <p className="text-sm text-protoverse-white/60">
              Subscribe to our newsletter
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-protoverse-white/10 pt-8 md:flex-row">
          <p className="text-sm text-protoverse-white/60">
            © {currentYear} Protoverse Labs. All rights reserved.
          </p>

          <div className="mt-4 flex space-x-6 text-sm md:mt-0">
            <Link
              href="#"
              className="text-protoverse-white/60 hover:text-quantum-cyan"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-protoverse-white/60 hover:text-quantum-cyan"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="text-protoverse-white/60 hover:text-quantum-cyan"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}