import { motion } from 'framer-motion';
import { Heart, Lock, Award } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Pleasure', desc: 'We believe everyone deserves access to high-quality wellness products that enhance their intimate life.' },
  { icon: Lock, title: 'Privacy', desc: 'Your privacy is our priority. From discreet packaging to private billing, we protect your confidence.' },
  { icon: Award, title: 'Quality', desc: 'Every product is carefully curated to meet the highest standards of safety and performance.' },
];

const BrandStory = () => {
  return (
    <section id="brand" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-20" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our <span className="gradient-cyan-text">Story</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            oops!Pleasured was born from a simple belief: wellness is a right, not a luxury.
            We provide premium adult wellness products with complete discretion and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full gradient-cyan mx-auto mb-4 flex items-center justify-center">
                <v.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
