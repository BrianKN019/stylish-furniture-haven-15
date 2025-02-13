
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import { SparklesCore } from '@/components/ui/sparkles';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';

interface ProductImage {
  url: string;
  alt: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: Number(id),
    title: "Modern Living Room Set",
    description: "Experience unparalleled comfort with our premium Modern Living Room collection. Each piece is meticulously crafted using sustainable materials and innovative design principles.",
    price: 2499,
    features: [
      "Premium sustainable materials",
      "Ergonomic design",
      "10-year warranty",
      "Free delivery & assembly"
    ],
    specifications: {
      dimensions: "L: 240cm x W: 95cm x H: 85cm",
      material: "Premium fabric, solid wood frame",
      color: "Neutral beige",
      warranty: "10 years limited warranty"
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        alt: "Modern living room main view"
      },
      {
        url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
        alt: "Living room side view"
      },
      {
        url: "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=800&q=80",
        alt: "Living room detail view"
      },
      {
        url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80",
        alt: "Living room ambiance"
      }
    ]
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const addToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.images[0].url
    };

    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = existingCart.findIndex((item: any) => item.id === product.id);

    if (existingItemIndex >= 0) {
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    toast.success('Added to cart successfully!');
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      
      <div className="relative">
        <div className="absolute inset-0">
          <SparklesCore
            id="productSparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={30}
            className="w-full h-full"
            particleColor="#9b87f5"
            particleColors={["#9b87f5", "#8b77e5", "#7a66d5", "#6956c5", "#5845b5"]}
          />
        </div>

        <div className="container px-4 py-12 relative">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Collections
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-[4/3] rounded-xl overflow-hidden"
              >
                <img
                  src={product.images[selectedImage].url}
                  alt={product.images[selectedImage].alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="font-serif text-4xl text-neutral-900 mb-4">{product.title}</h1>
                <p className="text-2xl text-primary font-semibold mb-4">${product.price.toLocaleString()}</p>
                <p className="text-neutral-600">{product.description}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-neutral-900">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-neutral-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-neutral-900">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-sm text-neutral-500 capitalize">{key}</p>
                      <p className="text-neutral-900">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 rounded-lg border border-neutral-200 hover:border-primary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 rounded-lg border border-neutral-200 hover:border-primary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <Button
                  onClick={addToCart}
                  className="w-full py-6 text-lg gap-3"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart - ${(product.price * quantity).toLocaleString()}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
