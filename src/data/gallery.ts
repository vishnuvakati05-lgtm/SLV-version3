export interface GalleryItem {
  id: string;
  category: 'Fish' | 'Shrimps' | 'Crabs' | 'Processing' | 'Packaging' | 'Cold Storage' | 'Containers' | 'Export';
  imageUrl: string;
  title: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 'g1', category: 'Fish', imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop', title: 'Yellowfin Tuna Fresh Catch' },
  { id: 'g2', category: 'Fish', imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a0?w=600&h=400&fit=crop', title: 'Skipjack Tuna Ready for Processing' },
  { id: 'g3', category: 'Fish', imageUrl: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=600&h=400&fit=crop', title: 'Mahi Mahi Catch' },
  { id: 'g4', category: 'Fish', imageUrl: 'https://picsum.photos/seed/fish2/600/400', title: 'Premium Mackerel' },
  { id: 'g5', category: 'Fish', imageUrl: 'https://picsum.photos/seed/fish3/600/400', title: 'Fresh Snapper Selection' },

  { id: 'g6', category: 'Shrimps', imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&h=400&fit=crop', title: 'Black Tiger Shrimp' },
  { id: 'g7', category: 'Shrimps', imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&h=400&fit=crop', title: 'Vannamei White Shrimp' },
  { id: 'g8', category: 'Shrimps', imageUrl: 'https://picsum.photos/seed/shrimp3/600/400', title: 'Peeled Shrimp Processing' },
  { id: 'g9', category: 'Shrimps', imageUrl: 'https://picsum.photos/seed/shrimp4/600/400', title: 'Export Quality Shrimp' },
  { id: 'g10', category: 'Shrimps', imageUrl: 'https://picsum.photos/seed/shrimp5/600/400', title: 'Shrimp Grading' },

  { id: 'g11', category: 'Crabs', imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop', title: 'Live Mud Crab' },
  { id: 'g12', category: 'Crabs', imageUrl: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&h=400&fit=crop', title: 'Blue Swimming Crab' },
  { id: 'g13', category: 'Crabs', imageUrl: 'https://picsum.photos/seed/crab1/600/400', title: 'Crab Meat Processing' },
  { id: 'g14', category: 'Crabs', imageUrl: 'https://picsum.photos/seed/crab2/600/400', title: 'Frozen Whole Crab' },
  { id: 'g15', category: 'Crabs', imageUrl: 'https://picsum.photos/seed/crab3/600/400', title: 'Soft Shell Crab' },

  { id: 'g16', category: 'Processing', imageUrl: 'https://picsum.photos/seed/proc1/600/400', title: 'Hygienic Processing Line' },
  { id: 'g17', category: 'Processing', imageUrl: 'https://picsum.photos/seed/proc2/600/400', title: 'Quality Inspection' },
  { id: 'g18', category: 'Processing', imageUrl: 'https://picsum.photos/seed/proc3/600/400', title: 'Filleting Station' },
  { id: 'g19', category: 'Processing', imageUrl: 'https://picsum.photos/seed/proc4/600/400', title: 'Automated Sorting' },
  { id: 'g20', category: 'Processing', imageUrl: 'https://picsum.photos/seed/proc5/600/400', title: 'Washing and Cleaning' },

  { id: 'g21', category: 'Packaging', imageUrl: 'https://picsum.photos/seed/pack1/600/400', title: 'Vacuum Packaging' },
  { id: 'g22', category: 'Packaging', imageUrl: 'https://picsum.photos/seed/pack2/600/400', title: 'Block Freezing Cartons' },
  { id: 'g23', category: 'Packaging', imageUrl: 'https://picsum.photos/seed/pack3/600/400', title: 'Retail Ready Packs' },
  { id: 'g24', category: 'Packaging', imageUrl: 'https://picsum.photos/seed/pack4/600/400', title: 'Private Labeling' },
  { id: 'g25', category: 'Packaging', imageUrl: 'https://picsum.photos/seed/pack5/600/400', title: 'Master Carton Sealing' },

  { id: 'g26', category: 'Cold Storage', imageUrl: 'https://picsum.photos/seed/cold1/600/400', title: 'Deep Freeze Facility' },
  { id: 'g27', category: 'Cold Storage', imageUrl: 'https://picsum.photos/seed/cold2/600/400', title: 'Automated Racking System' },
  { id: 'g28', category: 'Cold Storage', imageUrl: 'https://picsum.photos/seed/cold3/600/400', title: 'Temperature Monitoring' },
  { id: 'g29', category: 'Cold Storage', imageUrl: 'https://picsum.photos/seed/cold4/600/400', title: 'Blast Freezer' },
  { id: 'g30', category: 'Cold Storage', imageUrl: 'https://picsum.photos/seed/cold5/600/400', title: 'Loading Bay' },

  { id: 'g31', category: 'Containers', imageUrl: 'https://picsum.photos/seed/cont1/600/400', title: 'Reefer Container Loading' },
  { id: 'g32', category: 'Containers', imageUrl: 'https://picsum.photos/seed/cont2/600/400', title: 'Pre-cooling Containers' },
  { id: 'g33', category: 'Containers', imageUrl: 'https://picsum.photos/seed/cont3/600/400', title: 'Container Sealing' },
  { id: 'g34', category: 'Containers', imageUrl: 'https://picsum.photos/seed/cont4/600/400', title: 'Logistics Yard' },
  { id: 'g35', category: 'Containers', imageUrl: 'https://picsum.photos/seed/cont5/600/400', title: 'Fleet Ready for Dispatch' },

  { id: 'g36', category: 'Export', imageUrl: 'https://picsum.photos/seed/exp1/600/400', title: 'Port Operations' },
  { id: 'g37', category: 'Export', imageUrl: 'https://picsum.photos/seed/exp2/600/400', title: 'Cargo Ship Loading' },
  { id: 'g38', category: 'Export', imageUrl: 'https://picsum.photos/seed/exp3/600/400', title: 'Global Logistics' },
  { id: 'g39', category: 'Export', imageUrl: 'https://picsum.photos/seed/exp4/600/400', title: 'Customs Clearance' },
  { id: 'g40', category: 'Export', imageUrl: 'https://picsum.photos/seed/exp5/600/400', title: 'Air Freight Consignment' }
];
