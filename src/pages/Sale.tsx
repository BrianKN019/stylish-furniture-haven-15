
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import DockMenu from '@/components/layout/DockMenu';

const Sale = () => {
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
            {saleItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.id * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className="absolute top-4 right-4 bg-red-500">
                    Save {item.discount}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-neutral-900 mb-2">{item.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-400 line-through">{item.originalPrice}</span>
                    <span className="text-primary font-semibold">{item.salePrice}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <DockMenu />
      <Footer />
    </div>
  );
};

export default Sale;
