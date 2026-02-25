export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  size: 'large' | 'medium' | 'small';
  hasQuickView?: boolean;
}

export const projects: Project[] = [
  {
    id: 'eternacloud',
    title: 'EternaCloud',
    description: 'Cloud infrastructure management platform',
    category: 'Web Application',
    image: '/images/projects/eternacloud.jpg',
    size: 'large',
  },
  {
    id: 'manatee-energy',
    title: 'Manatee Energy',
    description: 'Renewable energy monitoring dashboard',
    category: 'Web Application',
    image: '/images/projects/manatee-energy.jpg',
    size: 'large',
  },
  {
    id: '0x-protocol',
    title: '0x',
    description: 'Open protocol for decentralized exchange',
    category: 'Web3 Application',
    image: '/images/projects/0x-protocol.jpg',
    size: 'medium',
  },
  {
    id: 'der-baukasten',
    title: 'Der Baukasten',
    description: 'Scroll-based UI for a modular 3D toy concept',
    category: 'Design Tool',
    image: '/images/projects/der-baukasten.jpg',
    size: 'medium',
  },
  {
    id: 'netti',
    title: 'Netti',
    description: 'Comprehensive analysis of connection performance',
    category: 'SaaS Platform',
    image: '/images/projects/netti.jpg',
    size: 'large',
  },
  {
    id: 'spylt',
    title: 'SPYLT',
    description: 'Protein-rich caffeinated chocolate milk',
    category: 'Marketing Website',
    image: '/images/projects/spylt.jpg',
    size: 'large',
    hasQuickView: true,
  },
  {
    id: 'mova',
    title: 'MOVA',
    description: 'Brewery and restaurant in Dnipro',
    category: 'E-commerce',
    image: '/images/projects/mova.jpg',
    size: 'large',
    hasQuickView: true,
  },
  {
    id: 'hyperion',
    title: 'Hyperion',
    description: 'Creative production company',
    category: 'Portfolio Website',
    image: '/images/projects/hyperion.jpg',
    size: 'medium',
  },
  {
    id: 'huawei-p50',
    title: 'HUAWEI P50',
    description: 'Digital art and animations for mobile',
    category: 'Marketing Website',
    image: '/images/projects/huawei-p50.jpg',
    size: 'medium',
  },
  {
    id: 'knead-that-dough',
    title: 'Knead That Dough',
    description: 'AI-powered data insights for hospitality and FMCG',
    category: 'Web Application',
    image: '/images/projects/knead-that-dough.jpg',
    size: 'large',
    hasQuickView: true,
  },
  {
    id: 'fireside',
    title: 'Fireside',
    description: 'Dentistry community',
    category: 'Social Platform',
    image: '/images/projects/fireside.jpg',
    size: 'medium',
  },
  {
    id: 'flashlights',
    title: 'Flashlights',
    description: 'Interactive history section for an advocacy project on jailhouse lawyers',
    category: 'CMS',
    image: '/images/projects/flashlights.jpg',
    size: 'small',
    hasQuickView: true,
  },
  {
    id: 'abuk',
    title: 'Abuk',
    description: 'Ukrainian audiobooks platform',
    category: 'Web Application',
    image: '/images/projects/abuk.jpg',
    size: 'small',
  },
  {
    id: 'decriminalize-poverty',
    title: 'Decriminalize Poverty',
    description: 'Interactive storytelling about a social issue',
    category: 'Non-profit Website',
    image: '/images/projects/decriminalize-poverty.jpg',
    size: 'large',
    hasQuickView: true,
  },
  {
    id: 'farmsense',
    title: 'FarmSense',
    description: 'Product design for an innovative AgTech company',
    category: 'Web Application',
    image: '/images/projects/farmsense.jpg',
    size: 'medium',
  },
  {
    id: 'immediate',
    title: 'Immediate',
    description: 'Fintech service for effective employee payments',
    category: 'Fintech App',
    image: '/images/projects/immediate.jpg',
    size: 'large',
  },
  {
    id: 'orakle',
    title: 'Orakle',
    description: 'Healthcare education and innovation company',
    category: 'Healthcare App',
    image: '/images/projects/orakle.jpg',
    size: 'small',
  },
  {
    id: 'huawei',
    title: 'Huawei',
    description: 'Icons for EMUI 10',
    category: 'Mobile App',
    image: '/images/projects/huawei.jpg',
    size: 'medium',
  },
  {
    id: 'arist',
    title: 'Arist',
    description: 'Train your teams',
    category: 'EdTech Platform',
    image: '/images/projects/arist.jpg',
    size: 'small',
  },
];

export const heroProjects = [
  {
    id: 'hero-1',
    image: '/images/projects/hero-1.jpg',
    bgColor: '#C8F560',
  },
  {
    id: 'hero-2',
    image: '/images/projects/hero-2.jpg',
    bgColor: '#F5E960',
  },
  {
    id: 'hero-3',
    image: '/images/projects/hero-3.jpg',
    bgColor: '#1A3A2F',
  },
];
