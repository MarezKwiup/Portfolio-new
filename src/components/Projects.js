"use client";
import React from "react";
import { m, motion, scale, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

const Projects = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

  const projects = [
    {
      title: "Notely",
      description:
        "A modern notetaking app with offline support/sync along with advanced searching and markdown support.",
      technologies: ["React", "TypeScript", "Dexie", "Fuse.js", "Tailwind CSS"],
      liveUrl: "https://markdown-notes-app-chi.vercel.app/",
      githubUrl: "https://github.com/MarezKwiup/markdown-notes-app/settings",
      featured: true,
      medium:
        "https://medium.com/@svardan41/building-a-modern-note-taking-app-with-react-dexie-and-json-server-873abe5c8107",
      status: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: [
        "React.js",
        "Socket.io",
        "TailWind CSS",
        "PostgreSQL",
        "TypeScript",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/MarezKwiup/taskboard",
      medium: "",
      featured: true,
      status: true,
    },
    {
      title: "Jobify",
      description:
        "A job application tracker to efficiently track job applications and updates.",
      technologies: ["HTML", "NodeJS", "ExpressJs", "MongoDB"],
      liveUrl: "https://jobify-jbjh.onrender.com/",
      githubUrl: "https://github.com/MarezKwiup/job-project",
      medium: "",
      featured: true,
      status: true,
    },
    {
      title: "Drone Management Application",
      description:
        "A drone management application that keeps track of various missions, inventory management and detailed analytics reports.",
      technologies: [
        "ReactJs",
        "TypeScript",
        "NodeJS",
        "ExpressJs",
        "MongoDB",
        "SocketIo",
        "Redis",
      ],
      liveUrl: "",
      githubUrl: "",
      medium: "",
      featured: true,
      status: false,
    },
    {
      title: "Indie Story Creator",
      description:
        "Generates short animation based on user prompt with voice overs and narration",
      technologies: ["Python", "LicaAPI", "FFMPeg", "TTS"],
      liveUrl:
        "https://colab.research.google.com/drive/1rfwDsJqTru-cdJL27EiygmTh2oVaoRPM?usp=sharing",
      githubUrl: "",
      medium: "",
      featured: false,
      status: true,
    },
    {
      title: "Neural Style Transfer Model",
      description:
        "Implementated CLIPStyler a neural style transfer model to achieve create images based on user text prompts with OpenAI's CLIP embeddings",
      technologies: ["Python", "PyTorch", "CLIP"],
      liveUrl:
        "https://colab.research.google.com/drive/1huf6Qxz2pZeH-vvEgaoyvuiRi-5Isc5P?usp=sharing",
      githubUrl: "",
      medium: "",
      featured: false,
      status: true,
    },
    {
      title: "Search box UI",
      description:
        "A search interface with filters, dynamic results, and animations.",
      technologies: ["TypeScript", "React", "Framer motion"],
      liveUrl: "https://search-bar-project-six.vercel.app/",
      githubUrl: "https://github.com/MarezKwiup/search-bar-project",
      medium:
        "https://medium.com/@svardan41/building-a-smart-search-ui-with-react-typescript-framer-motion-b6d8b4f5e8be",
      featured: false,
      status: true,
    },
  ];

  const featuredProjects = projects.filter((item) => item.featured === true);
  const otherProjects = projects.filter((item) => !item.featured);
  return (
    <section id="projects" className="mt-20">
      <div>
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-semibold"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            className="mt-4 text-[#68727E]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work and personal projects that demonstrate
            my skills and passion for development.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-12 lg:place-items-center"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              className="border rounded-sm border-[#DDDFE5] lg:w-[80%] lg:h-80 mx-6 p-5 flex flex-col"
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between">
                <motion.h2
                  className="font-semibold text-2xl"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h2>

                <motion.div
                  className="border-0 mt-1 rounded-lg flex items-center justify-center w-20 h-5 bg-[#E7F1FC] hover:bg-[#F4F5F7] text-[#0A2C55]"
                  initial={{ scale: 0.1 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm ">Featured</span>
                </motion.div>

                {!project.status && (
                  <motion.div
                    className="border-0 mt-1 rounded-lg flex items-center justify-center w-22 h-5 bg-[#f8fbbc] hover:bg-[#F4F5F7] text-[#787204]"
                    initial={{ scale: 0.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm ">In Progress</span>
                  </motion.div>
                )}
              </div>

              <motion.p
                className="text-[#68727E] text-lg mt-3 mb-3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              <motion.div className="flex gap-2 flex-wrap">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="mt-1 rounded-lg flex items-center justify-center p-2 border hover:scale-105 transform transition"
                    initial={{ scale: 0.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-semibold">{tech}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex mt-6 gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
              >
                {project.liveUrl !== "" && (
                  <motion.div
                    initial={{ scale: 0, y: 20 }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.6,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border-0 rounded-md bg-[#0A2C55] h-10 px-6 hover:bg-[#264267] text-white hover:scale-105 transform transition gap-2"
                    >
                      <ExternalLink />
                      Live Demo
                    </a>
                  </motion.div>
                )}

                {project.githubUrl !== "" && (
                  <motion.div
                    initial={{ scale: 0, y: 20 }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.6,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border-1 border-[#DDDFE5] rounded-md bg-[#FDFDFD] h-10 hover:text-white px-6 hover:bg-[#0A2C55] text-[#22262A] hover:scale-105 transform transition gap-2"
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  </motion.div>
                )}

                {project.medium !== "" && (
                  <motion.div
                    initial={{ scale: 0, y: 20 }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.6,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={project.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border-1 border-[#DDDFE5] rounded-md bg-[#FDFDFD] h-10 hover:text-white px-6 hover:bg-[#0A2C55] text-[#22262A] hover:scale-105 transform transition gap-2"
                    >
                      <SiMedium />
                      Blog Post
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-medium"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Other Projects
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-12 lg:place-items-center"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {otherProjects.map((project, index) => (
            <motion.div
              className="border rounded-sm border-[#DDDFE5] lg:w-[80%] lg:h-70 mx-6 p-5 flex flex-col"
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.p
                className="items-start text-lg font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.p>

              <motion.p
                className="items-start text-md mt-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="mt-3 rounded-lg flex items-center justify-center p-2 border hover:scale-105 transform transition"
                  >
                    <span className="text-sm">{tech}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="mt-3 flex gap-3">
                {project.liveUrl !== "" && (
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-[#c6def9] hover:text-white rounded-full border-0 flex h-10 w-10 items-center justify-center"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </motion.div>
                )}

                {project.githubUrl !== "" && (
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-[#c6def9] hover:text-white rounded-full border-0 flex h-10 w-10 items-center justify-center"
                    >
                      <FaGithub size={20} />
                    </a>
                  </motion.div>
                )}

                {project.medium !== "" && (
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={project.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-[#c6def9] hover:text-white rounded-full border-0 flex h-10 w-10 items-center justify-center"
                    >
                      <SiMedium size={20} />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
