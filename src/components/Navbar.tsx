
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#hero" className="text-xl font-heading font-bold text-foreground">
          Ankrit<span className="text-primary">Maity</span>
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          <ThemeToggle />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg md:hidden">
            <nav className="flex flex-col items-center py-4 gap-4">
              <a 
                href="#about" 
                className="w-full text-center py-2 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="w-full text-center py-2 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="w-full text-center py-2 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="w-full text-center py-2 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="py-2">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
