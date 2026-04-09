import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', action: () => { navigate('/'); setMobileOpen(false); } },
    { label: 'Shop', action: () => handleNavClick('#products') },
    { label: 'Categories', action: () => handleNavClick('#categories') },
    { label: 'Blog', action: () => { navigate('/blog'); setMobileOpen(false); } },
    { label: 'About', action: () => handleNavClick('#brand') },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg py-2'
            : 'bg-background/70 backdrop-blur-sm py-3'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full gradient-cyan flex items-center justify-center font-display text-lg font-bold text-primary-foreground group-hover:glow-cyan-sm transition-shadow">
              O
            </div>
            <span className="font-display text-lg md:text-xl font-semibold">
              <span className="text-muted-foreground">oops!</span>
              <span className="gradient-cyan-text">Pleasured</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => navigate('/wishlist')}
            >
              <Heart className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-cyan text-[10px] font-bold flex items-center justify-center text-primary-foreground">
                  {itemCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => navigate(user ? '/dashboard' : '/auth')}
            >
              <User className="w-5 h-5" />
            </Button>
            <Button
              className="hidden lg:inline-flex gradient-cyan text-primary-foreground font-semibold hover:opacity-90 glow-cyan-sm"
              onClick={() => handleNavClick('#products')}
            >
              Shop Now
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-muted-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-slide-up">
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-sm text-muted-foreground hover:text-foreground py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="gradient-cyan text-primary-foreground font-semibold mt-2"
                onClick={() => handleNavClick('#products')}
              >
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border p-4 animate-slide-up">
          <div className="container flex items-center gap-3">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg"
              autoFocus
            />
            <Button variant="ghost" size="icon" onClick={() => { setSearchOpen(false); setSearchQuery(''); }}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
