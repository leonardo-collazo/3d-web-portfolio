import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { Earth } from "./Canvas/Earth";
import { SectionWrapper } from "./SectionWrapper";
import {
  slideIn,
  toLeft,
  tweenTransition,
  sectionAnimationDelay,
  sectionAnimationDuration,
} from "../utils/motion";

const sectionId = "contact";
const contentAmount = 0.1;

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = e => {};
  const handleSubmit = e => {};

  return (
    <div className="flex flex-col-reverse gap-10 xl:flex-row overflow-hidden">
      <motion.div
        variants={slideIn(toLeft, tweenTransition, sectionAnimationDelay, sectionAnimationDuration)}
        className="flex-[0.75] p-8 rounded-2xl bg-black-100"
      >
        <h3 className="sectionHeadText">Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="px-6 py-4 rounded-lg border-none outline-none font-medium text-white placeholder:text-secondary bg-tertiary"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="px-6 py-4 rounded-lg border-none outline-none font-medium text-white placeholder:text-secondary bg-tertiary"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="px-6 py-4 rounded-lg border-none outline-none font-medium text-white placeholder:text-secondary bg-tertiary"
            />
          </label>

          <button
            type="submit"
            className="w-fit px-8 py-3 rounded-xl outline-none font-bold text-white bg-tertiary shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, sectionId, contentAmount);
