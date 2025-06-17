import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaUtensils,
  FaStar,
  FaChartLine,
  FaComments,
  FaCheckCircle,
  FaMedal,
  FaUsers,
  FaArrowRight,
  FaSearch,
  FaHotel,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaRegQuestionCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMicrophone,
  FaQuoteLeft,
  FaChevronDown,
} from "react-icons/fa";
import {
  MdRestaurant,
  MdDeliveryDining,
  MdRateReview,
  MdVerified,
  MdTableRestaurant,
  MdLocationOn,
  MdPayments,
  MdSecurity,
  MdLanguage,
} from "react-icons/md";
import { BiRestaurant, BiSearch, BiDish } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineQrcode } from "react-icons/ai";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const scaleUp = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const iconColors = {
  primary: "text-blue-500",
  secondary: "text-purple-500",
  success: "text-emerald-500",
  warning: "text-amber-500",
  info: "text-cyan-500",
  danger: "text-rose-500",
  accent1: "text-indigo-500",
  accent2: "text-teal-500",
};

// Glassmorphism styles
const glassStyle =
  "backdrop-filter backdrop-blur-lg bg-white/30 border border-white/20 shadow-xl";

// Navigation Data
const navLinks = [
  { title: "Home", href: "/" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Restaurants", href: "#restaurants" },
  { title: "Top Dishes", href: "#dishes" },
  { title: "Book Table", href: "#book" },
  { title: "For Restaurants", href: "#for-restaurants" },
  { title: "Contact", href: "#contact" },
];

// Stats Data
const stats = [
  { value: "50,000+", label: "Verified Reviews", icon: <MdVerified /> },
  { value: "1,200+", label: "Partner Restaurants", icon: <MdRestaurant /> },
  { value: "250,000+", label: "Orders Completed", icon: <FaUtensils /> },
  { value: "15,000+", label: "Popular Dishes", icon: <BiDish /> },
];

// Customer Journey Steps
const customerJourney = [
  {
    title: "Auto Location",
    description: "Open app, location detected automatically",
    icon: <MdLocationOn />,
  },
  {
    title: "Smart Search",
    description: "Find top restaurants & dishes nearby",
    icon: <FaSearch />,
  },
  {
    title: "Quick Booking",
    description: "Book your table instantly",
    icon: <MdTableRestaurant />,
  },
  {
    title: "Order & Pay",
    description: "Place order and pay securely in-app",
    icon: <MdPayments />,
  },
  {
    title: "Dine & Rate",
    description: "Enjoy your meal and share experience",
    icon: <MdRateReview />,
  },
  {
    title: "Earn Rewards",
    description: "Get points for every verified visit",
    icon: <FaMedal />,
  },
];

// Advanced Features
const features = [
  {
    title: "AI Recommendations",
    description: "Smart dish suggestions based on your taste",
    icon: <FaChartLine />,
  },
  {
    title: "Verified Reviews",
    description: "Only real customers can review",
    icon: <MdVerified />,
  },
  {
    title: "Smart Booking",
    description: "Real-time seat management & wait time",
    icon: <MdTableRestaurant />,
  },
  {
    title: "QR Ordering",
    description: "Contactless in-restaurant experience",
    icon: <AiOutlineQrcode />,
  },
  {
    title: "Voice Search",
    description: "Find dishes using voice commands",
    icon: <FaMicrophone />,
  },
  {
    title: "Multi-language",
    description: "Use in your preferred language",
    icon: <MdLanguage />,
  },
];

// Restaurant Tools
const restaurantTools = [
  {
    title: "Smart Dashboard",
    description: "Track orders, bookings & performance",
    icon: <FaChartLine />,
  },
  {
    title: "Real Feedback",
    description: "Get authentic customer reviews",
    icon: <FaComments />,
  },
  {
    title: "Table Management",
    description: "Efficient seat allocation system",
    icon: <MdTableRestaurant />,
  },
  {
    title: "Menu Control",
    description: "Update menu & prices in real-time",
    icon: <BiRestaurant />,
  },
];

// Testimonials
const testimonials = [
  {
    content: "Finally found food I can trust! No more fake reviews.",
    author: "Sarah M.",
    role: "Food Enthusiast",
  },
  {
    content: "Increased footfall by 30% in two weeks.",
    author: "John D.",
    role: "Restaurant Owner",
  },
  {
    content: "I love how I can see the best dish of every restaurant.",
    author: "Mike R.",
    role: "Food Blogger",
  },
];

// Import required fonts
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "@fontsource/instrument-sans/700.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [faqs, setFaqs] = useState([
    {
      question: "How does VerifiedEats work?",
      answer:
        "VerifiedEats makes it easy to discover and book the best restaurants in your area. Simply enter your location, browse verified restaurants, and book your table instantly. You can also read reviews, view menus, and get personalized recommendations.",
      isOpen: false,
    },
    {
      question: "Is it free to use VerifiedEats?",
      answer:
        "Yes, VerifiedEats is completely free for diners! You can search restaurants, read reviews, and make reservations without any cost. Restaurants pay a small fee to be listed on our platform.",
      isOpen: false,
    },
    {
      question: "How do I know the restaurants are verified?",
      answer:
        "All restaurants on VerifiedEats go through a thorough verification process. We check their licenses, health certificates, and customer reviews. Only restaurants that meet our quality standards are listed.",
      isOpen: false,
    },
    {
      question: "Can I cancel or modify my reservation?",
      answer:
        "Yes, you can easily modify or cancel your reservation through your account up to 2 hours before your booking time. Some restaurants may have specific cancellation policies.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false,
      }))
    );
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-sky-50 via-white to-blue-50 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 ${glassStyle} py-2 md:py-4 backdrop-blur-xl shadow-lg`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}{" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
            >
              VerifiedEats
            </motion.div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-sky-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-sky-600 transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-sky-600 font-medium"
                aria-label="Login to your account"
              >
                Login
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/signup")}
                className="px-4 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
                aria-label="Create a new account"
              >
                Sign Up
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden py-4"
              >
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-gray-600 hover:text-sky-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </a>
                  ))}
                  <hr className="my-2 border-gray-200" />
                  <button
                    onClick={() => {
                      navigate("/login");
                      setIsMenuOpen(false);
                    }}
                    className="text-sky-600 font-medium text-left"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/signup");
                      setIsMenuOpen(false);
                    }}
                    className="bg-sky-600 text-white rounded-lg font-medium px-4 py-2 hover:bg-sky-700 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-600 to-purple-600"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-emerald-600 to-cyan-600"
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {" "}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
            >
              Discover & Book the Best Restaurants
            </motion.h1>{" "}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-gray-600/90 max-w-3xl mx-auto font-body leading-relaxed mt-6"
            >
              Your journey to extraordinary dining experiences begins here.
              Discover curated restaurants, authentic reviews, and seamless
              bookings.
            </motion.p>
            {/* Search Bar */}
            <motion.div
              variants={fadeInUp}
              className={`${glassStyle} max-w-2xl mx-auto p-2 md:p-3 rounded-full flex items-center gap-2 shadow-xl hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="flex-1 flex items-center gap-3 px-4 md:px-6">
                <FaMapMarkerAlt
                  className={`text-xl md:text-2xl ${iconColors.primary} animate-pulse`}
                />
                <input
                  type="text"
                  placeholder="Enter your location..."
                  className="w-full bg-transparent border-none focus:outline-none text-base md:text-lg font-body placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full`}
                  />
                ) : (
                  <FaMicrophone
                    className={`text-xl ${iconColors.accent1} cursor-pointer hover:scale-110 transition-transform`}
                  />
                )}
              </div>{" "}
              <button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-6 md:px-8 py-3 rounded-full font-display font-semibold hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2 group"
                onClick={() => setIsLoading(true)}
              >
                <BiSearch className="text-xl group-hover:rotate-12 transition-transform" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* Stats Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover="hover"
                className={`${glassStyle} rounded-xl p-6 text-center relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div
                  className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 text-3xl
                  ${
                    index % 4 === 0
                      ? iconColors.primary
                      : index % 4 === 1
                      ? iconColors.accent1
                      : index % 4 === 2
                      ? iconColors.accent2
                      : iconColors.secondary
                  }
                `}
                >
                  {stat.icon}
                </div>

                <motion.h4
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                >
                  {stat.value}+
                </motion.h4>

                <p className="text-gray-600 font-medium">{stat.label}</p>

                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      {/* How It Works */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text tracking-tight leading-tight">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600/90 max-w-2xl mx-auto font-body">
              Your journey to exceptional dining made simple and delightful
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerJourney.map((step, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover="hover"
                className={`${glassStyle} rounded-xl p-8 relative overflow-hidden group`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                    {React.cloneElement(step.icon, {
                      className: "w-8 h-8 text-sky-600",
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            Why Choose VerifiedEats
          </motion.h2>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover="hover"
                className={`${glassStyle} rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />{" "}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl transform group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br
                  ${
                    index % 4 === 0
                      ? "from-blue-100 to-blue-50 text-blue-600"
                      : index % 4 === 1
                      ? "from-purple-100 to-purple-50 text-purple-600"
                      : index % 4 === 2
                      ? "from-indigo-100 to-indigo-50 text-indigo-600"
                      : "from-emerald-100 to-emerald-50 text-emerald-600"
                  }
                `}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600/90 font-body leading-relaxed">
                  {feature.description}
                </p>
                <motion.div
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  <FaArrowRight className="text-blue-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      {/* Restaurant Tools */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            Powerful Tools for Restaurants
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurantTools.map((tool, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover="hover"
                className={`${glassStyle} rounded-xl p-8 relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-3xl
                  ${
                    index % 3 === 0
                      ? iconColors.primary
                      : index % 3 === 1
                      ? iconColors.accent1
                      : iconColors.accent2
                  }
                  transform group-hover:scale-110 transition-transform duration-300
                `}
                >
                  {tool.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">{tool.title}</h3>
                <p className="text-gray-600 mb-6">{tool.description}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 group-hover:shadow-lg transition-shadow"
                >
                  Learn More
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      {/* Testimonials */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            What Our Users Say
          </motion.h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover="hover"
                className={`${glassStyle} rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-full overflow-hidden ring-2 ring-offset-2 
                    ${
                      index % 3 === 0
                        ? "ring-blue-500"
                        : index % 3 === 1
                        ? "ring-purple-500"
                        : "ring-emerald-500"
                    }`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="relative">
                  <FaQuoteLeft className="absolute -top-4 -left-2 text-4xl text-blue-100" />
                  <p className="text-gray-600 mb-4 pl-8">
                    {testimonial.comment}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } text-xl`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      {/* FAQ Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent"
      >
        <motion.div variants={staggerContainer} className="max-w-3xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            Frequently Asked Questions
          </motion.h2>{" "}
          <div className="space-y-4 md:space-y-6 px-4 sm:px-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover="hover"
                className={`${glassStyle} rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300`}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center gap-4"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg flex-1">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: faq.isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-xl ${
                      faq.isOpen ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {faq.isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="prose prose-blue max-w-none">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      {/* Footer */}{" "}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">VerifiedEats</h3>
              <p className="text-gray-400">
                Real Food. Real Reviews. Real Experience.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Chat Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>VerifiedEats © 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
