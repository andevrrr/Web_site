import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const [state, handleSubmit] = useForm("xgejnyzy");
  if (state.succeeded) {
    return <p>Thanks for the message, I will reply to you shortly!</p>;
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
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Replace the existing form with the ContactForm component */}
        <ContactForm />

      </motion.div>
    </div>
  );
};


export default SectionWrapper(Contact, "contact");
