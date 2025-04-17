import React from "react";
import Card from "../components/Card"; // Adjust the import path if necessary

// Example data for multiple cards
const cardData = [
  {
    id: 1,
    imageSrc: "/images/1.avif",
    imageAlt: "Design and Prototyping",
    title: "Design and Prototyping",
    subtitle: "Transforming concepts into precision-engineered solutions.",
    stat1Value: "2,223+",
    stat1Label: "CamCad Designs",
    stat2Value: "24 Hours",
    stat2Label: "Prototype to Product",
    description:
      "Our engineers translate concepts into tangible designs with precision and expertise in materials, tolerances, and manufacturing processes.",
  },
  {
    id: 2,
    imageSrc: "/images/2.avif", // Use a different image
    imageAlt: "Advanced Manufacturing",
    title: "Advanced Manufacturing",
    subtitle: "State-of-the-art production capabilities.",
    stat1Value: "99.8%",
    stat1Label: "Quality Assurance Rate",
    stat2Value: "10k+",
    stat2Label: "Units Produced Monthly",
    description:
      "Leveraging cutting-edge technology and automation for efficient, high-quality manufacturing outcomes.",
  },
  {
    id: 3,
    imageSrc: "/images/3.avif", // Use another different image
    imageAlt: "Testing and Validation",
    title: "Testing and Validation",
    subtitle: "Ensuring reliability and performance.",
    stat1Value: "50+",
    stat1Label: "Stress Test Scenarios",
    stat2Value: "ISO 9001",
    stat2Label: "Certified Processes",
    description:
      "Rigorous testing protocols guarantee that every product meets the highest standards of quality and durability.",
  },
  // Add more card data objects as needed
];

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4 space-y-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Services
      </h1>
      {/* Map over the data and render a Card for each item */}
      {cardData.map((data) => (
        <Card
          key={data.id} // Important for list rendering
          imageSrc={data.imageSrc}
          imageAlt={data.imageAlt}
          title={data.title}
          subtitle={data.subtitle}
          stat1Value={data.stat1Value}
          stat1Label={data.stat1Label}
          stat2Value={data.stat2Value}
          stat2Label={data.stat2Label}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default Services;
