import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import Button from './Button';

const ContactCTA = () => {
  return (
    <section className="py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto bg-cyber-card border border-cyber-accent/40 cyber-chamfer py-12 px-8 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Inset neon glow */}
        <div className="absolute inset-0 shadow-[inset_0_0_30px_#00ff8810] pointer-events-none" />

        {/* Corner accents */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-cyber-accent/60" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-cyber-accent/60" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-cyber-accent/60" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-cyber-accent/60" />

        {/* Background orb */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyber-accent rounded-full blur-[100px] opacity-[0.04] pointer-events-none" />

        <div className="text-center relative z-10">
          <h2 className="font-mono text-2xl md:text-3xl font-bold uppercase tracking-wider text-cyber-fg mb-4 drop-shadow-[0_0_10px_#00ff8860]">
            NEED A DATA ENGINEERING SOLUTION?
          </h2>
          <p className="font-mono text-sm text-cyber-muted-fg mb-8 max-w-2xl mx-auto leading-relaxed">
            &gt; Whether you&apos;re looking to build scalable data pipelines, optimize your cloud
            infrastructure, or implement real-time analytics — I can help bring your data vision
            to life.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="inline-flex items-center gap-2">
              <FaEnvelope />
              GET IN TOUCH
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
