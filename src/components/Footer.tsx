import { Instagram, Facebook, Twitter, Youtube, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white/80 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-white mb-4 tracking-wider">LENS & FRAME</h3>
            <p className="text-sm">
              Capturing moments that tell your unique story through stunning photography and videography.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavigate('portfolio')} className="hover:text-white transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('services')} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('blog')} className="hover:text-white transition-colors">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Wedding Photography</li>
              <li>Event Coverage</li>
              <li>Commercial Videography</li>
              <li>Portrait Sessions</li>
              <li>Product Photography</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-span-1">
            <h4 className="text-white mb-4">Connect</h4>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@lensframe.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lens & Frame. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
