import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'PC Setup',
    category: 'Computer Einrichtung',
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80',
    color: 'from-blue-600 to-cyan-600',
    size: 'large'
  },
  {
    title: 'Business IT',
    category: 'Netzwerk Installation',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80',
    color: 'from-cyan-600 to-blue-500',
    size: 'small'
  },
  {
    title: 'Remote Support',
    category: 'IT Support',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
    color: 'from-blue-500 to-cyan-500',
    size: 'medium'
  },
  {
    title: 'Web Projekt',
    category: 'Webdesign',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    color: 'from-cyan-500 to-blue-400',
    size: 'small'
  },
  {
    title: 'Hardware Upgrade',
    category: 'Hardware Service',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80',
    color: 'from-blue-400 to-cyan-400',
    size: 'medium'
  },
  {
    title: 'Security Setup',
    category: 'IT Sicherheit',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    color: 'from-cyan-400 to-blue-300',
    size: 'large'
  }
];

const getSizeClass = (size: string) => {
  switch (size) {
    case 'large':
      return 'h-[600px]';
    case 'medium':
      return 'h-[400px]';
    case 'small':
      return 'h-[300px]';
    default:
      return 'h-[400px]';
  }
};

export default function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="work" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Referenzen</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Einblicke in unsere erfolgreichen IT-Projekte
          </p>
        </motion.div>

        <div className="masonry">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative w-full ${getSizeClass(project.size)} mb-6 overflow-hidden rounded-2xl cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-40" />
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-multiply group-hover:opacity-40 transition-opacity duration-300`} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm font-medium text-white/80 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full"
                  >
                    {project.category}
                  </motion.span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
                      opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="transform group-hover:-translate-y-2 transition-transform duration-300"
                >
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="h-1 w-12 bg-white rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}