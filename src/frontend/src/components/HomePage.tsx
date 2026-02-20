import HeroSection from './HeroSection';
import ProductCategorySection from './ProductCategorySection';
import { miceProducts, keyboardProducts, monitorProducts } from '../data/products';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      
      <ProductCategorySection
        id="mice"
        title="Gaming Mice"
        description="Precision engineered for competitive gaming"
        bannerImage="/assets/generated/mice-banner.dim_800x400.png"
        products={miceProducts}
        accentColor="neon-green"
      />

      <ProductCategorySection
        id="keyboards"
        title="Gaming Keyboards"
        description="Mechanical perfection meets RGB brilliance"
        bannerImage="/assets/generated/keyboard-banner.dim_800x400.png"
        products={keyboardProducts}
        accentColor="neon-cyan"
      />

      <ProductCategorySection
        id="monitors"
        title="Gaming Monitors"
        description="Ultra-fast refresh rates for competitive edge"
        bannerImage="/assets/generated/monitor-banner.dim_800x400.png"
        products={monitorProducts}
        accentColor="neon-orange"
      />
    </div>
  );
}
