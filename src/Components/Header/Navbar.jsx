import Aos from "aos";
import "aos/dist/aos.css";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { BsFolder2Open } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { GrContactInfo } from "react-icons/gr";
import { IoCodeSlashOutline, IoMailUnreadOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import logo from "../../assets/logo/AA.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", path: "home", icon: <GoHome /> },
    { name: "About", path: "about", icon: <GrContactInfo /> },
    { name: "Skills", path: "skills", icon: <IoCodeSlashOutline /> },
    { name: "Projects", path: "projects", icon: <BsFolder2Open /> },
    { name: "Contact", path: "contact", icon: <IoMailUnreadOutline /> },
  ];

  useEffect(() => {
    Aos.init({ once: false, delay: 300, duration: 1500 });
  }, []);

  const handleSetActive = to => {
    setActiveSection(to);
    setOpen(false);
  };

  return (
    <div className="h-[76px]">
      
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out
        }`}>
        <nav className="my-4 rounded-2xl backdrop-blur-xl max-w-7xl w-11/12 mx-auto duration-300">
          <div className="flex items-center justify-between py-2 px-6 rounded-[14px] bg-gradient-to-r from-[#1f1f2e]/80 via-[#2b1b36]/80 to-[#1f1f2e]/80 shadow-md shadow-purple-800/20 backdrop-blur-md relative">
            {/* Mobile Menu */}
            <div
              className={`absolute left-0 w-full z-50 bg-gradient-to-r from-[#1f1f2e] via-[#2b1b36] to-[#1f1f2e] backdrop-blur-2xl text-white rounded-xl duration-500 ${
                open ? "top-0" : "-top-96"
              }`}>
              <ul className="flex flex-col p-6 space-y-4 relative">
                <div className="absolute top-4 right-4 text-xl z-10">
                  <button
                    onClick={() => setOpen(false)}
                    className="btn btn-sm cursor-pointer">
                    <X />
                  </button>
                </div>
                {links.map(({ name, path }) => (
                  <li key={path} data-aos="fade-up" className="text-center">
                    <Link
                      to={path}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-76}
                      onSetActive={handleSetActive}
                      className={`text-base px-4 py-2 rounded-md transition-all hover:bg-fuchsia-700/20 cursor-pointer ${
                        activeSection === path
                          ? "text-purple-400 font-semibold"
                          : ""
                      }`}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <div>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-76}
                onSetActive={handleSetActive}
                className="cursor-pointer">
                <img src={logo} alt="logo" className="h-12 md:h-18" />
              </Link>
            </div>

            {/* Desktop Links */}
            <div>
              <ul className="hidden lg:flex items-center gap-4 hover:gap-6 duration-300 text-sm">
                {links.map(({ name, path }) => (
                  <li key={path} className="relative group">
                    <Link
                      to={path}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-76}
                      onSetActive={handleSetActive}
                      className={`py-3 px-4 cursor-pointer ${
                        activeSection === path
                          ? "border-b-2 border-purple-400 text-white font-semibold shadow-md"
                          : "hover:border-b-2 hover:border-purple-400"
                      }`}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume + Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="https://drive.google.com/file/d/1aEbprNVoY7MN8Kw1yRA016RwrzCiEaC-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="buttonClass bg-purple-500 group">
                Resume
                <span className="buttonAnimationColor group-hover:-top-4 "></span>
              </a>
              <button
                onClick={() => setOpen(true)}
                className="text-xl lg:hidden text-fuchsia-200 btn">
                <RiMenu2Fill />
              </button>
            </div>
          </div>
        </nav>
      </div>
      
    </div>
  );
};

export default Navbar;
