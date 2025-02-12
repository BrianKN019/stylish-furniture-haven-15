
const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>
      <div className="container px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-white">Luxe Living</h3>
            <p className="text-neutral-400">
              Crafting luxury spaces with timeless elegance and contemporary design.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#collections" className="text-neutral-400 hover:text-white transition-colors">Collections</a></li>
              <li><a href="#new-arrivals" className="text-neutral-400 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-white">Customer Care</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-white">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © 2024 Luxe Living. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
