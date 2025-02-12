
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

interface CollectionsGridProps {
  collections: Collection[];
  isHovered: number | null;
  setIsHovered: (id: number | null) => void;
}

const CollectionsGrid = ({ collections, isHovered, setIsHovered }: CollectionsGridProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
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
          {collections.map((collection) => (
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
                  <p className="text-sm text-neutral-200 mb-2">{collection.description}</p>
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
  );
};

export default CollectionsGrid;
