export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  exportRegions: string[];
  badgeText?: string;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Shrimp Peeled and Deveined (21/25 VPD)',
    category: 'Shrimp',
    description: 'High-quality peeled and deveined shrimp, perfectly processed and frozen.',
    image: '/products/img-1.jpeg',
    exportRegions: ['USA', 'EU', 'Asia'],
    badgeText: 'Premium'
  },
  {
    id: 'p2',
    name: 'Breaded Fish Sticks',
    category: 'Value Added',
    description: 'Crispy and delicious breaded fish sticks, ideal for quick meals.',
    image: '/products/img-2.jpeg',
    exportRegions: ['Global']
  },
  {
    id: 'p3',
    name: 'Breaded Shrimp',
    category: 'Value Added',
    description: 'Premium breaded shrimp, ready to fry and serve.',
    image: '/products/img-3.jpeg',
    exportRegions: ['USA', 'EU', 'Middle East'],
    badgeText: 'Best Seller'
  },
  {
    id: 'p4',
    name: 'Spring Rolls with Shrimp',
    category: 'Value Added',
    description: 'Crispy spring rolls generously stuffed with premium shrimp.',
    image: '/products/img-4.jpeg',
    exportRegions: ['Global']
  },
  {
    id: 'p5',
    name: 'Black Tiger Shrimp (Peeled & Deveined 8/12 800g)',
    category: 'Shrimp',
    description: 'Large, flavorful Black Tiger Shrimp sourced from sustainable aquaculture.',
    image: '/products/img-5.jpeg',
    exportRegions: ['China', 'Southeast Asia']
  },
  {
    id: 'p6',
    name: 'Blue Swimming Crab',
    category: 'Crab',
    description: 'Delicate Blue Swimming Crab, available as whole or pasteurized meat.',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop',
    exportRegions: ['USA', 'EU']
  },
  {
    id: 'p7',
    name: 'Rock Lobster',
    category: 'Lobster',
    description: 'Exquisite Rock Lobster tails and whole frozen options.',
    image: 'https://images.unsplash.com/photo-1553659971-f01207815844?w=400&h=300&fit=crop',
    exportRegions: ['USA', 'China', 'Japan'],
    badgeText: 'Luxury'
  },
  {
    id: 'p8',
    name: 'Spiny Lobster',
    category: 'Lobster',
    description: 'Freshly caught Spiny Lobster, flash-frozen to preserve quality.',
    image: 'https://picsum.photos/seed/lobster1/400/300',
    exportRegions: ['EU', 'Middle East']
  },
  {
    id: 'p9',
    name: 'Indian Squid',
    category: 'Cephalopods',
    description: 'Cleaned and whole Indian Squid, perfect for grilling and frying.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    exportRegions: ['EU', 'Japan']
  },
  {
    id: 'p10',
    name: 'Baby Octopus',
    category: 'Cephalopods',
    description: 'Tender baby octopus, carefully processed and frozen.',
    image: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=400&h=300&fit=crop',
    exportRegions: ['Mediterranean', 'Asia']
  },
  {
    id: 'p11',
    name: 'Mahi Mahi',
    category: 'Pelagic Fish',
    description: 'Firm and flavorful Mahi Mahi fillets and portions.',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=300&fit=crop',
    exportRegions: ['USA', 'EU']
  },
  {
    id: 'p12',
    name: 'Swordfish',
    category: 'Pelagic Fish',
    description: 'Premium Swordfish steaks and loins for culinary excellence.',
    image: 'https://picsum.photos/seed/swordfish/400/300',
    exportRegions: ['USA', 'EU']
  },
  {
    id: 'p13',
    name: 'Red Snapper',
    category: 'Reef Fish',
    description: 'Bright and delicious Red Snapper, available whole or filleted.',
    image: 'https://picsum.photos/seed/snapper1/400/300',
    exportRegions: ['Global']
  },
  {
    id: 'p14',
    name: 'Grouper',
    category: 'Reef Fish',
    description: 'White, flaky Grouper meat preferred by top chefs worldwide.',
    image: 'https://picsum.photos/seed/grouper1/400/300',
    exportRegions: ['Middle East', 'Asia']
  },
  {
    id: 'p15',
    name: 'King Seer Fish',
    category: 'Mackerel',
    description: 'High-grade King Seer Fish, known for its rich taste.',
    image: 'https://picsum.photos/seed/seer1/400/300',
    exportRegions: ['Middle East', 'EU']
  },
  {
    id: 'p16',
    name: 'Indian Mackerel',
    category: 'Mackerel',
    description: 'Freshly frozen Indian Mackerel for wholesale markets.',
    image: 'https://picsum.photos/seed/mackerel1/400/300',
    exportRegions: ['Southeast Asia', 'Middle East']
  },
  {
    id: 'p17',
    name: 'Silver Pomfret',
    category: 'Pomfret',
    description: 'Delicate Silver Pomfret, highly prized in Asian cuisine.',
    image: 'https://picsum.photos/seed/pomfret1/400/300',
    exportRegions: ['China', 'Middle East']
  },
  {
    id: 'p18',
    name: 'Black Pomfret',
    category: 'Pomfret',
    description: 'Quality Black Pomfret, processed with strict hygiene standards.',
    image: 'https://picsum.photos/seed/pomfret2/400/300',
    exportRegions: ['Asia']
  },
  {
    id: 'p19',
    name: 'Ribbon Fish',
    category: 'Ribbon Fish',
    description: 'Export-quality Ribbon Fish, frozen in blocks or individually.',
    image: 'https://picsum.photos/seed/ribbon1/400/300',
    exportRegions: ['China', 'Japan']
  },
  {
    id: 'p20',
    name: 'Croaker',
    category: 'Croaker',
    description: 'Yellow and Silver Croaker, available in various sizes.',
    image: 'https://picsum.photos/seed/croaker1/400/300',
    exportRegions: ['Asia']
  },
  {
    id: 'p21',
    name: 'Sardines',
    category: 'Small Pelagic',
    description: 'Nutrient-rich Sardines frozen immediately after catch.',
    image: 'https://picsum.photos/seed/sardine1/400/300',
    exportRegions: ['Africa', 'Middle East']
  },
  {
    id: 'p22',
    name: 'Anchovies',
    category: 'Small Pelagic',
    description: 'Premium Anchovies suitable for various preparations.',
    image: 'https://picsum.photos/seed/anchovy1/400/300',
    exportRegions: ['EU', 'Asia']
  },
  {
    id: 'p23',
    name: 'Cuttlefish',
    category: 'Cuttlefish',
    description: 'Cleaned and whole Cuttlefish with excellent texture.',
    image: 'https://picsum.photos/seed/cuttlefish1/400/300',
    exportRegions: ['EU', 'Japan']
  },
  {
    id: 'p24',
    name: 'Cuttlefish Fillet',
    category: 'Cuttlefish',
    description: 'Ready-to-cook Cuttlefish fillets, blanched or raw.',
    image: 'https://picsum.photos/seed/cuttlefish2/400/300',
    exportRegions: ['EU']
  },
  {
    id: 'p25',
    name: 'Emperor Fish',
    category: 'Demersal Fish',
    description: 'Firm and sweet Emperor Fish, a favorite in many regions.',
    image: 'https://picsum.photos/seed/emperor1/400/300',
    exportRegions: ['Middle East']
  },
  {
    id: 'p26',
    name: 'Snapper',
    category: 'Demersal Fish',
    description: 'Various Snapper species, sustainably sourced and processed.',
    image: 'https://picsum.photos/seed/snapper2/400/300',
    exportRegions: ['Global']
  },
  {
    id: 'p27',
    name: 'Baigai / Sea Snail',
    category: 'Molluscs',
    description: 'Premium Sea Snails processed under stringent quality control.',
    image: 'https://picsum.photos/seed/snail1/400/300',
    exportRegions: ['Asia']
  },
  {
    id: 'p28',
    name: 'Clams',
    category: 'Molluscs',
    description: 'Freshly harvested Clams, cleaned and frozen.',
    image: 'https://picsum.photos/seed/clam1/400/300',
    exportRegions: ['EU', 'Asia']
  },
  {
    id: 'p29',
    name: 'Value Added Shrimp',
    category: 'Value Added',
    description: 'Breaded and marinated shrimp products ready for retail.',
    image: 'https://picsum.photos/seed/shrimp2/400/300',
    exportRegions: ['USA', 'EU']
  },
  {
    id: 'p30',
    name: 'Fish Fingers',
    category: 'Value Added',
    description: 'Premium fish fingers made from quality white fish.',
    image: 'https://picsum.photos/seed/fingers1/400/300',
    exportRegions: ['Global']
  }
];
