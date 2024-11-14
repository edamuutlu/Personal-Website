import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Eda Nur Mutlu",
          from_email: form.email,
          to_email: "edanurmutlucontact@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="pb-24 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-semibold bg-gradient-to-b from-[#72A0C1] to-[#A3C1AD] bg-clip-text tracking-tight text-transparent"
      >
        Contact Me
      </motion.h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8 sm:px-10 md:px-16 lg:px-28 xl:px-52"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            autoComplete="off"
            required
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-[#2A2A2A] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            autoComplete="off"
            required
            onChange={handleChange}
            placeholder="What's your web address?"
            className="bg-[#2A2A2A] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            autoComplete="off"
            required
            onChange={handleChange}
            placeholder="What you want to say?"
            className="bg-[#2A2A2A] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <div className="flex justify-end w-full">
          <button
            type="submit"
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-gradient-to-b hover:from-[#72A0C1] hover:to-[#A3C1AD] hover:text-white"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
