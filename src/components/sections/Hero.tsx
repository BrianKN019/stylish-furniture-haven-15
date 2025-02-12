
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  scrollProgress: any;
}

const Hero = ({ scrollProgress }: HeroProps) => {
  const y = scrollProgress;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6">
            Curated Luxury for Your Home
          </h1>
          <p className="text-lg md:text-xl mb-8 text-neutral-100">
            Discover our collection of meticulously crafted furniture pieces
          </p>
          <button 
            onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            Explore Collection
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
