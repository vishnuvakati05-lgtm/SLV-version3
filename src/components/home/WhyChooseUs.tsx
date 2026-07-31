import { motion } from 'framer-motion';
import {
  FiShield, FiTruck, FiAward, FiUsers, FiCheckCircle,
  FiThermometer, FiGlobe, FiPackage,
} from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';

const features = [
  { icon: FaLeaf,          title: '99.99% Fresh',       desc: 'Sourced directly from verified catch for peak freshness.',                color: '#22c55e' },
  { icon: FiShield,        title: 'Global Standards', desc: 'Certified facilities meeting stringent international export norms.',      color: '#0077B6' },
  { icon: FiTruck,         title: 'Fast Shipping',    desc: 'Optimised logistics for rapid, reliable delivery worldwide.',             color: '#f97316' },
  { icon: FiThermometer,   title: 'Cold Chain',       desc: 'Unbroken temperature control from harvest to destination.',             color: '#06b6d4' },
  { icon: FiAward,         title: 'Premium Quality',  desc: 'Meticulous QC at every stage — from sea to shelf.',                     color: '#48CAE4' },
  { icon: FiUsers,         title: 'Expert Team',      desc: 'Decades of combined experience in the Indian seafood industry.',         color: '#8b5cf6' },
  { icon: FiGlobe,         title: 'Export Ready',     desc: 'All documentation, labelling, and compliance handled in-house.',        color: '#00B4D8' },
  { icon: FiCheckCircle,   title: 'On-time Delivery', desc: 'Consistent fulfilment with real-time shipment tracking updates.',        color: '#e85d9a' },
];

const WhyChooseUs = () => (
  <section className="py-16 sm:py-24 bg-[#F1FAFC] dark:bg-[#023047] transition-colors duration-300">
    <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center mb-12 sm:mb-16"
      >
        <p className="text-[0.65rem] font-bold tracking-[0.2em] text-[#0077B6] dark:text-[#48CAE4] uppercase mb-3">
          Why SLV Marine
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          The standard other exporters<br className="hidden sm:block" /> measure themselves against
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Every shipment from SLV Marine Exports carries our promise of quality, safety, and reliability.
        </p>
        <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8]" />
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="group relative bg-white dark:bg-[#0d1f3c] rounded-2xl p-6 border border-slate-100 dark:border-white/6 shadow-sm hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default"
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
              style={{ background: `radial-gradient(circle at 0% 0%, ${f.color}12 0%, transparent 70%)` }}
            />

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: f.color + '18', border: `1px solid ${f.color}30` }}
            >
              <f.icon className="w-5 h-5" style={{ color: f.color }} />
            </div>

            <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2 group-hover:text-[#0077B6] dark:group-hover:text-[#48CAE4] transition-colors">
              {f.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {f.desc}
            </p>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: f.color }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
