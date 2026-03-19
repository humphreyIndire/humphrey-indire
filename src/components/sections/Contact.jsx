import React, { useState } from "react";
import formImg from "../../assets/images/form.webp";
import { useFadeIn } from "../../hooks/useFadeIn";
import Button from "../ui/Button";
import ProgressiveImage from "../ui/ProgressiveImage";

const Contact = () => {
  const headerRef = useFadeIn();
  const infoRef = useFadeIn();
  const formRef = useFadeIn();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    subject: "Booking enquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          organisation: formData.organisation,
          subject: formData.subject,
          message: formData.message,
          to_email: "humphrey@humphreyindire.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          organisation: "",
          subject: "Booking enquiry",
          message: "",
        });
        setTimeout(() => setSubmitStatus(""), 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="bg-bg-supporting py-24 px-6 md:px-20 lg:px-24"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 fade-in" ref={headerRef}>
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Start a Conversation</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
          <div className="fade-in" ref={infoRef}>
            <div className="w-full aspect-[3/4] bg-primary rounded-[20px] mb-8 relative overflow-hidden shadow-2xl group transition-transform hover:-rotate-1">
              <ProgressiveImage
                src={formImg}
                alt="Eng. Humphrey Indire"
                className="w-full h-full object-cover brightness-110 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 transition-colors"></div>
            </div>

            <div className="flex flex-col gap-3.5">
              {[
                {
                  icon: "✉️",
                  title: "humphrey@humphreyindire.com",
                  sub: "Responds within 48 hours",
                },
                {
                  icon: "💼",
                  title: "LinkedIn Profile",
                  sub: "https://www.linkedin.com/in/enghumphreyindire/",
                },
                {
                  icon: "📍",
                  title: "Nairobi, Kenya",
                  sub: "EAT — UTC+3 · Global travel",
                },
                {
                  icon: "💬",
                  title: "WhatsApp",
                  sub: "+254729611319",
                  href: "https://wa.me/254729611319",
                },
              ].map((link, i) =>
                link.title === "LinkedIn Profile" ? (
                  <a
                    key={i}
                    href={link.sub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-border-subtle rounded-xl p-4.5 flex items-center gap-4 group transition-all hover:border-accent hover:translate-x-1"
                  >
                    <div className="text-xl w-10 text-center select-none group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary mb-0.5">
                        {link.title}
                      </div>
                      <div className="text-xs text-text-muted">{link.sub}</div>
                    </div>
                  </a>
                ) : link.title === "WhatsApp" ? (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-border-subtle rounded-xl p-4.5 flex items-center gap-4 group transition-all hover:border-accent hover:translate-x-1"
                  >
                    <div className="text-xl w-10 text-center select-none group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary mb-0.5">
                        {link.title}
                      </div>
                      <div className="text-xs text-text-muted">{link.sub}</div>
                    </div>
                  </a>
                ) : (
                  <span
                    key={i}
                    className="bg-white border border-border-subtle rounded-xl p-4.5 flex items-center gap-4 group transition-all hover:border-accent hover:translate-x-1"
                  >
                    <div className="text-xl w-10 text-center select-none group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary mb-0.5">
                        {link.title}
                      </div>
                      <div className="text-xs text-text-muted">{link.sub}</div>
                    </div>
                  </span>
                ),
              )}
            </div>
          </div>

          <div
            className="bg-white border border-border-subtle rounded-[20px] p-8 md:p-12 fade-in"
            ref={formRef}
          >
            <h3 className="font-dm-sans text-[26px] font-bold text-primary mb-2">
              Send a Message
            </h3>
            <p className="text-[15px] text-text-muted mb-10 leading-relaxed">
              I'm always open to discussing new projects, advisory
              opportunities, or ideas to advance climate finance across Africa.
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-primary">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-accent outline-none transition-colors"
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-primary">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-accent outline-none transition-colors"
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-primary">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-accent outline-none transition-colors"
                  placeholder="example@domain.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-primary">
                  Organisation
                </label>
                <input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-accent outline-none transition-colors"
                  placeholder="Company or institution"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-primary">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
                  required
                >
                  <option>Booking enquiry</option>
                  <option>Advisory / Consulting</option>
                  <option>Speaking / Conference</option>
                  <option>Partnership opportunity</option>
                  <option>Media / Press</option>
                  <option>General enquiry</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-primary">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-accent outline-none transition-colors min-h-[140px] resize-y"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
                  ✗ Failed to send message. Please try again.
                </div>
              )}

              <Button
                type="submit"
                className="w-full justify-center py-4 mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
