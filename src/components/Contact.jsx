import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xgejnyzy");

  if (state.succeeded) {
    return (
      <div>
        <p>Thank you for the message. I will reply to you shortly!</p>
      </div>
    );
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <br />
        <p className="text-white font-lightm mb-4" >Anton Kucherenko</p>
        <a href = "mailto:ak@anton-kucherenko.com" className="text-white font-light mb-4 text-decoration-none" >ak@anton-kucherenko.com</a>
        <br />
        <a href="tel:+358451694688" className="text-white font-light mb-4 text-decoration-none" >+491633670358</a>
        <p className="text-white font-light mb-4" >Berlin, Germany</p>
        <br />
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* @formspree/react form */}
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          {/* <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label> */}
          <label className="flex flex-col" htmlFor="email">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
               id="email"
              type="email"
              name="email"
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
            id="message"
              rows={7}
              name="message"
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
          </label>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
        {/* End of @formspree/react form */}
      </motion.div>
    </div>
  );
};



export default SectionWrapper(Contact, "contact");
