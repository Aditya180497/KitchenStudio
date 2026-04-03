import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ChefHat, Camera, FlaskConical, Users, 
  Zap, Wind, Thermometer, ChevronDown, MapPin, Check,
  Menu, X
} from 'lucide-react';

// --- CONFIGURATION ---
const CONTACT_PHONE = "971527022104";
const WHATSAPP_LINK = `https://wa.me/${CONTACT_PHONE}?text=Hello, I would like to request availability for The Culinary Studio.`;
const MAP_LINK = "https://maps.app.goo.gl/R5n6LELfs9kYpzta9?g_st=ic";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Common image filter for "Apple-level" sharpness and brightness
const premiumImageFilter = "brightness-[1.08] contrast-[1.05] saturate-[1.1] sepia-[0.02]";

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl font-semibold tracking-tighter text-[#1d1d1f] leading-tight">
          THE CULINARY<br/><span className="text-[#86868b]">STUDIO</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={handleBooking}
            className="bg-[#1d1d1f] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-transform duration-300 shadow-md"
          >
            Request Availability
          </button>
        </div>

        <button 
          className="md:hidden p-2 text-[#1d1d1f]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <button 
                onClick={handleBooking}
                className="w-full bg-[#1d1d1f] text-white py-4 rounded-2xl font-medium"
              >
                Request Availability
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div className="relative pt-32 pb-20 w-full overflow-hidden bg-[#f5f5f7] flex flex-col items-center justify-center min-h-screen">
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-12 md:mt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-[9rem] font-semibold tracking-tighter text-[#1d1d1f] mb-4 leading-[0.9]">
            A Culinary Studio.
          </motion.h1>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-medium tracking-tight text-[#86868b] mb-12">
            Create. Innovate.
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 md:gap-6 text-[#86868b] text-sm md:text-base font-medium mb-16">
            <span>R&D Kitchen</span> • 
            <span>Content Production</span> • 
            <span>Private Events</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto px-6 relative z-20"
      >
        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-gray-200">
          <motion.img 
            style={{ y }}
            src="https://res.cloudinary.com/dqbutyhak/image/upload/v1775200548/Gemini_Generated_Image_e4ed29e4ed29e4ed_ir5xnr.png" 
            alt="The Culinary Studio Preview" 
            className={`absolute top-[-20%] left-0 w-full h-[140%] object-cover object-top filter ${premiumImageFilter}`}
          />
        </div>
      </motion.div>
    </div>
  );
};

const Statement = () => {
  return (
    <section className="py-32 md:py-48 px-6 bg-white relative z-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight text-[#1d1d1f] mb-16"
        >
          Your Private Culinary Powerhouse.
        </motion.h2>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-xl md:text-2xl text-[#86868b] font-light leading-relaxed max-w-3xl mx-auto text-left md:text-center space-y-8"
        >
          <motion.p variants={fadeUp}>
            The Culinary Studio is a premier, commercial-grade culinary hub built for high-stakes R&D, food production, and elite content creation.
          </motion.p>
          <motion.p variants={fadeUp}>
            Forget the headaches of shared kitchens—our "plug-and-play" workspace offers professional specs with zero friction.
          </motion.p>
          <motion.p variants={fadeUp}>
            Every booking gives you exclusive access to the entire facility, providing your brand the privacy and high-end tools it deserves the moment you walk through the door.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

const SpaceFeature = ({ title, desc, img, reverse }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-16 lg:py-32 px-6 max-w-7xl mx-auto`}>
      <div className="w-full lg:w-1/2 overflow-hidden rounded-[2rem] h-[50vh] lg:h-[70vh] relative shadow-lg bg-gray-100">
        <motion.img 
          style={{ y }}
          src={img} 
          alt={title}
          className={`absolute top-[-15%] left-0 w-full h-[130%] object-cover object-top filter ${premiumImageFilter}`}
        />
      </div>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="w-full lg:w-1/2 space-y-6"
      >
        <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f]">{title}</motion.h3>
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#86868b] font-light leading-relaxed">{desc}</motion.p>
      </motion.div>
    </div>
  );
};

const SpecsBento = () => {
  return (
    <section className="py-32 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">Technical Specs.</h2>
          <p className="text-xl text-[#86868b] font-light">Industrial-grade power meets precision design.</p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          {/* Big Card */}
          <motion.div variants={fadeUp} className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden relative group shadow-sm border border-gray-100">
            <div className="relative z-10">
              <Zap className="w-10 h-10 text-[#1d1d1f] mb-6" />
              <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-3">50 kW Electrical Load</h3>
              <p className="text-[#86868b] text-lg max-w-md">Engineered for high-performance. Supports both 3-phase (380V) and single-phase (230V) for heavy duty equipment without breaking a sweat.</p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 transform translate-x-1/4 translate-y-1/4">
              <Zap className="w-96 h-96 text-[#1d1d1f]" />
            </div>
          </motion.div>

          {/* Small Cards */}
          <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-8 flex flex-col justify-between shadow-sm border border-gray-100">
            <Wind className="w-8 h-8 text-[#1d1d1f] mb-4" />
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">Dual Extraction</h3>
              <p className="text-[#86868b]">High-volume hoods keep the studio cool and ventilated under the heaviest loads.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-[2rem] p-8 flex flex-col justify-between shadow-sm border border-gray-100">
            <Thermometer className="w-8 h-8 text-[#1d1d1f] mb-4" />
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">Pro-Tier Tools</h3>
              <p className="text-[#86868b]">6-GN Combi ovens, blast chillers, and industrial mixers included.</p>
            </div>
          </motion.div>

           <motion.div variants={fadeUp} className="md:col-span-3 bg-[#1d1d1f] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg">
             <div>
               <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">Premium Workspace</h3>
               <p className="text-white/70 text-lg">HACCP-ready surfaces anchored by a stunning center island.</p>
             </div>
             <div className="mt-6 md:mt-0 text-white/20 text-8xl font-bold tracking-tighter">
               50m²
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const AudienceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="group border border-gray-200 rounded-[2rem] p-8 bg-white hover:shadow-xl hover:border-transparent transition-all duration-500 h-full">
    <div className="bg-[#f5f5f7] w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
      <Icon className="w-6 h-6 text-[#1d1d1f]" />
    </div>
    <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{title}</h3>
    <p className="text-[#86868b] font-light leading-relaxed">{desc}</p>
  </div>
);

const TargetAudience = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-6">Designed for Excellence.</h2>
          <p className="text-xl text-[#86868b] font-light">A private powerhouse for culinary visionaries.</p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div variants={fadeUp}>
            <AudienceCard 
              icon={ChefHat} 
              title="Private Chefs" 
              desc="A sophisticated, licensed home-base for bespoke menu development and exclusive client previews. Host intimate tastings in a setting that mirrors the quality of your craft."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <AudienceCard 
              icon={FlaskConical} 
              title="Food Brands & R&D" 
              desc="Accelerate innovation with precision-driven R&D. A controlled environment for recipe standardization and product testing."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <AudienceCard 
              icon={Camera} 
              title="Content Creators" 
              desc="A cinematic canvas for visual storytellers. Neutral finishes and architectural lighting engineered to accommodate complex camera rigs and food styling."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <AudienceCard 
              icon={Users} 
              title="Hosts & Educators" 
              desc="An immersive venue for culinary education. Host workshops or masterclasses centered around our signature communal table."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-32 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">Booking your session.</h2>
          <p className="text-xl text-[#86868b] font-light">Full-access culinary workspace. No hidden fees.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Packages */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="w-full lg:w-2/3 bg-white shadow-sm border border-gray-100 rounded-[2rem] p-8 md:p-12"
          >
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-8">Studio Packages</h3>
            <div className="space-y-2">
              {[
                { duration: 'Half-Day Session', time: '4.5 hrs', price: '3,999' },
                { duration: 'Daily', time: '9 hrs', price: '6,499' },
                { duration: 'Weekly', time: '5 days', price: '29,999' },
                { duration: 'Weekly', time: '7 days', price: '39,999' },
                { duration: 'Monthly', time: '26 days', price: '59,999' },
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-[#f5f5f7] rounded-xl transition-colors">
                  <div>
                    <div className="text-lg font-medium text-[#1d1d1f]">{item.duration}</div>
                    <div className="text-sm text-[#86868b]">{item.time}</div>
                  </div>
                  <div className="text-2xl font-semibold text-[#1d1d1f] mt-2 sm:mt-0">
                    <span className="text-sm text-[#86868b] font-normal mr-1">AED</span>{item.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Add-ons & Private Events */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="bg-gradient-to-br from-[#1d1d1f] to-[#2c2c2e] rounded-[2rem] p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10"><Users className="w-24 h-24 text-white" /></div>
              <h3 className="text-xl font-semibold text-white mb-2 relative z-10">Private Events</h3>
              <p className="text-white/70 text-sm mb-6 relative z-10">Seating for 10-12 guests.</p>
              <div className="text-3xl font-semibold text-white mb-2 relative z-10">
                <span className="text-sm text-white/60 font-normal mr-1">AED</span>7,999<span className="text-sm text-white/60 font-normal ml-1">/ day</span>
              </div>
            </div>

            <div className="bg-white shadow-sm border border-gray-100 rounded-[2rem] p-8">
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-6">Terms & Add-ons</h3>
              <ul className="space-y-4 text-sm text-[#515154]">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#86868b] shrink-0" /> Overtime available at AED 499/hour</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#86868b] shrink-0" /> Optional Cleaning: AED 500/half, AED 800/full</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#86868b] shrink-0" /> 100% advance payment secures date</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#86868b] shrink-0" /> AED 3,500 refundable security deposit</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#86868b] shrink-0" /> Rates subject to 5% UAE VAT</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg md:text-xl font-medium text-[#1d1d1f] group-hover:text-[#86868b] transition-colors pr-8">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-6 h-6 text-[#86868b]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-[#515154] font-light leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      q: "Is the facility licensed for commercial food production?",
      a: "Yes. The Culinary Studio is a fully approved facility in Jebel Ali. While we provide the licensed infrastructure, tenants are responsible for ensuring their specific activities align with their own corporate trade licenses."
    },
    {
      q: "Are there specific health and safety requirements?",
      a: "In accordance with UAE standards, all individuals must adhere to professional hygiene practices. We provide HACCP-ready surfaces and professional extraction; tenants manage their own food safety during rental."
    },
    {
      q: "What is the policy regarding waste disposal?",
      a: "To maintain our high standards, the space must be cleared of all organic and dry waste at the end of your booking, complying with JAFZA and Dubai Municipality protocols."
    },
    {
      q: "Can I bring my own heavy-duty electrical equipment?",
      a: "Absolutely. The kitchen is engineered for high-performance with a total load of 50kW (3-phase and single-phase). Please declare heavy equipment in advance."
    },
    {
      q: "What insurance is required?",
      a: "It is highly recommended that professional operators carry third-party liability insurance. The AED 3,500 security deposit covers minor damages but does not replace tenant liability for staff or guests."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-4">Frequently Asked Questions.</h2>
        </motion.div>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const handleBooking = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <footer className="bg-white pt-32 pb-12 px-6 border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 md:mb-32">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-[#1d1d1f] leading-none">
              Focus on what<br/>
              <span className="text-[#86868b]">you do best.</span>
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-[#86868b] font-light max-w-2xl">
              This isn't just a kitchen; it's a high-performance ecosystem designed for elite culinary execution.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[450px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100 relative group"
          >
            <img 
              src="https://res.cloudinary.com/dqbutyhak/image/upload/v1775200548/Gemini_Generated_Image_e4ed29e4ed29e4ed_ir5xnr.png" 
              alt="Culinary Studio Atmosphere"
              className={`absolute top-0 left-0 w-full h-[115%] object-cover object-top transition-transform duration-700 group-hover:scale-105 filter ${premiumImageFilter}`}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-12">
          <div>
            <h3 className="text-[#1d1d1f] font-semibold text-xl mb-6">Location</h3>
            <div className="space-y-4">
              <button 
                onClick={() => window.open(MAP_LINK, '_blank')}
                className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                View on map
              </button>
              <p className="text-[#86868b] font-light text-lg">
                Jebel Ali, Dubai, UAE
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start md:items-end gap-8">
             <div className="w-full">
                <h3 className="text-[#1d1d1f] font-semibold text-xl mb-6 md:text-right">
                </h3>
             </div>
             
             <button 
                onClick={handleBooking}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#1d1d1f] text-white rounded-full font-medium text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg"
             >
                <span className="relative z-10 flex items-center gap-2">
                  Request Availability 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
             </button>
          </div>
        </div>
        
        <div className="mt-24 text-center text-[#86868b] text-sm">
          © {new Date().getFullYear()} The Culinary Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-white min-h-screen text-[#1d1d1f] font-sans selection:bg-gray-200 selection:text-[#1d1d1f]">
      <Navbar />
      <Hero />
      <Statement />
      
      <div className="bg-white relative z-20">
        <SpaceFeature 
          title="R&D Kitchen" 
          desc="Bring your vision to life in a 46m² premium workspace. Anchored by a stunning center island and equipped with pro-tier appliances, it's the ultimate canvas for culinary creativity."
          img="https://res.cloudinary.com/dqbutyhak/image/upload/v1775200550/Gemini_Generated_Image_pt3k1lpt3k1lpt3k_izu8pu.png"
        />
        <SpaceFeature 
          title="Creative Areas" 
          desc="Minimalist by design, our spaces provide the uncluttered backdrop essential for high-end cinematography and food styling. Here, innovation isn't just supported—it's built into the architecture."
          img="https://res.cloudinary.com/dqbutyhak/image/upload/v1775200550/WhatsApp_Image_2026-02-05_at_11.50.31_ahcv94.jpg"
          reverse
        />
        <SpaceFeature 
          title="Tasting & Lounge Area" 
          desc="Beyond the kitchen lies our open-plan lounge—a refined space featuring a custom communal table designed for tastings, briefings, and the moments in between."
          img="https://res.cloudinary.com/dqbutyhak/image/upload/v1775200549/Gemini_Generated_Image_9v6umn9v6umn9v6u_suadya.png"
        />
      </div>

      <SpecsBento />
      <TargetAudience />
      <Pricing />
      <FAQs />
      <Footer />
    </div>
  );
}