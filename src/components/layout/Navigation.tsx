
import { Search, ShoppingCart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Luxe Living" className="w-8 h-8" />
            <h1 className="font-serif text-2xl hidden sm:block">Luxe Living Inc</h1>
          </Link>
          <div className="flex items-center gap-4">
            <div className={cn(
              "transition-all duration-300",
              isSearchOpen ? "w-64" : "w-0"
            )}>
              {isSearchOpen && (
                <Input 
                  type="search" 
                  placeholder="Search products..." 
                  className="bg-neutral-100 border-none focus:ring-2 focus:ring-primary/20"
                />
              )}
            </div>
            <button 
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5 text-neutral-600" />
            </button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/bk-avatar.png" alt="BK" />
              <AvatarFallback className="bg-blue-500 text-white">BK</AvatarFallback>
            </Avatar>
            <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative" onClick={() => console.log("Cart clicked")}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
