import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neon-green/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/generated/spyderstild-logo.dim_400x120.png"
              alt="Spyderstild"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('mice')}
              className="text-sm font-tech uppercase tracking-wider text-foreground hover:text-neon-green transition-colors duration-300 relative group"
            >
              Mice
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('keyboards')}
              className="text-sm font-tech uppercase tracking-wider text-foreground hover:text-neon-cyan transition-colors duration-300 relative group"
            >
              Keyboards
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('monitors')}
              className="text-sm font-tech uppercase tracking-wider text-foreground hover:text-neon-orange transition-colors duration-300 relative group"
            >
              Monitors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-orange group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-neon-green transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neon-green/20">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('mice')}
                className="text-sm font-tech uppercase tracking-wider text-foreground hover:text-neon-green transition-colors text-left"
              >
                Mice
              </button>
              <button
                onClick={() => scrollToSection('keyboards')}
                className="text-sm font-tech uppercase tracking-wider text-foreground hover:text-neon-cyan transition-colors text-left"
              >
                Keyboards
              </button>
              <button
                onClick={() => scrollToSection('monitors')}
                className="text-sm font-tech uppercase tracking-wider text-foreground hover:text-neon-orange transition-colors text-left"
              >
                Monitors
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
