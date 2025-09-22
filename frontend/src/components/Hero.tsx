import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import AIBackground from './AIBackground';
import AnimatedHeadline from './AnimatedHeadline';

const codeSnippet = `pipeline = (
  DataSource()
    .clean()
    .feature_engineer()
    .train_model("xgboost")
    .evaluate(metrics=["auc","f1"])
    .deploy(auto_scale=True)
)`;

const Hero = () => {
  // Theme available for future conditional styling
  useTheme();
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-24 overflow-hidden">
      <AIBackground />
      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
          {/* Left / Text */}
          <div className="xl:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tight leading-[1.05]">
                <span className="block text-neutral-300 dark:text-neutral-200 font-light mb-3 text-xl md:text-2xl">
                  We Build
                </span>
                <span className="relative inline-block pr-4">
                  <AnimatedHeadline
                    accentClassName="bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet bg-clip-text text-transparent drop-shadow"
                  />
                </span>
                <span className="block mt-4 bg-gradient-to-br from-neutral-100 to-neutral-300 dark:from-neutral-50 dark:to-neutral-200 bg-clip-text text-transparent">
                  That Learn & Scale
                </span>
              </h1>

              <p className="max-w-xl text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Why Ideas delivers production-grade AI systems, predictive analytics, and intelligent automation. We transform raw data into strategic leverage with modern MLOps and scalable architectures.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-medium text-white bg-gradient-to-r from-neon-violet via-primary-600 to-neon-cyan shadow-neon-violet hover:shadow-neon-cyan transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Start a Project</span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center justify-center rounded-xl px-8 py-4 font-medium text-neon-cyan border border-neon-cyan/40 hover:border-neon-cyan/70 bg-white/5 dark:bg-white/0 backdrop-blur-sm hover:text-white transition-colors duration-300"
                >
                  Explore Capabilities
                </motion.a>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 text-sm text-neutral-400 dark:text-neutral-500">
                {['MLOps','Data Engineering','Predictive APIs','LLM Integration','Analytics Dashboards'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 dark:bg-white/0 border border-white/10 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right / Visual Panel */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
            className="xl:col-span-5 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-neon-violet via-primary-600 to-neon-cyan opacity-75 blur group-hover:opacity-100 transition" />
              <div className="relative rounded-2xl p-6 bg-neutral-50/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-white/10 shadow-glow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-2 font-mono">ml_pipeline.py</span>
                </div>
                <pre className="text-[13px] md:text-sm leading-relaxed font-mono text-neutral-700 dark:text-neutral-200 max-h-[340px] overflow-hidden">
                  <code>{codeSnippet}</code>
                </pre>
                <div className="mt-5 grid grid-cols-3 gap-4 text-center">
                  {[{label:'Latency',value:'42ms'},{label:'Accuracy',value:'98.4%'},{label:'Scale',value:'Auto'}].map(item => (
                    <div key={item.label} className="rounded-lg py-3 bg-white/40 dark:bg-white/5 border border-white/20">
                      <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{item.label}</div>
                      <div className="font-semibold text-neutral-800 dark:text-neutral-100">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="text-xs tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">Scroll</div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-12 border-2 border-neutral-400/40 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3.5 bg-neutral-400/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;