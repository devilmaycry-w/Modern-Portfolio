import React from "react";

const cn = (...classes: any[]) => classes.filter(Boolean).join(" ");

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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden bg-black"
    >
      {/* Indigo Cosmos Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.25), transparent 70%), #000000",
        }}
      />

      {/* Subtle dot grid background */}
      <div className="absolute inset-0 opacity-30 z-0 mix-blend-screen">
        <DotPattern width={40} height={40} cx={20} cy={20} cr={0.5} />
      </div>

      {/* Animated corner dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.4s" }}
        />
        <div
          className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.6s" }}
        />
        <div
          className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.8s" }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div
            className={cn(
              "relative rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500",
              "bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
            )}
        >
          {/* Frame dots pattern */}
          <div className="absolute inset-0">
            <DotPattern
              width={20}
              height={20}
              cx={10}
              cy={10}
              cr={0.75}
              className="opacity-30"
            />
          </div>

          {/* Corner accents */}
          <div className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full" />
          <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full" />
          <div className="absolute bottom-3 left-3 w-2 h-2 bg-white rounded-full" />
          <div className="absolute bottom-3 right-3 w-2 h-2 bg-white rounded-full" />

          {/* Hero Text with subtle Violet Storm background */}
          <div className="relative z-20 py-16 px-6 sm:py-20 sm:px-12 text-center">
            {/* Subtle Violet Storm Glow */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.18), transparent 70%)",
                opacity: 0.7,
              }}
            />
            <div className="relative z-10">
              <p
                className="text-sm sm:text-base text-white/70 mb-2 tracking-widest animate-fade-in opacity-0"
                style={{ animationDelay: "0.2s" }}
              >
                HELLO, I'M
              </p>

              <div className="mb-6">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
    <span
      className="inline-block animate-fade-in opacity-0 font-argent text-white"
      style={{ animationDelay: "0.4s", letterSpacing: "0.5px" }}
    >
      Ankrit Maity
    </span>
  </h1>
</div>



              <div className="max-w-2xl mx-auto">
                <p
                  className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 leading-relaxed animate-fade-in opacity-0"
                  style={{ animationDelay: "0.8s" }}
                >
                  <span className="font-medium text-white/80">
                    From building robust <span className="font-bold">Java backend projects</span> to designing
                    complete full-stack experiences.
                  </span>
                </p>
              </div>

              {/* CTA Button */}
              <div
                className="animate-fade-in opacity-0"
                style={{ animationDelay: "1s" }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-3.5 bg-white text-gray-900 rounded-lg hover:bg-white/90 transition-all duration-300 font-medium tracking-wide shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                  <svg
                    className="w-5 h-5 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
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

          /* Nebula gradient effect for hero text */
          .nebula-gradient-text {
            background: linear-gradient(90deg, #7f5af0 0%, #00cfff 40%, #ff6ac1 80%, #fff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
          }
      `}</style>
    </section>
  );
};

export default HeroSection;
