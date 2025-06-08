import { useEffect, useState } from "react";

const MysticWelcome = () => {
  const [hide, setHide] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 8000);
    const textTimer = setTimeout(() => setShowText(true), 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  const Orbs = Array.from({ length: 30 });

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-1000 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-full h-full overflow-hidden bg-black">

        {/* Background Gradient with stars shimmer */}
        <div
          className="absolute inset-0 -z-20 animate-bgPulse"
          style={{
            background:
              "radial-gradient(circle at center, #0c011a 0%, #1a0733 40%, #2e0a42 80%, #0c0f2c 100%)",
          }}
        ></div>

        {/* Mystic floating glowing orbs */}
        {Orbs.map((_, i) => {
          const size = 8 + Math.random() * 25;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const delay = Math.random() * 10;
          const duration = 12 + Math.random() * 10;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-fuchsia-500 opacity-20 blur-3xl"
              style={{
                width: size,
                height: size,
                top: `${posY}%`,
                left: `${posX}%`,
                animation: `floatOrb ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}

        {/* Center rotating glowing rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[350px] h-[350px] rounded-full border-[3px] border-fuchsia-600 opacity-50 animate-spinSlow"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-indigo-500 opacity-30 animate-spinSlow reverse"></div>
          <div className="absolute w-[650px] h-[650px] rounded-full border-8 border-purple-700 opacity-20 animate-pulseSlow"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 max-w-xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-500 to-indigo-300 animate-waveTyping">
            Hello World!
          </h1>
          {showText && (
            <p className="mt-6 text-2xl md:text-3xl font-medium text-white/90 text-center max-w-full animate-fadeIn">
              Welcome to my Portfolio.
            </p>
          )}
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes floatOrb {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
              opacity: 0.2;
            }
            50% {
              transform: translateY(-20px) translateX(10px);
              opacity: 0.5;
            }
          }

          @keyframes spinSlow {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.6;
              transform: scale(1.05);
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

          @keyframes fadeIn {
            from {opacity: 0; transform: translateY(20px);}
            to {opacity: 1; transform: translateY(0);}
          }

          @keyframes waveTyping {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(0.8) rotateX(90deg);
            }
            50% {
              opacity: 1;
              transform: translateY(-5px) scale(1.05) rotateX(0deg);
            }
            100% {
              transform: translateY(0px) scale(1) rotateX(0deg);
            }
          }

          .animate-spinSlow {
            animation: spinSlow 45s linear infinite;
          }

          .animate-spinSlow.reverse {
            animation-direction: reverse;
          }

          .animate-pulseSlow {
            animation: pulse 9s ease-in-out infinite;
          }

          .animate-waveTyping {
            display: inline-block;
            animation: waveTyping 2.5s ease-out forwards;
          }

          .animate-fadeIn {
            animation: fadeIn 1.4s ease forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MysticWelcome;
