"use client";
import React, { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { sendEmailAction } from "@/app/actions/sendEmail";
import "./Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<{
    open: boolean;
    type: "success" | "error" | "";
    message: string;
  }>({
    open: false,
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await sendEmailAction(formData);

      if (result.success) {
        setModal({
          open: true,
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setModal({
          open: true,
          type: "error",
          message:
            result.error || "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      setModal({
        open: true,
        type: "error",
        message: "Network Error: Could not connect to the server.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => setModal({ ...modal, open: false });

  return (
    <section id="contact" className="section-padding">
      <div className="container contact-container">
        <div className="contact-info-side">
          <h3 className="section-subtitle gradient-text">Connect</h3>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="contact-methods">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="contact-pill glass-effect"
            >
              <Mail size={24} /> <span>{portfolioData.contact.email}</span>
            </a>
          </div>

          <div className="contact-socials">
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={28} />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        <div className="contact-form-side glass-effect">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="form-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && (
                <Send size={18} style={{ marginLeft: "10px" }} />
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Modern Status Modal */}
      {modal.open && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal-content glass-effect ${modal.type}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-icon">
              {modal.type === "success" ? (
                <div className="icon-wrapper success">✓</div>
              ) : (
                <div className="icon-wrapper error">!</div>
              )}
            </div>
            <h2 className="modal-title">
              {modal.type === "success" ? "Message Sent!" : "Submission Failed"}
            </h2>
            <p className="modal-message">{modal.message}</p>
            <button className="modal-close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
