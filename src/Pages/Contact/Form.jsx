import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fqkd9nc",
        "template_dkna4ep",
        form.current,
        "uJH1KGbqm6frzkLXJ"
      )
      .then(
        () => {
          toast.success("🎉 Your message was sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("⚠️ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-8 w-[90%] md:w-full mx-auto text-white"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full h-11 px-4 rounded-xl border border-fuchsia-600 bg-transparent focus:bg-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-sm"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full h-10 px-4 rounded-xl border border-fuchsia-600 bg-transparent focus:bg-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-sm"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full px-4 py-3 rounded-xl border border-fuchsia-600 bg-transparent focus:bg-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-sm"
          required
        ></textarea>
        <div className="flex justify-end ">
          <button className="buttonClass group">
            Send Message
            <span className="buttonAnimationColor group-hover:-top-4"></span>
          </button>
        </div>
      </form>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Form;
