import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-gray-900 border-t border-neutral-200 dark:border-gray-700/50 section-spacing-small">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center content-spacing"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold font-poppins text-gradient mb-4">
              Why Ideas
            </h3>
            <p className="text-neutral-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transforming ideas into intelligent solutions through cutting-edge AI, 
              machine learning, and data science innovations.
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <motion.a
              href="#about"
              className="text-neutral-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a
              href="#services"
              className="text-neutral-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#contact"
              className="text-neutral-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </div>

          <div className="border-t border-neutral-200 dark:border-gray-700/50 pt-8">
            <p className="text-neutral-500 dark:text-gray-500 text-sm">
              © {currentYear} Why Ideas. All rights reserved. | 
              Crafted with innovation and expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;