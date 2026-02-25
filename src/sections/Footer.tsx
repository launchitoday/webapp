import { motion } from 'framer-motion';
import { FileText, X } from 'lucide-react';

const socialLinks = [
  { name: 'instagram', href: '#' },
  { name: 'linkedin', href: '#' },
  { name: 'youtube', href: '#' },
  { name: 'behance', href: '#' },
  { name: 'x', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-black text-white py-10 md:py-14 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
          {/* Contact Info */}
          <div>
            <p className="text-xs text-gray-500 mb-1">contact us</p>
            <a
              href="mailto:hello@launchit.today"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              hello@launchit.today
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-xs text-gray-500 mb-1">follow us</p>
            <div className="flex flex-col gap-0.5">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-white text-sm hover:opacity-70 transition-opacity capitalize"
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* PDF Download */}
        <div className="mb-10">
          <p className="text-xs text-gray-500 mb-1">
            yeah, sometimes all you need is an old-school pdf
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white text-sm hover:opacity-70 transition-opacity underline underline-offset-4"
          >
            <FileText className="w-3 h-3" />
            download PDF profile
          </a>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pt-6 border-t border-white/10">
          <div>
            <p className="text-[10px] text-gray-600 max-w-md leading-relaxed">
              The text and graphic content of the website belongs to LIT and
              cannot be used by other resources without our permission and
              without the link to the source.
            </p>
            <p className="text-[10px] text-gray-600 mt-3">© LIT 2025</p>
          </div>

          <motion.a
            href="#"
            className="w-7 h-7 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-3 h-3" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
