import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export default function Contact() {
  const [statusMessage, setStatusMessage] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setStatusMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.error || 'Failed to send message');

      reset();
      setStatusMessage('Message sent successfully!');
    } catch (err) {
      console.error(err);
      setStatusMessage('Failed to send message. Check console for details.');
    }
  };

  return (
    <section className="section">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-2 opacity-85">Open to software engineering and QA internships or freelance projects.</p>

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <motion.form
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="glass rounded-2xl p-6 space-y-4"
        >
          <div>
            <label className="text-sm">Name</label>
            <input {...register('name')} className="w-full mt-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none" placeholder="John Doe" />
            {errors.name && <p className="text-red-300 text-sm mt-1">Enter a valid name.</p>}
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input {...register('email')} className="w-full mt-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none" placeholder="name@example.com" />
            {errors.email && <p className="text-red-300 text-sm mt-1">Enter a valid email.</p>}
          </div>

          <div>
            <label className="text-sm">Message</label>
            <textarea {...register('message')} rows="5" className="w-full mt-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none" placeholder="I’d love to collaborate on..." />
            {errors.message && <p className="text-red-300 text-sm mt-1">Please write a longer message.</p>}
          </div>

          <div className="flex flex-col items-center mt-4">
            <button type="submit" className="btn btn-primary flex items-center gap-2">
              <Mail size={18}/> Send
            </button>
            {statusMessage && <p className="mt-2 text-sm text-green-300">{statusMessage}</p>}
          </div>
        </motion.form>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold">Reach me</h3>
            <div className="mt-3 space-y-2 text-sm opacity-90">
              <p className="flex items-center gap-2"><Mail size={18}/> prabashajayaweera89@gmail.com</p>
              <p className="flex items-center gap-2"><Linkedin size={18}/> linkedin.com/in/prabasha</p>
              <p className="flex items-center gap-2"><Github size={18}/> github.com/jkprashmitha</p>
              <p className="flex items-center gap-2"><MapPin size={18}/> Galle, Sri Lanka</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold">Map</h3>
            <div className="mt-3 overflow-hidden rounded-lg aspect-[16/10]">
              <iframe
                title="Galle"
                width="100%" height="100%" loading="lazy"
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
