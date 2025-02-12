
import { motion } from 'framer-motion';
import { Check, Heart, Shield, Star, Tool, Truck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Every piece is crafted with premium materials and built to last"
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Complimentary white-glove delivery service on all orders"
  },
  {
    icon: Tool,
    title: "Expert Assembly",
    description: "Professional assembly and installation included"
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Dedicated support team available 24/7"
  },
  {
    icon: Star,
    title: "Design Excellence",
    description: "Award-winning designs from renowned artisans"
  },
  {
    icon: Check,
    title: "Easy Returns",
    description: "100-day trial period with hassle-free returns"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-neutral-600">
            Experience unparalleled quality and service in luxury furniture
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-neutral-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl text-neutral-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
