import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-10 md:mb-16 px-2 ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 relative text-white tracking-wider uppercase break-words">
        {title}
        <span className="absolute w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 -bottom-3 left-1/2 transform -translate-x-1/2 rounded-full shadow-[0_0_14px_rgba(168,85,247,0.8)]" />
      </h2>
      {subtitle && (
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg opacity-90 max-w-2xl mx-auto mt-6 font-light leading-relaxed break-words px-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};
