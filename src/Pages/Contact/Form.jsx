import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fqkd9nc",      // তোমার EmailJS service ID
        "template_dkna4ep",     // তোমার template ID
        form.current,
        "uJH1KGbqm6frzkLXJ"     // তোমার public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-8 w-[90%] md:w-full mx-auto text-white"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        className="w-full h-11 px-4 rounded-xl border border-fuchsia-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-sm"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        className="w-full h-10 px-4 rounded-xl border border-fuchsia-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-sm"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        className="w-full px-4 py-3 rounded-xl border border-fuchsia-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-sm"
        required
      ></textarea>
      <div className="flex justify-end ">
        <button
          className="buttonClass group"
        >
          Send Message
          <span className="buttonAnimationColor group-hover:-top-4"></span>
        </button>
      </div>
      {/* Extra Animations */}
      <style jsx>{`
        @keyframes rotate360 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
 
        .buttonAnimationColor {
          @apply absolute left-0 top-0 w-full h-full bg-purple-500 opacity-20 transition-all duration-300;
        }
      `}</style>
    </form>
  );
};

export default Form;
