import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  // Handle resize for responsive behavior
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Gallery items
  const items = [
    {
      id: "precision-engineering",
      image: "/images/1.avif", // Replace with your actual image paths
      title: "Precision Engineering",
      description:
        "High-precision mechanical components designed for industrial applications",
    },
    {
      id: "cnc-manufacturing",
      image: "/images/2.avif",
      title: "CNC Manufacturing",
      description:
        "Advanced CNC machining technology for complex parts production",
    },
    {
      id: "industrial-equipment",
      image: "/images/3.avif",
      title: "Industrial Equipment",
      description: "Specialized equipment for modern manufacturing processes",
    },
    {
      id: "control-systems",
      image: "/images/1.avif",
      title: "Control Systems",
      description: "Digital control systems for precision automation",
    },
    {
      id: "component-assembly",
      image: "/images/2.avif",
      title: "Component Assembly",
      description:
        "Precision-engineered components for specialized applications",
    },
  ];

  // Animation variants
  const itemVariants = {
    inactive: {
      flex: 1,
      filter: "grayscale(0.3) brightness(0.8)",
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
    active: {
      flex: 3.5,
      filter: "grayscale(0) brightness(1)",
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
    exit: {
      opacity: 0,
      filter: "grayscale(1)",
      transition: { duration: 0.3 },
    },
  };

  // Content reveal animation
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Modal variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.3 } },
  };

  const [fullscreenItem, setFullscreenItem] = useState(null);

  const openFullscreen = (item) => {
    setFullscreenItem(item);
  };

  return (
    <div
      className="gallery-wrapper"
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="gallery-container"
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="gallery-item"
            initial="inactive"
            animate={activeIndex === index ? "active" : "inactive"}
            variants={itemVariants}
            onHoverStart={() => setActiveIndex(index)}
            onClick={() => openFullscreen(item)}
            style={{
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              borderRight:
                index < items.length - 1
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "none",
            }}
          >
            {/* Image overlay with gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)",
                zIndex: 1,
              }}
            />

            {/* Use regular img instead of background-image for better mobile support */}
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="eager"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "scale(1.05)",
                }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="content"
              variants={contentVariants}
              initial="hidden"
              animate={activeIndex === index ? "visible" : "hidden"}
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                padding: "2rem",
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <motion.h3
                variants={textVariants}
                style={{
                  color: "#fff",
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  textShadow: "0 2px 4px rgba(0,0,0,0.4)",
                }}
              >
                {item.title}
              </motion.h3>

              <motion.p
                variants={textVariants}
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "1rem",
                  maxWidth: "80%",
                  lineHeight: 1.5,
                  textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                }}
              >
                {item.description}
              </motion.p>

              <motion.div
                variants={textVariants}
                style={{
                  marginTop: "1.5rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    padding: "0.5rem 1rem",
                    borderRadius: "2rem",
                    fontSize: "0.875rem",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  View details
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {fullscreenItem && (
          <motion.div
            className="fullscreen-modal"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.95)",
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
            onClick={() => setFullscreenItem(null)}
          >
            <motion.div
              className="modal-content"
              style={{
                position: "relative",
                width: "90%",
                height: "90%",
                maxWidth: "1400px",
                borderRadius: "0.5rem",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={fullscreenItem.image}
                  alt={fullscreenItem.title}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  loading="eager"
                />
              </div>

              <motion.div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  padding: "3rem",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2
                  style={{
                    color: "#fff",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                  }}
                >
                  {fullscreenItem.title}
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "1.25rem",
                    maxWidth: "60%",
                    lineHeight: 1.6,
                  }}
                >
                  {fullscreenItem.description}
                </p>
              </motion.div>

              <motion.button
                style={{
                  position: "absolute",
                  top: "2rem",
                  right: "2rem",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  color: "#fff",
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  backdropFilter: "blur(10px)",
                }}
                onClick={() => setFullscreenItem(null)}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
