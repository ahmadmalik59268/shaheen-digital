import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of React: What to Expect in 2026",
    category: "Technology",
    date: "Oct 12, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
    content: `React continues to evolve, and 2026 brings some of the most exciting updates we've seen since the introduction of Hooks. As developers, staying ahead of these trends is crucial for building performant and scalable web applications.

### Server Components Mature
React Server Components (RSC) have moved past the experimental phase and are now the standard way to build React applications. By executing components on the server and sending only the essential HTML and JavaScript to the client, we've seen massive improvements in initial load times and time-to-interactive metrics.

### The Rise of Edge Rendering
Moving computation closer to the user is no longer a luxury—it's an expectation. With improved edge runtime support in major frameworks, React applications can now serve personalized content with near-zero latency worldwide.

### Automated Performance Optimization
The React compiler has finally reached a state where manual memoization (useMemo, useCallback) is largely a thing of the past. The compiler automatically determines what parts of your UI need to be cached, resulting in perfectly optimized applications out of the box without the cognitive overhead.

### What This Means for Your Business
If you're planning a new digital product, adopting these modern React paradigms will ensure your application remains competitive, fast, and easier to maintain for years to come.`
  },
  {
    id: 2,
    title: "Why Headless Commerce is the New Standard",
    category: "E-Commerce",
    date: "Sep 28, 2026",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
    content: `Traditional monolithic e-commerce platforms are increasingly being replaced by headless architectures. This shift separates the front-end presentation layer from the back-end commerce engine, unlocking unprecedented flexibility.

By decoupling the frontend, brands can now create lightning-fast shopping experiences using modern frameworks like Next.js, while relying on robust platforms like Shopify or BigCommerce for inventory and checkout processing. This approach significantly improves Core Web Vitals, leading to better SEO rankings and higher conversion rates.`
  },
  {
    id: 3,
    title: "Mastering Core Web Vitals for Better SEO",
    category: "SEO",
    date: "Sep 15, 2026",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000",
    content: `Google's Core Web Vitals are no longer just tie-breakers; they are fundamental requirements for ranking on the first page. In this article, we break down the three main metrics: LCP, FID, and CLS, and provide actionable technical strategies to optimize them.

We explore advanced image optimization techniques, the impact of third-party scripts, and how modern web architecture can automatically solve many of the traditional performance bottlenecks that drag down SEO scores.`
  },
  {
    id: 4,
    title: "Designing for Accessibility: A Practical Guide",
    category: "Design",
    date: "Aug 30, 2026",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
    content: `Accessibility (a11y) should never be an afterthought. Building inclusive digital experiences not only expands your potential audience but often improves the overall user experience for everyone.

This guide covers the essentials of WCAG compliance, including semantic HTML structure, proper ARIA attributes, keyboard navigation patterns, and color contrast requirements. We also discuss how to bake accessibility testing into your CI/CD pipeline.`
  },
  {
    id: 5,
    title: "Migrating from REST to GraphQL",
    category: "Development",
    date: "Aug 14, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    content: `As applications grow in complexity, traditional REST APIs often suffer from over-fetching or under-fetching data. GraphQL solves this by allowing clients to request exactly the data they need, nothing more, nothing less.

We share our agency's proven methodology for migrating legacy REST systems to GraphQL, including schema design best practices, handling authentication and authorization, and optimizing database queries with dataloaders to prevent the N+1 problem.`
  },
  {
    id: 6,
    title: "How to Build a High-Converting Landing Page",
    category: "Marketing",
    date: "Jul 22, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    content: `A landing page has one job: conversion. Whether you're capturing leads, driving app downloads, or selling a product, the anatomy of a successful landing page relies on consumer psychology and frictionless design.

In this breakdown, we analyze the critical elements of high-converting pages, from compelling value propositions and directional visual cues to strategic social proof placement and frictionless form design.`
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center px-6 bg-light-bg">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter text-dark-text mb-4">Article Not Found</h1>
          <p className="text-slate-500 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-primary-accent hover:underline font-bold">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-light-bg">
      {/* Article Header */}
      <section className="pt-32 pb-32 bg-primary-bg border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center text-text-secondary hover:text-dark-text transition-colors mb-8 font-bold text-sm tracking-wide">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
          
          <div className="mb-6">
            <span className="px-4 py-2 bg-primary-accent/10 text-primary-accent text-xs font-bold uppercase tracking-widest border border-primary-accent/20 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-dark-text mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-text-secondary text-sm font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Shaheen Digital Team
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full max-w-5xl mx-auto px-6 -mt-16 relative z-20">
        <div className="aspect-[21/9] w-full border-4 border-white bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-primary-accent hover:prose-a:text-secondary-accent">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return <h3 key={idx} className="text-3xl text-dark-text mt-12 mb-6">{paragraph.replace('### ', '')}</h3>;
              }
              return <p key={idx} className="text-slate-600 leading-relaxed mb-6">{paragraph}</p>;
            })}
          </div>

          {/* Share / Footer */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
            <div className="text-dark-text font-black uppercase tracking-tighter text-xl">Shaheen Digital</div>
            <button className="flex items-center gap-2 text-slate-500 hover:text-primary-accent transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Share</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}