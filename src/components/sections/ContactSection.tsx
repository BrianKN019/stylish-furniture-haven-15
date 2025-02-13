import { motion } from 'framer-motion';
const ContactSection = () => {
  return <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-50"></div>
      <div className="container px-4 relative">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950">
            Get in Touch
          </h2>
          <p className="text-neutral-600">
            Transform your space with our luxury furniture. Let's create something extraordinary together.
          </p>
        </motion.div>
        <div className="max-w-lg mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <form onSubmit={e => {
            e.preventDefault();
            console.log('Contact form submitted');
          }} className="space-y-6 bg-sky-100">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-6 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white/50 backdrop-blur-sm transition-all duration-200" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-6 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white/50 backdrop-blur-sm transition-all duration-200" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Your Message</label>
                <textarea placeholder="Tell us about your vision..." rows={4} className="w-full px-6 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white/50 backdrop-blur-sm transition-all duration-200 resize-none"></textarea>
              </div>
              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} type="submit" className="w-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary hover:to-primary-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;