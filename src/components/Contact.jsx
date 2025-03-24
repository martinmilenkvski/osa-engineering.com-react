import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - you can connect to your backend here
    console.log("Form submitted:", formData);
    // Reset form after submission (optional)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    // You could also show a success message
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold mb-16">Contact us</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-2 font-medium">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="py-3 px-4 border-b border-gray-300 focus:border-yellow-500 outline-none transition-colors"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-2 font-medium">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="py-3 px-4 border-b border-gray-300 focus:border-yellow-500 outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="py-3 px-4 border-b border-gray-300 focus:border-yellow-500 outline-none transition-colors"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="py-3 px-4 border-b border-gray-300 focus:border-yellow-500 outline-none transition-colors"
            />
          </div>
        </div>

        <div className="mb-12">
          <label htmlFor="message" className="mb-2 font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full py-3 px-4 border-b border-gray-300 focus:border-yellow-500 outline-none transition-colors resize-none min-h-[100px]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-8 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
