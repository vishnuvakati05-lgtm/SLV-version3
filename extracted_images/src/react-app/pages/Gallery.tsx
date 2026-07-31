import { useState, useEffect } from "react";
import { X, Camera, Play, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/react-app/components/ui/button";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  // Products
  {
    id: "1",
    type: "image",
    src: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800",
    title: "Tiger Prawns Export Quality",
    category: "Products",
  },
  {
    id: "2",
    type: "image",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    title: "Fresh Seer Fish",
    category: "Products",
  },
  {
    id: "3",
    type: "image",
    src: "https://images.unsplash.com/photo-1553659971-f01207815844?w=800",
    title: "Premium Crab Selection",
    category: "Products",
  },
  {
    id: "4",
    type: "image",
    src: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800",
    title: "Silver Pomfret Fish",
    category: "Products",
  },
  {
    id: "5",
    type: "image",
    src: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=800",
    title: "Vannamei Prawns",
    category: "Products",
  },
  {
    id: "6",
    type: "image",
    src: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=800",
    title: "Jumbo Shrimp",
    category: "Products",
  },
  // Processing
  {
    id: "7",
    type: "image",
    src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800",
    title: "Fish Fillet Processing",
    category: "Processing",
  },
  {
    id: "8",
    type: "image",
    src: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=800",
    title: "Seafood Processing Line",
    category: "Processing",
  },
  // Packing
  {
    id: "9",
    type: "image",
    src: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800",
    title: "Export Ready Packaging",
    category: "Packing",
  },
  {
    id: "10",
    type: "image",
    src: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800",
    title: "IQF Frozen Products",
    category: "Packing",
  },
  // Facility
  {
    id: "11",
    type: "image",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    title: "Quality Seafood Display",
    category: "Facility",
  },
  {
    id: "12",
    type: "image",
    src: "https://images.unsplash.com/photo-1606851091851-e8a5a4a7a5e9?w=800",
    title: "Frozen Storage Section",
    category: "Facility",
  },
];

const categories = ["All", "Products", "Processing", "Packing", "Facility"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const navigateModal = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigateModal("prev");
      if (e.key === "ArrowRight") navigateModal("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, currentIndex]);

  const categoryColors: Record<string, string> = {
    All: "bg-primary",
    Products: "bg-blue-600",
    Processing: "bg-green-600",
    Packing: "bg-orange-600",
    Facility: "bg-purple-600",
  };

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Camera className="w-5 h-5 text-accent" />
            <span className="text-white/90 text-sm font-medium">Visual Gallery</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Seafood Export Gallery
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Products • Processing • Packing • Certifications
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                selectedCategory === category
                  ? `${categoryColors[category]} text-white shadow-lg scale-105`
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openModal(item, index)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image/Video */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Video Icon */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                  </div>
                </div>
              )}

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className={`inline-block px-2 py-0.5 rounded text-xs text-white mb-2 ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-4 border-accent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 rounded-3xl">
          <p className="text-muted-foreground mb-6 text-lg">
            Interested in our products? Get in touch for enquiries and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enquiry">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                Make an Enquiry
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="px-8">
                Visit Company Profile
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateModal("prev");
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateModal("next");
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Content */}
          <div
            className="max-w-5xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] rounded-lg"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <span className={`inline-block px-3 py-1 rounded-full text-xs text-white mb-2 ${categoryColors[selectedItem.category]}`}>
                {selectedItem.category}
              </span>
              <h3 className="text-white font-semibold text-lg">{selectedItem.title}</h3>
              <p className="text-white/60 text-sm mt-1">
                {currentIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
