import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../../utils/cn";

const faqs = [
  { question: "How much does a website cost?", answer: "Our website projects typically start at $3,500. The final cost depends on the complexity, features required, and the scope of custom design and development." },
  { question: "How long does website development take?", answer: "A standard corporate website takes 4-6 weeks to launch. More complex e-commerce or custom software projects can take 2-4 months." },
  { question: "Do you provide website maintenance?", answer: "Yes, we offer ongoing maintenance and support packages to ensure your digital products remain secure, up-to-date, and optimized for performance." },
  { question: "Can you develop custom software?", answer: "Absolutely. We specialize in custom web applications, SaaS platforms, and enterprise software using React, Node.js, and modern cloud infrastructure." },
  { question: "Do you provide SEO services?", answer: "Yes, all our websites are built with technical SEO best practices. We also offer ongoing monthly SEO services to improve your rankings and drive organic traffic." },
  { question: "Can you manage social media?", answer: "Yes, we create comprehensive social media strategies, design high-quality creative assets, and manage daily publishing and community engagement across all major platforms." },
  { question: "Do you develop Android and iOS apps?", answer: "Yes, we build high-performance mobile applications for both iOS and Android platforms using frameworks like React Native and Flutter." },
  { question: "Do you provide graphic design?", answer: "Yes, our creative team handles everything from brand identity and logo design to marketing collateral, UI/UX design, and social media graphics." },
  { question: "Can you integrate APIs?", answer: "Yes, we have extensive experience integrating third-party APIs (payment gateways, CRM systems, ERPs, shipping providers) and developing custom REST or GraphQL APIs for your applications." },
  { question: "Do you provide long-term support?", answer: "Yes, we view our client relationships as long-term partnerships. We offer flexible retainers for continued development, design, marketing, and technical support." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="mb-4">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={cn(
                "w-full flex items-center justify-between p-6 border border-slate-200 rounded-2xl text-left transition-all",
                isOpen ? "bg-secondary-bg border-primary-accent" : "bg-primary-bg hover:bg-secondary-bg hover:border-slate-200"
              )}
            >
              <span className={cn("text-lg font-bold transition-colors", isOpen ? "text-primary-accent" : "text-dark-text")}>
                {faq.question}
              </span>
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ml-4",
                isOpen ? "bg-primary-accent/20 text-primary-accent" : "bg-white/5 text-text-secondary"
              )}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-2 text-text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
