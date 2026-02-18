import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    question: '',
  });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await axios.post(
        'https://jh-portfolio-backend-fd79aa55d6cc.herokuapp.com/api/send-email',
        formData
      );
      if (response.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', question: '' });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full p-3 mb-1 border border-cyber-border bg-cyber-bg text-cyber-fg font-mono text-sm ' +
    'focus:outline-none focus:border-cyber-accent focus:shadow-[0_0_8px_#00ff8840] ' +
    'transition-all duration-300 placeholder:text-cyber-muted-fg/50 placeholder:uppercase placeholder:text-xs placeholder:tracking-wider';

  const labelClasses = 'block font-mono text-[10px] uppercase tracking-widest text-cyber-muted-fg mb-1.5';

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-cyber-card p-8 border border-cyber-border cyber-chamfer relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyber-accent/40" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyber-accent/40" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cyber-accent/40" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cyber-accent/40" />

      <h2 className="font-mono text-xl font-bold uppercase tracking-wider text-cyber-fg mb-6 text-center">
        <span className="text-cyber-accent">&gt;</span> CONTACT_ME
      </h2>

      <div className="mb-4">
        <label className={labelClasses}>NAME</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClasses}>EMAIL</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelClasses}>
          PHONE <span className="text-cyber-border">(OPTIONAL)</span>
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div className="mb-6">
        <label className={labelClasses}>MESSAGE</label>
        <textarea
          name="question"
          placeholder="Type your message..."
          value={formData.question}
          onChange={handleChange}
          className={`${inputClasses} h-32 resize-none`}
          required
        />
      </div>

      {/* Status messages */}
      {status && (
        <div
          className={`font-mono text-xs uppercase tracking-wider mb-4 ${
            status === 'success'
              ? 'text-cyber-accent'
              : status === 'error'
              ? 'text-cyber-magenta'
              : 'text-cyber-cyan'
          }`}
        >
          {status === 'sending' && '> TRANSMITTING MESSAGE...'}
          {status === 'success' && '> MESSAGE SENT SUCCESSFULLY'}
          {status === 'error'   && '> ERROR: TRANSMISSION FAILED. RETRY.'}
        </div>
      )}

      <div className="flex justify-end">
        <motion.button
          type="submit"
          disabled={status === 'sending'}
          className="px-6 py-3 bg-cyber-accent text-cyber-bg font-mono text-sm font-bold uppercase tracking-widest cyber-chamfer-sm hover:shadow-[0_0_15px_#00ff88,0_0_30px_#00ff8860] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
