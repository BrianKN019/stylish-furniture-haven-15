
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import DockMenu from '@/components/layout/DockMenu';

const NewArrivals = () => {
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
            {newArrivals.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.id * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 mb-4">{item.description}</p>
                  <p className="text-primary font-semibold">{item.price}</p>
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

export default NewArrivals;
