import { motion } from 'framer-motion';
import { Category } from '@/types';

interface CategoryDiscoveryProps {
  categories: Category[];
  onCategoryClick: (categoryId: string) => void;
}

const CategoryDiscovery = ({ categories, onCategoryClick }: CategoryDiscoveryProps) => {
  if (categories.length === 0) return null;

  return (
    <section id="categories" className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Explore <span className="gradient-cyan-text">Categories</span>
          </h2>
          <p className="text-muted-foreground">Find exactly what you're looking for</p>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-visible scrollbar-none">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onCategoryClick(cat.id)}
              className="flex-shrink-0 glass rounded-xl px-6 py-4 text-center hover:glow-cyan-sm hover:border-primary/30 transition-all min-w-[140px]"
            >
              <span className="font-display text-sm md:text-base font-semibold">{cat.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryDiscovery;
