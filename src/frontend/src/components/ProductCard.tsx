import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  accentColor: 'neon-green' | 'neon-cyan' | 'neon-orange' | 'neon-red';
}

export default function ProductCard({ product, accentColor }: ProductCardProps) {
  const borderColorClass = {
    'neon-green': 'border-neon-green group-hover:border-neon-green',
    'neon-cyan': 'border-neon-cyan group-hover:border-neon-cyan',
    'neon-orange': 'border-neon-orange group-hover:border-neon-orange',
    'neon-red': 'border-neon-red group-hover:border-neon-red',
  }[accentColor];

  const shadowColorClass = {
    'neon-green': 'group-hover:shadow-neon-green',
    'neon-cyan': 'group-hover:shadow-neon-cyan',
    'neon-orange': 'group-hover:shadow-neon-orange',
    'neon-red': 'group-hover:shadow-neon-red',
  }[accentColor];

  const textColorClass = {
    'neon-green': 'text-neon-green',
    'neon-cyan': 'text-neon-cyan',
    'neon-orange': 'text-neon-orange',
    'neon-red': 'text-neon-red',
  }[accentColor];

  return (
    <div className={`group relative bg-card border-2 ${borderColorClass} clip-corner-lg overflow-hidden transition-all duration-300 hover:scale-105 ${shadowColorClass}`}>
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-${accentColor}/20 to-transparent`}></div>
      
      {/* Product Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-background to-muted overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-6xl font-display ${textColorClass} opacity-20`}>
            {product.icon}
          </div>
        </div>
        {/* Scan line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 to-transparent animate-scan"></div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-3">
        <h3 className={`text-xl font-display font-bold ${textColorClass} uppercase tracking-tight`}>
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          {product.description}
        </p>
        
        {/* Specs */}
        <div className="pt-3 border-t border-border/50">
          <ul className="space-y-1 text-xs text-muted-foreground font-tech">
            {product.specs.map((spec, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className={`w-1 h-1 ${borderColorClass} border`}></span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-${accentColor}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
    </div>
  );
}
