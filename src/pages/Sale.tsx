
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Sale = () => {
  const navigate = useNavigate();
  const saleItems = [
    {
      id: 1,
      title: "Luxury Leather Armchair",
      originalPrice: "$1,999",
      salePrice: "$1,499",
      discount: "25%",
      image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=800&q=80"
    },
    {
      id: 2,
      title: "Designer Floor Lamp",
      originalPrice: "$599",
      salePrice: "$399",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1530622069441-64253102ae04?w=800&q=80"
    },
    {
      id: 3,
      title: "Marble Coffee Table",
      originalPrice: "$899",
      salePrice: "$699",
      discount: "22%",
      image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80"
    },
    {
      id: 4,
      title: "Modern Dining Chair Set",
      originalPrice: "$1,299",
      salePrice: "$999",
      discount: "23%",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    },
    {
      id: 5,
      title: "Vintage Console Table",
      originalPrice: "$799",
      salePrice: "$599",
      discount: "25%",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80"
    },
    {
      id: 6,
      title: "Art Deco Mirror",
      originalPrice: "$599",
      salePrice: "$399",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&q=80"
    },
    {
      id: 7,
      title: "Designer Bookshelf",
      originalPrice: "$1,499",
      salePrice: "$999",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&q=80"
    },
    {
      id: 8,
      title: "Modern Side Table",
      originalPrice: "$399",
      salePrice: "$299",
      discount: "25%",
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=800&q=80"
    },
    {
      id: 9,
      title: "Contemporary Vase Set",
      originalPrice: "$299",
      salePrice: "$199",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&q=80"
    },
    {
      id: 10,
      title: "Accent Wall Art",
      originalPrice: "$599",
      salePrice: "$399",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?w=800&q=80"
    },
    {
      id: 11,
      title: "Luxury Table Lamp",
      originalPrice: "$399",
      salePrice: "$299",
      discount: "25%",
      image: "https://images.unsplash.com/photo-1501286353178-1ec871214838?w=800&q=80"
    },
    {
      id: 12,
      title: "Designer Ottoman",
      originalPrice: "$499",
      salePrice: "$349",
      discount: "30%",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&q=80"
    },
    {
      id: 13,
      title: "Modern Plant Stand",
      originalPrice: "$199",
      salePrice: "$149",
      discount: "25%",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <Navigation />
      
      <div className="relative">
        <div className="absolute inset-0">
          <SparklesCore
            id="saleSparkles"
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
            <h1 className="font-serif text-5xl text-neutral-900 mb-6">Special Sale</h1>
            <p className="text-neutral-600">
              Limited time offers on premium furniture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
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
                  <Badge className="absolute top-4 right-4 bg-red-500">
                    Save {item.discount}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white">
                    <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-neutral-400 line-through">{item.originalPrice}</span>
                      <span className="text-primary font-semibold">{item.salePrice}</span>
                    </div>
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

export default Sale;
