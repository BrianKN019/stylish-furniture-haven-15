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
      title: "Luxury Leather Sofa",
      originalPrice: "$2,999",
      salePrice: "$1,999",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80"
    },
    {
      id: 2,
      title: "Modern Dining Set",
      originalPrice: "$1,999",
      salePrice: "$1,399",
      discount: "30%",
      image: "https://images.unsplash.com/photo-1595515106863-c1f8669fd86f?w=800&q=80"
    },
    {
      id: 3,
      title: "Elegant Coffee Table",
      originalPrice: "$899",
      salePrice: "$599",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=800&q=80"
    },
    {
      id: 4,
      title: "Designer Armchair",
      originalPrice: "$1,299",
      salePrice: "$899",
      discount: "30%",
      image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80"
    },
    {
      id: 5,
      title: "Luxury Bed Frame",
      originalPrice: "$2,499",
      salePrice: "$1,699",
      discount: "32%",
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80"
    },
    {
      id: 6,
      title: "Art Deco Sideboard",
      originalPrice: "$1,899",
      salePrice: "$1,299",
      discount: "32%",
      image: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?w=800&q=80"
    },
    {
      id: 7,
      title: "Modern Wardrobe",
      originalPrice: "$2,299",
      salePrice: "$1,599",
      discount: "30%",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80"
    },
    {
      id: 8,
      title: "Accent Chair",
      originalPrice: "$999",
      salePrice: "$699",
      discount: "30%",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80"
    },
    {
      id: 9,
      title: "Designer Desk",
      originalPrice: "$1,499",
      salePrice: "$999",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80"
    },
    {
      id: 10,
      title: "Premium Lighting Set",
      originalPrice: "$899",
      salePrice: "$599",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80"
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
