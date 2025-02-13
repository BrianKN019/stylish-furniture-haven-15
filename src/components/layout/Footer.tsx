
import { Mail, Globe, Phone, MapPin, ChevronRight, Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-[#1A1F2C] to-neutral-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="container px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="font-serif text-3xl text-white">Luxe Living</h3>
            <p className="text-neutral-400 leading-relaxed">
              Experience unparalleled luxury in furniture design. Each piece tells a story of craftsmanship and elegance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-neutral-800/50 hover:bg-primary/20 p-3 rounded-full transition-colors">
                <Mail className="w-5 h-5 text-neutral-300" />
              </a>
              <a href="#" className="bg-neutral-800/50 hover:bg-primary/20 p-3 rounded-full transition-colors">
                <Globe className="w-5 h-5 text-neutral-300" />
              </a>
              <a href="#" className="bg-neutral-800/50 hover:bg-primary/20 p-3 rounded-full transition-colors">
                <Phone className="w-5 h-5 text-neutral-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-medium text-lg text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Collections', 'New Arrivals', 'About Us'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} 
                     className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-medium text-lg text-white">Services</h4>
            <ul className="space-y-4">
              {['Shipping', 'Returns', 'Warranty'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} 
                     className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-medium text-lg text-white">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p className="text-neutral-400">
                  123 Luxury Avenue<br />
                  Beverly Hills, CA 90210
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-neutral-400">+1 (888) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-neutral-400">contact@luxeliving.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <Copyright className="w-4 h-4" />
              <p>2024 Luxe Living. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
