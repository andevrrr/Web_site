import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

import { API } from 'aws-amplify';
import { listServices } from '../graphql/queries.js';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full rounded-lg shadow-card py-5'
        style={{
          background: 'linear-gradient(to bottom, #392f5a, #5c258d)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
        }}
      >
        <div
          options={{
            max: 20,
            scale: 1.05,
            speed: 500
          }}
          className='h-full flex justify-center items-center flex-col text-center'
        >
          <span
            role="img"
            aria-label={title}
            className="text-6xl text-white mb-4"
            style={{
              textShadow: '0px 0px 10px rgba(255, 255, 255, 0.8)',
            }}
          >
            {icon}
          </span>
          <h3 className='text-white text-[20px] font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>



  )
}

const About = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const response = await API.graphql({ query: listServices });
      console.log('Response:', response);
      setServices(response.data.listServices.items);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        As a full-stack developer, I have experience working with a variety of technologies and frameworks, including React, Three.js, Node.js, Express, and Vite. I work with both relational databases such as MySQL and PostgreSQL, as well as NoSQL databases like MongoDB and Firebase. Additionally, I am actively learning and expanding my skills in AWS, Docker and Kubernetes.

        I am also deeply interested in mobile app development. My primary framework for cross-platform mobile app development is React Native. I have also worked with Swift for iOS development and Java for Android.

        In addition to software development, I have a strong passion for robotics. I enjoy building robots using Arduino and Raspberry Pi, and programming them to perform various tasks. I also enjoy tinkering with Raspberry Pi and exploring its capabilities.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")