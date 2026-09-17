import { motion } from 'framer-motion'

const skillGroups = [
  {
    group: 'Data & Programming',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'MySQL', 'SQL Server', 'Excel (Advanced)'],
  },
  {
    group: 'AI & Machine Learning',
    items: ['TensorFlow', 'scikit-learn', 'Deep Learning', 'NLP', 'Computer Vision', 'Generative AI', 'LLMs'],
  },
  {
    group: 'Data Analytics & BI',
    items: ['Power BI', 'Tableau', 'Data Visualization', 'Statistical Analysis', 'Predictive Modeling'],
  },
  {
    group: 'Business & Tools',
    items: ['Financial Reporting', 'Accounting Software', 'Project Management', 'Microsoft Office Suite'],
  },
  {
    group: 'Core Strengths',
    items: ['Work-Based Learning', 'IT Infrastructure', 'Communication', 'Analytical Thinking', 'Problem-Solving'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          SKILLS
        </motion.h2>

        <div className="space-y-0">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-t border-gray-800 py-8"
            >
              <h3 className="lg:col-span-4 text-sm text-gray-500 tracking-widest uppercase">
                {group.group}
              </h3>
              <div className="lg:col-span-8 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm text-gray-300 border border-gray-800 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
