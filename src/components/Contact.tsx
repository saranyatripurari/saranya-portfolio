import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission / mailto intent
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Also prepare mailto fallback
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 max-w-3xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2
          id="contact-section-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-normal"
        >
          Contact Me
        </h2>
      </div>

      {/* Form Container matching Screenshots */}
      <div
        id="contact-form-container"
        className="bg-[#0e1b33] border border-[#1b3052] rounded-2xl p-6 sm:p-10 shadow-2xl"
      >
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#38efbb]/20 text-[#38efbb] rounded-full flex items-center justify-center mx-auto border border-[#38efbb]/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Thank You for Reaching Out!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Your message is being routed directly to <span className="text-[#38efbb] font-mono">{PERSONAL_INFO.email}</span>. I look forward to connecting with you!
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
              }}
              className="mt-4 px-6 py-2.5 rounded-lg bg-[#38efbb] text-[#091224] font-semibold text-sm hover:bg-[#34dbaa] transition-all cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-3.5 rounded-xl bg-[#091224] border border-[#1b3052] text-white placeholder-slate-500 focus:outline-none focus:border-[#38efbb] focus:ring-1 focus:ring-[#38efbb] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email address"
                className="w-full px-4 py-3.5 rounded-xl bg-[#091224] border border-[#1b3052] text-white placeholder-slate-500 focus:outline-none focus:border-[#38efbb] focus:ring-1 focus:ring-[#38efbb] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full px-4 py-3.5 rounded-xl bg-[#091224] border border-[#1b3052] text-white placeholder-slate-500 focus:outline-none focus:border-[#38efbb] focus:ring-1 focus:ring-[#38efbb] transition-all resize-none"
              />
            </div>

            {/* Send Message Button: Full Width Mint Button */}
            <button
              type="submit"
              disabled={loading}
              id="contact-submit-btn"
              className="w-full py-3.5 rounded-xl bg-[#38efbb] hover:bg-[#34dbaa] text-[#091224] font-semibold text-base transition-all duration-200 shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
