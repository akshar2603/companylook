import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // console.log(formData)
      const response = await fetch("https://company-backend-9e49.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        const suc = result.message;
        setResponseMessage(suc);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(result.error || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("An error occurred while sending the message.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-2 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-neutral-50 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-50">
                  Email Us
                </h3>
                <p className="text-neutral-50">akshar2.dev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-50">Call Us</h3>
                <p className="text-neutral-50">+91 7096368342</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-50">
                  Visit Us
                </h3>
                <p className="text-neutral-50">
                  tgb complex adajan , surat - 395009
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="py-4 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-50"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-1 bg-zinc-800 text-neutral-50 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-50"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-1 bg-zinc-800 text-neutral-50 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-50"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full mt-1 p-1 bg-zinc-800 text-neutral-50 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {responseMessage && (
            <div className="bg-green-500 text-white px-4 py-2 rounded mt-4 text-center">
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
