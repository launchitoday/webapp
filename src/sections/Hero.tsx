import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/AnimatedText';
import { ProjectShowcase } from '@/components/ProjectShowcase';

const clientLogos = [
  { name: 'Awwwards', icon: 'A' },
  { name: 'CSS Design', icon: 'C' },
  { name: 'FWA', icon: 'F' },
  { name: 'Webby', icon: 'W' },
  { name: 'Lovie', icon: 'L' },
];

export function Hero() {
  return (
    <section className="min-h-screen pt-28 lg:pt-32 pb-20 px-6 lg:px-12 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-5"
            >
              We are a web development agency
            </motion.p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[1.0] mb-8">
              <AnimatedText text="Building MVPs" delay={0.3} />
              <br />
              <AnimatedText text="and production-" delay={0.5} />
              <br />
              <AnimatedText text="ready apps" delay={0.7} />
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-12"
            >
              Rapid prototyping, excellent craft
            </motion.p>

            {/* Client Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center gap-6 md:gap-8"
            >
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 grayscale opacity-60 hover:opacity-100 transition-opacity"
                >
                  <span className="text-xl md:text-2xl font-bold">{logo.icon}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Project Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2"
          >
            <ProjectShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
