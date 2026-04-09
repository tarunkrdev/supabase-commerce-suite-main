import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/hooks/useWishlist';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
    toast.success(wishlisted ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="glass rounded-xl overflow-hidden transition-all hover:glow-cyan-sm">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          {product.images?.[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <Eye className="w-10 h-10" />
            </div>
          )}

          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            className={`absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center transition-all ${
              wishlisted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                wishlisted ? 'fill-destructive text-destructive' : 'text-foreground'
              }`}
            />
          </button>

          {/* Stock Badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`text-[10px] font-mono font-bold px-2 py-1 rounded-full ${
                product.availability === 'available'
                  ? 'bg-primary/20 text-primary'
                  : 'bg-destructive/20 text-destructive'
              }`}
            >
              {product.availability === 'available' ? 'Available' : 'Pre-order'}
            </span>
          </div>

          {/* Add to Cart overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full gradient-cyan text-primary-foreground py-3 flex items-center justify-center gap-2 font-semibold text-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          {product.category && (
            <p className="text-[10px] font-mono text-primary uppercase tracking-wider mb-1">
              {product.category.name}
            </p>
          )}
          <h3 className="font-display text-base font-semibold line-clamp-1 mb-1">{product.name}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-2 hidden md:block">
            {product.description}
          </p>
          <p className="font-mono text-lg font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
