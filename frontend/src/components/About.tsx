import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden">
      {/* subtle background gradient + lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-50 dark:from-[#0b0f17] dark:via-[#0e1420] dark:to-[#0b0f17]" />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:repeating-linear-gradient(90deg,rgba(124,92,255,0.18)_0,rgba(124,92,255,0.18)_1px,transparent_1px,transparent_90px)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.25),transparent_60%)]" />

      <div className="section-container relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-poppins mb-6">
            <span className="bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet bg-clip-text text-transparent">About Why Ideas</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            We architect intelligent systems that evolve with data, scale with demand, and deliver measurable business lift.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100 font-poppins">
              Turning Complexity Into Clarity
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              We partner with forward-thinking teams to convert ambiguous data problems into production AI capabilities—recommendation systems, predictive modeling, real-time analytics, LLM-based automation, and beyond.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              Our process blends strategic discovery, rapid prototyping, model lifecycle rigor, and scalable engineering. The result: solutions that not only work—but adapt.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[{
                title: 'MLOps Mindset',
                desc: 'Pipelines, observability, continuous improvement'
              }, {
                title: 'Data Craftsmanship',
                desc: 'Quality, governance, lineage awareness'
              }, {
                title: 'Human-Centered AI',
                desc: 'Ethical, transparent, explainable outcomes'
              }, {
                title: 'Strategic Impact',
                desc: 'We measure what matters—lift, retention, efficiency'
              }].map(block => (
                <div key={block.title} className="group relative rounded-xl p-5 border border-white/10 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-xl overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-neon-violet/15 via-primary-600/10 to-neon-cyan/20" />
                  <h4 className="relative z-10 font-semibold text-neutral-800 dark:text-neutral-100 mb-2 tracking-tight">{block.title}</h4>
                  <p className="relative z-10 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{block.desc}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-3 pt-4">
              {['Innovation-first approach','Deep applied AI expertise','Tailored architecture & deployment','Lifecycle accountability & scalability'].map(item => (
                <li key={item} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan shadow-neon-violet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision / Pillars Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-neon-violet via-primary-600 to-neon-cyan opacity-60 blur group-hover:opacity-90 transition" />
              <div className="relative rounded-2xl p-10 bg-white/60 dark:bg-neutral-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.35),transparent_60%)]" />
                <h4 className="relative z-10 text-3xl font-bold mb-10 bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet bg-clip-text text-transparent">
                  Vision & Principles
                </h4>
                <div className="relative z-10 grid sm:grid-cols-3 gap-8">
                  {[{
                    icon: '🚀',
                    title: 'Innovation',
                    desc: 'Exploring frontier capabilities'
                  }, {
                    icon: '🎯',
                    title: 'Precision',
                    desc: 'Measured, outcome-driven delivery'
                  }, {
                    icon: '🌟',
                    title: 'Excellence',
                    desc: 'Relentless quality culture'
                  }].map(p => (
                    <div key={p.title} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-tr from-primary-600 via-neon-violet to-neon-cyan text-xl shadow-neon-violet">
                        <span>{p.icon}</span>
                      </div>
                      <h5 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">{p.title}</h5>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;