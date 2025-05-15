import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    const particleCount = 20;

    const createParticle = () => {
      const particle = document.createElement("div");
      const size = Math.random() * 2 + 1;

      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        position: "absolute",
        borderRadius: "9999px",
        backgroundColor: "#fff",
        pointerEvents: "none",
        opacity: "0",
      });

      particlesContainer.appendChild(particle);
      animateParticle(particle);
    };

    const resetParticle = (particle) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      Object.assign(particle.style, {
        left: `${x}%`,
        top: `${y}%`,
        opacity: "0",
      });
      return { x, y };
    };

    const animateParticle = (particle) => {
      const { x, y } = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        const moveX = x + (Math.random() * 20 - 10);
        const moveY = y - Math.random() * 30;

        Object.assign(particle.style, {
          transition: `all ${duration}s linear`,
          opacity: Math.random() * 0.3 + 0.1,
          left: `${moveX}%`,
          top: `${moveY}%`,
        });

        setTimeout(() => animateParticle(particle), duration * 1000);
      }, delay * 1000);
    };

    // Create background particles
    for (let i = 0; i < particleCount; i++) createParticle();

    // Debounced Mouse Particle Effect
    let lastTime = 0;
    const mouseHandler = (e) => {
      const now = Date.now();
      if (now - lastTime < 100) return; // Only allow every 100ms
      lastTime = now;

      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const particle = document.createElement("div");
      const size = Math.random() * 6 + 4;

      const colors = ["#00ffff", "#ff00ff", "#00ff99", "#ffcc00", "#ffffff"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        position: "fixed",
        left: `${mouseX}px`,
        top: `${mouseY}px`,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        opacity: 0.6,
        pointerEvents: "none",
        filter: "blur(3px)",
        transform: "translate(-50%, -50%)",
        zIndex: "1",
      });

      particlesContainer.appendChild(particle);

      gsap.to(particle, {
        scale: 1.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          if (particlesContainer.contains(particle)) {
            particlesContainer.removeChild(particle);
          }
        },
      });
    };

    document.addEventListener("mousemove", mouseHandler);
    return () => document.removeEventListener("mousemove", mouseHandler);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-50 pointer-events-none">
      <div className="relative w-full h-full bg-black font-sans">
        <div className="absolute inset-0">
          {/* Gradient Layers */}
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "35vw",
              height: "35vw",
              background: "linear-gradient(40deg, #06010d, rgba(102, 0, 204, 0.02))",
              top: "-10%",
              left: "-10%",
              animation: "moveGradient1 12s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "40vw",
              height: "40vw",
              background: "linear-gradient(40deg, #06010d, rgba(118, 75, 162, 0.08))",
              bottom: "-20%",
              right: "-10%",
              animation: "moveGradient2 16s ease-in-out infinite alternate",
            }}
          />
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: "25vw",
              height: "25vw",
              background: "radial-gradient(circle, #06010d, transparent 70%)",
              top: "60%",
              left: "20%",
              animation: "moveGradient3 20s ease-in-out infinite alternate",
            }}
          />

          {/* Radial Glow */}
          <div
            className="absolute w-[30vw] h-[30vh] top-1/2 left-1/2 -z-50 -translate-x-1/2 -translate-y-1/2 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(72, 0, 255, 0.15), transparent 70%)",
            }}
          />

          {/* Grid Lines */}
          <div className="absolute inset-0 bg-[length:40px_40px] -z-50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

          {/* Particles */}
          <div
            ref={particlesRef}
            className="absolute inset-0 pointer-events-none"
          />

          {/* Noise */}
          <div
            className="absolute inset-0 opacity-5 -z-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes moveGradient1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes moveGradient2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes moveGradient3 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-30%, -30%); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
