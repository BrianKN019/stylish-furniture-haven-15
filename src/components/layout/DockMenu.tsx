
import { Home, ShoppingBag, Tag, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const DockMenu = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/20 backdrop-blur-xl border-t border-neutral-200/20"
    >
      <div className="container mx-auto">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Link 
            to="/"
            className={`flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 ${
              isActive('/') ? 'text-primary' : 'text-neutral-600/80'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link 
            to="/new-arrivals"
            className={`flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 ${
              isActive('/new-arrivals') ? 'text-primary' : 'text-neutral-600/80'
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="text-xs font-medium">New</span>
          </Link>
          <Link 
            to="/sale"
            className={`flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 ${
              isActive('/sale') ? 'text-primary' : 'text-neutral-600/80'
            }`}
          >
            <Tag className="w-5 h-5" />
            <span className="text-xs font-medium">Sale</span>
          </Link>
          <Link 
            to="/about"
            className={`flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 ${
              isActive('/about') ? 'text-primary' : 'text-neutral-600/80'
            }`}
          >
            <Info className="w-5 h-5" />
            <span className="text-xs font-medium">About</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DockMenu;
