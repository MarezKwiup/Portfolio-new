"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Button } from "./ui/button";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="bg-[#F3F2F2]">
      {!isMobile ? (
        <div className="flex justify-between p-5">
          <h1 className="text-[#22262A] font-semibold text-4xl">Portfolio</h1>
          <div className="flex text-[#68727E] text-xl space-x-4 mt-2">
            <a href="#hero" className="hover:text-[#000041]">
              Home
            </a>
            <a href="#projects" className="hover:text-[#000041]">
              Projects
            </a>
            <a href="#experience" className="hover:text-[#000041]">
              Experience
            </a>
            <a href="#skills" className="hover:text-[#000041]">
              Skills
            </a>
            <a href="#contact" className="hover:text-[#000041]">
              Contact
            </a>
          </div>
          <a
            href="mailto:svardan41@gmail.com"
            className="inline-flex items-center justify-center border-0 rounded-md bg-[#0A2C55] h-12 px-5 text-white hover:scale-105 transform transition"
          >
            Get in touch
          </a>
        </div>
      ) : (
        <nav className="bg-[#F3F2F2]">
          <div className="flex justify-between p-5">
            <h1 className="text-[#22262A] font-semibold text-4xl">Portfolio</h1>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-[#0A2C55] hover:text-white text-[#22262A]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </div>
          {isOpen && (
            <div className="flex flex-col w-[95%] ml-[5%] gap-y-4 mt-3 text-lg text-[#68727E]">
              <div className="hover:text-[#0A2C55]">
                <a href="#hero">Home</a>
              </div>
              <div className="hover:text-[#0A2C55]">
                <a href="#projects">Projects</a>
              </div>
              <div className="hover:text-[#0A2C55]">
                <a href="#experience">Experience</a>
              </div>
              <div className="hover:text-[#0A2C55]">
                <a href="#skills">Skills</a>
              </div>
              <div className="hover:text-[#0A2C55]">
                <a href="#contact">Contact</a>
              </div>
              <a
                href="mailto:svardan41@gmail.com"
                className="inline-flex items-center justify-center border-0 rounded-md bg-[#0A2C55] h-12 px-5 text-white mr-10"
              >
                Get in touch
              </a>
            </div>
          )}
        </nav>
      )}
    </nav>
  );
}
