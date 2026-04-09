import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full gradient-cyan flex items-center justify-center font-display text-sm font-bold text-primary-foreground">
                O
              </div>
              <span className="font-display text-lg font-semibold">
                <span className="text-muted-foreground">oops!</span>
                <span className="gradient-cyan-text">Pleasured</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium adult wellness products with 100% discreet packaging and private billing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Shop', href: '/#products' },
                { label: 'Blog', href: '/blog' },
                { label: 'About Us', href: '/#brand' },
                { label: 'My Account', href: '/dashboard' },
              ].map(l => (
                <Link key={l.label} to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Support</h4>
            <div className="flex flex-col gap-2">
              {['Shipping & Delivery', 'Returns & Refunds', 'Privacy Policy', 'Terms of Service'].map(label => (
                <span key={label} className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors">
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">Get exclusive offers & new arrivals.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
              />
              <Button size="icon" className="gradient-cyan text-primary-foreground shrink-0">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} OPS Retail. All rights reserved. Billing appears as "OPS Retail".
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
