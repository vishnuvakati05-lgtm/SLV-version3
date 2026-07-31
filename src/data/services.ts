export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const services: Service[] = [
  {
    id: 's1',
    title: 'Custom Processing',
    description: 'Tailored processing solutions including filleting, peeling, and portioning to meet exact client specifications.',
    iconName: 'FaFish'
  },
  {
    id: 's2',
    title: 'Cold Storage & Warehousing',
    description: 'State-of-the-art cold storage facilities maintaining optimal temperatures to ensure maximum freshness and longevity.',
    iconName: 'FaSnowflake'
  },
  {
    id: 's3',
    title: 'Global Export Logistics',
    description: 'End-to-end logistics management ensuring timely and safe delivery of seafood products across international borders.',
    iconName: 'FaShip'
  },
  {
    id: 's4',
    title: 'Quality Assurance Testing',
    description: 'Rigorous in-house laboratory testing for microbiology, chemicals, and organoleptic properties before every shipment.',
    iconName: 'FaCheckCircle'
  },
  {
    id: 's5',
    title: 'Private Label Packaging',
    description: 'Customized packaging solutions allowing clients to market premium seafood under their own trusted brand names.',
    iconName: 'FaBoxOpen'
  },
  {
    id: 's6',
    title: 'Sustainable Sourcing',
    description: 'Partnerships with responsible fisheries and aquaculture farms to promote environmental sustainability.',
    iconName: 'FaLeaf'
  },
  {
    id: 's7',
    title: 'Supply Chain Traceability',
    description: 'Comprehensive tracking systems providing full visibility from catch to container for every batch.',
    iconName: 'FaMapMarkerAlt'
  },
  {
    id: 's8',
    title: 'Customs & Documentation',
    description: 'Expert handling of all export documentation, health certificates, and customs clearance procedures.',
    iconName: 'FaFileAlt'
  },
  {
    id: 's9',
    title: 'Value Addition',
    description: 'Creating ready-to-cook and marinated products to cater to modern retail and food service demands.',
    iconName: 'FaUtensils'
  },
  {
    id: 's10',
    title: '24/7 Client Support',
    description: 'Dedicated account managers providing round-the-clock support and real-time updates on orders and shipments.',
    iconName: 'FaHeadset'
  }
];
