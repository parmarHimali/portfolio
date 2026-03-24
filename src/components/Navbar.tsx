"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled glass-effect" : ""}`}>
      <div className="container nav-container">
        <div className="logo-container">
          <a href="#" className="logo gradient-text">HIMALI</a>
        </div>

        {/* Desktop Nav */}
        <div className="desktop-links">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="cta-button glass-effect"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu glass-effect ${isOpen ? "active" : ""}`}>
        <button className="close-menu" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="mobile-link"
          >
            {link.name}
          </a>
        ))}
        <div className="mobile-socials">
          <Github size={24} />
          <Linkedin size={24} />
          <Mail size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
