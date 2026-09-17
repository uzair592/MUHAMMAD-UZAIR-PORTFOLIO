import { motion } from 'framer-motion'

const links = [
  { label: 'GITHUB — UZAIR592', href: 'https://github.com/uzair592' },
  { label: 'LINKEDIN — MUHAMMAD UZAIR', href: 'https://www.linkedin.com/in/muhammad--uzair' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Contact</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          Get in touch
        </motion.h2>

        <motion.div {...fadeInUp} className="w-full h-px bg-gray-700 mb-12 lg:mb-16" />

        <motion.p {...fadeInUp} className="mb-12 lg:mb-16 max-w-2xl text-base lg:text-lg text-gray-300 leading-relaxed">
          Open to data analytics and AI/ML roles, freelance projects and collaborations.
          The fastest way to reach me is email — I usually reply within a day.
        </motion.p>

        <div className="space-y-0 max-w-2xl">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <span className="text-sm text-gray-400 tracking-widest">{link.label}</span>
              <span className="text-gray-500 group-hover:text-white transition-colors">↗</span>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        <motion.div
          {...fadeInUp}
          className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-800"
        >
          <p className="text-sm text-gray-500 mb-6 lg:mb-8 tracking-widest uppercase">
            Or reach me directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16">
            <a
              href="mailto:uzairawan592@gmail.com"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              uzairawan592@gmail.com
            </a>
            <a
              href="tel:+923015929230"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              +92 301 5929230
            </a>
          </div>
        </motion.div>

        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Muhammad Uzair. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">Peshawar, Pakistan</p>
        </motion.footer>
      </div>
    </section>
  )
}
