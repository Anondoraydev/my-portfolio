import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBackground = () => {
  const bgRef = useRef(null);
  const starsRef = useRef([]);
  const timeouts = useRef([]);

  useEffect(() => {
    const container = bgRef.current;
    if (!container) return;

    starsRef.current = [];
    const centerXPercent = 50;
    const centerYPercent = 50;

    // ১০০টা স্টার (আগের ৮০ এর জায়গায়)
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 1.5 + 0.5;
      Object.assign(star.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        top: `${centerYPercent}%`,
        left: `${centerXPercent}%`,
        backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.4})`,
        boxShadow: `0 0 ${Math.random() * 3 + 1}px rgba(255,255,255,0.8)`,
        opacity: Math.random() * 0.5 + 0.5,
        pointerEvents: "none",
        transition: "top 3s ease, left 3s ease, opacity 3s ease",
      });
      container.appendChild(star);
      starsRef.current.push(star);
    }

    const scatterStars = () => {
      starsRef.current.forEach((star) => {
        const newTop = Math.random() * 80 + 10;
        const newLeft = Math.random() * 80 + 10;
        star.style.top = `${newTop}%`;
        star.style.left = `${newLeft}%`;
        star.style.opacity = Math.random() * 0.5 + 0.5;
      });
    };

    const scatterTimeout = setTimeout(scatterStars, 200);
    timeouts.current.push(scatterTimeout);

    const animateStars = () => {
      starsRef.current.forEach((star) => {
        const currentTop = parseFloat(star.style.top);
        const currentLeft = parseFloat(star.style.left);
        const newTop = Math.min(90, Math.max(10, currentTop + (Math.random() * 4 - 2)));
        const newLeft = Math.min(90, Math.max(10, currentLeft + (Math.random() * 4 - 2)));
        star.style.top = `${newTop}%`;
        star.style.left = `${newLeft}%`;
        star.style.opacity = Math.random() * 0.5 + 0.5;
      });
    };

    const starInterval = setInterval(animateStars, 3000);
    timeouts.current.push(starInterval);

    // নতুন: ছোট গ্লো পয়েন্টস যোগ করা
    for (let i = 0; i < 20; i++) {
      const glow = document.createElement("div");
      const size = Math.random() * 6 + 4;
      Object.assign(glow.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        top: `${Math.random() * 90 + 5}%`,
        left: `${Math.random() * 90 + 5}%`,
        backgroundColor: "rgba(0, 255, 255, 0.3)",
        filter: "blur(10px)",
        pointerEvents: "none",
        animation: `twinkle ${5 + Math.random() * 5}s ease-in-out infinite alternate`,
      });
      container.appendChild(glow);
    }

    const createShootingStar = () => {
      const star = document.createElement("div");
      Object.assign(star.style, {
        position: "absolute",
        width: "120px",
        height: "2.5px",
        background: "linear-gradient(90deg, #a0eaff, transparent)",
        top: `${Math.random() * 60 + 10}%`,
        left: "-10%",
        opacity: 0.8,
        transform: "rotate(45deg)",
        pointerEvents: "none",
        filter: "drop-shadow(0 0 6px #00f6ff)",
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
      const next = setTimeout(createShootingStar, Math.random() * 5000 + 3000);
      timeouts.current.push(next);
    };
    createShootingStar();

    for (let i = 0; i < 10; i++) {
      const orb = document.createElement("div");
      const size = Math.random() * 100 + 100;
      Object.assign(orb.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        background:
          "radial-gradient(circle, rgba(0,255,255,0.1), transparent)",
        borderRadius: "50%",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        pointerEvents: "none",
        filter: "blur(40px)",
        animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite alternate`,
      });
      container.appendChild(orb);
    }

    // নতুন: ছোট ছোট নীল টপ-লাইট পয়েন্টস (রাতের আকাশের রঙের সাথে মিল রেখে)
    for (let i = 0; i < 20; i++) {
      const lightDot = document.createElement("div");
      const size = Math.random() * 3 + 1.5;
      Object.assign(lightDot.style, {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        top: `${Math.random() * 90 + 5}%`,
        left: `${Math.random() * 90 + 5}%`,
        backgroundColor: "rgba(100, 200, 255, 0.4)",
        boxShadow: `0 0 ${size * 2}px rgba(100, 200, 255, 0.7)`,
        pointerEvents: "none",
        animation: `twinkle ${4 + Math.random() * 6}s ease-in-out infinite alternate`,
      });
      container.appendChild(lightDot);
    }

    return () => {
      timeouts.current.forEach(clearTimeout);
      clearInterval(starInterval);
      // ক্লিনআপ - পুরো কন্টেইনার থেকে নতুন এলিমেন্ট গুলো মুছে ফেলতে চাইলে এটা যোগ করতে পারো:
      // while (container.firstChild) {
      //   container.removeChild(container.firstChild);
      // }
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
      }}
    >
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
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
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
          animation: aurora 40s linear infinite;
        }
        .animate-cloud {
          animation: cloud 30s ease-in-out infinite alternate;
        }
        .animate-lensflare {
          animation: lensflare 8s linear infinite;
        }
        .animate-slow-pan {
          animation: slow-pan 60s linear infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 100s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
