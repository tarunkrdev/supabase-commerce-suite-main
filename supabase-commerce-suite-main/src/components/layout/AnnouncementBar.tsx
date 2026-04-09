import { Lock, Package, Truck } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-secondary text-muted-foreground text-xs py-2 z-50 relative">
      <div className="container flex items-center justify-center gap-6 md:gap-10 flex-wrap">
        <div className="flex items-center gap-1.5">
          <Lock className="w-3 h-3 text-primary" />
          <span>100% Discreet Packaging</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Package className="w-3 h-3 text-primary" />
          <span>Private Billing</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Truck className="w-3 h-3 text-primary" />
          <span>Free Shipping Above ₹999</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
