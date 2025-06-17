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
  FaTableList,
  FaHotel,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaRegQuestionCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMicrophone,
} from "react-icons/fa";
import {
  MdRestaurant,
  MdDeliveryDining,
  MdRateReview,
  MdVerified,
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
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardHover = {
  initial: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { type: "spring", stiffness: 300 },
  },
};

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
    icon: <FaTableList />,
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
    icon: <FaTableList />,
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
    icon: <FaTableList />,
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

// FAQ Data
const faqs = {
  customers: [
    {
      q: "Are reviews genuine?",
      a: "Yes, only verified customers who have dined can post reviews.",
    },
    {
      q: "Can I cancel a booking?",
      a: "Yes, you can cancel up to 30 minutes before your booking time.",
    },
    {
      q: "What if the dish isn't good?",
      a: "We have a customer satisfaction guarantee and handle complaints promptly.",
    },
  ],
  restaurants: [
    {
      q: "How to list my restaurant?",
      a: "Simply click 'List Your Restaurant' and follow the verification process.",
    },
    {
      q: "Is there a monthly cost?",
      a: "We have flexible plans starting from free listing to premium features.",
    },
    {
      q: "Can I manage bookings?",
      a: "Yes, you get a complete booking management system in your dashboard.",
    },
  ],
};

function LandingPage() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [activeFaqTab, setActiveFaqTab] = useState("customers");

  return (
    <div className="bg-gradient-to-b from-sky-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-sky-600"
            >
              VerifiedEats
            </motion.div>

            {/* Nav Links */}
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
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-sky-600 font-medium"
              >
                Login
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/signup")}
                className="px-4 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
              >
                Sign Up
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            {/* Hero Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-sky-50 px-4 py-2 rounded-full text-sky-600 text-sm font-medium"
            >
              <MdVerified className="text-lg" />
              Real Food. Real Reviews. Real Experience.
            </motion.div>

            {/* Hero Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Verified Food Reviews.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Real Customers.
              </span>
              <br />
              One Powerful App.
            </motion.h1>

            {/* Hero Description */}
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Tired of fake Google reviews? Discover the best food near you based on
              verified customer experiences. From seat booking to payment, everything
              in one place.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              variants={fadeInUp}
              className="max-w-2xl mx-auto"
            >
              <div className="flex gap-4 p-2 bg-white rounded-2xl shadow-xl">
                <div className="flex-1 relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-500" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your location"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent outline-none"
                  />
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200 flex items-center gap-2">
                  Find Restaurants <FaArrowRight />
                </button>
              </div>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors flex items-center gap-2"
              >
                <FaTableList /> Book a Table Instantly
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border-2 border-sky-600 text-sky-600 rounded-lg font-medium hover:bg-sky-50 transition-colors flex items-center gap-2"
              >
                <FaHotel /> List Your Restaurant
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.1), rgba(59,130,246,0.1))",
                "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1), rgba(14,165,233,0.1))",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0"
          />
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                whileHover="hover"
                className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-sky-500 text-3xl mb-4">
                    {React.cloneElement(stat.icon, { className: "w-8 h-8" })}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Your journey to exceptional dining</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerJourney.map((step, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                    {React.cloneElement(step.icon, { className: "w-8 h-8 text-sky-600" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-600">Powered by cutting-edge technology</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                whileHover="hover"
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    {React.cloneElement(feature.icon, { className: "w-8 h-8 text-sky-600" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Tools */}
      <section className="py-20 bg-white" id="for-restaurants">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Smart Hotel Tools</h2>
            <p className="text-xl text-gray-600">Everything you need to grow your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurantTools.map((tool, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                    {React.cloneElement(tool.icon, { className: "w-8 h-8 text-sky-600" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Users Are Saying</h2>
            <p className="text-xl text-gray-600">Real stories from our community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardHover}
                whileHover="hover"
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl text-sky-300 mb-6">"</div>
                  <p className="text-lg text-gray-600 mb-6">{testimonial.content}</p>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sky-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveFaqTab("customers")}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeFaqTab === "customers"
                    ? "bg-sky-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                For Customers
              </button>
              <button
                onClick={() => setActiveFaqTab("restaurants")}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeFaqTab === "restaurants"
                    ? "bg-sky-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                For Restaurants
              </button>
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFaqTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {faqs[activeFaqTab].map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={cardHover}
                    whileHover="hover"
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
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
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Chat Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
}

export default LandingPage;
