import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "../components/ui/Button";
import { cn } from "../utils/cn";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full">
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-primary-bg relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-noise pointer-events-none z-0" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-dark-text mb-6">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Something Great</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Whether you need a custom software solution, a high-converting website, or a comprehensive digital strategy, our team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-dark-text mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-primary-accent flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-dark-text font-bold mb-1">Email Us</h4>
                      <p className="text-slate-500 text-sm mb-1">We'll respond within 24 hours.</p>
                      <a href="mailto:ahmadmalik59268@gmail.com" className="text-primary-accent font-bold hover:underline">ahmadmalik59268@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-primary-accent flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-dark-text font-bold mb-1">Call Us</h4>
                      <p className="text-slate-500 text-sm mb-1">Mon-Fri from 9am to 6pm.</p>
                      <a href="tel:03326109729" className="text-primary-accent font-bold hover:underline">0332 6109729</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-primary-accent flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-dark-text font-bold mb-1">Office</h4>
                      <p className="text-slate-500 text-sm">
                        Shahdara
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center flex-col bg-slate-100 backdrop-blur-sm">
                  <MapPin className="w-8 h-8 text-primary-accent mb-2" />
                  <span className="text-dark-text font-bold text-sm">Interactive Map</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-accent/5 rounded-bl-[100%] pointer-events-none" />
                <h3 className="text-2xl font-black uppercase tracking-tighter text-dark-text mb-6 relative z-10">Send Project Request</h3>
                
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center relative z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-dark-text mb-2">Request Sent Successfully!</h4>
                    <p className="text-slate-600">Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                        <input required type="text" id="name" className="w-full bg-slate-50 border border-slate-200 rounded-xl h-12 px-4 text-dark-text focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all shadow-inner" placeholder="Malik Ahmad" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                        <input required type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl h-12 px-4 text-dark-text focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all shadow-inner" placeholder="ahmadmalik59268@gmail.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-bold text-slate-700">Company (Optional)</label>
                        <input type="text" id="company" className="w-full bg-slate-50 border border-slate-200 rounded-xl h-12 px-4 text-dark-text focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all shadow-inner" placeholder="Your Company" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input required type="tel" id="phone" className="w-full bg-slate-50 border border-slate-200 rounded-xl h-12 px-4 text-dark-text focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all shadow-inner" placeholder="0332 6109729" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-bold text-slate-700">Service Needed</label>
                        <select required id="service" className="w-full bg-slate-50 border border-slate-200 rounded-xl h-12 px-4 text-dark-text focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all shadow-inner appearance-none cursor-pointer">
                          <option value="">Select a service...</option>
                          <option value="web">Web Development</option>
                          <option value="app">Mobile App Development</option>
                          <option value="software">Custom Software</option>
                          <option value="seo">SEO & Marketing</option>
                          <option value="design">Graphic Design</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-bold text-slate-700">Budget Range</label>
                        <select required id="budget" className="w-full bg-slate-50 border border-slate-200 rounded-xl h-12 px-4 text-dark-text focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all shadow-inner appearance-none cursor-pointer">
                          <option value="">Select a range...</option>
                          <option value="1k-5k">$1,000 - $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k+">$25,000+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="details" className="text-sm font-bold text-slate-700">Project Details</label>
                      <textarea required id="details" rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-dark-text focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all shadow-inner resize-none" placeholder="Tell us about your project goals, timeline, and requirements..."></textarea>
                    </div>

                    <Button type="submit" className="w-full h-14 text-lg shadow-xl" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Project Request"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
