import { motion } from 'framer-motion'
import portrait from '@/assets/uzair-hero.png.asset.json'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-end">
      <img
        src={portrait.url}
        alt="Muhammad Uzair, Data Analyst and AI engineer"
        className="absolute inset-0 h-full w-full object-cover object-[75%_30%] lg:object-[85%_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-7xl mx-auto w-full"
        >
          <h1 className="font-display leading-none tracking-tighter text-[14vw] sm:text-[11vw] lg:text-[9rem]">
            <span className="block text-white">MUHAMMAD</span>
            <span className="block text-white">UZAIR</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-gray-300 tracking-widest uppercase">
            Data Analyst · AI &amp; Machine Learning
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-base text-gray-300 max-w-xl leading-relaxed"
          >
            Computer Science Gold Medalist (3.7 CGPA) turning data into decisions with
            Python, SQL and BI tools — and building machine learning and generative AI
            projects along the way.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="https://github.com/uzair592"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-5 py-2 text-gray-200 hover:text-white hover:border-white transition-colors backdrop-blur-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad--uzair"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-5 py-2 text-gray-200 hover:text-white hover:border-white transition-colors backdrop-blur-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:uzairawan592@gmail.com"
              className="border border-gray-600 px-5 py-2 text-gray-200 hover:text-white hover:border-white transition-colors backdrop-blur-sm"
            >
              Email me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
