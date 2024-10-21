import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ icon: Icon, title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHoverable, setIsHoverable] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Determine if the device supports hover
  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: hover)");
    setIsHoverable(hoverQuery.matches);

    // Optional: Listen for changes in hover capability
    const handleHoverChange = (e) => {
      setIsHoverable(e.matches);
    };

    hoverQuery.addEventListener("change", handleHoverChange);

    // Cleanup listener on unmount
    return () => {
      hoverQuery.removeEventListener("change", handleHoverChange);
    };
  }, []);

  // Handler for toggling content on mobile
  const handleToggle = () => {
    if (!isHoverable) {
      setIsExpanded(!isExpanded);
    }
  };

  // Determine when to show content
  const contentVisible = isExpanded || (isHoverable && isHovered);

  // Animation variants for the card
  const cardVariants = {
    rest: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for the content
  const contentVariants = {
    collapsed: { opacity: 0, height: 0 },
    expanded: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer overflow-hidden"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={handleToggle}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        <Icon className="text-4xl text-pastel-green-400 mb-4" />
        <h3 className="text-xl font-semibold text-charcoal mb-2">{title}</h3>
      </div>
      <AnimatePresence>
        {contentVisible && (
          <motion.div
            className="text-charcoal-600 mt-4"
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
