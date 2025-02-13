
import { Home, ShoppingBag, Tag, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const DockMenu = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-t border-neutral-200">
      <div className="container mx-auto">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Link 
            to="/"
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/') ? 'text-primary' : 'text-neutral-600'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link 
            to="/new-arrivals"
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/new-arrivals') ? 'text-primary' : 'text-neutral-600'
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="text-xs">New</span>
          </Link>
          <Link 
            to="/sale"
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/sale') ? 'text-primary' : 'text-neutral-600'
            }`}
          >
            <Tag className="w-5 h-5" />
            <span className="text-xs">Sale</span>
          </Link>
          <Link 
            to="/about"
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive('/about') ? 'text-primary' : 'text-neutral-600'
            }`}
          >
            <Info className="w-5 h-5" />
            <span className="text-xs">About</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DockMenu;
