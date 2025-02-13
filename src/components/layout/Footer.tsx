
import { Mail, Globe, Phone, MapPin, Copyright } from 'lucide-react';
import { SparklesCore } from '../ui/sparkles';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-br from-[#F1F0FB] to-[#E5DEFF]">
      {/* Premium Sparkles Effect */}
      <div className="absolute inset-0">
        <SparklesCore
          id="footerSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#9b87f5"
          particleColors={["#9b87f5", "#8b77e5", "#7a66d5", "#6956c5", "#5845b5"]}
        />
      </div>

      <div className="container px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="p-6 rounded-xl bg-white/90 shadow-lg backdrop-blur-sm">
              <h3 className="font-serif text-2xl text-neutral-800 mb-3">Luxe Living</h3>
              <div className="flex gap-4 mt-4">
                <a href="#" className="bg-neutral-50 hover:bg-neutral-100 p-2.5 rounded-lg transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="bg-neutral-50 hover:bg-neutral-100 p-2.5 rounded-lg transition-all">
                  <Globe className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="bg-neutral-50 hover:bg-neutral-100 p-2.5 rounded-lg transition-all">
                  <Phone className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="md:col-span-8">
            <div className="p-6 rounded-xl bg-white/90 shadow-lg backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-medium text-sm text-neutral-800 mb-4">Quick Links</h4>
                  <div className="space-y-2">
                    {['Collections', 'New Arrivals', 'About'].map((item) => (
                      <a key={item} href={`#${item.toLowerCase()}`} 
                         className="block text-sm text-neutral-600 hover:text-primary transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-neutral-800 mb-4">Services</h4>
                  <div className="space-y-2">
                    {['Shipping', 'Returns', 'Support'].map((item) => (
                      <a key={item} href={`#${item.toLowerCase()}`} 
                         className="block text-sm text-neutral-600 hover:text-primary transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-neutral-800 mb-4">Visit Us</h4>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Beverly Hills, CA
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      +1 (888) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <Copyright className="w-3.5 h-3.5" />
            <p>2025 Luxe Living Inc. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
