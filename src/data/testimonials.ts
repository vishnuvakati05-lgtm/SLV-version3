export interface Testimonial {
  id: string;
  name: string;
  company: string;
  country: string;
  rating: number;
  review: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'John Smith',
    company: 'Oceanic Imports',
    country: 'USA',
    rating: 5,
    review: 'SLV Marine Exports has been our most reliable partner for premium shrimp. The quality is consistently excellent, and their adherence to FDA standards makes our import process seamless.',
    avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=005B96&color=fff'
  },
  {
    id: 't2',
    name: 'Yuki Tanaka',
    company: 'Tokyo Seafood Distributors',
    country: 'Japan',
    rating: 5,
    review: 'The Yellowfin Tuna we receive from SLV meets the strict sashimi-grade requirements of our clients. Their cold chain logistics are truly world-class.',
    avatar: 'https://ui-avatars.com/api/?name=Yuki+Tanaka&background=008C72&color=fff'
  },
  {
    id: 't3',
    name: 'Elena Rossi',
    company: 'Mediterraneo Del Mare',
    country: 'Italy',
    rating: 4,
    review: 'Excellent selection of cephalopods. The Indian Squid and Baby Octopus are always perfectly cleaned and packaged. Highly recommended for European markets.',
    avatar: 'https://ui-avatars.com/api/?name=Elena+Rossi&background=FFC857&color=000'
  },
  {
    id: 't4',
    name: 'Ahmed Al-Farsi',
    company: 'Gulf Coast Provisions',
    country: 'UAE',
    rating: 5,
    review: 'SLV provides top-tier King Seer and Grouper that our hospitality clients demand. Their communication and delivery times are impeccable.',
    avatar: 'https://ui-avatars.com/api/?name=Ahmed+Al-Farsi&background=005B96&color=fff'
  },
  {
    id: 't5',
    name: 'Chen Wei',
    company: 'Dragon Pearl Imports',
    country: 'China',
    rating: 5,
    review: 'The quality of Mud Crabs and Ribbon Fish we import from SLV Marine Exports has significantly boosted our market share. A trustworthy and transparent supplier.',
    avatar: 'https://ui-avatars.com/api/?name=Chen+Wei&background=0a1628&color=fff'
  },
  {
    id: 't6',
    name: 'Sarah Jenkins',
    company: 'Global Catch Ltd',
    country: 'UK',
    rating: 4,
    review: 'We appreciate SLV’s commitment to sustainable sourcing. Their BRC and ISO certifications give us total confidence in their processing facilities.',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=008C72&color=fff'
  },
  {
    id: 't7',
    name: 'Carlos Mendoza',
    company: 'Mariscos Ibericos',
    country: 'Spain',
    rating: 5,
    review: 'A fantastic partner for value-added seafood. The precision in their processing and the customized packaging solutions have added immense value to our retail line.',
    avatar: 'https://ui-avatars.com/api/?name=Carlos+Mendoza&background=FFC857&color=000'
  },
  {
    id: 't8',
    name: 'Michael Chang',
    company: 'Pacific Rim Foods',
    country: 'Singapore',
    rating: 5,
    review: 'From lobsters to pomfret, every shipment arrives in pristine condition. Their customer service team is highly responsive and proactive.',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Chang&background=005B96&color=fff'
  }
];
