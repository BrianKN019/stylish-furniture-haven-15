
import { Home, ShoppingBag, Tag, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const DockMenu = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/', icon: Home, label: 'Home', color: '#3B82F6' }, // bright blue
    { path: '/new-arrivals', icon: ShoppingBag, label: 'New', color: '#10B981' }, // emerald
    { path: '/sale', icon: Tag, label: 'Sale', color: '#6366F1' }, // indigo
    { path: '/about', icon: Info, label: 'About', color: '#14B8A6' } // teal
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-lg px-6 py-4">
        <div className="flex items-center gap-8">
          {menuItems.map(({ path, icon: Icon, label, color }) => (
            <Link 
              key={path}
              to={path}
              className={`relative group flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive(path) ? 'scale-110' : 'hover:text-primary'
              }`}
              style={{ color: isActive(path) ? color : 'rgb(156 163 175)' }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="relative"
              >
                <Icon className="w-5 h-5" />
                <motion.div
                  className="absolute inset-0 rounded-full -z-10 opacity-0 group-hover:opacity-100"
                  layoutId="highlight"
                  transition={{ type: "spring", bounce: 0.2 }}
                  style={{ backgroundColor: `${color}20` }}
                />
              </motion.div>
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4 whitespace-nowrap">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DockMenu;
