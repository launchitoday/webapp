import { motion } from 'framer-motion';
import { clients } from '@/data/clients';
import { ScrollReveal } from '@/components/ScrollReveal';

export function Clients() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 lg:px-12 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollReveal className="mb-10 md:mb-14">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-gray-500 mb-4">
            Partners
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            Clients
          </h2>
        </ScrollReveal>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group"
            >
              <div className="mb-2">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight group-hover:opacity-70 transition-opacity">
                  {client.name}
                </h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
