import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // import toast
import "react-toastify/dist/ReactToastify.css"; // toast css
import Title from "../../Components/Shared/Title";
import Form from "./Form";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Toast show করার function
  const showToast = () => {
    toast.error("No mail or phone app detected! Please configure your device.");
  };

  // link click handler, 0.7 সেকেন্ড পর Toast দেখাবে যদি অ্যাপ না খুলে
  const handleLinkClick = (url) => (e) => {
    setTimeout(() => {
      showToast();
    }, 700);
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Toast container must be inside the main component */}
      <ToastContainer position="top-center" autoClose={3000} />

      <Title title={"Contact Me"} />

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative mt-8
                   bg-[#2e1846]/20 backdrop-blur-md shadow-lg rounded-2xl p-10 w-full"
        data-aos="fade-up"
      >
        <div className="lg:col-span-2 lg:order-last w-full" data-aos="fade-left">
          <h3 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-6">
            Leave a Message
          </h3>
          <Form />
        </div>

        <div className="lg:col-span-1 w-full" data-aos="fade-right">
          <h2 className="text-xl md:text-2xl font-bold text-fuchsia-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-6 text-sm">
            Feel free to reach out for any inquiries or feedback!
          </p>

          <div className="space-y-6">
            <div
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-fuchsia-900/20 transition cursor-pointer"
              onClick={handleLinkClick("mailto:anondo554@gmail.com")}
            >
              <FaEnvelope className="text-fuchsia-400 text-xl" />
              <a
                href="mailto:anondo554@gmail.com"
                className="text-sm text-gray-300 hover:text-fuchsia-400"
              >
                anondo554@gmail.com
              </a>
            </div>

            <div
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-fuchsia-900/20 transition cursor-pointer"
              onClick={handleLinkClick("tel:+8801826339098")}
            >
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
