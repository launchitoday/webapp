import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={`#${project.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group block"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-3 bg-gray-100">
        <motion.div
          className="aspect-[4/3] w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Quick View Button */}
        {project.hasQuickView && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/80 text-white text-xs rounded-full">
              <Play className="w-3 h-3 fill-white" />
              quick view
            </span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg md:text-xl font-medium mb-0.5 group-hover:opacity-70 transition-opacity">
          {project.title}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
}
