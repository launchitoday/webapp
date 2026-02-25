import { motion } from 'framer-motion';
import type { Client } from '@/data/clients';

interface ClientLogoProps {
  client: Client;
  index: number;
}

export function ClientLogo({ client, index }: ClientLogoProps) {
  return (
    <motion.div
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
      <div className="mb-4">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:opacity-70 transition-opacity">
          {client.name}
        </h3>
      </div>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        {client.description}
      </p>
    </motion.div>
  );
}
