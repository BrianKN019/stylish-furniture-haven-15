
import { Button } from '@/components/ui/button';

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  onCheckout: () => void;
}

const OrderSummary = ({ subtotal, tax, shipping, total, onCheckout }: OrderSummaryProps) => {
  return (
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
      <Button onClick={onCheckout} className="w-full">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default OrderSummary;
