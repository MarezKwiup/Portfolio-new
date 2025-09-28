"use client";
import React from "react";
import { MapPin, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const socialVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const stats = [
    {
      value: "2+",
      statName: "Years experience",
    },
    {
      value: "10+",
      statName: "Projects",
    },
    {
      value: "15+",
      statName: "Technologies",
    },
    {
      value: "24/7",
      statName: "Availability",
    },
  ];
  return (
    <section id='hero' className="relative min-h-screen w-full">
      {/* Background image */}
      <img
        src="/hero-bg.jpg"
        alt="Developer workspace"
        className="absolute inset-0 h-full w-full object-cover opacity-5"
      />

      {/* Overlay content */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center  md:justify-center px-4 md:px-12">
        {/* Left side: hero text */}
        <div className="mt-15 flex flex-col items-left justify-start text-start px-4 ml-10 space-y-4">
          <p className="text-lg text-[#0A2C55] mt-10">
            Hello, I&apos;m Vardan Sharma
          </p>
          <p className="text-5xl font-bold mb-4 text-[#22262A]">Software</p>
          <p className="text-5xl font-bold mb-4 text-[#0A2C55]">Developer</p>

          <p className="text-lg mb-8 text-[#68727E] max-w-2xl">
            Passionate about creating innovative solutions and bringing ideas to
            life through clean, efficient code. I specialize in full-stack
            development with a focus on user experience.
          </p>

          <div className="flex space-x-4 text-[#68727E]">
            <MapPin />
            <p>Available for remote work</p>
          </div>

          <div className="flex space-x-4 mt-6">
            <a
              href="#projects"
              className="inline-flex items-center justify-center border-0 rounded-md bg-[#0A2C55] h-12 px-6 text-white hover:scale-105 transform transition"
            >
              View My Work
            </a>

            <a
              href="https://docs.google.com/document/d/1cxx1uOjbgGXsfBxMrRJ7xaNNk0WuZQDAO42a_RbQni4/edit?tab=t.0"
              className="inline-flex items-center justify-center border-1 border-[#0A2C55] rounded-md h-12 px-6 text-[#0A2C55] hover:scale-105 transform transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>

          <motion.div
            className="flex gap-4 mt-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.4,
                },
              },
            }}
          >
            <motion.div
              variants={socialVariants}
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
                href="https://www.linkedin.com/in/vardan-sharma-144a19304/"
                target="_blank"
                className="hover:bg-[#c6def9] hover:text-white rounded-full border-0 flex h-10 w-10 items-center justify-center"
              >
                <FaLinkedinIn
                  className="text-[#22262A] hover:text-white"
                  size={20}
                />
              </a>
            </motion.div>

            <motion.div
              variants={socialVariants}
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
                href="https://github.com/MarezKwiup"
                target="_blank"
                className="hover:bg-[#c6def9] hover:text-white rounded-full border-0 flex h-10 w-10 items-center justify-center"
              >
                <FaGithub
                  className="text-[#22262A] hover:text-white"
                  size={20}
                />
              </a>
            </motion.div>

            <motion.div
              variants={socialVariants}
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
                href="mailto:svardan41@gmail.com"
                target="_blank"
                className="hover:bg-[#c6def9] hover:text-white rounded-full border-0 flex h-10 w-10 items-center justify-center"
              >
                <Mail className="text-[#22262A] hover:text-white" size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side: quick stats */}

        <motion.div
          className="flex h-90 flex-col w-full md:w-[35%] mt-35 md:mt-35 bg-white z-10 p-8 border-[#DDDFE5] rounded-sm mb-40 justify-between"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <div className="border-b h-full w-full border-b-[#DDDFE5]">
            <motion.h3
              className="font-semibold text-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Quick Stats
            </motion.h3>
            <motion.div
              className="grid grid-cols-2 w-full h-[70%] items-center place-items-center gap-3 mt-5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.4,
                  },
                },
              }}
            >
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-0 rounded-sm bg-[#F9FAFB] h-25 md:h-25 w-60 md:w-40 flex flex-col items-center justify-center hover:scale-105 transform transition"
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                        ease: 'easeIn',
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                >
                <motion.div className="text-[#0A2C55] text-2xl font-semibold"
                initial={{scale:0.1}}
                animate={{scale:1}}
                transition={{
                    delay:1.6+(index*0.1),
                    type:'spring',
                    stiffness:200
                }}>
                    {item.value}
                </motion.div>
                  <span className="text-[#6C7681]">{item.statName}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <span className="text-[#68737E] -mb-7">
            Currently open to new opportunities and projects
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
