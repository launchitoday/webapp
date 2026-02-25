import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Database, Server, Code2, Blocks, Cpu, Network } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Custom Indexers',
    description: 'Build high-performance indexers to track on-chain events and data in real-time.',
    chains: ['The Graph', 'Subsquid', 'Envio'],
  },
  {
    icon: Server,
    title: 'RPC Infrastructure',
    description: 'Set up reliable, low-latency RPC endpoints for seamless blockchain interactions.',
    chains: ['Private Nodes', 'Load Balancing', 'Global CDN'],
  },
  {
    icon: Code2,
    title: 'Solana Programs',
    description: 'Deploy secure, audited programs on Solana using Rust and Anchor framework.',
    chains: ['Rust', 'Anchor', 'CPI'],
  },
  {
    icon: Blocks,
    title: 'Ethereum Smart Contracts',
    description: 'Build and deploy Solidity smart contracts with comprehensive testing.',
    chains: ['Solidity', 'Hardhat', 'Foundry'],
  },
  {
    icon: Cpu,
    title: 'Sui Move Development',
    description: 'Create efficient Move modules and packages on the Sui blockchain.',
    chains: ['Move', 'Sui SDK', 'Object Model'],
  },
  {
    icon: Network,
    title: 'Multi-Chain Integration',
    description: 'Seamless cross-chain solutions and bridge implementations.',
    chains: ['Wormhole', 'LayerZero', 'Axelar'],
  },
];

export function Web3Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 lg:px-12 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-gray-500 mb-4">
            Web3 Development
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
            Blockchain
            <br />
            Infrastructure
          </h2>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group p-6 md:p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-5 h-5 text-white" />
              </div>
              
              <h3 className="text-lg md:text-xl font-medium mb-2">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.chains.map((chain) => (
                  <span
                    key={chain}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 bg-gray-100 rounded-md text-gray-600"
                  >
                    {chain}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
