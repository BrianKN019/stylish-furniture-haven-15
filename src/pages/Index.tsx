import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, Menu, Search, ShoppingCart, User } from "lucide-react";
import { useRef, useState } from "react";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import InteractiveFilter from "@/components/ui/InteractiveFilter";
import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";

const Index = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const testimonialAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80",
  ];

  const collections = [
    {
      id: 1,
      title: "Modern Living Room",
      description: "Contemporary comfort for modern living",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      price: "$2,499",
      category: "living"
    },
    {
      id: 2,
      title: "Luxury Dining Sets",
      description: "Elegant spaces for gathering",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      price: "$3,299",
      category: "dining"
    },
    {
      id: 3,
      title: "Premium Bedrooms",
      description: "Serene sanctuaries for rest",
      image: "https://images.unsplash.com/photo-1617325247935-2df2e4b9b611?w=800&q=80",
      price: "$1,899",
      category: "bedroom"
    },
    {
      id: 4,
      title: "Executive Office",
      description: "Professional spaces that inspire",
      image: "https://images.unsplash.com/photo-1595514535316-a58671c9a5c7?w=800&q=80",
      price: "$2,199",
      category: "office"
    },
    {
      id: 5,
      title: "Outdoor Collection",
      description: "Luxury for your exterior spaces",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      price: "$4,499",
      category: "outdoor"
    },
    {
      id: 6,
      title: "Designer Accessories",
      description: "Details that make the difference",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      price: "$299",
      category: "accessories"
    },
    {
      id: 7,
      title: "Kitchen Elements",
      description: "Modern culinary spaces",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
      price: "$5,999",
      category: "kitchen"
    },
    {
      id: 8,
      title: "Home Library",
      description: "Sophisticated reading spaces",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      price: "$3,899",
      category: "library"
    },
    {
      id: 9,
      title: "Entertainment Units",
      description: "Stylish media solutions",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80",
      price: "$2,799",
      category: "entertainment"
    },
    {
      id: 10,
      title: "Lighting Collection",
      description: "Illuminate your space",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
      price: "$899",
      category: "lighting"
    },
    {
      id: 11,
      title: "Workspace Solutions",
      description: "Modern home office essentials",
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80",
      price: "$1,599",
      category: "workspace"
    },
    {
      id: 12,
      title: "Children's Furniture",
      description: "Playful and practical designs",
      image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80",
      price: "$999",
      category: "kids"
    }
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

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const filterTags = [
    { id: 'living', label: 'Living Room', category: 'room' },
    { id: 'dining', label: 'Dining', category: 'room' },
    { id: 'bedroom', label: 'Bedroom', category: 'room' },
    { id: 'office', label: 'Office', category: 'room' },
    { id: 'modern', label: 'Modern', category: 'style' },
    { id: 'classic', label: 'Classic', category: 'style' },
    { id: 'luxury', label: 'Luxury', category: 'style' },
  ];

  const handleTagSelect = (tagId: string) => {
    if (!selectedTags.includes(tagId)) {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  const handleTagRemove = (tagId: string) => {
    setSelectedTags(selectedTags.filter(id => id !== tagId));
  };

  const filteredCollections = collections.filter(collection => 
    selectedTags.length === 0 || selectedTags.includes(collection.category)
  );

  const demoMediaItems = [
    {
      id: 1,
      type: "image",
      title: "Modern Living Space",
      desc: "Contemporary design with comfort in mind",
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      span: "md:col-span-2 md:row-span-2"
    },
    // ... add more media items for the bento gallery
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
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

      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
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
              className="bg-white text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-colors duration-300 flex items-center gap-2 mx-auto">
              Explore Collection
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Filter */}
      <section className="py-8 bg-white">
        <div className="container px-4">
          <InteractiveFilter
            tags={filterTags}
            selectedTags={selectedTags}
            onTagSelect={handleTagSelect}
            onTagRemove={handleTagRemove}
          />
        </div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="py-24 px-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((collection) => (
              <motion.div
                key={collection.id}
                {...fadeInUp}
                className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setIsHovered(collection.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white">
                    <h3 className="font-serif text-2xl mb-2">{collection.title}</h3>
                    <p className="text-sm text-neutral-200 mb-2">
                      {collection.description}
                    </p>
                    <p className="text-lg font-semibold mb-4">{collection.price}</p>
                    <button 
                      onClick={() => console.log(`View collection: ${collection.title}`)}
                      className="bg-white text-neutral-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors duration-300 flex items-center gap-2"
                    >
                      View Collection
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Interactive Bento Gallery */}
      <section className="py-24 bg-neutral-100">
        <InteractiveBentoGallery
          mediaItems={demoMediaItems}
          title="Our Latest Projects"
          description="Explore our most recent furniture installations"
        />
      </section>

      <section className="py-24 bg-neutral-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-8">What Our Clients Say</h2>
            <p className="text-xl text-neutral-300 mb-8">
              "The attention to detail and quality of furniture exceeded our expectations. 
              A truly luxurious experience from start to finish."
            </p>
            <AvatarCircles 
              avatarUrls={testimonialAvatars}
              numPeople={2360}
              className="justify-center mb-4"
            />
            <p className="text-neutral-400">Joined by 2,360+ satisfied customers</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4">
          <motion.div
            {...fadeInUp}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="font-serif text-4xl mb-4">Get in Touch</h2>
            <p className="text-neutral-600">
              Have questions? Our luxury furniture specialists are here to help.
            </p>
          </motion.div>
          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
            >
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); console.log('Contact form submitted'); }}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white/50 backdrop-blur-sm transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Your Message</label>
                  <textarea
                    placeholder="Tell us about your vision..."
                    rows={4}
                    className="w-full px-6 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white/50 backdrop-blur-sm transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary hover:to-primary-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Gradient Footer */}
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary hover:to-primary-hover opacity-0 pointer-events-none"></div>
      </footer>
    </div>
  );
};

export default Index;
