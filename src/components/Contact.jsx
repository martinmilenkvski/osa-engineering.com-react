import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error when field is updated
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulating form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);

      // Reset form and show success
      setFormSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-6xl mx-auto py-16 md:py-24 lg:py-section px-8 md:px-16 flex flex-col items-center text-center"
      >
        <div className="bg-yellow-50 p-12 rounded-standard shadow-md w-full max-w-xl">
          <div className="mb-8 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-6">Thank You!</h2>
          <p className="text-lg mb-8">
            Your message has been submitted successfully. We'll get back to you
            ASAP.
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="py-3 px-8 bg-primary hover:bg-primary-light text-black font-medium rounded-standard transition-colors duration-300"
          >
            Send Another Message
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-16 md:py-24 lg:py-section px-8 md:px-16">
      <div className="mb-16">
        <p className="text-sm md:text-base uppercase tracking-wider text-gray-600 mb-4">
          Get in Touch
        </p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
        >
          Contact us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-3xl"
        >
          Have questions or want to discuss your engineering project? Reach out
          to our team and we'll get back to you shortly.
        </motion.p>
      </div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-standard p-8 md:p-12 shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-3 font-medium">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              className={`py-4 px-5 border-b ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } focus:border-primary outline-none transition-colors rounded-t-md`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-3 font-medium">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className="py-4 px-5 border-b border-gray-300 focus:border-primary outline-none transition-colors rounded-t-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-3 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={`py-4 px-5 border-b ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:border-primary outline-none transition-colors rounded-t-md`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-3 font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (123) 456-7890"
              className="py-4 px-5 border-b border-gray-300 focus:border-primary outline-none transition-colors rounded-t-md"
            />
          </div>
        </div>

        <div className="mb-12">
          <label htmlFor="message" className="mb-3 font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project or inquiry..."
            className={`w-full py-4 px-5 border-b ${
              errors.message ? "border-red-500" : "border-gray-300"
            } focus:border-primary outline-none transition-colors resize-none min-h-[180px] rounded-t-md`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-2">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-10 bg-primary hover:bg-primary-light text-black font-medium rounded-standard transition-colors duration-300 flex items-center justify-center ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Message"
          )}
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
