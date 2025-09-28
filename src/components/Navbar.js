"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Button } from "./ui/button";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href); 
    }

    setIsOpen(false);
  };
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-md border-b border-[#dce0e5] shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {!isMobile ? (
        <div className="flex justify-between p-5">
          <h1 className="text-[#22262A] font-semibold text-4xl">Portfolio</h1>
          <div className="flex text-[#68727E] text-xl space-x-4 mt-2">
            <button onClick={()=>scrollToSection('#hero')} className="hover:text-[#000041]">
              Home
            </button>
            <button onClick={()=>scrollToSection('#projects')} className="hover:text-[#000041]">
              Projects
            </button>
            <button onClick={()=>scrollToSection('#experience')} className="hover:text-[#000041]">
              Experience
            </button>
            <button  onClick={()=>scrollToSection('#skills')} className="hover:text-[#000041]">
              Skills
            </button>
            <button onClick={()=>scrollToSection('#contact')} className="hover:text-[#000041]">
              Contact
            </button>
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
            <div className="flex flex-col w-[95%] ml-[5%] gap-y-4 mt-3 text-lg text-[#68727E] pb-2">
              <div className="hover:text-[#0A2C55]">
                <button onClick={()=>scrollToSection('#hero')}>Home</button>
              </div>
              <div className="hover:text-[#0A2C55]">
                <button onClick={()=>scrollToSection('#projects')}>Projects</button>
              </div>
              <div className="hover:text-[#0A2C55]">
                 <button onClick={()=>scrollToSection('#experience')}>Experience</button>
              </div>
              <div className="hover:text-[#0A2C55]">
                 <button onClick={()=>scrollToSection('#skills')}>Skills</button>
              </div>
              <div className="hover:text-[#0A2C55]">
                 <button onClick={()=>scrollToSection('#contact')}>Contact</button>
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
    </motion.nav>
  );
}
