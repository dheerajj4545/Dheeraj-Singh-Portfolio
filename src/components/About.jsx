import { motion } from "framer-motion";

const section = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* DARK MODE SAFE LOGOS */
const skillLogos = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Tailwind CSS": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  npm: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",

  "Git & GitHub":
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",

  /* ✅ FIXED VERCEL (WHITE OFFICIAL LOGO) */
  Vercel:
    "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",

  Netlify:
    "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
};

const About = () => {
  const skills = [
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
  ];

  return (
    <section id="about" className="relative py-28 bg-slate-950 text-white px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold mb-6 text-teal-400"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-300 max-w-4xl mb-12"
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

        Express, and MongoDB. 

      </motion.p>

          {/* SKILLS */}
          <motion.div
            variants={section}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-14"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                variants={item}
                whileHover={{ y: -8, scale: 1.06 }}
                className="border border-gray-700/70 rounded-lg py-4 flex flex-col items-center gap-2
                           backdrop-blur-sm hover:border-teal-400 hover:text-teal-400
                           hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] transition-all"
              >
                {skill === "Express.js" ? (
                  <span className="px-3 py-1 text-xs font-semibold border border-gray-500 rounded">
                    express
                  </span>
                ) : skill === "REST APIs" ? (
                  <span className="text-xl">🌐</span>
                ) : skill === "JWT Authentication" ? (
                  <span className="text-xl">🔐</span>
                ) : skillLogos[skill] ? (
                  <img
                    src={skillLogos[skill]}
                    alt={skill}
                    className={`w-7 h-7 ${
                      skill === "Git & GitHub" ? "invert" : ""
                    }`}
                  />
                ) : null}

                <span className="text-sm">{skill}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-teal-500 rounded-lg hover:bg-teal-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-teal-400"
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