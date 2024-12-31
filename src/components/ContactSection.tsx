import React, { useState } from "react";
import { Code2, Smartphone, Palette, Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Custom websites built with modern technologies, optimized for performance and SEO.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Stunning, intuitive designs that captivate your audience and drive engagement.",
    },
    {
      icon: Sparkles,
      title: "Graphic Design",
      description:
        "Eye-catching visuals that strengthen your brand and leave lasting impressions.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    try {
      const response = await fetch("https://formspree.io/f/manndpzd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage(
          "Thank you! Your message has been sent successfully."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(
          "Oops! Something went wrong. Please try again later."
        );
      }
    } catch (error) {
      setResponseMessage(
        "An error occurred. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative z-10 py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Digital Services
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Elevate your digital presence with professional solutions tailored
            to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="bg-black/40 backdrop-blur-lg rounded-lg p-8 max-w-2xl mx-auto border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-2 text-center">
            Get Started
          </h3>
          <p className="text-gray-400 text-center mb-8">
            Ready to transform your digital presence?
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Project Details"
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Quote"}
            </button>
          </form>

          {responseMessage && (
            <p className="text-center mt-4 text-yellow-400">
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
