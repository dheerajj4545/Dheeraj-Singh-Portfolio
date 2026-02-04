import { motion } from "framer-motion";

/* Section animation */
const section = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

/* Item animation */
const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-slate-950 text-white px-6"
    >
      {/* Overlay for crystal readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.div
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading */}
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold mb-6 text-teal-400"
          >
            About Me
          </motion.h2>

          {/* Main description */}
          <motion.p
            variants={item}
            className="text-gray-300 leading-relaxed max-w-4xl mb-6"
          >
            I’m a{" "}
            <span className="text-teal-400 font-medium">
              Full Stack Developer
            </span>{" "}
            who builds scalable, production-ready web applications with a strong
            focus on clean architecture, performance, and user experience.
          </motion.p>

          {/* Extra professional value */}
          <motion.p
            variants={item}
            className="text-gray-400 leading-relaxed max-w-4xl mb-12"
          >
            On the frontend, I craft responsive and interactive UIs using React
            and Tailwind CSS. On the backend, I design secure REST APIs,
            authentication systems, and database schemas using Node.js,
            Express, and MongoDB. I enjoy solving real-world problems and
            continuously improving my development workflow.
          </motion.p>

          {/* Skills */}
          <motion.div
            variants={section}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-14"
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "REST APIs",
              "JWT Authentication",
              "MongoDB",
              "npm",
              "Vite",
              "Git & GitHub",
              "Vercel",
              "Netlify",
            ].map((skill) => (
              <motion.div
                key={skill}
                variants={item}
                whileHover={{ y: -8, scale: 1.06 }}
                className="
                  relative border border-gray-700/70 rounded-lg py-3
                  text-center text-sm cursor-default
                  backdrop-blur-sm
                  hover:border-teal-400 hover:text-teal-400
                  hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]
                  transition-all
                "
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-teal-500
                         hover:bg-teal-600 transition font-medium"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-600
                         hover:border-teal-400 transition font-medium"
            >
              Let’s Work Together
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
