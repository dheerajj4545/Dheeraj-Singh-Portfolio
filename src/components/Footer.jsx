import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import DheerajLogo from "./DheerajLogo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-gray-800 py-12 text-center">

      {/* Clickable Logo */}
      <div
        onClick={scrollToTop}
        className="
          flex justify-center mb-4
          cursor-pointer
          hover:scale-110
          transition-transform duration-300
        "
      >
        <div className="w-12 h-12">
          <DheerajLogo />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 mb-6">
        © {new Date().getFullYear()} Dheeraj Singh. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://github.com/dheerajj4545"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/dheeraj-singh-rao-7995a0326"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#0A66C2] transition"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:dheerajsinghrao@gmail.com"
          className="text-gray-400 hover:text-teal-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
