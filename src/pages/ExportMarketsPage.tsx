import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/layout/PageHero';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaShip, FaBoxOpen, FaHandshake } from 'react-icons/fa';

const countries = [
  { name: 'India', flag: '🇮🇳', products: 'Shrimp, Fish, Crab, Squids, Lobsters', volume: 'High' },
  { name: 'Nepal', flag: '🇳🇵', products: 'Fish, Prawns, Crab,Squids, Lobsters', volume: 'High' },
];

const stats = [
  { icon: <FaGlobeAmericas />, label: 'Primary Markets', value: '2' },
  { icon: <FaShip />, label: 'successfull delivery', value: '50+' },
  { icon: <FaBoxOpen />, label: 'Products Exported', value: '25+' },
  { icon: <FaHandshake />, label: 'Trade Partners', value: '50+' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ExportMarketsPage: React.FC = () => {
  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen pt-20 pb-16 font-sans">
      <Helmet>
        <title>Export Markets | SLV Marine Exports</title>
        <meta name="description" content="Discover SLV Marine Exports' global reach. We export premium seafood to the USA, Europe, Asia, and more." />
      </Helmet>

      <PageHero
        badge="Regional Reach"
        title="Export"
        highlight="Markets"
        subtitle="Connecting India's finest seafood across the nation and delivering directly to Nepal."
      />

      {/* Stats Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 -mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-[#48CAE4]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-3xl text-[#00B4D8] mb-3 flex justify-center">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Country Cards Grid */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#023047] mb-4">Export Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly supply top-tier seafood products to key markets across North America, Europe, Asia, and the Middle East.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {countries.map((country, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] p-4 text-white flex justify-between items-center">
                  <span className="text-2xl font-semibold">{country.name}</span>
                  <span className="text-4xl">{country.flag}</span>
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block mb-1">Key Exports</span>
                    <span className="text-[#1A1A1A] font-medium">{country.products}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block mb-1">Trade Volume</span>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${country.volume === 'High' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {country.volume}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExportMarketsPage;
