
import { Mail, Globe, Phone, MapPin, ChevronRight, Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-[#F1F0FB] to-[#E5DEFF]">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(109.6deg,rgba(223,234,247,1)11.2%,rgba(244,248,252,1)91.1%)] opacity-70"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent animate-pulse"></div>
      </div>

      <div className="container px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white/80 shadow-[8px_8px_16px_#D1D9E6,-8px_-8px_16px_#FFFFFF] backdrop-blur-sm">
              <h3 className="font-serif text-3xl text-neutral-800">Luxe Living</h3>
              <p className="text-neutral-600 leading-relaxed mt-4">
                Experience unparalleled luxury in furniture design. Each piece tells a story of craftsmanship and elegance.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="bg-white hover:bg-neutral-50 p-3 rounded-full transition-all shadow-[5px_5px_10px_#D1D9E6,-5px_-5px_10px_#FFFFFF]">
                  <Mail className="w-5 h-5 text-neutral-600" />
                </a>
                <a href="#" className="bg-white hover:bg-neutral-50 p-3 rounded-full transition-all shadow-[5px_5px_10px_#D1D9E6,-5px_-5px_10px_#FFFFFF]">
                  <Globe className="w-5 h-5 text-neutral-600" />
                </a>
                <a href="#" className="bg-white hover:bg-neutral-50 p-3 rounded-full transition-all shadow-[5px_5px_10px_#D1D9E6,-5px_-5px_10px_#FFFFFF]">
                  <Phone className="w-5 h-5 text-neutral-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-white/80 shadow-[8px_8px_16px_#D1D9E6,-8px_-8px_16px_#FFFFFF] backdrop-blur-sm">
              <h4 className="font-medium text-lg text-neutral-800">Quick Links</h4>
              <ul className="space-y-4 mt-4">
                {['Collections', 'New Arrivals', 'About Us'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} 
                       className="text-neutral-600 hover:text-neutral-800 transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-white/80 shadow-[8px_8px_16px_#D1D9E6,-8px_-8px_16px_#FFFFFF] backdrop-blur-sm">
              <h4 className="font-medium text-lg text-neutral-800">Services</h4>
              <ul className="space-y-4 mt-4">
                {['Shipping', 'Returns', 'Warranty'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} 
                       className="text-neutral-600 hover:text-neutral-800 transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white/80 shadow-[8px_8px_16px_#D1D9E6,-8px_-8px_16px_#FFFFFF] backdrop-blur-sm">
              <h4 className="font-medium text-lg text-neutral-800">Visit Us</h4>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <p className="text-neutral-600">
                    123 Luxury Avenue<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <p className="text-neutral-600">+1 (888) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <p className="text-neutral-600">contact@luxeliving.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-600 text-sm">
              <Copyright className="w-4 h-4" />
              <p>2024 Luxe Living. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-600 hover:text-neutral-800 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-800 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
