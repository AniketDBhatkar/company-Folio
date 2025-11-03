import { motion } from "framer-motion";

const Hero = () => (
  <section className="bg-blue-50 h-screen flex flex-col justify-center items-center text-center px-6">
    <motion.h1 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-blue-700 mb-4"
    >
      Empowering Your Business Growth
    </motion.h1>
    <p className="text-gray-600 mb-6 max-w-xl">
      We provide innovative solutions that help your business grow faster and smarter.
    </p>
    <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
      Get in Touch
    </a>
  </section>
);

export default Hero;
