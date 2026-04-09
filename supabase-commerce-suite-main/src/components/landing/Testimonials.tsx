import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya M.',
    text: 'Absolutely love the discreet packaging! No one could tell what was inside. The quality is incredible.',
    rating: 5,
  },
  {
    name: 'Rahul S.',
    text: 'Fast delivery and great products. The billing as "OPS Retail" gives total peace of mind.',
    rating: 5,
  },
  {
    name: 'Ananya K.',
    text: 'Best quality I\'ve found online. The customer support team is also very helpful and understanding.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            What Our <span className="gradient-cyan-text">Customers</span> Say
          </h2>
          <p className="text-muted-foreground">Real reviews from real people</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <p className="font-display font-semibold text-sm">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
