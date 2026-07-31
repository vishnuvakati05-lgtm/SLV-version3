export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  { id: 'f1', question: 'What regions do you export to?', answer: 'We export globally, with major markets in the USA, European Union, Japan, China, Middle East, and Southeast Asia.' },
  { id: 'f2', question: 'Are your seafood products sustainably sourced?', answer: 'Yes, we are committed to sustainable fishing and aquaculture practices, working closely with certified local fisheries.' },
  { id: 'f3', question: 'What certifications does SLV Marine Exports hold?', answer: 'Our facilities are HACCP, ISO 22000, FSSAI, MPEDA, FDA, EIC, and BRC certified, ensuring the highest global standards.' },
  { id: 'f4', question: 'What is your minimum order quantity (MOQ)?', answer: 'Our MOQ typically starts at one 20ft Full Container Load (FCL), but we can discuss specific requirements based on the product.' },
  { id: 'f5', question: 'How do you ensure the freshness of your products during transit?', answer: 'We use state-of-the-art cold storage and refrigerated containers (reefers) equipped with temperature monitoring devices to maintain an unbroken cold chain.' },
  { id: 'f6', question: 'Can you provide private label packaging?', answer: 'Yes, we offer customized private label packaging solutions tailored to your brand’s specifications and retail needs.' },
  { id: 'f7', question: 'What are your payment terms?', answer: 'Our standard payment terms are Letter of Credit (L/C) at sight or Telegraphic Transfer (T/T) with a percentage in advance, depending on the client’s credit profile.' },
  { id: 'f8', question: 'Do you offer value-added seafood products?', answer: 'Absolutely. We provide a range of value-added products including breaded, marinated, peeled, and pre-cooked seafood items.' },
  { id: 'f9', question: 'How can I request a product sample?', answer: 'Please contact our sales team via the Contact Us page or email. Sample requests are evaluated on a case-by-case basis.' },
  { id: 'f10', question: 'How do I track my shipment?', answer: 'Once your order is dispatched, our logistics team will provide you with the Bill of Lading and tracking details to monitor your container in real-time.' }
];
