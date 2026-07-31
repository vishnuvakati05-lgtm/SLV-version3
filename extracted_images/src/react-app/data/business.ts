export const businessInfo = {
  name: "SLV Marine Exports",
  tagline: "Hygienically Processed Frozen Marine Products",
  subtitle: "Delivering quality, safety, and reliability from Nellore.",
  phone: ["+91 8977770455", "+91 93901 97086"],
  whatsapp: ["918977770455", "919390197086"],
  email: "slvmarineexports@gmail.com",
  address: "Dasaripallem village, South Gandavaram, Kodavalur MD-524317, SPSR Nellore, Andhra Pradesh, India",
  workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
  minimumOrder: 55,
  certifications: ["FSSAI Certified"],
  coldStorageCapacity: "2000MT",
};

export const teamContacts = [
  {
    name: "Mr. V Sampath Kumar Reddy",
    role: "Manager",
    phone: "+91 8977770455",
    whatsapp: "918977770455",
  },
  {
    name: "Mr. Sk Sohail",
    role: "Sales & Accountant",
    phone: "+91 93901 97086",
    whatsapp: "919390197086",
  },
];

export const services = [
  {
    icon: "snowflake",
    title: "Frozen Seafood Processing",
    description: "Hygienic processing of marine products following quality and safety standards approved by FSSAI.",
  },
  {
    icon: "warehouse",
    title: "Cold Storage & Preservation",
    description: "2000MT capacity cold storage facility to maintain freshness and product quality. Rental facility available.",
  },
  {
    icon: "truck",
    title: "Reliable Supply & Distribution",
    description: "Consistent supply and timely delivery to meet customer requirements across global markets.",
  },
  {
    icon: "clipboard",
    title: "Order & Product Enquiry",
    description: "Easy enquiry process for our frozen marine products. Get pricing based on quantity and availability.",
  },
];

export const aboutText = `SLV Marine Exports is engaged in hygienic processing and supply of frozen marine products approved by FSSAI and other quality standards. Based in Nellore, we focus on quality, safety, and consistent standards to meet customer expectations. We have 2000MT capacity cold storage facility to preserve the freshness of our products. We also provide rental facility for customers needing cold storage solutions with attractive pricing.`;

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
}

export const productCategories = [
  { id: "fish", name: "Frozen Fish", icon: "🐟" },
  { id: "prawns", name: "Frozen Prawns", icon: "🦐" },
  { id: "crabs", name: "Frozen Crabs", icon: "🦀" },
  { id: "snacks", name: "Crispy Breaded Snacks", icon: "🍤" },
];

export const products: Product[] = [
  // Frozen Fish
  { id: "seer-fish", name: "Seer Fish", category: "fish", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300" },
  { id: "fish-fillets", name: "Fish Fillets", category: "fish", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300" },
  { id: "silver-pomfret", name: "Silver Pomfret Fish", category: "fish", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=300" },
  { id: "indian-basa", name: "Indian Basa", category: "fish", image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=300" },
  { id: "tilapia", name: "Tilapia", category: "fish", image: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=300" },
  
  // Frozen Prawns
  { id: "black-tiger", name: "Black Tiger Prawns", category: "prawns", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300" },
  { id: "vannamei", name: "Vannamei Prawns", category: "prawns", image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=300" },
  { id: "pd-prawns", name: "PD Prawns", category: "prawns", image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=300" },
  { id: "pd-tail-on", name: "PD Tail On Prawns", category: "prawns", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=300" },
  { id: "headless", name: "Headless Prawns", category: "prawns", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300" },
  
  // Frozen Crabs
  { id: "whole-crab", name: "Whole Frozen Crab", category: "crabs", image: "https://images.unsplash.com/photo-1510130315046-1e47cc196aa0?w=300" },
  { id: "crab-meat", name: "Crab Meat (Bulk)", category: "crabs", image: "https://images.unsplash.com/photo-1553659971-f01207815844?w=300" },
  
  // Crispy Breaded Snacks
  { id: "prawn-nuggets", name: "Prawn Nuggets", category: "snacks", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300" },
  { id: "prawn-popcorn", name: "Prawns Popcorn", category: "snacks", image: "https://images.unsplash.com/photo-1585325701165-351af916e581?w=300" },
  { id: "prawn-samosa", name: "Prawn Samosa", category: "snacks", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300" },
  { id: "cheese-balls", name: "Prawn Cheese Balls", category: "snacks", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300" },
  { id: "butterfly-prawns", name: "Butterfly Prawns", category: "snacks", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=300" },
  { id: "tandoori-torpedo", name: "Prawn Tandoori Torpedo", category: "snacks", image: "https://images.unsplash.com/photo-1606851091851-e8a5a4a7a5e9?w=300" },
  { id: "spring-rolls", name: "Spring Rolls", category: "snacks", image: "https://images.unsplash.com/photo-1548507200-d498c7b3e8c1?w=300" },
  { id: "fish-fingers", name: "Fish Fingers", category: "snacks", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300" },
];
