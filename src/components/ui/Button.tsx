import * as React from "react";
import { cn } from "../../utils/cn";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-1";
    
    const variants = {
      primary: "bg-primary-accent text-white shadow-md hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:bg-blue-700",
      secondary: "bg-white text-primary-accent border-2 border-primary-accent hover:bg-blue-50 shadow-sm",
      outline: "border border-slate-200 bg-transparent text-dark-text hover:border-primary-accent hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] hover:text-primary-accent",
      ghost: "hover:bg-slate-100 text-text-secondary hover:text-dark-text"
    };

    const sizes = {
      sm: "h-9 px-5 text-sm",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base"
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (href.startsWith("http") || href.startsWith("#")) {
         return (
           <a href={href} className={classes}>
             {children}
           </a>
         );
      }
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
