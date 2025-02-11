
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, Menu, Search, ShoppingCart, User } from "lucide-react";
import { useRef, useState } from "react";

const Index = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
    {
      id: 4,
      title: "Office",
      description: "Professional spaces that inspire",
      image: "https://images.unsplash.com/photo-1595514535316-a58671c9a5c7?w=800&q=80",
    },
    {
      id: 5,
      title: "Outdoor",
      description: "Luxury for your exterior spaces",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    },
    {
      id: 6,
      title: "Accessories",
      description: "Details that make the difference",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    },
  ];

  const features = [
    {
      title: "Artisan Crafted",
      description: "Each piece is handcrafted by skilled artisans",
      icon: "🎨",
    },
    {
      title: "Sustainable Materials",
      description: "Eco-friendly materials and processes",
      icon: "🌱",
    },
    {
      title: "Lifetime Warranty",
      description: "Quality guaranteed for generations",
      icon: "✨",
    },
    {
      title: "Free Delivery",
      description: "White glove delivery service included",
      icon: "🚚",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="font-serif text-2xl">Luxe Living</h1>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Collections</a>
                <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">New Arrivals</a>
                <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Sale</a>
                <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">About</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="md:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
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
            <button className="bg-white text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-colors duration-300 flex items-center gap-2 mx-auto">
              Explore Collection
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
                  <div className="text-center transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-2xl mb-2">{collection.title}</h3>
                    <p className="text-sm text-neutral-200 mb-4">
                      {collection.description}
                    </p>
                    <button className="bg-white text-neutral-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors duration-300">
                      View Collection
                    </button>
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
