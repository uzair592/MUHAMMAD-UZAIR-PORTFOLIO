import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const facts = [
  { label: 'Based in', value: 'Peshawar, KP, Pakistan' },
  { label: 'Currently', value: 'Data Analyst at Marwa Packages' },
  { label: 'Focus', value: 'Data Analytics, AI / ML, Generative AI' },
  { label: 'Degree', value: 'BS Computer Science (AI) — Gold Medalist' },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-[9vw] lg:text-section leading-none tracking-tight text-gray-300 mb-8">
              DATA INTO<br />
              <span className="text-white">DECISIONS</span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-6">
              I'm a Computer Science graduate (Gold Medalist, 3.7 CGPA) with hands-on
              experience across data analytics, AI/ML and financial operations. At Marwa
              Packages I use Python, SQL and BI tools to streamline reporting and support
              business decisions.
            </p>
            <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
              My background spans machine learning and deep learning projects from an AI
              internship, IT infrastructure support, and public-sector communications at
              ISPR. I'm certified in Generative AI Application Development, the IBM AI
              Specialization and Deloitte Data Analytics, and I'm growing into an
              AI/ML-focused engineering role.
            </p>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facts.map((fact) => (
                <div key={fact.label} className="border-t border-gray-800 pt-4">
                  <dt className="text-xs text-gray-500 tracking-widest uppercase mb-2">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-gray-300">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
