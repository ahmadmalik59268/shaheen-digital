import { motion } from "motion/react";
import { ArrowRight, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Growth Platform",
    client: "Aura Boutique",
    result: "+180% online conversions",
    desc: "Redesigned their legacy Shopify store into a custom headless Next.js solution, significantly improving load times and user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Enterprise SaaS Architecture",
    client: "Nexus Data",
    result: "Zero downtime scaling",
    desc: "Built a highly scalable multi-tenant architecture that allowed the client to onboard 10x more users without performance degradation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Healthcare Mobile Application",
    client: "Elevate Health",
    result: "4.8/5 user satisfaction",
    desc: "Developed a cross-platform mobile app for patient scheduling and telemedicine, focusing on strict security and accessible UI.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
  }
];

export default function CaseStudies() {
  return (
    <div className="w-full">
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-primary-bg relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-accent/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-dark-text mb-6">
              Results That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Speak</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Discover how we've helped businesses overcome technical challenges and achieve exceptional growth through strategic digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {caseStudies.map((study, i) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative overflow-hidden aspect-[4/3] rounded-3xl shadow-2xl border border-slate-200 bg-white group">
                  <div className="absolute inset-0 bg-primary-accent/5 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
              </div>
              
              <div className="flex-1 w-full lg:px-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-accent text-dark-text text-sm font-bold shadow-md shadow-primary-accent/30 mb-6">
                  <BarChart className="w-4 h-4" />
                  {study.result}
                </div>
                <h3 className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-2">{study.client}</h3>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-dark-text mb-6">{study.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {study.desc}
                </p>
                
                <div className="flex gap-4">
                  <Button variant="outline" href={`#`} className="border-slate-300 text-dark-text hover:bg-slate-50">Read Case Study</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="py-24 bg-secondary-bg text-center relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20 pointer-events-none z-0" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-dark-text mb-8">Ready to write your success story?</h2>
          <Button href="/contact" size="lg" className="shadow-[0_0_20px_rgba(47,128,255,0.3)]">Start Your Project</Button>
        </div>
      </section>
    </div>
  );
}
