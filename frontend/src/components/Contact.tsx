import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

// Validation schema for contact form
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  email: z
    .string()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters')
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .trim(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS configuration - replace with your actual values
      const serviceID = 'service_efhq8ng';
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!publicKey) {
        throw new Error('EmailJS configuration missing. Please set up environment variables.');
      }
      
      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Why Ideas Team',
        to_email: import.meta.env.VITE_CONTACT_EMAIL || 'contact@whyideas.com', // Use env variable
        reply_to: data.email, // Allow easy reply
      };

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
      reset();
    } catch (error: unknown) {
      setSubmitStatus('error');
      if (error instanceof Error) {
        setSubmitMessage(`Failed to send message: ${error.message}. Please try again or contact us directly.`);
      } else {
        setSubmitMessage('An unexpected error occurred. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing relative overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-3xl"></div>
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to transform your ideas into intelligent solutions? Let's start the conversation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-400 font-poppins mb-6">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  we're here to help you harness the power of AI and data science for your business.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email Us</h4>
                    <p className="text-gray-400">contact@whyideas.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Response Time</h4>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Free Consultation</h4>
                    <p className="text-gray-400">Let's discuss your project</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg border border-neutral-200/50 dark:border-gray-700/50 rounded-xl shadow-xl p-8 space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/70 dark:bg-gray-800 border border-neutral-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/70 dark:bg-gray-800 border border-neutral-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/70 dark:bg-gray-800 border border-neutral-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-gray-400 resize-vertical"
                    placeholder="Tell us about your project or how we can help you..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Status */}
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus === 'success' 
                        ? 'bg-green-900/50 border border-green-700 text-green-300' 
                        : 'bg-red-900/50 border border-red-700 text-red-300'
                    }`}
                  >
                    <p>{submitMessage}</p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;