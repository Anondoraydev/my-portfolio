import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-transparent text-white border-t border-white/10 shadow-inner">
      {/* Floating Animation Background */}
      <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 40 + 20; // 20–60px
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = 10 + Math.random() * 10;
          return (
            <div
              key={i}
              className="absolute bg-teal-400 opacity-30 rounded-full blur-xl"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: "-50px",
                animation: `floatUp ${duration}s ease-in-out ${delay}s infinite`,
              }}></div>
          );
        })}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10">
          {/* Branding */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-wide text-teal-400">
              Anondo Ray
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Creative Frontend Developer. Building immersive digital
              experiences with clean code and stylish UI.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-sm text-gray-400">
            <h3 className="text-white font-semibold mb-2">Contact Me</h3>
            <p>Email: anondo554@gmail.com</p>
            <p>Phone: +880 1826339098</p>
            <p>Location: Bangladesh</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Social Links</h3>
            <div className="flex gap-5 text-xl text-gray-400">
              <a
                href="mailto:anondo554@gmail.com"
                className="hover:text-teal-400 transition duration-300">
                <FaEnvelope />
              </a>
              <a
                href="https://facebook.com/anondo554.0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300">
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com/in/anondo-ray-7b486b1b4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300">
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/Anondoraydev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-gray-500">
          © 2025 Anondo Ray — All rights reserved.
        </div>
      </div>
      {/* Floating Animation Keyframes */}

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-50px); opacity: 0.2; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
