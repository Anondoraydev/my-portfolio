import { FaReact } from "react-icons/fa";
import { LuLinkedin, LuFacebook, LuGithub } from "react-icons/lu";
import { MdFileDownload } from "react-icons/md";
import { Link } from "react-scroll";
import { VscGithubProject } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../../../assets/logo/name-logo.svg";
import TypingAnimation from "./TypingText";
import Lottie from "react-lottie";
import Anondo from '../../../assets/Image/Anondo.png';
import bg from "../../../assets/Image/lottie.json";

const Banner = () => {
  useEffect(() => {
    Aos.init({ once: true, offset: 200, duration: 1500 });
  }, []);

  const [hue, setHue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 10) % 360);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      icon: <LuLinkedin />,
      label: "Linkedin",
      link: "https://www.linkedin.com/in/anondo-ray-7b486b1b4/",
    },
    {
      icon: <LuGithub />,
      label: "Github",
      link: "https://github.com/Anondoraydev",
    },
    {
      icon: <LuFacebook />,
      label: "Facebook",
      link: "https://www.facebook.com/anondo554.0",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-around lg:mx-12 items-center min-h-[550px] mt-8 lg:mt-10 text-white">
      {/* Left Content */}
      <div className="flex flex-1 justify-start items-center relative z-60">
        <div className="space-y-6 lg:space-y-8">
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="text-left space-y-6"
          >
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-2xl md:text-3xl lg:text-4xl font-semibold"
            >
              Hello, I`m Anondo Ray
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="overflow-hidden h-14 md:h-16 flex items-center"
            >
              <h2 className="text-4xl md:text-5xl text-purple-400 font-extrabold">
                <TypingAnimation />
              </h2>
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="leading-relaxed max-w-md"
            >
              A Full Stack Web Developer Passionate About Building Professional
              and Interactive Websites.
            </p>
          </div>

          {/* Social Icons */}
          <ul
            data-aos="fade-up"
            data-aos-delay="1200"
            className="flex flex-row gap-6 items-center"
          >
            {socialLinks.map(({ link, icon, label }, i) => (
              <li
                key={i}
                className="cursor-pointer transition transform hover:-translate-y-2 duration-500"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-xl text-white inline-block p-2 rounded-xl border border-white/50 group"
                >
                  <span className="group-hover:text-blue-500">{icon}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="flex flex-row flex-wrap gap-4 md:gap-6 items-center my-4"
          >
            <a
              href="https://drive.google.com/file/d/1aEbprNVoY7MN8Kw1yRA016RwrzCiEaC-/view?usp=sharing"
              target="_blank"
              className="buttonClass group"
            >
              Resume <MdFileDownload className="text-xl" />
              <span className="buttonAnimationColor group-hover:-top-4"></span>
            </a>

            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="buttonClass group"
            >
              Projects <VscGithubProject className="text-xl" />
              <span className="buttonAnimationColor group-hover:-top-4"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image and Animations */}
      <div className="flex flex-1 justify-center items-center h-full w-full relative my-6">
        <div
          data-aos="zoom-in"
          className="h-full w-full flex justify-center items-center px-4 relative"
        >
          <div
            className="relative w-[400px] h-[400px] md:w-[520px] md:h-[520px] overflow-hidden rounded-3xl flex justify-center items-center bg-main/30"
            style={{ animation: "float 2.5s ease-in-out infinite" }}
          >
            {/* Lottie Background Animation with hue-rotate filter */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{ filter: `hue-rotate(${hue}deg)` }}
            >
              <Lottie
                options={{ animationData: bg, autoplay: true, loop: true }}
                isClickToPauseDisabled={true}
              />
            </div>

            {/* Centered Image Over Animation */}
            <img
              src={Anondo}
              alt="Anondo"
              className="relative z-10 w-[80%] h-[80%] object-contain rounded-full"
            />

            {/* React Icon */}
            <button
              className="group p-2 absolute top-2 left-2 lg:top-4 lg:left-4 z-20 rotate-animation"
              aria-label="React Icon"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-Glow/50 opacity-0 group-hover:opacity-80 transition duration-300 blur-xl -z-10" />
                <FaReact className="text-6xl text-blue-400 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
            </button>

            {/* Tailwind Icon */}
            <button
              className="group p-2 absolute bottom-2 right-2 lg:bottom-4 lg:right-4 z-20 scale-animation"
              aria-label="Tailwind Icon"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-Glow/50 opacity-0 group-hover:opacity-80 transition duration-300 blur-xl -z-10" />
                <RiTailwindCssFill className="text-6xl text-teal-400 group-hover:text-teal-600 transition-colors duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate360 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes scalePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .rotate-animation {
          animation: rotate360 5s linear infinite;
        }

        .scale-animation {
          animation: scalePulse 1.2s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default Banner;
