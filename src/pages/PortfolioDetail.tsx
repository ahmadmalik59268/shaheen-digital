import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/Button";

// Export this or move to a separate data file if needed globally.
export const portfolioData = [
  { 
    id: 1, 
    title: "FinTech Dashboard", 
    category: "Software", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", 
    tags: ["React", "Node.js"],
    client: "Global Finance Ltd",
    timeline: "3 Months",
    description: "A comprehensive dashboard for managing financial assets, tracking investments, and monitoring market trends in real-time. We engineered a scalable React application backed by a high-performance Node.js microservices architecture.",
    features: ["Real-time data visualization", "Secure authentication", "Customizable widgets", "Advanced reporting"],
    challenge: "The client needed a system capable of handling millions of real-time transactions without lag, while maintaining a user-friendly interface for non-technical users.",
    solution: "We implemented WebSocket connections for real-time updates and utilized Web Workers to offload heavy calculations from the main thread, resulting in a buttery-smooth 60fps experience."
  },
  { 
    id: 2, 
    title: "Aura E-Commerce", 
    category: "E-commerce", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", 
    tags: ["Next.js", "Shopify"],
    client: "Aura Beauty",
    timeline: "2 Months",
    description: "A headless Shopify e-commerce experience built with Next.js for blazing fast page loads and seamless transitions.",
    features: ["Headless architecture", "Sub-second page loads", "Dynamic cart", "Rich product filtering"],
    challenge: "High bounce rates due to slow page loads on their legacy monolithic Shopify theme.",
    solution: "Decoupled the frontend using Next.js and integrated with Shopify Storefront API to deliver a sub-second shopping experience."
  },
  // Add fallback data for the rest to avoid empty states
];

export default function PortfolioDetail() {
  const { id } = useParams();
  
  // Find project or use a fallback for now
  const project = portfolioData.find(p => p.id === Number(id)) || {
    title: "Project Name", 
    category: "Web Development", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Tailwind"],
    client: "Confidential Client",
    timeline: "Ongoing",
    description: "An innovative digital solution engineered to solve complex business challenges and drive measurable growth.",
    features: ["Modern Tech Stack", "Responsive Design", "SEO Optimized", "High Performance"],
    challenge: "The client needed a scalable digital presence.",
    solution: "We delivered a custom-built solution tailored to their specific needs."
  };

  return (
    <div className="w-full bg-light-bg min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 bg-primary-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/portfolio" className="inline-flex items-center text-slate-400 hover:text-dark-text transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary-accent text-sm font-bold uppercase tracking-wider">{project.category}</span>
              <div className="w-1 h-1 rounded-full bg-slate-100" />
              <div className="flex gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs text-dark-text/50 font-medium">{tag}</span>
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-dark-text mb-6">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] overflow-hidden mb-16 aspect-video max-h-[600px] bg-slate-100 shadow-2xl"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-black uppercase tracking-tight text-dark-text mb-6">About The Project</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                {project.description}
              </p>

              <h3 className="text-2xl font-bold text-dark-text mb-4">The Challenge</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {project.challenge}
              </p>

              <h3 className="text-2xl font-bold text-dark-text mb-4">Our Solution</h3>
              <p className="text-slate-600 leading-relaxed mb-12">
                {project.solution}
              </p>

              <h3 className="text-2xl font-bold text-dark-text mb-6">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-accent shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 sticky top-32">
                <h3 className="text-xl font-bold text-dark-text mb-6 pb-6 border-b border-slate-100">Project Info</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Client</div>
                    <div className="text-dark-text font-bold">{project.client}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Timeline</div>
                    <div className="text-dark-text font-bold">{project.timeline}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Services</div>
                    <div className="text-dark-text font-bold">{project.category}</div>
                  </div>
                </div>

                <div className="mt-10">
                  <Button href="/contact" className="w-full">
                    Start Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
