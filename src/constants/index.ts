import { 
  Lightbulb, Zap, Smartphone, 
  Music, Lock, Wind
} from 'lucide-react';

// Detailed Features
export const features = [
  { 
    icon: Lightbulb, 
    title: 'Adaptive Lighting', 
    desc: 'Circadian-sync lighting that mimics natural sunlight to improve sleep cycles and productivity.', 
    color: 'from-amber-400 to-orange-500',
    details: ['Color temperature tuning', 'Automated brightness', 'Presence sensing', 'Custom scenes']
  },
  { 
    icon: Wind, 
    title: 'Precision Climate', 
    desc: 'Multi-zone HVAC control with humidity management and AI-driven thermal comfort optimization.', 
    color: 'from-cyan-400 to-blue-500',
    details: ['Room-by-room control', 'Humidity sensors', 'Energy recovery', 'Smart scheduling']
  },
  { 
    icon: Lock, 
    title: 'Fortress Security', 
    desc: 'Military-grade encryption for all entry points, paired with AI-based anomaly detection.', 
    color: 'from-emerald-400 to-green-500',
    details: ['Biometric access', 'Perimeter sensing', 'Real-time alerts', 'Safe-mode automation']
  },
  { 
    icon: Music, 
    title: 'Multi-Room Audio', 
    desc: 'Lossless audio streaming integrated invisibly into your ceilings and outdoor spaces.', 
    color: 'from-purple-400 to-indigo-500',
    details: ['In-ceiling speakers', 'Outdoor zones', 'Spotify/Apple integration', 'Voice control']
  },
  { 
    icon: Zap, 
    title: 'Smart Energy', 
    desc: 'Real-time monitoring of energy consumption with automatic load shedding during peak hours.', 
    color: 'from-yellow-400 to-amber-500',
    details: ['Appliance tracking', 'Solar integration', 'Battery monitoring', 'Consumption reports']
  },
  { 
    icon: Smartphone, 
    title: 'Unified Control', 
    desc: 'One interface for everything. Accessible via wall-panels, mobile, or voice commands.', 
    color: 'from-rose-400 to-pink-500',
    details: ['Dedicated wall tablets', 'Mobile dashboard', 'Voice assistant', 'Hidden controllers']
  },
];

export const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We discuss your needs and create a custom plan tailored to your lifestyle.",
  },
  {
    num: "02",
    title: "Installation",
    desc: "Professional setup with minimal disruption to your daily routine.",
  },
  {
    num: "03",
    title: "Enjoy",
    desc: "Control your home from one beautiful app. Its that simple.",
  },
];

// Expanded Services
export const services = [
  { 
    title: 'Infrastructure Design', 
    desc: 'Low-voltage wiring, network backbone layouts, and technical blueprints for high-performance homes.', 
    image: '/light_living_room.jpg',
    features: ['Technical blueprints', 'Network topology', 'Wiring schematics', 'Equipment racking']
  },
  { 
    title: 'Precision Integration', 
    desc: 'Merging disparate systems—KNX, Control4, Crestron, or Home Assistant—into a single stable ecosystem.', 
    image: '/light_installation.jpg',
    features: ['Hardware config', 'API integration', 'System mesh setup', 'Quality testing']
  },
  { 
    title: 'Custom Programming', 
    desc: 'Tailored automation logic that anticipates your needs, from "Good Morning" to "Vacation Mode".', 
    image: '/light_security.jpg',
    features: ['Scene creation', 'Logic scripting', 'UI customization', 'Event triggers']
  },
  { 
    title: 'Concierge Support', 
    desc: 'White-glove 24/7 monitoring and proactive maintenance to ensure your home never hits a glitch.', 
    image: '/light_climate.jpg',
    features: ['Remote monitoring', 'Priority dispatch', 'Security audits', 'Firmware updates']
  },
];

export const testimonials = [
  {
    name: "Maria K.",
    text: "Armakat transformed our home. Everything just works perfectly!",
    rating: 5,
  },
  {
    name: "John D.",
    text: "The installation was seamless. Highly recommend their service!",
    rating: 5,
  },
  {
    name: "Elena P.",
    text: "Best investment we made for our home. Amazing support team.",
    rating: 5,
  },
];

export const stats = [
  { value: 500, suffix: "+", label: "Homes Automated" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
  { value: 50, suffix: "%", label: "Energy Savings" },
];

// Tiered Pricing
export const pricing = [
  { 
    name: 'Essential', 
    price: '4,500', 
    desc: 'The foundation for a modern smart home.',
    features: [
      'Smart Lighting (15 nodes)', 
      'Dual-zone Climate control', 
      'Smart Entry (2 locks)', 
      'Pro Network backbone',
      'Mobile App access',
      'Standard 1yr Support'
    ], 
    featured: false 
  },
  { 
    name: 'Panoramic', 
    price: '12,000', 
    desc: 'Full-spectrum automation for luxury living.',
    features: [
      'Whole-home Lighting (unlimited)', 
      'Total Climate + Air Quality', 
      'Comprehensive Security + Cameras', 
      '3-Room Multi-room Audio',
      'Voice & Tablet control',
      'Premium 3yr Concierge'
    ], 
    featured: true 
  },
  { 
    name: 'Architect', 
    price: 'Custom', 
    desc: 'Bespoke engineering for ultimate estates.',
    features: [
      'Enterprise-grade Networking', 
      'Invisible Audio/Video integration', 
      'Custom API & logic development', 
      'Home Cinema automation',
      'Solar/Battery load management',
      'Lifetime VIP Support'
    ], 
    featured: false 
  },
];

export const faqs = [
  {
    q: "How long does installation take?",
    a: "Most installations are completed within 1-2 days, depending on the size of your home and the complexity of the system.",
  },
  {
    q: "What devices are compatible?",
    a: "We work with all major smart home brands including Philips Hue, Nest, Ring, Sonos, and many more.",
  },
  {
    q: "Is there ongoing support?",
    a: "Yes! We offer 24/7 support and maintenance packages to keep your system running smoothly.",
  },
  {
    q: "Can I upgrade later?",
    a: "Absolutely. Our systems are designed to be scalable, so you can add more devices and features anytime.",
  },
];
