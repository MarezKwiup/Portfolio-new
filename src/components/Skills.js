import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        "React/Next.js",
        "TypeScript",
        "HTML5/CSS",
        "Tailwind CSS",
        "Progressive Web Apps",
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Python",
        "Express.js",
        "REST APIs",
        "Nest.js",
        "Fastify",
      ],
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      skills: ["MongoDB", "PostgreSQL", "AWS", "Firebase", "Vercel", "Render"],
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["Git/Github", "Figma", "VS Code", "Web Pack", "Jest/Testing"],
    },
  ];

  const achievements = [
    "Postman API fundamental student experts",
    "600+ leetcode problems solved",
    "Paras Madan AI Hackathon Finalist",
    "Networking Fundamentals in Google Cloud",
    "Google Cloud Essentials",
  ];

  const languages = [
    { name: "JavaScript", proficiency: "Expert" },
    { name: "TypeScript", proficiency: "Advanced" },
    { name: "Python", proficiency: "Advanced" },
    { name: "C++", proficiency: "Intermediate" },
  ];

  return (
    <section id="skills">
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#22262A]">
            Skills & Expertise
          </h2>
          <p className="text-[#68737E]">
            A comprehensive overview of my technical skills, programming
            languages, and professional certifications.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 p-10">
        {skillCategories.map((item, index) => (
          <div
            key={index}
            className="flex-col px-6 py-6 border-2 rounded-lg border-[#DDDFE5] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex gap-3 items-center justify-center">
              <span>{item.icon}</span>
              <span className="text-2xl font-semibold">{item.title}</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {item.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center border-0 p-2 text-sm rounded-3xl bg-[#E7F1FC] text-[#0A2C55] hover:bg-[#F4F5F7]"
                >
                  {skill} 
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex-col border-2 p-6 rounded-lg  border-[#DDDFE5] space-y-5">
          <div className="flex gap-3 items-center justify-center">
            <span>👨‍💻</span>

            <p className="text-2xl font-semibold text-[#22262A]">
              Programming languages
            </p>
          </div>

          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex justify-between p-3 items-center border-0 rounded-sm bg-[#f1f7fd]"
            >
              <p className="text-[#22262A] font-semibold">{lang.name}</p>
              {lang.proficiency.toLowerCase() === "expert" && (
                <div className="border-0 p-2 rounded-lg bg-[#0A2C55] text-white text-sm">
                  {lang.proficiency}
                </div>
              )}
              {lang.proficiency.toLowerCase() === "advanced" && (
                <div className="border-1 p-2 rounded-lg border-[#0A2C55] text-[#0A2C55] bg-[#E7F1FC] text-sm">
                  {lang.proficiency}
                </div>
              )}
              {lang.proficiency.toLowerCase() === "intermediate" && (
                <div className="border-1 p-2 rounded-lg border-[#DDDFE5] text-[#22262A] text-sm">
                  {lang.proficiency}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex-col border-2 rounded-sm border-[#DDDFE5] p-6 space-y-5">

          <div className="flex gap-3 items-center justify-center">
            <span>🏆</span>

            <p className="text-2xl font-semibold text-[#22262A]">
              Achievements
            </p>
          </div>
          {achievements.map((ach,index)=>(
            <div key={index} className="flex p-3 border-0 rounded-sm bg-[#e7f1fc]">
              <div className="flex gap-3">
                <span className="h-2 w-2 flex-shrink-0 mt-2 rounded-full bg-[#0A2C55]"/>
                <p className="text-[#22262A] font-semibold">{ach}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
