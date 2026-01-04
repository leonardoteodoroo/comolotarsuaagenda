import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  icon = true,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold transition-all duration-300 rounded-xl transform hover:-translate-y-1 focus:outline-none";
  
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30",
    secondary: "bg-white text-slate-900 hover:bg-slate-50 shadow-sm border border-slate-200",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};