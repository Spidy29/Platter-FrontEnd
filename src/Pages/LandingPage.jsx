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
  FaPlay,
} from "react-icons/fa";
import {
  MdRestaurant,
  MdDeliveryDining,
  MdRateReview,
  MdVerified,
} from "react-icons/md";
import { BiRestaurant, BiSearch } from "react-icons/bi";
import { images } from "../assets/images";

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
  initial: { scale: 1, y: 0 },
  animate: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -5,
    transition: { type: "spring", stiffness: 300 },
  },
};

const heroImageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: {
    scale: 1.05,
    rotate: [-1, 1, -1],
    transition: { duration: 0.3 },
  },
};

const stats = [
  { value: "28,245+", label: "Dishes Rated", icon: <FaUtensils /> },
  { value: "1,250+", label: "Partner Restaurants", icon: <MdRestaurant /> },
  { value: "510,000+", label: "Verified Orders", icon: <MdVerified /> },
  { value: "80,000+", label: "Real Reviews", icon: <FaComments /> },
];

const customerSteps = [
  {
    title: "Find Verified Restaurants",
    icon: <BiSearch />,
    description: "Discover authentic dining spots",
  },
  {
    title: "Order Real Dishes",
    icon: <FaUtensils />,
    description: "Choose from verified menu items",
  },
  {
    title: "Get Trusted Reviews",
    icon: <MdRateReview />,
    description: "Read feedback from real diners",
  },
  {
    title: "Earn Rewards",
    icon: <FaMedal />,
    description: "Get points for every verified visit",
  },
];

const restaurantSteps = [
  {
    title: "Digitize Your Hotel",
    icon: <BiRestaurant />,
    description: "Get online presence",
  },
  {
    title: "Manage Orders & Seats",
    icon: <MdDeliveryDining />,
    description: "Streamline operations",
  },
  {
    title: "Get Smart Analytics",
    icon: <FaChartLine />,
    description: "Data-driven insights",
  },
  {
    title: "Engage with Real Feedback",
    icon: <FaComments />,
    description: "Improve with real reviews",
  },
];

const userBenefits = [
  { title: "100% Verified Reviews", icon: <MdVerified /> },
  { title: "Smart Recommendations", icon: <FaStar /> },
  { title: "Loyalty Points", icon: <FaMedal /> },
  { title: "Instant Table Booking", icon: <FaUsers /> },
  { title: "Secure Payments", icon: <FaCheckCircle /> },
];

const testimonials = [
  {
    quote: "We grew our footfall by 30% in just 2 weeks using this platform.",
    author: "Hotel Sunrise Manager",
    role: "Restaurant Partner",
  },
  {
    quote:
      "I finally found the perfect Butter Chicken near me, thanks to verified reviews!",
    author: "Arjun S.",
    role: "Food Enthusiast",
  },
];

