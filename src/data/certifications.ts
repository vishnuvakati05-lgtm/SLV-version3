export interface Certification {
  id: string;
  name: string;
  abbr: string;
  description: string;
}

export const certifications: Certification[] = [
  { id: 'c1', name: 'Hazard Analysis Critical Control Point', abbr: 'HACCP', description: 'Ensures food safety through the analysis and control of biological, chemical, and physical hazards.' },
  { id: 'c2', name: 'International Organization for Standardization', abbr: 'ISO 22000', description: 'International standard specifying requirements for a food safety management system.' },
  { id: 'c3', name: 'Food Safety and Standards Authority of India', abbr: 'FSSAI', description: 'Statutory body established under the Ministry of Health & Family Welfare, Government of India.' },
  { id: 'c4', name: 'Marine Products Export Development Authority', abbr: 'MPEDA', description: 'Nodal agency for the holistic development of the seafood industry in India.' },
  { id: 'c5', name: 'Food and Drug Administration', abbr: 'FDA', description: 'Registered and compliant with US FDA regulations for exporting seafood to the United States.' },
  { id: 'c6', name: 'Export Inspection Council', abbr: 'EIC', description: 'Official export certification body of India ensuring quality and safety of products.' },
  { id: 'c7', name: 'British Retail Consortium', abbr: 'BRC', description: 'Global standard for food safety, recognized by retailers worldwide.' }
];
