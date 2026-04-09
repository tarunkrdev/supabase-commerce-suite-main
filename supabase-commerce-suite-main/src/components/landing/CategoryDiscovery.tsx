import { Category } from '@/types';

interface CategoryDiscoveryProps {
  categories: Category[];
  onCategoryClick: (categoryId: string) => void;
}

const CategoryDiscovery = ({ categories, onCategoryClick }: CategoryDiscoveryProps) => {
  if (categories.length === 0) return null;

  return (
    <section id="categories" className="py-8 md:py-16">
      <div className="container">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-2">
            Explore <span className="gradient-cyan-text">Categories</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">Find exactly what you're looking for</p>
        </div>

        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-visible scrollbar-none scroll-smooth-touch">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryClick(cat.id)}
              className="flex-shrink-0 glass rounded-xl px-5 py-3 md:px-6 md:py-4 text-center hover:glow-cyan-sm hover:border-primary/30 transition-all min-w-[120px] md:min-w-[140px] active:scale-95"
            >
              <span className="font-display text-sm md:text-base font-semibold">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryDiscovery;
