import { useParams, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { servicesData } from "../data/services";
import { Button } from "../components/ui/Button";

// Dummy detailed content for demo purposes
const getDetailedContent = (id: string) => {
  return {
    benefits: [
      "Increased Operational Efficiency",
      "Higher Conversion Rates",
      "Scalable Architecture",
      "Enhanced User Experience"
    ],
    features: [
      "Custom UI/UX Design tailored to your brand",
      "Mobile-first responsive development",
      "Secure API integrations",
      "High-performance infrastructure setup",
      "Continuous testing and QA",
      "Post-launch support and maintenance"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS", "AWS", "PostgreSQL"],
    process: [
      { step: "01", title: "Discovery", desc: "We analyze your business goals and technical requirements." },
      { step: "02", title: "Strategy", desc: "Creating a comprehensive roadmap and architecture plan." },
      { step: "03", title: "Execution", desc: "Agile development with regular milestones and reviews." },
      { step: "04", title: "Launch", desc: "Rigorous testing and a seamless deployment process." }
    ]
  };
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const details = getDetailedContent(service.id);
  const Icon = service.icon;

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 border border-slate-800 text-cyan-400 font-medium mb-6">
              <Icon className="w-5 h-5" />
              Service Offering
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-dark-text mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              {service.shortDesc} We provide end-to-end solutions designed to scale with your business and deliver measurable results.
            </p>
            <Button href="/contact" size="lg">Request a Quote</Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 w-full max-w-md hidden md:block"
          >
            <div className="aspect-square bg-slate-950 border border-slate-800 p-12 relative overflow-hidden glow-effect">
              <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20" />
              <div className="w-full h-full border border-slate-800 bg-slate-900 flex items-center justify-center relative z-10">
                <Icon className="w-32 h-32 text-cyan-400/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-dark-text mb-8">What's Included</h2>
              <ul className="space-y-4">
                {details.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 border border-slate-800 hover:bg-slate-800 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-dark-text mb-8">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {details.benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-secondary-bg rounded-2xl border border-slate-200"
                  >
                    <div className="w-10 h-10 bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 text-xl font-black">
                      {i + 1}
                    </div>
                    <h4 className="text-dark-text font-medium">{benefit}</h4>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-cyan-500/10 border border-cyan-500/20">
                <h3 className="text-xl font-black uppercase tracking-tighter text-dark-text mb-4">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-dark-text mb-4">Our Process</h2>
            <p className="text-slate-400">A proven methodology to ensure your project is delivered on time, within budget, and above expectations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {details.process.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i !== details.process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-slate-800 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-slate-950 border border-slate-800 flex items-center justify-center text-3xl font-black uppercase tracking-tighter text-cyan-400 mb-6 shadow-lg shadow-cyan-900/20">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-bold text-dark-text mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-dark-text mb-8">Ready to start your {service.title.toLowerCase()} project?</h2>
          <Button href="/contact" size="lg">Get a Free Proposal</Button>
        </div>
      </section>
    </div>
  );
}
