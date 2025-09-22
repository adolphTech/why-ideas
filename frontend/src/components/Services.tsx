import { motion } from 'framer-motion';

const services = [
  {
    title: 'Data Science',
    icon: '📊',
    description: 'Unlock insights from your data with advanced analytics, statistical modeling, and predictive algorithms that drive informed business decisions.',
    features: ['Data Analysis', 'Statistical Modeling', 'Predictive Analytics', 'Data Visualization'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Machine Learning',
    icon: '🤖',
    description: 'Build intelligent systems that learn and adapt with custom ML models, deep learning solutions, and AI-powered automation.',
    features: ['Custom ML Models', 'Deep Learning', 'Neural Networks', 'AI Automation'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Software Engineering',
    icon: '💻',
    description: 'Develop robust, scalable applications with modern technologies, clean architecture, and industry best practices.',
    features: ['Full-Stack Development', 'Cloud Solutions', 'API Development', 'System Architecture'],
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'LLM Training',
    icon: '🧠',
    description: 'Create and fine-tune large language models tailored to your specific domain and business requirements.',
    features: ['Model Fine-tuning', 'Custom Training', 'Domain Adaptation', 'Performance Optimization'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Chatbot Development',
    icon: '💬',
    description: 'Design intelligent conversational AI systems that enhance customer experience and automate support processes.',
    features: ['Conversational AI', 'NLP Integration', 'Multi-platform Bots', 'Voice Assistants'],
    gradient: 'from-indigo-500 to-purple-500'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-spacing relative overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center margin-section"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins text-neutral-900 dark:text-neutral-50">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg border border-neutral-200/50 dark:border-gray-700/50 rounded-xl shadow-xl p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:border-primary-500/50">
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 font-poppins">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-neutral-600 dark:text-gray-400 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 text-center mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center text-neutral-700 dark:text-gray-300"
                      >
                        <span className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}></span>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center margin-section"
        >
          <p className="text-lg text-neutral-600 dark:text-gray-400 mb-8">
            Ready to transform your business with our innovative solutions?
          </p>
          <motion.a
            href="#contact"
            className="btn-primary text-lg px-10 py-4 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;