import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/layout/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaEnvelope } from 'react-icons/fa';

type Category = 'All' | 'General' | 'Products' | 'Shipping' | 'Payment';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: Category;
}

const faqs: FAQ[] = [
  {
    id: 1,
    category: 'Products',
    question: 'What types of seafood does SLV Marine Exports offer?',
    answer: 'We offer a wide variety of premium seafood including various species of Shrimp (Vannamei, Black Tiger), Crab, Lobster, Squid, Cuttlefish, Octopus, and multiple varieties of wild-caught and farmed fish like Tuna, Salmon, Kingfish, and Pomfret.'
  },
  {
    id: 2,
    category: 'General',
    question: 'Which countries do you export to?',
    answer: 'We have a truly global reach, exporting to major markets including the USA, Canada, UK, European Union (Spain, France, Germany, Italy), Japan, Middle East (UAE, Saudi Arabia), Australia, and Southeast Asia.'
  },
  {
    id: 3,
    category: 'General',
    question: 'What certifications do you hold?',
    answer: 'Our processing facilities are certified by major international bodies. We hold HACCP, ISO 22000, BRCGS, US FDA approval, and EU approval. We also hold sustainability certifications like BAP and MSC for specific product lines.'
  },
  {
    id: 4,
    category: 'Products',
    question: 'How do you ensure product quality?',
    answer: 'Quality is our top priority. We employ strict quality control measures at every step, from sourcing at the harbor/farm to processing and freezing. Our dedicated QC team conducts rigorous sensory, physical, and microbiological tests before any shipment is approved.'
  },
  {
    id: 5,
    category: 'Shipping',
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'Our standard Minimum Order Quantity is one 20-foot refrigerated container (FCL - Full Container Load). However, for select premium products or initial trial orders, we may accommodate LCL (Less than Container Load) air shipments on a case-by-case basis.'
  },
  {
    id: 6,
    category: 'Shipping',
    question: 'How long does international shipping take?',
    answer: 'Transit times vary significantly depending on the destination and shipping method. Air freight typically takes 3-7 days. Sea freight to the Middle East takes about 7-10 days, Europe 25-35 days, and USA/Canada 30-45 days.'
  },
  {
    id: 7,
    category: 'Products',
    question: 'Do you offer private labeling?',
    answer: 'Yes, we offer comprehensive private labeling and OEM services. We can pack products in your brand\'s custom packaging, including specific box designs, polybags, and retail-ready packaging, subject to minimum volume commitments.'
  },
  {
    id: 8,
    category: 'Products',
    question: 'What packaging options are available?',
    answer: 'We offer a variety of packaging options tailored to buyer requirements. Common options include block frozen in master cartons, IQF (Individually Quick Frozen) in bulk or retail bags, shatterpack, and semi-IQF.'
  },
  {
    id: 9,
    category: 'General',
    question: 'How can I request a quote?',
    answer: 'You can request a quote by filling out the form on our Contact Us page, emailing us directly at info@slvmarineexports.com, or calling our sales office. Please include specific details about the product, size, quantity, and destination port for an accurate quote.'
  },
  {
    id: 10,
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We primarily accept Irrevocable Letter of Credit (L/C) at sight from top-tier international banks. We also accept Telegraphic Transfer (T/T) with an advance payment and the balance against copy of shipping documents.'
  }
];

const categories: Category[] = ['All', 'General', 'Products', 'Shipping', 'Payment'];

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [openId, setOpenId] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    faq => activeCategory === 'All' || faq.category === activeCategory
  );

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen pt-20 pb-16 font-sans">
      <Helmet>
        <title>FAQ | SLV Marine Exports</title>
        <meta name="description" content="Find answers to frequently asked questions about SLV Marine Exports, our products, shipping, and payment terms." />
      </Helmet>

            <PageHero 
        badge="Help Center"
        title="Frequently Asked"
        highlight="Questions"
        subtitle="Find answers to common questions about our products, shipping, and export processes."
      />

      {/* Main Content */}
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenId(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeCategory === cat 
                  ? 'bg-[#00B4D8] text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-[#1A1A1A] pr-8">{faq.question}</span>
                  <span className={`text-[#0077B6] transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>
                    {openId === faq.id ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-gray-600 border-t border-gray-50 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500 py-8">No FAQs found for this category.</p>
          )}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#0077B6] to-[#023047] rounded-2xl p-8 text-center text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="opacity-90 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#48CAE4] text-[#1A1A1A] px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
            <FaEnvelope />
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default FAQPage;
