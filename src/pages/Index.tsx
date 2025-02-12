import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import CollectionsGrid from "@/components/sections/CollectionsGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import InteractiveFilter from "@/components/ui/InteractiveFilter";
import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";
import { AvatarCircles } from "@/components/ui/avatar-circles";

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
      <Navigation />
      <div ref={targetRef}>
        <Hero scrollProgress={y} />
      </div>
      
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

      <CollectionsGrid 
        collections={filteredCollections}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />

      <WhyChooseUs />

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

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
