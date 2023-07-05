import React, { useState, useEffect } from 'react';
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'

import { API } from 'aws-amplify';
import { listTechnologies } from '../graphql/queries.js';


const Tech = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetchTechnologies();
  }, []);

  async function fetchTechnologies() {
    try {
      const response = await API.graphql({ query: listTechnologies });
      listTechnologies(response.data.listTechnologies);
    } catch (error) {
      console.error('Error fetching technologies:', error);
    }
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='w-28 h-28'
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")