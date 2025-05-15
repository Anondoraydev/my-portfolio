import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const WelcomePage = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setHide(true);
    }, 7000);
    return () => clearTimeout(fadeTimer);
  }, []);

  const bubbles = Array(30).fill(0);

  return (
    <div
      className={`fixed top-0 left-0 z-[999] h-screen w-screen flex items-center justify-center transition-opacity duration-1000 ${hide ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      <div className="relative w-full h-full overflow-hidden text-white flex justify-center items-center bg-gradient-to-tr from-blue-900 via-indigo-900 to-black">
        {/* Wave Animated SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full -z-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1e40af"
            fillOpacity="0.7"
            d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,144C672,107,768,85,864,85.3C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,144C672,107,768,85,864,85.3C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

                M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,117.3C672,149,768,203,864,197.3C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

                M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,144C672,107,768,85,864,85.3C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
              "
            />
          </path>
        </svg>

        {/* Floating bubbles background */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          {bubbles.map((_, i) => {
            const size = Math.random() * 80 + 20; // 20px থেকে 100px পর্যন্ত
            const left = Math.random() * 100; // %left
            const delay = Math.random() * 20; // seconds
            const duration = 15 + Math.random() * 15; // seconds
            const opacity = 0.1 + Math.random() * 0.3;

            return (
              <div
                key={i}
                className="absolute rounded-full bg-purple-400"
                style={{
                  width: size,
                  height: size,
                  left: `${left}%`,
                  bottom: `-120px`,
                  opacity: opacity,
                  animation: `floatUp ${duration}s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                  filter: "blur(8px)",
                }}
              />
            );
          })}
        </div>

        {/* Center content */}
        <div className="relative z-10 text-center px-8 py-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-lg max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-text-gradient">
            <Typewriter words={["<Hello World! />"]} />
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold text-white/80">
            <Typewriter
              words={["Welcome to my Portfolio."]}
              loop={1}
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes floatUp {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.2;
            }
            90% {
              opacity: 0;
              transform: translateY(-120vh) scale(1.2);
            }
            100% {
              opacity: 0;
              transform: translateY(-120vh) scale(1.2);
            }
          }

          @keyframes text-gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          .animate-text-gradient {
            background-size: 200% 200%;
            animation: text-gradient 5s ease infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default WelcomePage;