const AuthButton = ({ onClick, text, icon, variant = "primary" }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center justify-center space-x-2 px-8 py-3 rounded-full text-lg font-semibold transition-colors ${
      variant === "primary"
        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
        : "bg-white text-gray-800 border-2 border-gray-200 hover:border-indigo-500"
    }`}
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
  </motion.button>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </motion.div>
);

function LandingPage() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [activeTab, setActiveTab] = useState("customers");
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: <MdRestaurant className="w-6 h-6 text-indigo-600" />,
      title: "Restaurant Partners",
      description: "Connect with top restaurants",
    },
    {
      icon: <FaUtensils className="w-6 h-6 text-purple-600" />,
      title: "Quality Food",
      description: "Discover amazing cuisines",
    },
    {
      icon: <MdDeliveryDining className="w-6 h-6 text-indigo-600" />,
      title: "Quick Delivery",
      description: "Fast & reliable service",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Auth Options */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"
          />
          <motion.div
            animate={{
              background: [
                "linear-gradient(to right, rgba(99,102,241,0.1), rgba(168,85,247,0.1))",
                "linear-gradient(to right, rgba(168,85,247,0.1), rgba(99,102,241,0.1))",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          {/* Hero Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-8"
          >
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Platter
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 mb-12"
          >
            Connect with amazing restaurants and discover delicious food
            experiences
          </motion.p>

          {/* Auth Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <AuthButton
              onClick={() => navigate("/signup")}
              text="Get Started"
              icon={<FaArrowRight className="w-5 h-5" />}
            />
            <AuthButton
              onClick={() => navigate("/login")}
              text="Sign In"
              icon={<FaUsers className="w-5 h-5" />}
              variant="secondary"
            />
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full"
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
      </div>

      {/* Rest of your landing page content */}
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 font-sans">
        {/* Hero Section */}
        <section className="relative min-h-screen py-12 md:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-blue-100/30 backdrop-blur-3xl"></div>
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center justify-between">
              {/* Content Section */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="w-full lg:w-[45%] z-10 space-y-6 md:space-y-8 text-center lg:text-left"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sky-600 text-sm font-medium shadow-sm"
                >
                  <MdVerified className="text-lg" />
                  Trusted by 1000+ Restaurants
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                >
                  Discover
                  <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent px-4">
                    Exceptional
                  </span>
                  Dining
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
                >
                  Experience curated restaurants with real reviews and verified
                  ratings. Your next amazing meal is just a click away.
                </motion.p>

                {/* Search Section */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-3 md:p-4 max-w-2xl mx-auto lg:mx-0"
                >
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1 relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <FaMapMarkerAlt className="text-sky-500 text-xl" />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your location"
                        className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl bg-white/90 border border-sky-100 outline-none focus:ring-2 focus:ring-sky-500/20"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-medium">
                      Explore Now
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8"
                >
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -4 }}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-gradient-to-br from-sky-100 to-blue-100 shadow-lg"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold">Trusted by 50k+ users</div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm">4.9/5 ratings</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full lg:w-[45%] relative h-[400px] lg:h-[600px]"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-full blur-3xl"></div>

                <motion.div
                  className="absolute right-0 lg:-right-8 w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] z-20"
                  variants={heroImageAnimation}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <motion.img
                    src={images.dishes.dish1}
                    alt="Featured dish 1"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-blue-500/20"
                  />
                </motion.div>

                <motion.div
                  className="absolute left-0 lg:-left-8 top-0 w-[180px] sm:w-[220px] md:w-[260px] h-[180px] sm:h-[220px] md:h-[260px] z-10"
                  variants={heroImageAnimation}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ delay: 0.2 }}
                >
                  <motion.img
                    src={images.dishes.dish2}
                    alt="Featured dish 2"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-blue-500/20"
                  />
                </motion.div>

                <motion.div
                  className="absolute left-8 lg:left-12 bottom-0 w-[160px] sm:w-[200px] md:w-[240px] h-[160px] sm:h-[200px] md:h-[240px] z-30"
                  variants={heroImageAnimation}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ delay: 0.4 }}
                >
                  <motion.img
                    src={images.dishes.dish3}
                    alt="Featured dish 3"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-blue-500/20"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section with Enhanced Glass Effect */}
        <section className="py-16 md:py-24 relative">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={cardHover}
                  whileHover="hover"
                  initial="initial"
                  animate="animate"
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-3xl blur-xl transition-all duration-300 group-hover:scale-105"></div>
                  <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-500/5 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                    <motion.div
                      className="text-sky-500 text-3xl md:text-4xl mb-4"
                      whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* How It Works - Enhanced Modern Tabs */}
        <section className="py-24 bg-gradient-to-br from-sky-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"
              >
                How It Works
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center bg-white/50 backdrop-blur-sm p-2 rounded-2xl shadow-lg mb-12 w-full max-w-md mx-auto"
              >
                {["customers", "restaurants"].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 sm:px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-white text-sky-600 shadow-md"
                        : "text-gray-600 hover:text-sky-600"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab === "customers" ? "For Customers" : "For Restaurants"}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              >
                {(activeTab === "customers"
                  ? customerSteps
                  : restaurantSteps
                ).map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    variants={cardHover}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-3xl blur-xl transition-all duration-300 group-hover:scale-105"></div>
                    <div className="relative bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-xl transition-all duration-300">
                      <motion.div
                        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center text-xl md:text-2xl text-white mb-6 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.icon}
                      </motion.div>
                      <h3 className="text-lg md:text-xl font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Modern Benefits Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Benefits for Users
            </motion.h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {userBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="text-5xl text-sky-500 mb-6 group-hover:scale-110 transition-transform">
                        {benefit.icon}
                      </div>
                      <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Testimonials with Glass Effect */}
        <section className="py-20 bg-gradient-to-br from-sky-50/50 to-blue-50/50">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              What People Say
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-3xl blur-xl transition-all duration-300 group-hover:scale-105"></div>
                  <div className="relative bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-sky-500 text-6xl mb-6">"</div>
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full"></div>
                      <div>
                        <div className="font-semibold">
                          {testimonial.author}
                        </div>
                        <div className="text-sky-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600"></div>
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 0V4h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl lg:text-5xl font-bold text-white mb-8"
              >
                Ready to Experience Real Food Reviews?
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <button className="bg-white text-sky-600 px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center gap-2 font-medium group">
                  <FaPlay className="group-hover:scale-110 transition-transform" />
                  Watch How It Works
                </button>
                <button className="bg-sky-500 text-white px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center gap-2 font-medium group">
                  Get Started
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
