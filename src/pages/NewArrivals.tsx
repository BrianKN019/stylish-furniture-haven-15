
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NewArrivals = () => {
  const navigate = useNavigate();
  const newArrivals = [
    {
      id: 1,
      title: "Modern Velvet Sofa",
      price: "$2,499",
      image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=800&q=80",
      description: "Introducing our latest velvet masterpiece"
    },
    {
      id: 2,
      title: "Minimalist Dining Set",
      price: "$1,899",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      description: "Contemporary dining elegance"
    },
    {
      id: 3,
      title: "Artisan Coffee Table",
      price: "$899",
      image: "https://images.unsplash.com/photo-1532372320978-9b6d03df7921?w=800&q=80",
      description: "Handcrafted beauty meets function"
    },
    {
      id: 4,
      title: "Designer Reading Chair",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      description: "Modern comfort for your reading nook"
    },
    {
      id: 5,
      title: "Luxury Console Table",
      price: "$899",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
      description: "Elegant entryway piece"
    },
    {
      id: 6,
      title: "Modern Bookshelf",
      price: "$1,499",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&q=80",
      description: "Contemporary storage solution"
    },
    {
      id: 7,
      title: "Accent Armchair",
      price: "$799",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&q=80",
      description: "Statement piece for any room"
    },
    {
      id: 8,
      title: "Glass Dining Table",
      price: "$1,699",
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=800&q=80",
      description: "Modern dining elegance"
    },
    {
      id: 9,
      title: "Leather Ottoman",
      price: "$499",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&q=80",
      description: "Versatile seating solution"
    },
    {
      id: 10,
      title: "Designer Floor Lamp",
      price: "$399",
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?w=800&q=80",
      description: "Sculptural lighting piece"
    },
    {
      id: 11,
      title: "Marble Side Table",
      price: "$699",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=800&q=80",
      description: "Luxurious accent piece"
    },
    {
      id: 12,
      title: "Modern Mirror",
      price: "$899",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&q=80",
      description: "Statement wall piece"
    },
    {
      id: 13,
      title: "Accent Cabinet",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&q=80",
      description: "Storage with style"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <Navigation />
      
      <div className="relative">
        <div className="absolute inset-0">
          <SparklesCore
            id="newArrivalsSparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={30}
            className="w-full h-full"
            particleColor="#9b87f5"
            particleColors={["#9b87f5", "#8b77e5", "#7a66d5", "#6956c5", "#5845b5"]}
          />
        </div>

        <div className="container px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h1 className="font-serif text-5xl text-neutral-900 mb-6">New Arrivals</h1>
            <p className="text-neutral-600">
              Discover our latest collections, crafted for modern living
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivals.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
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
                    <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-200 mb-2">{item.description}</p>
                    <p className="text-lg font-semibold mb-4">{item.price}</p>
                    <button 
                      className="bg-white text-neutral-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors duration-300 flex items-center gap-2"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewArrivals;
