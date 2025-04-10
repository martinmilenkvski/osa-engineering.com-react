import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Faq.css";

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center py-5 text-left"
        onClick={onToggle}
      >
        <span className="text-xl md:text-2xl font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            ref={contentRef}
          >
            <div className="pb-5 text-gray-600 dark:text-gray-400">
              <p className="text-lg">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hrRef = useRef(null);

  const faqData = [
    {
      question: "What types of mechanical engineering services do you offer?",
      answer:
        "We provide a comprehensive range of services including mechanical design, 3D modeling, prototype development, manufacturing support, and engineering analysis. Our team specializes in both component and system-level design across various industries.",
    },
    {
      question: "How do you ensure quality in your engineering solutions?",
      answer:
        "Quality assurance is integrated into our entire process. We follow industry standards, implement rigorous testing protocols, utilize advanced simulation tools, conduct thorough design reviews, and maintain continuous client communication to ensure all deliverables meet or exceed specifications.",
    },
    {
      question: "What industries do you typically work with?",
      answer:
        "We have extensive experience working with aerospace, automotive, medical device, consumer products, industrial machinery, and energy sectors. Our versatile approach allows us to adapt our engineering expertise to meet the specific requirements of diverse industries.",
    },
    {
      question: "Can you handle projects of any scale?",
      answer:
        "Absolutely. From small component designs to complex system integrations, we scale our resources to match your project needs. Our flexible team structure allows us to efficiently handle projects of varying complexity and duration.",
    },
    {
      question: "What is your approach to client collaboration?",
      answer:
        "We believe in transparent communication and close collaboration. We establish clear project milestones, hold regular progress meetings, provide detailed documentation, and maintain open channels for feedback. Our goal is to create a partnership that leverages both our expertise and your vision.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (hrRef.current) {
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;
        hrRef.current.style.width = `${Math.min(scrollPercentage + 20, 100)}%`;
      }

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full py-16 md:py-24 bg-white dark:bg-gray-900"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-16">
        <hr ref={hrRef} className="growing-hr mb-12" />

        <motion.p
          className={`uppercase text-sm md:text-base tracking-wider mb-2 animate-text ${
            isVisible ? "animate-visible" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          FREQUENTLY ASKED
        </motion.p>

        <motion.h2
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-12 md:mb-16 animate-text ${
            isVisible ? "animate-visible" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Questions & Answers
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
