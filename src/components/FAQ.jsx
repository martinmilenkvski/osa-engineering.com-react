import { useState, useRef } from "react"; // Import useRef
import { motion, useInView } from "framer-motion"; // Import motion and useInView

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null); // Ref for the section
  // Change amount from 0.2 to 0.5
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 }); // Trigger when 50% is visible

  const faqs = [
    {
      question: "What services does OSA Engineering provide?",
      answer:
        "OSA Engineering provides a range of services including custom engineering solutions, CNC machining, and technical consulting. Our team specializes in delivering high-quality engineering solutions tailored to meet specific client needs.",
    },
    {
      question: "How can I request a quote for a project?",
      answer:
        "You can request a quote by filling out the contact form on our website or directly contacting our team via email or phone. Please provide as much detail as possible about your project requirements to help us provide an accurate quote.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including manufacturing, automotive, pharmaceuticals, and more. Our versatile engineering expertise allows us to adapt to various industry requirements and standards.",
    },
    {
      question: "What is your project timeline?",
      answer:
        "Project timelines vary depending on complexity and scope. We work closely with clients to establish realistic timeframes and maintain transparent communication throughout the process to ensure timely delivery.",
    },
    {
      question: "Do you offer maintenance services for completed projects?",
      answer:
        "Yes, we offer maintenance and support services for all our completed projects. We believe in building long-term relationships with our clients and providing ongoing support to ensure the continued success of implemented solutions.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }, // Stagger FAQ items
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-section bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants} // Apply title animation variants
        >
          <p className="text-sm md:text-lg uppercase tracking-wider text-gray-600 mb-4">
            Support
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants} // Apply container variants for staggering
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6"
              variants={itemVariants} // Apply item animation variants
            >
              <button
                className="flex justify-between items-center w-full p-6 font-medium text-left bg-white border border-gray-200 rounded-standard focus:ring-4 focus:ring-gray-200"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform ${
                    activeIndex === index ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* Animate the answer panel */}
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden" // Add overflow hidden for smooth height animation
                >
                  <div className="p-6 bg-white border border-t-0 border-gray-200 rounded-b-standard">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
