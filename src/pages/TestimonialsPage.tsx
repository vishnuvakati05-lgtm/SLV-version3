import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  { name: 'John Smith', company: 'Global Seafood Imports', country: 'USA', flag: '🇺🇸', rating: 5, text: 'SLV Marine Exports has been our trusted partner for over 5 years. Their shrimp quality is unmatched, and deliveries are always on schedule.' },
  { name: 'Maria Garcia', company: 'Mariscos Del Rey', country: 'Spain', flag: '🇪🇸', rating: 5, text: 'The freshness of their cuttlefish and octopus is incredible. Our clients constantly praise the quality. Excellent customer service as well.' },
  { name: 'Yuki Tanaka', company: 'Tokyo Fresh Catch', country: 'Japan', flag: '🇯🇵', rating: 4.5, text: 'Very strict quality control which we appreciate. The tuna consistently meets our high standards. A highly professional team to work with.' },
  { name: 'David Chen', company: 'Pacific Trade Co.', country: 'Singapore', flag: '🇸🇬', rating: 5, text: 'We rely on SLV for our premium crab imports. The packaging is always secure, ensuring minimal loss during transit. Outstanding supplier.' },
  { name: 'Emma Wilson', company: 'Oceanic Distributors', country: 'UK', flag: '🇬🇧', rating: 5, text: 'From order placement to delivery, the process is seamless. The quality of their salmon and prawns has helped us grow our business significantly.' },
  { name: 'Ahmed Al-Farsi', company: 'Gulf Seafoods', country: 'UAE', flag: '🇦🇪', rating: 4.5, text: 'Reliable supplier with a great variety of products. Their Kingfish is highly requested by our hotel clients. Good communication throughout.' },
  { name: 'Lucas Martin', company: 'Bistro Supplies', country: 'France', flag: '🇫🇷', rating: 5, text: 'We demand the best scallops for our restaurant clients, and SLV delivers every single time. The cold chain management is flawless.' },
  { name: 'Thomas Müller', company: 'Nordic Sea Trade', country: 'Germany', flag: '🇩🇪', rating: 5, text: 'Excellent traceability and sustainability practices. It gives us peace of mind knowing we are sourcing responsibly without compromising on quality.' },
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="bg-[#023047] min-h-screen pt-20 pb-16 font-sans relative overflow-hidden">
      <Helmet>
        <title>Client Testimonials | SLV Marine Exports</title>
        <meta name="description" content="Read what our global clients say about SLV Marine Exports' premium seafood products and services." />
      </Helmet>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#0077B6] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#00B4D8] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Hear from the businesses around the globe who trust us for their seafood needs.
          </motion.p>
        </section>

        {/* Carousel Section */}
        <section className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-14"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl h-full flex flex-col text-white shadow-xl hover:bg-white/15 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <FaQuoteLeft className="text-3xl text-[#48CAE4] opacity-80" />
                      <div className="flex text-[#48CAE4]">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < Math.floor(testimonial.rating) ? '' : 'opacity-30'} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm md:text-base mb-8 flex-grow italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center mt-auto">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=005B96&color=fff&size=80`} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 border-2 border-[#00B4D8]"
                      />
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-xs text-gray-400">{testimonial.company}</p>
                        <p className="text-xs text-gray-400 flex items-center mt-1">
                          <span className="mr-1">{testimonial.flag}</span> {testimonial.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#48CAE4] mb-2">4.9/5</div>
              <div className="text-sm text-gray-300">Average Client Rating</div>
            </motion.div>
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-[#48CAE4] mb-2">100+</div>
              <div className="text-sm text-gray-300">Active B2B Clients</div>
            </motion.div>
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-[#48CAE4] mb-2">98%</div>
              <div className="text-sm text-gray-300">Client Retention Rate</div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialsPage;
