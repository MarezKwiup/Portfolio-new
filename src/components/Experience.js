"use client";
import React from "react";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { motion } from "framer-motion";
const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "App Opener",
      location: "Remote",
      type: "Full-time",
      startDate: "Jul 2024",
      endDate: "Present",
      description:
        "Worked as a Full Stack Developer driving scalability and performance improvements for a deep link and PWA platform, impacting 4M+ users and 100+ creators.",
      achievements: [
        "Integrated third-party APIs in a deep link app, increasing link preview reliability by 30% and enhancing UX across 4M+ monthly users.",
        "Built a PWA platform using NestJS, React, and TypeScript, enabling 100+ creators to manage and update personalized content in real-time.",
        "Optimized backend performance with Redis caching, reducing failed requests during peak load by 75% and improving average response times by 40%.",
        "Migrated infrastructure from Vercel to AWS (S3, EC2, Elastic Beanstalk), cutting hosting costs by ~35% and improving deployment scalability for 3x user traffic growth.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "AWS",
        "NestJs",
        "MongoDB",
        "PostgreSQL",
        "Next",
      ],
    },
    {
      title: "Software Developer",
      company: "Legistify",
      location: "Gurugram",
      type: "Full-time",
      startDate: "Jan 2024",
      endDate: "Jul 2024",
      description:
        "Contributed to digital stamping and e-signing systems handling 1,000+ legal documents daily, improving reliability and reducing third-party dependencies.",
      achievements: [
        "Maintained and scaled digital stamping and e-signing modules used in 1,000+ legal documents per day.",
        "Developed an in-house e-signing solution, reducing dependency on third-party services and cutting costs by 50%.",
        "Designed and implemented RESTful APIs for features like bulk stamp upload and document status tracking using MongoDB for storage and Amazon SQS for asynchronous task handling, significantly improving throughput and reliability.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "AWS",
        "NestJs",
        "MongoDB",
      ],
    },
    {
      title: "Research Internship",
      company: "LNMIIT Summer Internship Programme",
      location: "Jaipur",
      type: "Full-time",
      startDate: "May 2023",
      endDate: "Jul 2023",
      description:
        "Research, reviewed and implemented various neural style transfer and embedding models",
      achievements: [
        "Leveraged OpenAI's CLIP model to construct CLIPStyler, allowing users to apply styles to images via text prompts; conducted 10+ experiments with neural style transfer to improve image generation accuracy.",
      ],
      technologies: ["Python", "PyTorch", "CLIP"],
    },
  ];
  return (
    <section id="experience" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-semibold mb-4 text-[#22262A]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>

          <motion.p
            className="text-lg text-[#68727E] max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            My professional journey in software development, showcasing growth,
            achievements, and the technologies I've mastered along the way.
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px bg-[#DDDFE5] hidden md:block"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative md:ml-16"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute -left-10 w-4 h-4 bg-[#0A2C55] rounded-full border-4 border-[#FFFFFF] hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 300,
                  }}
                  viewport={{ once: true }}
                />

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col px-8 py-8 rounded-md border-1 z-1 border-[#DCE0E6] bg-[#FFFFFF] gap-3">
                    <h3 className="text-3xl text-[#22262A] font-semibold">
                      {exp.title}
                    </h3>

                    <div className="flex justify-between flex-wrap gap-3">
                      <div className="flex items-center justify-center gap-2">
                        <Building2 className="text-[#68727E]"/>

                        <span className="text-[#68727E]">{exp.company}</span>
                      </div>

                      <div className="border rounded-2xl border-[#0A2C55] p-1 text-[#0A2C55] text-sm">
                        {exp.type}
                      </div>
                    </div>

                    <div className="flex gap-2 items-center flex-wrap">
                      <Calendar className="text-[#68727E]"/>

                      <span className="text-[#68727E]">
                        {exp.startDate} - {exp.endDate}
                      </span>

                      <MapPin className="text-[#68727E]"/>

                      <span className="text-[#68727E]">
                        {exp.location}
                      </span>
                    </div>

                    <div className="mt-2 text-[#68727E]">
                      {exp.description}
                    </div>

                    <div className="text-[#22262A] mt-2 font-semibold text-xl">
                      Key achievements
                    </div>

                    <div className="gap-3">
                      {exp.achievements.map((ach,index)=>(
                      <div key={index} className="flex items-start gap-3">
                        <span className="h-2 w-2 flex-shrink-0 mt-2 rounded-full bg-[#0A2C55]"/>
                        <p className="text-[#68727E]">
                          {ach}
                        </p>
                      </div>
                    ))}
                    </div>

                    <div className="text-[#22262A] font-semibold mt-2">
                      Technologies Used:
                    </div>

                    <div className="flex gap-3 flex-wrap">
                      {exp.technologies.map((tech,index)=>(
                        <div key={index} className="border-0 p-2 text-sm rounded-3xl bg-[#E7F1FC] text-[#0A2C55] hover:bg-[#F4F5F7]">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
