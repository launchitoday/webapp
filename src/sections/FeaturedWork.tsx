import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { ScrollReveal } from '@/components/ScrollReveal';

export function FeaturedWork() {
  // Separate projects by size for masonry layout
  const largeProjects = projects.filter((p) => p.size === 'large');
  const mediumProjects = projects.filter((p) => p.size === 'medium');
  const smallProjects = projects.filter((p) => p.size === 'small');

  return (
    <section id="work" className="py-16 md:py-24 px-6 lg:px-12 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollReveal className="mb-10 md:mb-14">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-gray-500 mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            Featured work
          </h2>
        </ScrollReveal>

        {/* Projects Grid - Row 1: 2 large */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          {largeProjects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Projects Grid - Row 2: 2 medium */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          {mediumProjects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 2} />
          ))}
        </div>

        {/* Projects Grid - Row 3: 2 large */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          {largeProjects.slice(2, 4).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 4} />
          ))}
        </div>

        {/* Projects Grid - Row 4: 1 large, 2 medium */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          <ProjectCard project={largeProjects[4]} index={6} />
          <div className="grid grid-cols-2 gap-5">
            {mediumProjects.slice(2, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 7} />
            ))}
          </div>
        </div>

        {/* Projects Grid - Row 5: 2 large */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          {largeProjects.slice(5, 7).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 9} />
          ))}
        </div>

        {/* Projects Grid - Row 6: 2 medium, 2 small */}
        <div className="grid md:grid-cols-4 gap-5 md:gap-6 mb-5 md:mb-6">
          {mediumProjects.slice(4, 6).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 11} />
          ))}
          {smallProjects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 13} />
          ))}
        </div>

        {/* Projects Grid - Row 7: 1 large, 2 medium */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-8 md:mb-10">
          <ProjectCard project={largeProjects[7]} index={15} />
          <div className="grid grid-cols-2 gap-5">
            {smallProjects.slice(2, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 16} />
            ))}
          </div>
        </div>

        {/* More Work Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <a
            href="#more-work"
            className="w-32 h-32 md:w-36 md:h-36 bg-[#4F46E5] rounded-full flex items-center justify-center text-white text-lg md:text-xl font-medium hover:scale-105 transition-transform"
          >
            more work +
          </a>
        </motion.div>
      </div>
    </section>
  );
}
