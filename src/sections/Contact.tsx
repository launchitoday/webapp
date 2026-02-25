import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';

const services = [
  'Interface design',
  'Illustration',
  'Brand identity',
  'Motion design',
  'Development',
];

const budgets = ['Let\'s talk', '10K-50K', 'more than 50K'];

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column - Headline */}
          <ScrollReveal>
            <p className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-gray-500 mb-4">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
              Let's make it
              <br />
              happen
            </h2>
          </ScrollReveal>

          {/* Right Column - Form */}
          <div className="space-y-6">
            {/* Service Selection */}
            <ScrollReveal delay={0.1}>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Service
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedServices.includes(service)
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Budget Selection */}
            <ScrollReveal delay={0.2}>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Budget in USD
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedBudget === budget
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Name & Email */}
            <ScrollReveal delay={0.3}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black transition-colors bg-transparent"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black transition-colors bg-transparent"
                    placeholder=""
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Project Details */}
            <ScrollReveal delay={0.4}>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Project details (optional)
                </label>
                <textarea
                  rows={3}
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
                  placeholder=""
                />
              </div>
            </ScrollReveal>

            {/* Submit Button */}
            <ScrollReveal delay={0.5}>
              <div className="flex justify-end pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-xl md:text-2xl font-medium text-[#4F46E5] hover:opacity-70 transition-opacity"
                >
                  submit
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
