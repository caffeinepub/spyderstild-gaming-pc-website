import ProductCard from './ProductCard';
import type { Product } from '../data/products';

interface ProductCategorySectionProps {
  id: string;
  title: string;
  description: string;
  bannerImage: string;
  products: Product[];
  accentColor: 'neon-green' | 'neon-cyan' | 'neon-orange';
}

export default function ProductCategorySection({
  id,
  title,
  description,
  bannerImage,
  products,
  accentColor,
}: ProductCategorySectionProps) {
  const accentColorClass = {
    'neon-green': 'border-neon-green',
    'neon-cyan': 'border-neon-cyan',
    'neon-orange': 'border-neon-orange',
  }[accentColor];

  const textColorClass = {
    'neon-green': 'text-neon-green',
    'neon-cyan': 'text-neon-cyan',
    'neon-orange': 'text-neon-orange',
  }[accentColor];

  return (
    <section id={id} className="py-20 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor), linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}></div>
      </div>

      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className={`inline-block border-b-4 ${accentColorClass} pb-2 mb-4`}>
            <h2 className={`text-4xl md:text-5xl font-display font-bold ${textColorClass} uppercase tracking-tight`}>
              {title}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-tech uppercase tracking-wide">
            {description}
          </p>
        </div>

        {/* Banner Image */}
        <div className="mb-12 relative overflow-hidden clip-corner-lg">
          <img
            src={bannerImage}
            alt={title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className={`absolute inset-0 border-2 ${accentColorClass} pointer-events-none`}></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
