import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Future of React: What to Expect in 2026",
    category: "Technology",
    date: "Oct 12, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Why Headless Commerce is the New Standard",
    category: "E-Commerce",
    date: "Sep 28, 2026",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Mastering Core Web Vitals for Better SEO",
    category: "SEO",
    date: "Sep 15, 2026",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: "Designing for Accessibility: A Practical Guide",
    category: "Design",
    date: "Aug 30, 2026",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    title: "Migrating from REST to GraphQL",
    category: "Development",
    date: "Aug 14, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 6,
    title: "How to Build a High-Converting Landing Page",
    category: "Marketing",
    date: "Jul 22, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Blog() {
  return (
    <div className="w-full">
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-primary-bg relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-dark-text mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Insights</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Expert perspectives on technology, design, marketing, and digital growth from the Shaheen Digital Marketing team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all hover:-translate-y-1"
              >
                <Link to={`/blog/${post.id}`} className="flex flex-col h-full">
                  <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-slate-100 backdrop-blur shadow-sm text-primary-accent text-xs font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-3 font-medium">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-dark-text mb-4 group-hover:text-primary-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 flex items-center text-primary-accent font-bold">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
