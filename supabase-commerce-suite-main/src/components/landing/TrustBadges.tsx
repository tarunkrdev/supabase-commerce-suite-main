import { Lock, Package, CreditCard, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const badges = [
  { icon: Lock, label: 'Discreet Packaging', desc: 'Unmarked boxes, no product info visible' },
  { icon: Package, label: 'Private Delivery', desc: 'Billed as "OPS Retail"' },
  { icon: CreditCard, label: 'Secure Payment', desc: 'UPI & COD available' },
  { icon: ShieldCheck, label: 'Body Safe Materials', desc: 'Premium quality guaranteed' },
];

const TrustBadges = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-5 text-center group hover:glow-cyan-sm transition-shadow"
            >
              <badge.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-sm md:text-base font-semibold mb-1">{badge.label}</h3>
              <p className="text-xs text-muted-foreground">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
