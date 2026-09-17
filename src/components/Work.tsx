import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Data Analyst',
    company: 'Marwa Packages Pvt Ltd',
    location: 'Peshawar, Pakistan',
    period: 'March 2025 — Present',
    description:
      'Analyze financial and operational data — invoicing, cash flow and ledger reconciliation — to support accounting and procurement decisions. Build and maintain automated reports and dashboards that improve accuracy and cut manual processing time, partner with senior management on budget planning and cost optimization, and deliver monthly and quarterly compliance reporting.',
    skills: ['Python', 'SQL', 'Power BI', 'Financial Reporting', 'Automation'],
  },
  {
    title: 'Student Intern (AI/ML)',
    company: 'Abasyn University',
    location: 'Peshawar, Pakistan',
    period: 'February 2025 — August 2025',
    description:
      'Developed and deployed machine learning models for real-world applications using Python, TensorFlow and scikit-learn. Performed data analysis and preprocessing, improving model accuracy through feature engineering, collaborated on deep learning projects in computer vision and NLP, and presented findings to faculty and peers.',
    skills: ['TensorFlow', 'scikit-learn', 'Deep Learning', 'Computer Vision', 'NLP'],
  },
  {
    title: 'Intern',
    company: 'Inter-Services Public Relations (ISPR)',
    location: 'Pakistan',
    period: 'January 2025 — February 2025',
    description:
      'Supported day-to-day departmental tasks and communications during a short-term placement, gaining exposure to structured reporting and coordination processes in a public-sector environment.',
    skills: ['Communications', 'Reporting', 'Coordination'],
  },
  {
    title: 'Summer Intern (IT Support)',
    company: 'Waves Pvt Ltd',
    location: 'Pakistan',
    period: 'January 2024 — June 2024',
    description:
      'Provided technical support for hardware, software and network infrastructure, resolving 95% of issues within SLA. Assisted with database management and system maintenance, and documented procedures and user guides to improve team efficiency.',
    skills: ['IT Infrastructure', 'Database Management', 'Technical Documentation'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Career</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WORK<br />EXPERIENCE
        </motion.h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-600 mt-2">{exp.location}</p>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
