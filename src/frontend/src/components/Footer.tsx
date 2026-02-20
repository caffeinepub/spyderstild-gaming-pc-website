import { SiGithub, SiX, SiDiscord } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'spyderstild-shop';

  return (
    <footer className="border-t border-neon-green/20 bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/assets/generated/spyderstild-logo.dim_400x120.png"
              alt="Spyderstild"
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground font-body max-w-xs">
              Elite gaming peripherals engineered for champions. Precision, performance, perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-tech uppercase tracking-wider text-neon-green">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li>
                <button
                  onClick={() => document.getElementById('mice')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-neon-green transition-colors"
                >
                  Gaming Mice
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('keyboards')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-neon-cyan transition-colors"
                >
                  Gaming Keyboards
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('monitors')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-neon-orange transition-colors"
                >
                  Gaming Monitors
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('pc-builds')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-neon-red transition-colors"
                >
                  PC Builds
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-tech uppercase tracking-wider text-neon-green">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border-2 border-neon-green/30 hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300 clip-corner"
                aria-label="Discord"
              >
                <SiDiscord className="w-5 h-5 text-neon-green" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border-2 border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 clip-corner"
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5 text-neon-cyan" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border-2 border-neon-orange/30 hover:border-neon-orange hover:bg-neon-orange/10 transition-all duration-300 clip-corner"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5 text-neon-orange" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neon-green/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="font-body">
            © {currentYear} Spyderstild. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-body">
            Built with <Heart className="w-4 h-4 text-neon-green fill-neon-green" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-green hover:text-neon-cyan transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
