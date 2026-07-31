import { useState, useEffect } from "react";
import { MessageCircle, Package, User, Phone, Scale, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { products, productCategories, teamContacts } from "@/react-app/data/business";

export default function EnquiryPage() {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [quantity, setQuantity] = useState("");
  const [selectedWhatsapp, setSelectedWhatsapp] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const toggleProduct = (productName: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productName)
        ? prev.filter((p) => p !== productName)
        : [...prev, productName]
    );
  };

  const sendEnquiry = () => {
    if (!customerName.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!customerPhone.trim()) {
      alert("Please enter your phone number.");
      return;
    }
    if (selectedProducts.length < 1) {
      alert("Please select at least one product.");
      return;
    }
    if (!quantity || parseInt(quantity) < 55) {
      alert("Minimum order quantity is 55 kg.");
      return;
    }
    if (!selectedWhatsapp) {
      alert("Please select a WhatsApp number.");
      return;
    }

    const message = `Hello SLV Marine Exports,

Name: ${customerName}
Phone: ${customerPhone}

Products Enquiry:
• ${selectedProducts.join("\n• ")}

Quantity: ${quantity} kg
Order Type: Commercial Order

Please share availability and pricing details.`;

    const whatsappURL = `https://wa.me/${selectedWhatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const getCategoryProducts = (categoryId: string) => {
    return products.filter((p) => p.category === categoryId);
  };

  const categoryColors: Record<string, string> = {
    fish: "from-blue-500/20 to-blue-600/10 border-blue-300",
    prawns: "from-orange-500/20 to-orange-600/10 border-orange-300",
    crabs: "from-red-500/20 to-red-600/10 border-red-300",
    snacks: "from-amber-500/20 to-amber-600/10 border-amber-300",
  };

  const categoryHeaderColors: Record<string, string> = {
    fish: "bg-blue-600",
    prawns: "bg-orange-600",
    crabs: "bg-red-600",
    snacks: "bg-amber-600",
  };

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Product Enquiry
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Select products, enter your details, and send enquiry directly via WhatsApp
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Customer Details */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Your Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <Package className="w-6 h-6 text-primary" />
            Select Products
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {productCategories.map((category) => (
              <div
                key={category.id}
                className={`rounded-2xl border overflow-hidden bg-gradient-to-br ${categoryColors[category.id]}`}
              >
                {/* Category Header */}
                <div className={`${categoryHeaderColors[category.id]} px-5 py-4`}>
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span className="text-xl">{category.icon}</span>
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-xs mt-1">
                    Price available on enquiry • All are IQF
                  </p>
                </div>

                {/* Products */}
                <div className="p-4 space-y-2">
                  {getCategoryProducts(category.id).map((product) => {
                    const isSelected = selectedProducts.includes(product.name);
                    return (
                      <label
                        key={product.id}
                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                          isSelected
                            ? "bg-primary/10 border-2 border-primary"
                            : "bg-white/50 border-2 border-transparent hover:bg-white/80"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleProduct(product.name)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-primary border-primary"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=100";
                          }}
                        />
                        <span className="font-medium text-foreground text-sm">
                          {product.name}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Info */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-secondary/50 rounded-2xl p-6 border">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-foreground font-medium">Minimum order quantity is <strong>55 kg</strong></p>
                <p className="text-muted-foreground text-sm mt-1">
                  All enquiries are treated as Commercial Orders only. Pricing will be shared based on quantity, grade, and availability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quantity & WhatsApp Selection */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-primary" />
                  Quantity (KG) *
                </label>
                <Input
                  type="number"
                  min="55"
                  placeholder="Minimum 55 kg"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* WhatsApp Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Select WhatsApp Number *
                </label>
                <div className="space-y-3">
                  {teamContacts.map((contact) => (
                    <label
                      key={contact.whatsapp}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border-2 ${
                        selectedWhatsapp === contact.whatsapp
                          ? "bg-green-50 border-green-500"
                          : "bg-white border-gray-200 hover:border-green-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="whatsapp"
                        value={contact.whatsapp}
                        checked={selectedWhatsapp === contact.whatsapp}
                        onChange={() => setSelectedWhatsapp(contact.whatsapp)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedWhatsapp === contact.whatsapp
                            ? "border-green-500 bg-green-500"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedWhatsapp === contact.whatsapp && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{contact.name}</p>
                        <p className="text-muted-foreground text-xs">{contact.phone}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Products Summary */}
        {selectedProducts.length > 0 && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-3">
                Selected Products ({selectedProducts.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProducts.map((product) => (
                  <span
                    key={product}
                    className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="max-w-4xl mx-auto text-center">
          <Button
            onClick={sendEnquiry}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Proceed to Enquiry via WhatsApp
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
