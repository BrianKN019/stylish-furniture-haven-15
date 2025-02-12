
import { Menu, Search, ShoppingCart, User } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="font-serif text-2xl">Luxe Living</h1>
            <div className="hidden md:flex items-center gap-6">
              <a href="#collections" className="text-neutral-600 hover:text-neutral-900 transition-colors">Collections</a>
              <a href="#new-arrivals" className="text-neutral-600 hover:text-neutral-900 transition-colors">New Arrivals</a>
              <a href="#sale" className="text-neutral-600 hover:text-neutral-900 transition-colors">Sale</a>
              <a href="#about" className="text-neutral-600 hover:text-neutral-900 transition-colors">About</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors" onClick={() => console.log("Search clicked")}>
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors" onClick={() => console.log("User clicked")}>
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative" onClick={() => console.log("Cart clicked")}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
            <button className="md:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
