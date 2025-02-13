
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SparklesCore } from '../ui/sparkles';
import { AnimatedTooltip } from '../ui/animated-tooltip';

interface HeroProps {
  scrollProgress: any;
}

const Hero = ({ scrollProgress }: HeroProps) => {
  const y = scrollProgress;

  const people = [
    {
      id: 1,
      name: "Brian Kimemia",
      designation: "CTO",
      image: "/bk-avatar.png"
    },
    {
      id: 2,
      name: "Sarah Thompson",
      designation: "Interior Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
    },
    {
      id: 3,
      name: "Michael Chen",
      designation: "Design Consultant",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80"
    },
    {
      id: 4,
      name: "Emma Wilson",
      designation: "Stylist",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80"
    }
  ];

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
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <SparklesCore
                id="heroSparkles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
                particleColors={["#FEC6A1", "#E5DEFF", "#FFDEE2", "#D3E4FD", "#F2FCE2"]}
              />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6">
              Curated Luxury for Your Home
            </h1>
          </div>
          <p className="text-lg md:text-xl mb-8 text-neutral-100">
            Discover our collection of meticulously crafted furniture pieces
          </p>
          <button 
            onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-colors duration-300 flex items-center gap-2 mx-auto mb-12"
          >
            Explore Collection
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex justify-center items-center gap-[-1rem]">
            <AnimatedTooltip items={people} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
