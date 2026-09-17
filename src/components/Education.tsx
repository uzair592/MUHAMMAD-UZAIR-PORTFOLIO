import { motion } from 'framer-motion'

const education = [
  {
    program: 'Bachelor of Computer Science (Artificial Intelligence)',
    institution: 'University of Peshawar, Pakistan',
    period: 'September 2022 — September 2026',
    description: 'Gold Medalist, 3.7 CGPA. Coursework across machine learning, deep learning, data structures and applied AI.',
  },
  {
    program: 'Diploma in Information Technology',
    institution: 'KP Board of Technical and Commerce Education',
    period: 'January 2022 — January 2023',
    description: 'Foundations in programming, networking and IT systems support.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        <div className="space-y-0">
          {education.map((item, index) => (
            <motion.div
              key={item.program}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-t border-gray-800 py-8 lg:py-12"
            >
              <div className="lg:col-span-7">
                <h3 className="text-xl lg:text-2xl font-light text-white mb-2">
                  {item.program}
                </h3>
                <p className="text-base text-gray-400">{item.institution}</p>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm text-gray-500 tracking-widest uppercase mb-3">
                  {item.period}
                </p>
                <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
