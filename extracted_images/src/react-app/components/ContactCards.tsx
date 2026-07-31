import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import { teamContacts } from "@/react-app/data/business";

export default function ContactCards() {
  return (
    <div className="fixed bottom-6 left-6 z-40 space-y-3 hidden md:block">
      {teamContacts.map((contact, index) => (
        <div
          key={index}
          className="bg-card border rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow w-64"
        >
          <h4
            className="font-semibold text-foreground text-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {contact.name}
          </h4>
          <p className="text-xs text-muted-foreground mb-3">{contact.role}</p>
          <p className="text-sm text-foreground mb-3 flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-primary" />
            {contact.phone}
          </p>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </a>
        </div>
      ))}
    </div>
  );
}
