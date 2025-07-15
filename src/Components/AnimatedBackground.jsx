import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const bgRef = useRef(null);
  const timeouts = useRef([]);
  const hue = useRef(0); // Mouse trail hue shift tracker

  useEffect(() => {
    const container = bgRef.current;
    if (!container) return;

    // 🌈 Mouse dot trail with smooth color shifting
    const handleMouseMove = e => {
      const dot = document.createElement("div");

      // Smooth color shifting using HSL
      const currentHue = hue.current % 360;
      hue.current += 5; // speed of color change (adjust if needed)
      const color = `hsl(${currentHue}, 100%, 70%)`;

      Object.assign(dot.style, {
        position: "absolute",
        width: "4px",
        height: "4px",
        background: color,
        borderRadius: "50%",
        top: `${e.clientY}px`,
        left: `${e.clientX}px`,
        pointerEvents: "none",
        opacity: 0.8,
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        boxShadow: `0 0 6px ${color}, 0 0 12px ${color}`,
        transition: "opacity 0.5s ease-out",
      });
      container.appendChild(dot);

      setTimeout(() => {
        dot.style.opacity = "0";
        setTimeout(() => container.removeChild(dot), 500);
      }, 80);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 🌟 Stars setup
    const stars = [];
    const centerXPercent = 50;
    const centerYPercent = 50;

    for (let i = 0; i < 80; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 1.5 + 0.5;
      Object.assign(star.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        top: `${centerYPercent}%`,
        left: `${centerXPercent}%`,
        backgroundColor: "white",
        opacity: Math.random() * 0.2 + 0.8,
        pointerEvents: "none",
      });
      container.appendChild(star);
      stars.push(star);

      gsap.set(star, {
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
      });

      const animateStar = () => {
        gsap.to(star, {
          duration: Math.random() * 5 + 7,
          x: "+=" + (Math.random() * 300 - 150),
          y: "+=" + (Math.random() * 300 - 150),
          opacity: Math.random() * 0.2 + 0.8,
          ease: "power1.inOut",
          onComplete: animateStar,
        });
      };
      animateStar();
    }

    // 🌠 Shooting stars
    const createShootingStar = () => {
      const star = document.createElement("div");
      Object.assign(star.style, {
        position: "absolute",
        width: "100px",
        height: "2px",
        background: "linear-gradient(90deg, white, transparent)",
        top: `${Math.random() * 60 + 10}%`,
        left: "-10%",
        opacity: 0.8,
        transform: "rotate(45deg)",
        pointerEvents: "none",
      });
      container.appendChild(star);
      gsap.to(star, {
        x: "140vw",
        y: "140vh",
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => container.removeChild(star),
      });
      const next = setTimeout(createShootingStar, Math.random() * 6000 + 3000);
      timeouts.current.push(next);
    };
    createShootingStar();

    // 🪐 Floating Orbs
    for (let i = 0; i < 10; i++) {
      const orb = document.createElement("div");
      const size = Math.random() * 100 + 100;
      Object.assign(orb.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        background:
          "radial-gradient(circle, rgba(0,255,255,0.07), transparent)",
        borderRadius: "50%",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        pointerEvents: "none",
        filter: "blur(40px)",
        animation: `float ${
          Math.random() * 20 + 10
        }s ease-in-out infinite alternate`,
      });
      container.appendChild(orb);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed top-0 left-0 w-screen h-screen -z-50 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #020014 0%, #000000 100%)",
        animation: "bgPulse 25s ease-in-out infinite",
        cursor: "none",
      }}>
      {/* Aurora Light */}
      <div className="absolute w-full h-full mix-blend-screen">
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500 opacity-10 blur-3xl animate-aurora"></div>
      </div>

      {/* Grid Layer */}
      <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-5 animate-slow-pan mix-blend-overlay"></div>

      {/* Nebula Cloud */}
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03),_transparent_60%)] blur-2xl animate-cloud"></div>

      {/* Galaxy Swirl */}
      <div className="absolute w-full h-full bg-[radial-gradient(circle,_rgba(0,200,255,0.04),_transparent_70%)] animate-rotate-slow blur-3xl mix-blend-soft-light"></div>

      {/* Lens Flare */}
      <div className="absolute w-full h-1 blur-3xl bg-gradient-to-r from-transparent via-white to-transparent opacity-5 animate-lensflare"></div>

      <style>{`
        @keyframes bgPulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.1); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-30px); }
        }
        @keyframes aurora {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes cloud {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        @keyframes lensflare {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slow-pan {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-aurora {
          animation: aurora 50s linear infinite;
        }
        .animate-cloud {
          animation: cloud 40s ease-in-out infinite alternate;
        }
        .animate-slow-pan {
          animation: slow-pan 60s linear infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 100s linear infinite;
        }
        .animate-lensflare {
          animation: lensflare 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
