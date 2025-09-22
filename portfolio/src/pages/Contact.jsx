import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    setStatus(""); // clear previous status
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.ok) {
        setStatus("✅ Message sent successfully!");
        reset();
      } else {
        setStatus("❌ Failed: " + result.msg);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Error sending message. Try again later.");
    }
  };

  return (
    <section className="section">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-2 opacity-85">
        Open to software engineering and QA internships or freelance projects.
      </p>

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="glass rounded-2xl p-6 space-y-4"
        >
          <div>
            <label className="text-sm">Name</label>
            <input
              className="w-full mt-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none"
              placeholder="John Doe"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              className="w-full mt-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none"
              placeholder="name@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm">Message</label>
            <textarea
              rows="5"
              className="w-full mt-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none"
              placeholder="I’d love to collaborate on..."
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-300 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <button
              className="btn btn-primary flex items-center gap-2"
              type="submit"
              disabled={isSubmitting}
            >
              <Mail size={18} /> {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>

          {status && <p className="text-sm mt-2">{status}</p>}
        </motion.form>

        {/* Contact Info + Map */}
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold">Reach me</h3>
            <div className="mt-3 space-y-2 text-sm opacity-90">
              <p className="flex items-center gap-2">
                <Mail size={18} /> prabashajayaweera89@gmail.com
              </p>
            <p className="flex items-center gap-2">
  <Linkedin size={18} /> 
  <a href="https://www.linkedin.com/in/prabasha" target="_blank" rel="noopener noreferrer">
    linkedin.com/in/prabasha
  </a>
</p>

<p className="flex items-center gap-2">
  <Github size={18} /> 
  <a href="https://github.com/jkprashmitha" target="_blank" rel="noopener noreferrer">
    github.com/jkprashmitha
  </a>
</p>

              <p className="flex items-center gap-2">
                <MapPin size={18} /> Galle, Sri Lanka
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold">Map</h3>
            <div className="mt-3 overflow-hidden rounded-lg aspect-[16/10]">
              <iframe
                title="Galle"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Galle%2C%20Sri%20Lanka&t=&z=11&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
