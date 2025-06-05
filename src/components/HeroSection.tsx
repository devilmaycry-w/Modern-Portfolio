import React from 'react';

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

interface DotPatternProps {
  width?: any;
  height?: any;
  x?: any;
  y?: any;
  cx?: any;
  cy?: any;
  cr?: any;
  className?: string;
  [key: string]: any;
}

const DotPattern: React.FC<DotPatternProps> = ({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 4,
  cy = 4,
  cr = 1,
  className,
  ...props
}) => {
  const id = React.useId();
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-white/10",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden"
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 opacity-20">
        <DotPattern width={40} height={40} cx={20} cy={20} cr={0.5} />
      </div>
      
      {/* Animated corner dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative border border-white/20 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl overflow-hidden">
          {/* Frame dots pattern */}
          <div className="absolute inset-0">
            <DotPattern width={20} height={20} cx={10} cy={10} cr={0.75} className="opacity-30" />
          </div>
          
          {/* Corner accents */}
          <div className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full" />
          <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full" />
          <div className="absolute bottom-3 left-3 w-2 h-2 bg-white rounded-full" />
          <div className="absolute bottom-3 right-3 w-2 h-2 bg-white rounded-full" />

          <div className="relative z-20 py-16 px-6 sm:py-20 sm:px-12 text-center">
            <p className="text-sm sm:text-base text-white/70 mb-2 tracking-widest animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              HELLO, I'M
            </p>
            
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                <span 
                  className="inline-block animate-fade-in opacity-0 font-argent"
                  style={{ 
                    animationDelay: '0.4s',
                    letterSpacing: '0.5px'
                  }}
                >
                  Ankrit Maity
                </span>
              </h1>
            </div>
             
            <div className="max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
                <span className="font-medium text-white">Java Backend Specialist</span> crafting robust, scalable solutions with modern frameworks.
                <br />
                <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 animate-gradient">
                  Vibe Coding & Prompt Engineering for fast pace world.
                </span>
              </p>
            </div>
            
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
              <a 
                href="#contact"
                className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 rounded-lg hover:bg-white/90 transition-all duration-300 font-medium tracking-wide shadow-lg hover:shadow-xl"
              >
                Get In Touch
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @font-face {
          font-family: 'Argent CF';
          src: url('/fonts/ArgentCF-Regular.woff2') format('woff2'),
               url('/fonts/ArgentCF-Regular.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
        
        .font-argent {
          font-family: 'Argent CF', serif;
          font-weight: normal;
          font-style: italic;
          letter-spacing: 1px;
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;