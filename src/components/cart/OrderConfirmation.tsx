
import { QRCodeSVG } from 'qrcode.react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { CartItem } from '@/types/cart';

interface OrderConfirmationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  orderNumber: string;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  onContinueShopping: () => void;
  cart: CartItem[];
}

const OrderConfirmation = ({
  open,
  onOpenChange,
  orderNumber,
  subtotal,
  tax,
  shipping,
  total,
  onContinueShopping,
  cart,
}: OrderConfirmationProps) => {
  const generateQRCodeData = () => {
    const items = cart.map(item => `${item.title} (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString()}`).join('\n');
    
    return JSON.stringify({
      orderNumber,
      customerInfo: {
        orderDate: new Date().toLocaleDateString(),
        orderTime: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      },
      items,
      summary: {
        subtotal: `$${subtotal.toLocaleString()}`,
        tax: `$${tax.toLocaleString()}`,
        shipping: shipping === 0 ? 'Free' : `$${shipping}`,
        total: `$${total.toLocaleString()}`
      },
      message: "Thank you for choosing Luxe Living. Your satisfaction is our priority. Each piece has been carefully crafted to bring elegance to your space. We appreciate your trust in our commitment to quality and design excellence."
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
            <QRCodeSVG
              value={generateQRCodeData()}
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
          <Button onClick={onContinueShopping} className="w-full">
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderConfirmation;
