
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const collections = [
    {
      id: 1,
      title: "Living Room",
      description: "Contemporary comfort for modern living",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    },
    {
      id: 2,
      title: "Dining Room",
      description: "Elegant spaces for gathering",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    },
    {
      id: 3,
      title: "Bedroom",
      description: "Serene sanctuaries for rest",
      image: "https://images.unsplash.com/photo-1617325247935-2df2e4b9b611?w=800&q=80",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
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
            <button className="bg-white text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-colors duration-300 flex items-center gap-2 mx-auto">
              Explore Collection
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 px-4">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
              Featured Collections
            </h2>
            <p className="text-neutral-600">
              Explore our carefully curated collections, designed for modern living
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <motion.div
                key={collection.id}
                {...fadeInUp}
                className="group relative cursor-pointer"
                onMouseEnter={() => setIsHovered(collection.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="font-serif text-2xl mb-2">{collection.title}</h3>
                    <p className="text-sm text-neutral-200">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-neutral-900 text-white py-24 px-4">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl mb-4">
              Stay Updated
            </h2>
            <p className="text-neutral-300 mb-8">
              Subscribe to our newsletter for exclusive offers and interior design insights
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="bg-white text-neutral-900 px-8 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors duration-300 flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
