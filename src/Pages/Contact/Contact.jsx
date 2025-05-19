import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import Title from "../../Components/Shared/Title";
import Form from "./Form";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Title title={"Contact Me"} />

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative mt-8 
                   bg-[#2e1846]/20 backdrop-blur-md shadow-lg rounded-2xl p-10 w-full"
        data-aos="fade-up"
      >
        {/* Left side - Form */}
        <div className="lg:col-span-2 lg:order-last w-full" data-aos="fade-left">
          <h3 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-6">
            Leave a Message
          </h3>
          <Form />
        </div>

        {/* Right side - Contact Info */}
        <div className="lg:col-span-1 w-full" data-aos="fade-right">
          <h2 className="text-xl md:text-2xl font-bold text-fuchsia-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-6 text-sm">
            Feel free to reach out for any inquiries or feedback!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-fuchsia-900/20 transition cursor-pointer">
              <FaEnvelope className="text-fuchsia-400 text-xl" />
              <a
                href="mailto:anondo554@gmail.com"
                className="text-sm text-gray-300 hover:text-fuchsia-400"
              >
                anondo554@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-fuchsia-900/20 transition cursor-pointer">
              <FaPhone className="text-fuchsia-400 text-xl" />
              <a
                href="tel:+8801826339098"
                className="text-sm text-gray-300 hover:text-fuchsia-400"
              >
                +880 182 6339 098
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-fuchsia-900/20 transition cursor-pointer">
              <FaWhatsapp className="text-fuchsia-400 text-xl" />
              <a
                href="https://wa.me/8801826339098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-fuchsia-400"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
