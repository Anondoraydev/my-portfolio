import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import Title from "../../Components/Shared/Title";
import Form from "./Form";

const Contact = () => {
  return (
    <div>
      <Title title={"Contact Me"} />
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-purple-400/10 rounded-xl shadow-2xl"
      >
        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h2 className="text-xl md:text-2xl font-bold text-fuchsia-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Feel free to reach out for any inquiries or feedback!
          </p>

          <div className="space-y-4 lg:space-y-6">
            {/* Email */}
            <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/10 transition duration-300 cursor-pointer">
              <FaEnvelope className="text-fuchsia-400 text-xl" />
              <a
                href="mailto:anondo554@gmail.com"
                className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 hover:text-fuchsia-500 transition"
              >
                anondo554@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/10 transition duration-300 cursor-pointer">
              <FaPhone className="text-fuchsia-400 text-xl" />
              <a
                href="tel:+8801826339098"
                className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 hover:text-fuchsia-500 transition"
              >
                +880 182 6339 098
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm hover:bg-fuchsia-50 dark:hover:bg-fuchsia-900/10 transition duration-300 cursor-pointer">
              <FaWhatsapp className="text-fuchsia-400 text-xl" />
              <a
                href="https://wa.me/8801826339098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 hover:text-fuchsia-500 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="rounded-xl "
        >
          <h3 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-4">
            Leave a Message
          </h3>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
