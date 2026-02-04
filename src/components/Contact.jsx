import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4w6eu7u",
        "template_wj5o724",
        formRef.current,
        "tBSkjZQFoidS0lPTL"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (error) => {
          alert("Something went wrong ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-slate-950 text-white px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16"
      >
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold text-teal-400 mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-300 mb-10">
            Have a project or idea? Drop a message and let’s build something amazing.
          </p>

          <div className="border border-gray-700/60 rounded-2xl p-10 backdrop-blur-sm">
            <div className="text-5xl mb-4">📨</div>
            <p className="text-gray-400">I usually reply within 24 hours.</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-slate-900/70 border border-gray-700/60 rounded-2xl p-8"
        >
          <input
            name="user_name"
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-3 bg-slate-950 border border-gray-700 rounded-lg"
            required
          />

          <input
            name="user_email"
            placeholder="Email Address"
            className="w-full mb-4 px-4 py-3 bg-slate-950 border border-gray-700 rounded-lg"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full mb-6 px-4 py-3 bg-slate-950 border border-gray-700 rounded-lg resize-none"
            required
          />

          <button
            type="submit"
            className="
              w-full bg-teal-500 text-gray-900 font-semibold
              py-3 rounded-xl hover:bg-teal-400
              transition shadow-[0_0_25px_rgba(45,212,191,0.35)]
            "
          >
            Send Message ✈️
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
