
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ChevronLeft, QrCode } from 'lucide-react';
import { SparklesCore } from '@/components/ui/sparkles';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import QRCode from 'qrcode.react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from 'sonner';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Item removed from cart');
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 5000 ? 0 : 299;
  const total = subtotal + tax + shipping;

  const handleCheckout = () => {
    const orderNum = Math.random().toString(36).substring(2, 10).toUpperCase();
    setOrderNumber(orderNum);
    setShowReceipt(true);
    // Clear cart after successful checkout
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      
      <div className="relative">
        <div className="absolute inset-0">
          <SparklesCore
            id="cartSparkles"
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
            Continue Shopping
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl">
                  <p className="text-neutral-600">Your cart is empty</p>
                  <Button
                    onClick={() => navigate('/')}
                    className="mt-4"
                  >
                    Start Shopping
                  </Button>
                </div>
              ) : (
                cart.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl p-6 flex gap-6"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-lg text-neutral-900">{item.title}</h3>
                      <p className="text-primary font-semibold">${item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-4 mt-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-lg hover:bg-neutral-100 transition-colors"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-lg hover:bg-neutral-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-neutral-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Order Summary */}
            {cart.length > 0 && (
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 space-y-6">
                  <h2 className="font-serif text-2xl text-neutral-900">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between text-neutral-600">
                      <span>Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span>Tax (10%)</span>
                      <span>${tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span className="text-primary">${total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleCheckout}
                    className="w-full"
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={showReceipt} onOpenChange={setShowReceipt}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Order Confirmation</DialogTitle>
          </DialogHeader>
          <div className="p-6 space-y-6">
            <div className="text-center">
              <h3 className="font-serif text-2xl text-neutral-900 mb-2">Thank you for your order!</h3>
              <p className="text-neutral-600">Order #{orderNumber}</p>
            </div>
            <div className="flex justify-center">
              <QRCode
                value={`https://luxeliving.com/order/${orderNumber}`}
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Tax</span>
                <span>${tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <Button
              onClick={() => {
                setShowReceipt(false);
                navigate('/');
              }}
              className="w-full"
            >
              Continue Shopping
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Cart;
