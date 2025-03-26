'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { SocialIcons } from '@/components/admin/SocialIcons';

const ContactPage = ({ id }: { id: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      setFormData({ 
        fullName: '', 
        email: '', 
        subject: '', 
        message: '' 
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="relative mt-12 py-8 px-2 max-w-md  mx-auto">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent">Contact Me</h2>
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent text-white placeholder-white/50 ${
                errors.fullName ? 'border-red-500' : 'border-white/20'
              }`}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent text-white placeholder-white/50 ${
                errors.email ? 'border-red-500' : 'border-white/20'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent text-white placeholder-white/50 ${
                errors.subject ? 'border-red-500' : 'border-white/20'
              }`}
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent text-white placeholder-white/50 ${
                errors.message ? 'border-red-500' : 'border-white/20'
              }`}
              placeholder="Your message here..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">{errors.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="pt-2"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                isSubmitting
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-[#FFD700] hover:bg-[#FFC000] text-gray-900 hover:shadow-lg'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.div>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 mt-4 text-green-400 bg-green-900/20 rounded-lg border border-green-400/30"
            >
              Thank you! Your message has been sent. I&apos;ll contact you soon at {formData.email}.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 mt-4 text-red-400 bg-red-900/20 rounded-lg border border-red-400/30"
            >
              Failed to send message. Please try again later.
            </motion.div>
          )}
        </form>
      </div>
      
      <SocialIcons/>
    </section>
  );
};

export default ContactPage;