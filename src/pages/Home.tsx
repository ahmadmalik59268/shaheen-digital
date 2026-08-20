import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ArrowUpRight, Quote, Heart, Shield, Target, Eye, HeartHandshake, Layers, Cpu, Globe, Zap, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { servicesData } from "../data/services";
import { FAQ } from "../components/ui/FAQ";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. HERO — DARK */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0B1220] text-white">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0 opacity-25" />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-10 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center justify-center text-center">
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
            className="flex flex-col items-center relative z-20 max-w-4xl"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="mb-6 flex items-center justify-center gap-3"
            >
              <span className="h-px w-12 bg-[#2563EB]"></span>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#60A5FA]">Shaheen Digital Marketing</span>
              <span className="h-px w-12 bg-[#2563EB]"></span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tighter text-white mb-8 flex flex-col items-center">
              <div className="flex gap-4 sm:gap-6 py-2">
                <motion.div 
                  variants={{
                    hidden: { opacity: 1 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
                  }}
                  className="flex"
                >
                  {"Build.".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div 
                  variants={{
                    hidden: { opacity: 1 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.6 } }
                  }}
                  className="flex"
                >
                  {"Grow.".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              <div className="py-2 mt-2">
                <motion.div 
                  variants={{
                    hidden: { opacity: 1 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 1.1 } }
                  }}
                  className="flex"
                >
                  {"Transform.".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 50, rotateX: -90, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)", transition: { duration: 0.8, type: "spring", bounce: 0.4 } }
                      }}
                      style={{ transformOrigin: "bottom" }}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-blue-400 to-[#2DD4BF] pb-2"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed mx-auto"
            >
              We build powerful digital experiences, intelligent software and growth strategies that help businesses move forward.
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button href="/contact" size="lg" className="w-full sm:w-auto min-w-[200px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Start a Project
              </Button>
              <Button variant="outline" href="/portfolio" size="lg" className="w-full sm:w-auto min-w-[200px] group border-slate-700 text-white hover:border-[#2563EB] hover:text-white">
                Explore Our Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST / STATS — LIGHT */}
      <section className="py-20 bg-[#FFFFFF] text-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
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
                className="bg-[#F8FAFC] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${value.bg} ${value.color}`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{value.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, staggerChildren: 0.2 } 
              }
            }}
            className="bg-[#0B1220] rounded-[2rem] p-10 md:p-16 shadow-2xl overflow-hidden relative text-white"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10 divide-x divide-white/10">
              {[
                { label: "Years of Excellence", value: 9, suffix: "+" },
                { label: "Clients Worldwide", value: 200, suffix: "+" },
                { label: "Projects Delivered", value: 500, suffix: "+" },
                { label: "Client Satisfaction", value: 93, suffix: "%" },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="text-5xl md:text-6xl font-black tracking-tighter mb-3 text-[#2563EB]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <div className="text-sm md:text-base text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT / VALUES — LIGHT GRAY */}
      <section className="py-24 bg-[#F8FAFC] text-[#0F172A] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#2563EB] mb-3 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F172A] mb-6">
                Engineering Digital Growth With Passion & Precision
              </h2>
              <p className="text-lg text-[#475569] mb-6 leading-relaxed">
                Shaheen Digital Marketing is a premier software house and digital marketing agency. We combine cutting-edge engineering with data-driven marketing to elevate brands to new heights.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center font-bold">✓</div>
                  <span className="font-bold text-[#0F172A]">Expert Developers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center font-bold">✓</div>
                  <span className="font-bold text-[#0F172A]">Growth Strategists</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#0F172A] mb-4">Our Core Mission</h3>
              <p className="text-[#475569] mb-6 leading-relaxed">
                To empower businesses globally with robust software architecture, stunning digital design, and high-ROI marketing strategies that deliver guaranteed impact.
              </p>
              <Button href="/about" variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white">
                Read Full Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES — DARK */}
      <section className="py-32 bg-[#0B1220] text-white relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2563EB]/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#60A5FA] mb-3 block">Our Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
              Everything You Need to Build Your Digital Presence
            </h2>
            <p className="text-lg text-slate-300">
              End-to-end digital services tailored for growth. From custom software to targeted marketing campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative bg-[#111827] border border-[#263449] rounded-3xl p-8 hover:border-[#60A5FA]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0B1220] border border-[#263449] flex items-center justify-center text-[#60A5FA] mb-6 group-hover:scale-110 group-hover:bg-[#2563EB]/20 transition-all duration-300">
                  <service.icon className="w-6 h-6 group-hover:text-[#2DD4BF] transition-colors" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                  {service.shortDesc}
                </p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-[#60A5FA] font-medium group/link absolute bottom-8 hover:text-[#2DD4BF] transition-colors"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US — LIGHT */}
      <section className="py-32 bg-[#FFFFFF] text-[#0F172A] relative overflow-hidden border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#2563EB] mb-3 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F172A] mb-6">
                Why Businesses Choose Shaheen
              </h2>
              <p className="text-lg text-[#475569] mb-8">
                We don't just write code or design graphics. We build strategic solutions engineered to solve your business challenges and drive measurable growth.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Strategy Before Execution", desc: "We align our technical expertise with your business goals." },
                  { title: "Modern Technology Stack", desc: "Built with React, Node.js, and cloud infrastructure for scale." },
                  { title: "User-Centered Design", desc: "Intuitive interfaces that your customers will love to use." },
                  { title: "Transparent Communication", desc: "Clear updates, direct access to the team, and no surprises." }
                ].map((point, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[#0F172A] font-bold mb-1">{point.title}</h4>
                      <p className="text-[#475569] text-sm">{point.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/10 to-[#14B8A6]/10 rounded-3xl blur-2xl" />
              <div className="relative bg-[#F8FAFC] border border-[#E2E8F0] shadow-xl rounded-3xl p-8 overflow-hidden">
                <div className="flex gap-4 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <pre className="text-sm font-mono text-[#0F172A] overflow-x-auto">
                  <code>
{`const shaheen = {
  passion: true,
  excellence: 100,
  stack: ["React", "TypeScript", "Node"],
  approach: "User First",
  
  deliver: async (project) => {
    await strategy(project);
    await design(project);
    await develop(project);
    return launch(project);
  }
};`}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. PROCESS — LIGHT BLUE */}
      <section className="py-32 bg-[#EFF6FF] text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#2563EB] mb-3 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F172A] mb-4">Our Simple 4-Step Process</h2>
            <p className="text-[#475569]">From concept to launch, we keep you informed and involved every step of the way.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "We analyze your requirements and outline a precise roadmap." },
              { step: "02", title: "Design & Prototype", desc: "Creating UI/UX mockups and interactive wireframes for approval." },
              { step: "03", title: "Development", desc: "Writing clean, scalable code and building robust features." },
              { step: "04", title: "Launch & Growth", desc: "Rigorous testing, deployment, and ongoing optimization." }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm relative"
              >
                <div className="text-4xl font-black text-[#2563EB] mb-4">{p.step}</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{p.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PORTFOLIO — DARK */}
      <section className="py-32 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#60A5FA] mb-3 block">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Featured Work</h2>
              <p className="text-lg text-slate-300">
                A selection of digital products we've crafted for forward-thinking brands.
              </p>
            </div>
            <Button href="/portfolio" variant="secondary" className="flex-shrink-0 border border-slate-700 text-white hover:bg-white hover:text-[#0B1220]">
              View All Projects
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "FinTech Dashboard",
                category: "Web Application",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
                tags: ["React", "Node.js", "PostgreSQL"]
              },
              {
                title: "Aura E-Commerce",
                category: "E-Commerce",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
                tags: ["Next.js", "Shopify", "Tailwind"]
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/3] bg-[#0B1220] border border-[#263449] transition-transform duration-500 ease-out group-hover:scale-[1.01] shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40">
                    <div className="w-16 h-16 rounded-full bg-white text-[#0B1220] shadow-xl flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#60A5FA] text-sm font-bold uppercase tracking-wider">{project.category}</span>
                  <div className="w-1 h-1 rounded-full bg-slate-600" />
                  <div className="flex gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-slate-400 font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#60A5FA] transition-colors">{project.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CASE STUDIES — LIGHT */}
      <section className="py-32 bg-[#FFFFFF] text-[#0F172A] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#2563EB] mb-3 block">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F172A] mb-4">Case Studies</h2>
            <p className="text-[#475569]">Deep dive into how we solve complex problems and deliver stellar results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-3xl shadow-sm">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2 block">Case Study #1</span>
              <h3 className="text-2xl font-black text-[#0F172A] mb-4">Scaling TechFlow by 300%</h3>
              <p className="text-[#475569] mb-6 leading-relaxed">How we redesigned their entire product architecture and optimized conversion funnels for maximum growth.</p>
              <Link to="/case-studies" className="inline-flex items-center text-[#2563EB] font-bold hover:underline">
                Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-3xl shadow-sm">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2 block">Case Study #2</span>
              <h3 className="text-2xl font-black text-[#0F172A] mb-4">Nexus Data Cloud Migration</h3>
              <p className="text-[#475569] mb-6 leading-relaxed">Migrating legacy monolithic systems to a serverless microservices architecture with zero downtime.</p>
              <Link to="/case-studies" className="inline-flex items-center text-[#2563EB] font-bold hover:underline">
                Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TECHNOLOGIES — DARK */}
      <section className="py-32 bg-[#0B1220] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#60A5FA] mb-3 block">Our Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Technologies We Master</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">We leverage industry-leading tools and frameworks to build lightning-fast, secure, and scalable solutions.</p>
        </div>

        {/* Infinite scrolling marquee */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap py-4">
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0B1220] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0B1220] to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-6 flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[
              { name: "React / Next.js", icon: Code },
              { name: "TypeScript", icon: Cpu },
              { name: "Node.js", icon: Zap },
              { name: "Cloud & AWS", icon: Globe },
              { name: "PostgreSQL", icon: Layers },
              { name: "Tailwind CSS", icon: Code },
              { name: "React / Next.js", icon: Code },
              { name: "TypeScript", icon: Cpu },
              { name: "Node.js", icon: Zap },
              { name: "Cloud & AWS", icon: Globe },
              { name: "PostgreSQL", icon: Layers },
              { name: "Tailwind CSS", icon: Code },
            ].map((tech, i) => (
              <div
                key={i}
                className="w-64 flex-shrink-0 bg-[#111827] border border-[#263449] p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-[#60A5FA] transition-colors shadow-lg"
              >
                <tech.icon className="w-8 h-8 text-[#60A5FA]" />
                <span className="text-sm font-bold text-slate-200">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. TESTIMONIALS — LIGHT GRAY */}
      <section className="py-24 bg-[#F8FAFC] text-[#0F172A] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#2563EB] mb-3 block">Testimonials</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-[#0F172A] mb-4">Client Feedback</h2>
            <p className="text-[#475569]">See what our partners say about working with us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "Shaheen Digital Marketing completely transformed our digital presence. The new platform increased our conversion rate by 180% within the first month.", author: "Sarah Jenkins", role: "CMO, TechFlow" },
              { text: "Their technical expertise is unmatched. They built a complex SaaS architecture that scales beautifully and looks incredible.", author: "Marcus Thorne", role: "Founder, Nexus Data" },
              { text: "A truly professional agency. Clear communication, transparent timelines, and an end product that exceeded all our expectations.", author: "Elena Rodriguez", role: "Director, Elevate Health" },
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm"
              >
                <Quote className="w-10 h-10 text-[#2563EB]/20 mb-6" />
                <p className="text-[#475569] mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-[#0F172A]">{testimonial.author}</div>
                  <div className="text-sm text-[#2563EB]">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ — LIGHT */}
      <section className="py-32 bg-[#FFFFFF] text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#2563EB] mb-3 block">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F172A] mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-[#475569]">Everything you need to know about working with us.</p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* 12. FINAL CTA — DARK */}
      <section className="py-32 relative overflow-hidden bg-[#0B1220] text-white border-t border-[#263449]">
        <div className="absolute inset-0 bg-[#2563EB]/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#2563EB]/25 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#60A5FA] mb-3 block">Let's Connect</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8">
            Have an Idea? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2DD4BF]">Let's Build It.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Tell us what you're building. We'll help you turn your idea into a digital product that works, scales, and converts.
          </p>
          <Button href="/contact" size="lg" className="min-w-[200px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-[0_0_30px_rgba(37,99,235,0.4)]">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
