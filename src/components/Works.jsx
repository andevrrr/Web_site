import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';

import { API } from 'aws-amplify';
import { listProjects } from '../graphql/queries.js';


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => (
  console.log(tags),
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.5}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="1rem"
      className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.items.map((tag) => (
            <p key={tag.name}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
)

const Works = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const response = await API.graphql({ query: listProjects });
      console.log('Response:', response);
      setProjects(response.data.listProjects.items);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }



  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hello there! Below, you'll find a collection of my recent projects. While they may not be the most groundbreaking, I'm genuinely excited about the solutions they offer. And hey, there's plenty more over on my GitHub. I've worked on everything from backend and frontend to mobile development.

Sometimes, I share code that I think might come in handy for others. It's my small way of giving back to the developer community. These projects reflect my ongoing journey in the world of coding, and I'd love for you to take a look. Who knows, you might find something useful or even spot areas where I can improve. Let's keep the code flowing! 🚀👨‍💻
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")