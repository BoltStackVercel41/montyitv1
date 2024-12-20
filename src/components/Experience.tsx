import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { fadeInUp } from '../utils/animations';
import { StatCard } from './StatCard';
import { Reviews } from './Reviews';
import { ExperienceModal } from './ExperienceModal';
import { stats } from '../data/experience';
import { StatDetails } from '../types/experience';

interface ExperienceProps {
  id: string;
}

export default function Experience({ id }: ExperienceProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedStat, setSelectedStat] = useState<StatDetails | null>(null);

  return (
    <>
      <section ref={ref} id={id} className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Erfahrung & Expertise</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Langjährige Erfahrung und kontinuierliche Weiterbildung für Ihre IT-Anforderungen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                stat={stat}
                index={index}
                inView={inView}
                onClick={() => setSelectedStat(stat)}
              />
            ))}
          </div>

          <Reviews />
        </div>
      </section>

      <ExperienceModal
        stat={selectedStat}
        onClose={() => setSelectedStat(null)}
      />
    </>
  );
}