import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Check, Zap, Users, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'MVP Design',
    price: 899,
    description: 'Perfect for startups testing their idea',
    icon: Rocket,
    features: [
      'Single-page application',
      'Responsive design',
      '3 revision rounds',
      'Figma prototypes',
      'Basic animations',
      '2 weeks delivery',
    ],
    highlighted: false,
  },
  {
    name: 'Production Ready',
    price: 2999,
    description: 'Full-featured app for market launch',
    icon: Zap,
    features: [
      'Multi-page application',
      'Advanced UI/UX design',
      'Unlimited revisions',
      'Design system',
      'Complex animations',
      'Frontend development',
      '4 weeks delivery',
      '1 month support',
    ],
    highlighted: true,
  },
  {
    name: 'Dedicated Team',
    price: 3999,
    description: 'Two dedicated developers for your project',
    icon: Users,
    features: [
      'Everything in Production',
      '2 dedicated developers',
      'Full-stack development',
      'API integration',
      'Database design',
      'Testing & QA',
      '6 weeks delivery',
      '3 months support',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-gray-500 mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-4">
            Simple, transparent
            <br />
            pricing
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Choose the plan that fits your needs. All plans include our signature quality and attention to detail.
          </p>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`relative p-6 md:p-8 rounded-2xl ${
                plan.highlighted
                  ? 'bg-black text-white'
                  : 'bg-[#F5F5F5] text-black'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#4F46E5] text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                plan.highlighted ? 'bg-white/10' : 'bg-black'
              }`}>
                <plan.icon className={`w-5 h-5 ${plan.highlighted ? 'text-white' : 'text-white'}`} />
              </div>

              <h3 className="text-xl md:text-2xl font-medium mb-1">
                {plan.name}
              </h3>
              
              <p className={`text-sm mb-5 ${plan.highlighted ? 'text-gray-400' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-medium">${plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                  /project
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      plan.highlighted ? 'text-[#4F46E5]' : 'text-[#4F46E5]'
                    }`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full text-sm font-medium transition-all ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
