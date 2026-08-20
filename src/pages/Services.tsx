import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "../data/services";
import { Button } from "../components/ui/Button";

export default function Services() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-primary-bg relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-accent/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-dark-text mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Services</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Comprehensive digital solutions engineered to solve complex business challenges and accelerate growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-accent/5 rounded-bl-[100%] transition-transform group-hover:scale-110 pointer-events-none" />
                <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-primary-accent mb-6 group-hover:scale-110 group-hover:shadow-md transition-all relative z-10">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-dark-text mb-4 relative z-10 group-hover:text-primary-accent transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow relative z-10">
                  {service.shortDesc}
                </p>
                <ul className="space-y-3 mb-8 relative z-10">
                  {[1, 2, 3].map((_, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary-accent flex-shrink-0" />
                      <span>Key benefit or feature included</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="inline-flex items-center justify-center w-full h-12 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold uppercase text-dark-text group-hover:border-primary-accent group-hover:text-primary-accent transition-colors shadow-inner relative z-10"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-24 bg-secondary-bg relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20 pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-dark-text mb-6">Not sure which service you need?</h2>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            Let's schedule a discovery call to audit your current digital presence and map out a strategic growth plan tailored for your business.
          </p>
          <Button href="/contact" size="lg" className="shadow-[0_0_20px_rgba(47,128,255,0.3)]">Book a Free Consultation</Button>
        </div>
      </section>
    </div>
  );
}
