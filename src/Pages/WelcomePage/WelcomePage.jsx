import { useEffect, useState } from "react";

const WelcomePage = () => {
  const [hide, setHide] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 7000);
    const textTimer = setTimeout(() => setShowText(true), 1000);
    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  const bubbles = Array.from({ length: 20 });

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] w-full h-full flex items-center justify-center transition-opacity duration-1000 ${hide ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      <div className="relative w-full h-full bg-[#0f0c29] bg-gradient-to-br from-[#302b63] to-[#24243e] flex items-center justify-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute w-[120%] h-[120%] -z-10 animate-backgroundMove bg-[radial-gradient(circle_at_20%_20%,#ff00cc,#333399,transparent_70%)] opacity-40"></div>

        {/* Floating Bubbles */}
        {bubbles.map((_, i) => {
          const size = Math.random() * 40 + 20;
          const left = Math.random() * 100;
          const delay = Math.random() * 15;
          const duration = 10 + Math.random() * 15;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-10 blur-md"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: "-100px",
                animation: `rise ${duration}s ease-in infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}

        {/* Text Content */}
        <div className="z-10 text-center px-8 py-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl max-w-2xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 animate-textGradient">
            &lt;Hello World! /&gt;
          </h1>

          {showText && (
            <h2 className="text-lg md:text-2xl font-medium text-white/90 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white/70 w-fit mx-auto">
              Welcome to my Portfolio.
            </h2>
          )}
        </div>

        {/* CSS */}
        <style>{`
          @keyframes rise {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
            10% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.15;
            }
            100% {
              transform: translateY(-120vh) scale(1.2);
              opacity: 0;
            }
          }

          @keyframes backgroundMove {
            0%, 100% {
              transform: translateX(0%) translateY(0%);
            }
            50% {
              transform: translateX(-5%) translateY(-5%);
            }
          }

          @keyframes textGradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          .animate-textGradient {
            background-size: 200% 200%;
            animation: textGradient 4s ease infinite;
          }

          .animate-typing {
            animation: typing 2s steps(30, end) forwards, blink 0.8s step-end infinite;
          }

          @keyframes blink {
            50% {
              border-color: transparent;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default WelcomePage;
