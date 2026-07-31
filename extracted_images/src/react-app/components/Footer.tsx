import { Phone, Mail, MapPin, Anchor } from "lucide-react";
import { businessInfo } from "@/react-app/data/business";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent rounded-lg">
                <Anchor className="w-5 h-5 text-primary" />
              </div>
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {businessInfo.name}
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium quality frozen seafood exporter from India. FSSAI certified processing with international standards.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/80">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <span>{businessInfo.phone.join(", ")}</span>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <span>{businessInfo.email}</span>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>{businessInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="/#about" className="text-white/80 hover:text-accent transition-colors">About Us</a>
              <a href="/#services" className="text-white/80 hover:text-accent transition-colors">Services</a>
              <a href="/gallery" className="text-white/80 hover:text-accent transition-colors">Gallery</a>
              <a href="/enquiry" className="text-white/80 hover:text-accent transition-colors">Enquiry</a>
              <a href="/#contact" className="text-white/80 hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} {businessInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
