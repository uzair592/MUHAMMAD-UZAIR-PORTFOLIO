import { motion } from 'framer-motion'

const certifications = [
  { title: 'Generative AI Application Developer', issuer: 'Certification', year: '' },
  { title: 'IBM Artificial Intelligence Specialization', issuer: 'Coursera', year: '2024' },
  { title: 'Data Analytics Job Simulation', issuer: 'Deloitte Australia via Forage', year: '2025' },
  { title: 'Data Science & Analytics', issuer: 'HP LIFE', year: '2024' },
  { title: 'Artificial Intelligence (ML, DL, Communication)', issuer: 'NAVTTC Pakistan', year: '2024' },
  { title: 'Google Soft Skills Program', issuer: 'Google', year: '2024' },
  { title: 'IELTS — B2 Level', issuer: 'British Council', year: '2023' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Training</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          CERTIFICATIONS
        </motion.h2>

        <div className="space-y-0">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="border-t border-gray-800 py-6 md:py-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 md:mt-2">{cert.issuer}</p>
                </div>
                <span className="text-sm text-gray-600">{cert.year}</span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
