
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import DockMenu from '@/components/layout/DockMenu';

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <Navigation />
      
      <div className="relative">
        <div className="absolute inset-0">
          <SparklesCore
            id="aboutSparkles"
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="font-serif text-5xl text-neutral-900 mb-6">Our Story</h1>
            <p className="text-neutral-600">
              Crafting luxury living spaces since 1995
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1618219944342-824e40a13285?w=800&q=80"
                alt="Luxury furniture workshop"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl text-neutral-900">Crafting Excellence</h2>
              <p className="text-neutral-600">
                At Luxe Living, we believe that every piece of furniture tells a story. Our journey began with a simple vision: to create extraordinary living spaces that reflect the unique personality of each client.
              </p>
              <p className="text-neutral-600">
                With decades of experience in luxury furniture design and craftsmanship, we've established ourselves as leaders in creating timeless pieces that blend traditional techniques with modern innovation.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Artisan Crafted", value: "100%" },
              { title: "Satisfied Clients", value: "10,000+" },
              { title: "Years of Excellence", value: "28+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 text-center shadow-lg"
              >
                <h3 className="font-serif text-4xl text-primary mb-2">{stat.value}</h3>
                <p className="text-neutral-600">{stat.title}</p>
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

export default About;
