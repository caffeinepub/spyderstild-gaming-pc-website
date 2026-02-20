import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById('mice');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.png"
          alt="Gaming Setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Animated border effect */}
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-orange opacity-75 blur-lg animate-pulse"></div>
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neon-green via-neon-cyan to-neon-orange">
              SPYDERSTILD
            </h1>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl font-tech text-foreground/90 tracking-wide uppercase">
            Elite Gaming Peripherals
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Experience the next generation of gaming hardware. Precision-engineered peripherals designed for champions.
          </p>

          <button
            onClick={scrollToProducts}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-neon-green/10 border-2 border-neon-green text-neon-green font-tech uppercase tracking-wider hover:bg-neon-green hover:text-background transition-all duration-300 clip-corner-lg"
          >
            Explore Arsenal
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-neon-green/50" />
        </div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-green/30 clip-corner rotate-45 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-neon-cyan/30 clip-corner rotate-12"></div>
    </section>
  );
}
