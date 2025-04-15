import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const textVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const linkVariant = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  const iconContainerVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const iconVariant = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <footer className="w-full bg-primary rounded-t-3xl px-8 md:px-16 py-12 md:py-16 lg:py-section">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Company Name */}
        <motion.div
          className="flex items-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <img
            src="/logos/Logo.svg"
            height="100px"
            width="100px"
            className="mr-4 "
            alt="OSA MK Logo" // Added alt text
          ></img>
          <h2 className="text-3xl md:text-4xl lg:text-7xl">O.S.A. MK</h2>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 lg:gap-24 mb-12 md:mb-16">
          {/* Left Column */}
          <div className="mb-8 sm:mb-0">
            <motion.h3
              className="text-lg md:text-xl font-bold mb-6 md:mb-8"
              variants={textVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Take a Look
            </motion.h3>
            <div className="flex flex-col space-y-4 md:space-y-6">
              <motion.div
                variants={linkVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center hover:underline text-sm md:text-xl"
                >
                  CONTACT US{" "}
                  <span className="ml-4">
                    <img
                      src="./images/arrow2.svg"
                      height={18}
                      width={18}
                      alt=""
                    />
                  </span>
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 md:space-x-6 mt-6 md:mt-8"
                variants={iconContainerVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-primary rounded-full p-3 hover:opacity-90 transition-opacity"
                  variants={iconVariant}
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-primary rounded-full p-3 hover:opacity-90 transition-opacity"
                  variants={iconVariant}
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="mb-8 sm:mb-0">
            <motion.div
              variants={linkVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <Link
                to="/"
                className="inline-flex items-center text-lg md:text-xl font-bold mb-6 md:mb-8 hover:underline"
              >
                HOME{" "}
                <span className="ml-4">
                  <img src="./images/arrow2.svg" height={18} width={18} alt="" />
                </span>
              </Link>
            </motion.div>
            <motion.p
              className="mt-6 md:mt-8 text-base"
              variants={textVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              Explore our
              <br />
              Latest Work
            </motion.p>
          </div>

          {/* Right Column */}
          <div>
            <motion.h3
              className="text-lg md:text-xl font-bold mb-6 md:mb-8"
              variants={textVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Check us out
            </motion.h3>
            <motion.div
              className="space-y-4 md:space-y-6 text-base"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            >
              <motion.p variants={textVariant}>Have any questions?</motion.p>
              <motion.p className="break-words" variants={textVariant}>
                Please don't hesitate to
                <br />
                call at{" "}
                <a href="tel:+38975488726" className="hover:underline">
                  +389 75 488 726
                </a>{" "}
                or{" "}
                <a href="tel:+38970268809" className="hover:underline">
                  +389 70 268 809
                </a>
              </motion.p>
              <motion.p className="break-words" variants={textVariant}>
                Got something to share?
                <br />
                Ping us at{" "}
                <a
                  href="mailto:contact@osa-engineering.com"
                  className="underline"
                >
                  contact@osa-engineering.com
                </a>
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.hr
          className="border-black my-8 md:my-10"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />

        {/* Copyright */}
        <motion.div
          className="text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          © {new Date().getFullYear()} by OSA MK
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
