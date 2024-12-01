import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiSearch } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Questions' },
    { id: 'appointments', name: 'Appointments' },
    { id: 'services', name: 'Medical Services' },
    { id: 'billing', name: 'Billing & Insurance' },
    { id: 'doctors', name: 'Doctors & Staff' },
  ];

  const faqData = [
    {
      category: 'appointments',
      question: 'How do I schedule an appointment?',
      answer: 'You can schedule an appointment through our website by selecting your preferred doctor and available time slot. Alternatively, you can call our helpline at +91 987654123.'
    },
    {
      category: 'appointments',
      question: 'Can I reschedule or cancel my appointment?',
      answer: 'Yes, you can reschedule or cancel your appointment up to 24 hours before the scheduled time through your patient portal or by calling our helpline.'
    },
    {
      category: 'services',
      question: 'What medical services do you offer?',
      answer: 'We offer a wide range of medical services including general consultations, specialized treatments, diagnostic tests, and preventive care programs.'
    },
    {
      category: 'services',
      question: 'Do you provide emergency services?',
      answer: 'Yes, we provide 24/7 emergency services. For medical emergencies, please call our emergency hotline or visit our emergency department immediately.'
    },
    {
      category: 'billing',
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans. Please contact our billing department or check our insurance page for a complete list of accepted providers.'
    },
    {
      category: 'billing',
      question: 'How can I pay my medical bills?',
      answer: 'We accept various payment methods including credit cards, debit cards, and online banking. You can pay through our patient portal or at our billing counter.'
    },
    {
      category: 'doctors',
      question: 'How can I find the right doctor for my condition?',
      answer: 'You can browse our doctors directory to find specialists based on their expertise. Each doctor\'s profile includes their specializations, experience, and patient reviews.'
    },
    {
      category: 'doctors',
      question: 'Are your doctors certified?',
      answer: 'Yes, all our doctors are certified by relevant medical boards and have extensive experience in their respective fields.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services, appointments, and policies.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center"
          >
            {faqCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <motion.div variants={itemVariants} className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800 text-left">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                  >
                    {activeIndex === index ? (
                      <FiMinus className="text-blue-600" />
                    ) : (
                      <FiPlus className="text-gray-400" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-100"
                    >
                      <div className="px-6 py-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <p className="text-gray-600">No matching questions found.</p>
            </motion.div>
          )}

          {/* Contact Support Section */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-white rounded-xl shadow-md p-8 mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Please contact our support team.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
