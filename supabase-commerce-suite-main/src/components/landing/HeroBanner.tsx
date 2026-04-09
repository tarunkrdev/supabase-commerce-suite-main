import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Banner } from '@/types';

interface HeroBannerProps {
  banners: Banner[];
}

const fallbackBanners = [
  {
    id: 'default-1',
    title: 'Premium Wellness',
    subtitle: 'Discover products designed for your pleasure & wellness',
    cta_text: 'Shop Now',
    cta_link: '#products',
    image: null,
  },
];

const HeroBanner = ({ banners }: HeroBannerProps) => {
  const [current, setCurrent] = useState(0);
  const items = banners.length > 0 ? banners : fallbackBanners;

  const next = useCallback(() => setCurrent(p => (p + 1) % items.length), [items.length]);
  const prev = () => setCurrent(p => (p - 1 + items.length) % items.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const item = items[current];

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {item.image ? (
            <img src={item.image} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-secondary via-background to-muted" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Radial glow */}
      <div className="absolute inset-0 radial-glow opacity-30" />

      {/* Content */}
      <div className="relative z-10 container h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
              {(item as Banner).title || 'Premium Wellness'}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {(item as Banner).subtitle || 'Discover products designed for your pleasure & wellness'}
            </p>
            <Button
              size="lg"
              className="gradient-cyan text-primary-foreground font-semibold text-lg px-8 py-6 glow-cyan-sm hover:opacity-90 transition-opacity"
              onClick={() => {
                const el = document.querySelector('#products');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {(item as Banner).cta_text || 'Shop Now'}
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {items.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? 'bg-primary w-8' : 'bg-foreground/30'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default HeroBanner;
