import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const Projectpage = (props) => {
  console.log(props.match, props.location);
  const { project } = props.location.state;
  return (
    <div className="h-screen w-full">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div className="h-32 mt sm:pt-4 flex items-center">
          <FiArrowLeft className="inline-block text-3xl" />
          <span className="font-bold">Home</span>
        </div>
        <div>
          <h1>{project.title}</h1>
        </div>
        <div className="h-64 sm:flex bg-green-300">
          <div className="sm:w-1/3 bg-red-300">
            <img
              src={project.img}
              alt="project - screenshot"
              className="h-full object-cover object-center"
            />
          </div>
          <div className="w-2/3">{project.description}</div>
        </div>
      </div>
    </div>
  );
};
export default Projectpage;
