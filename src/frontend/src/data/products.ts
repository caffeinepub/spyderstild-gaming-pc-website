export interface Product {
  name: string;
  description: string;
  icon: string;
  specs: string[];
}

export const miceProducts: Product[] = [
  {
    name: 'Viper Elite',
    description: 'Ultra-lightweight wireless gaming mouse with 30,000 DPI sensor and zero-latency HyperSpeed technology.',
    icon: '🖱️',
    specs: [
      '30,000 DPI Optical Sensor',
      '58g Ultra-Lightweight',
      '70-Hour Battery Life',
      'RGB Lighting Zones'
    ]
  },
  {
    name: 'Phantom Pro',
    description: 'Ergonomic precision mouse designed for extended gaming sessions with customizable weight system.',
    icon: '🎯',
    specs: [
      '20,000 DPI Sensor',
      'Adjustable Weight System',
      '11 Programmable Buttons',
      'Braided Cable'
    ]
  },
  {
    name: 'Apex Wireless',
    description: 'Ambidextrous wireless gaming mouse with dual connectivity and 100-hour battery life.',
    icon: '⚡',
    specs: [
      '25,000 DPI Sensor',
      'Dual Wireless/Wired Mode',
      '100-Hour Battery',
      'Onboard Memory'
    ]
  },
  {
    name: 'Spectre Wireless Pro',
    description: 'Premium wireless gaming mouse with tri-mode connectivity and ultra-fast 8000Hz polling rate.',
    icon: '👻',
    specs: [
      '2.4GHz Wireless + Bluetooth 5.0',
      '8000Hz Polling Rate',
      '26,000 DPI Sensor',
      'Up to 150 Hours Battery Life'
    ]
  },
  {
    name: 'Nebula Wireless',
    description: 'Featherweight wireless esports mouse with magnetic charging dock and customizable RGB effects.',
    icon: '🌌',
    specs: [
      '2.4GHz HyperSpeed Wireless',
      '62g Lightweight Design',
      '1000Hz Polling Rate',
      '90-Hour Battery + Magnetic Dock'
    ]
  },
  {
    name: 'Infinity Wireless',
    description: 'Multi-device wireless gaming mouse with instant device switching and precision scroll wheel.',
    icon: '♾️',
    specs: [
      'Bluetooth 5.0 Multi-Device',
      '16,000 DPI Sensor',
      '8 Programmable Buttons',
      'Up to 70 Hours Battery Life'
    ]
  }
];

export const keyboardProducts: Product[] = [
  {
    name: 'Titan Mechanical',
    description: 'Full-size mechanical keyboard with hot-swappable switches and per-key RGB lighting.',
    icon: '⌨️',
    specs: [
      'Hot-Swappable Switches',
      'Per-Key RGB Lighting',
      'Aluminum Frame',
      'Detachable USB-C Cable'
    ]
  },
  {
    name: 'Stealth TKL',
    description: 'Tenkeyless mechanical keyboard with silent switches perfect for competitive gaming.',
    icon: '🎮',
    specs: [
      'Silent Mechanical Switches',
      'TKL Compact Design',
      'N-Key Rollover',
      'Magnetic Wrist Rest'
    ]
  },
  {
    name: 'Quantum 60%',
    description: 'Ultra-compact 60% mechanical keyboard with wireless connectivity and premium build quality.',
    icon: '🔥',
    specs: [
      '60% Compact Layout',
      'Wireless Bluetooth 5.0',
      'PBT Keycaps',
      '3000mAh Battery'
    ]
  }
];

export const monitorProducts: Product[] = [
  {
    name: 'Velocity 360Hz',
    description: '24.5" esports monitor with 360Hz refresh rate and 0.5ms response time for competitive advantage.',
    icon: '🖥️',
    specs: [
      '360Hz Refresh Rate',
      '0.5ms Response Time',
      '1080p IPS Panel',
      'G-SYNC Compatible'
    ]
  },
  {
    name: 'Quantum 4K',
    description: '27" 4K gaming monitor with HDR600 and 144Hz refresh rate for stunning visuals.',
    icon: '🌟',
    specs: [
      '4K UHD Resolution',
      '144Hz Refresh Rate',
      'HDR600 Certified',
      'Quantum Dot Technology'
    ]
  },
  {
    name: 'Ultrawide Pro',
    description: '34" curved ultrawide monitor with 165Hz refresh rate for immersive gaming experience.',
    icon: '🎬',
    specs: [
      '34" 21:9 Ultrawide',
      '165Hz Refresh Rate',
      '1ms Response Time',
      '1800R Curvature'
    ]
  }
];

export const pcBuilds: Product[] = [
  {
    name: 'Gaming PC',
    description: 'High-performance gaming rig built for maximum FPS and ultra settings in the latest AAA titles.',
    icon: '💻',
    specs: [
      '9.3GB Storage',
      'RGB Liquid Cooling',
      'Tempered Glass Case',
      'WiFi 6E Ready'
    ]
  },
  {
    name: 'Hacking PC',
    description: 'Professional workstation optimized for security research, penetration testing, and development.',
    icon: '🔒',
    specs: [
      '12.8GB Storage',
      'Multi-Monitor Support',
      'Enhanced Security Features',
      'Silent Operation'
    ]
  }
];
