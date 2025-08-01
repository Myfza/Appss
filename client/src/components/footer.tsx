import { Leaf } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa";
import { useContent } from "@/hooks/use-content";

export default function Footer() {
  const { data: content } = useContent();

  return (
    <footer className="bg-bone-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {content?.branding?.footerLogoUrl ? (
                <>
                  <img
                    src={content.branding.footerLogoUrl}
                    alt="Footer Logo"
                    className="h-6 object-contain"
                  />
                  <span className="font-poppins font-semibold text-xl">
                    {content?.branding?.footerLogoText || "Vizart"}
                  </span>
                </>
              ) : (
                <>
                  <Leaf className="text-electric-blue text-xl" />
                  <span className="font-poppins font-semibold text-xl">
                    {content?.branding?.footerLogoText || "Vizart"}
                  </span>
                </>
              )}
            </div>
            <p className="text-gray-600 leading-relaxed">
              We deliver standout websites with effortless collaboration,
              helping businesses create impactful digital experiences that drive
              real results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Website Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Logo & Branding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Pitch Decks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Social Media
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-4 sm:mb-0">
            © 2025 Vizart Studio. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-charcoal transition-colors"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-charcoal transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-charcoal transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-charcoal transition-colors"
            >
              <FaDribbble className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
