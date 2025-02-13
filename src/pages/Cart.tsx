
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { SparklesCore } from '@/components/ui/sparkles';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';
import CartItem from '@/components/cart/CartItem';
import OrderSummary from '@/components/cart/OrderSummary';
import OrderConfirmation from '@/components/cart/OrderConfirmation';
import type { CartItem as CartItemType } from '@/types/cart';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItemType[]>([]);
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
  const tax = subtotal * 0.1;
  const shipping = subtotal > 5000 ? 0 : 299;
  const total = subtotal + tax + shipping;

  const handleCheckout = () => {
    const orderNum = Math.random().toString(36).substring(2, 10).toUpperCase();
    setOrderNumber(orderNum);
    setShowReceipt(true);
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
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="lg:col-span-1">
                <OrderSummary
                  subtotal={subtotal}
                  tax={tax}
                  shipping={shipping}
                  total={total}
                  onCheckout={handleCheckout}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <OrderConfirmation
        open={showReceipt}
        onOpenChange={setShowReceipt}
        orderNumber={orderNumber}
        subtotal={subtotal}
        tax={tax}
        shipping={shipping}
        total={total}
        onContinueShopping={() => {
          setShowReceipt(false);
          navigate('/');
        }}
        cart={cart}
      />

      <Footer />
    </div>
  );
};

export default Cart;
