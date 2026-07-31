import { useEffect } from "react";
import { Link } from "react-router";
import {
  Phone,
  Mail,
  MapPin,
  Snowflake,
  Warehouse,
  Truck,
  ClipboardList,
  ChevronRight,
  Shield,
  MessageCircle,
  Award,
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import ContactCards from "@/react-app/components/ContactCards";
import { businessInfo, services, aboutText, teamContacts } from "@/react-app/data/business";

const serviceIcons: Record<string, React.ReactNode> = {
  snowflake: <Snowflake className="w-8 h-8" />,
  warehouse: <Warehouse className="w-8 h-8" />,
  truck: <Truck className="w-8 h-8" />,
  clipboard: <ClipboardList className="w-8 h-8" />,
};

export default function HomePage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />
      <ContactCards />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />

        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-32">
            <path
              fill="hsl(var(--background))"
              d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            />
          </svg>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white z-10">
          {/* Certification Badges */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">FSSAI Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Quality Assured</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {businessInfo.tagline}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            {businessInfo.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enquiry">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
                Make an Enquiry
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href={`tel:${businessInfo.phone[0]}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutText}
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-secondary/50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">2000MT</div>
                <p className="text-muted-foreground">Cold Storage Capacity</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">FSSAI</div>
                <p className="text-muted-foreground">Certified Processing</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">Global</div>
                <p className="text-muted-foreground">Export Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {serviceIcons[service.icon]}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                {service.icon === "clipboard" && (
                  <Link to="/enquiry">
                    <Button className="mt-4 bg-accent hover:bg-accent/90 text-primary" size="sm">
                      Make an Enquiry
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              For enquiries, orders, or business discussions, please contact us using the details below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-5 border flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">{businessInfo.address}</p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-5 border flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">{businessInfo.phone.join(", ")}</p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-5 border flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">{businessInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Team Contacts */}
            <div className="space-y-4">
              {teamContacts.map((contact, index) => (
                <div key={index} className="bg-card rounded-xl p-5 border">
                  <h4 className="font-semibold text-foreground">{contact.name}</h4>
                  <p className="text-primary text-sm mb-3">{contact.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {contact.phone}
                  </p>
                  <div className="flex gap-3">
                    <a href={`tel:${contact.phone}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                    </a>
                    <a
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
