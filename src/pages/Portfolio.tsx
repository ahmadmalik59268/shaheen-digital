import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Websites", "E-commerce", "Mobile Apps", "Software", "Branding", "Marketing"];

const portfolioData = [
  { id: 1, title: "FinTech Dashboard", category: "Software", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", tags: ["React", "Node.js"] },
  { id: 2, title: "Aura E-Commerce", category: "E-commerce", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", tags: ["Next.js", "Shopify"] },
  { id: 3, title: "HealthConnect", category: "Mobile Apps", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000", tags: ["React Native"] },
  { id: 4, title: "Nexus Corporate", category: "Websites", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000", tags: ["React", "CMS"] },
  { id: 5, title: "Lumina Branding", category: "Branding", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000", tags: ["Figma", "Illustrator"] },
  { id: 6, title: "Logistics SaaS", category: "Software", image: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?auto=format&fit=crop&q=80&w=1000", tags: ["Vue", "Python"] },
  { id: 7, title: "Artisan Marketplace", category: "E-commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000", tags: ["WooCommerce"] },
  { id: 8, title: "FitLife Tracker", category: "Mobile Apps", image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=1000", tags: ["Flutter", "Firebase"] },
  { id: 9, title: "Social Growth Campaign", category: "Marketing", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000", tags: ["SEO", "Social Media"] },
  { id: 10, title: "Prime Real Estate", category: "Websites", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000", tags: ["Next.js", "Tailwind"] },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = portfolioData.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="w-full">
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-primary-bg relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-accent/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-dark-text mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Portfolio</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Explore our recent projects and see how we've helped ambitious brands transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-light-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm uppercase tracking-widest font-bold rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-primary-accent text-dark-text shadow-lg shadow-primary-accent/30"
                    : "bg-white border border-slate-200 text-slate-500 hover:text-primary-accent hover:border-primary-accent/50 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group cursor-pointer perspective-1000"
                >
                  <Link to={`/portfolio/${project.id}`} className="block h-full w-full">
                    <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/3] bg-slate-100 border border-slate-200 transition-transform duration-500 ease-out group-hover:[transform:rotateX(2deg)_rotateY(-2deg)_scale(1.02)] shadow-sm group-hover:shadow-2xl group-hover:shadow-primary-accent/10">
                      <div className="absolute inset-0 bg-dark-text/5 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <div className="w-16 h-16 rounded-full bg-white text-primary-accent shadow-xl flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-primary-accent text-sm font-bold uppercase tracking-wider">{project.category}</span>
                      <div className="w-1 h-1 rounded-full bg-slate-300" />
                      <div className="flex gap-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs text-slate-500 font-medium">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-dark-text group-hover:text-primary-accent transition-colors">{project.title}</h3>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
