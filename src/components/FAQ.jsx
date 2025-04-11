import { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does OSA Engineering provide?",
      answer: "OSA Engineering provides a range of services including custom engineering solutions, CNC machining, automation systems, and technical consulting. Our team specializes in delivering high-quality engineering solutions tailored to meet specific client needs."
    },
    {
      question: "How can I request a quote for a project?",
      answer: "You can request a quote by filling out the contact form on our website or directly contacting our team via email or phone. Please provide as much detail as possible about your project requirements to help us provide an accurate quote."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including manufacturing, automotive, pharmaceuticals, and more. Our versatile engineering expertise allows us to adapt to various industry requirements and standards."
    },
    {
      question: "What is your project timeline?",
      answer: "Project timelines vary depending on complexity and scope. We work closely with clients to establish realistic timeframes and maintain transparent communication throughout the process to ensure timely delivery."
    },
    {
      question: "Do you offer maintenance services for completed projects?",
      answer: "Yes, we offer maintenance and support services for all our completed projects. We believe in building long-term relationships with our clients and providing ongoing support to ensure the continued success of implemented solutions."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 ">
      <div className=" mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-5 font-medium text-left bg-white border border-gray-200 rounded-lg focus:ring-4 focus:ring-gray-200"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 transform ${activeIndex === index ? 'rotate-180' : ''} transition-transform duration-200`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-5 bg-white border border-t-0 border-gray-200 rounded-b-lg">
                  <p className="mb-2 text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;