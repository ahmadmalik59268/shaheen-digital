import { motion } from "motion/react";
import { ArrowRight, Target, Eye, Heart, Shield, Code, Rocket, Zap, MessageSquare, HeartHandshake } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-primary-bg relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-accent/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
              }
            }}
            className="max-w-3xl"
          >
            <h1 
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-dark-text mb-6 flex flex-col items-start"
              style={{ perspective: "1000px" }}
            >
              <motion.span 
                variants={{
                  hidden: { opacity: 0, rotateX: -90, y: 50 },
                  visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 1, type: "spring", bounce: 0.4 } }
                }}
                style={{ transformOrigin: "bottom" }}
                className="inline-block"
              >
                Engineering
              </motion.span>
              <motion.span 
                variants={{
                  hidden: { opacity: 0, rotateX: -90, y: 50 },
                  visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 1, type: "spring", bounce: 0.4 } }
                }}
                style={{ transformOrigin: "bottom" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent pb-2 mt-2"
              >
                Digital Growth
              </motion.span>
            </h1>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-text-secondary leading-relaxed mb-8 text-xl"
            >
              We are a premium software house and digital agency. We don't just build websites; we engineer strategic digital solutions that drive real business results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 shadow-xl rounded-3xl p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-accent/5 rounded-bl-[100%] transition-colors group-hover:bg-primary-accent/10" />
              <Target className="w-12 h-12 text-primary-accent mb-6" />
              <h3 className="text-3xl font-black uppercase tracking-tighter text-dark-text mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To empower ambitious businesses with scalable technology and data-driven marketing strategies that transform their operational efficiency and market reach.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-slate-200 shadow-xl rounded-3xl p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-secondary-accent/5 rounded-br-[100%] transition-colors group-hover:bg-secondary-accent/10" />
              <Eye className="w-12 h-12 text-secondary-accent mb-6" />
              <h3 className="text-3xl font-black uppercase tracking-tighter text-dark-text mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To become the globally recognized standard for premium digital craftsmanship, where technology seamlessly intersects with human-centered design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-light-bg relative border-t border-slate-200">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden">
          <span className="text-[300px] font-black uppercase tracking-tighter text-slate-900 leading-none select-none">
            GROW
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl font-medium text-slate-600 mb-6 leading-relaxed">
              strategies, creative design, and data-driven solutions.<br/><br/>
              Since 2016, we've been turning ambitious visions into reality.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Happiness", desc: "Happy teams create extraordinary results for your brand", icon: Heart, color: "text-[#E11D48]", bg: "bg-[#E11D48]/10" },
              { title: "Honesty", desc: "Transparent communication builds unbreakable trust", icon: Shield, color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10" },
              { title: "Dedication", desc: "Relentless focus on achieving your business goals", icon: Target, color: "text-[#7C3AED]", bg: "bg-[#7C3AED]/10" },
              { title: "Transparency", desc: "Clear processes and open reporting at every step", icon: Eye, color: "text-[#10B981]", bg: "bg-[#10B981]/10" },
              { title: "Empathy", desc: "Understanding your challenges and crafting solutions that truly resonate", icon: HeartHandshake, color: "text-[#0EA5E9]", bg: "bg-[#0EA5E9]/10" }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${value.bg} ${value.color}`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-light-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-dark-text mb-8">
            Ready to build something <span className="text-primary-accent">exceptional?</span>
          </h2>
          <Button href="/contact" size="lg" className="shadow-xl">Let's Talk About Your Project</Button>
        </div>
      </section>
    </div>
  );
}
