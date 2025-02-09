import React from 'react';

const Content = ({ section }) => {
  // Get the content based on section (education, technicalSkills, experience, contact)
  
  if (!section) return null;

  if (section === 'education') {
    return (
      <>
        <ul>
          <li><span className="font-bold">University: </span> Carleton University</li>
          <hr />
          <li><span className="font-bold">Program: </span> Computer Science</li>
          <hr />
          <li><span className="font-bold">Specialization: </span> Artificial Intelligence and Machine Learning</li>
          <hr />
          <li><span className="font-bold">CGPA: </span> 10.66</li>
        </ul>
      </>
    );
  }
  
  if (section === 'skills') {
    return (
      <>
        <ul>
        <li><span className="font-bold">Programming Languages: </span> Python, Java, C++, JavaScript, SQL, C, HTML, CSS, JSON</li>
          <hr />
          <li><span className="font-bold">Frameworks: </span> React, Node.js, Motion, Three.js, Tailwind, Bootstrap, Deno, Yarn, Tailwind, Three.js</li>
          <hr />
          <li><span className="font-bold">Tools: </span> Git, Docker, OpenStack, Raspberry Pi, Arduino, Hyper, Figma, Jira</li>
        </ul>
      </>
    );
  }

  if (section === 'experience') {
    return (
      <>
        <ul>
          <li><span>Beyond academics, I work as a bike mechanic, where I hone my troubleshooting and repair skills.</span></li>
          <hr />
          <li><span>I previously led a robotics team to multiple championship wins.</span></li>
          <hr />
          <li><span>Whether through coding, designing interactive web applications, or working on hardware innovations, I am always eager to innovate.</span></li>
        </ul>
      </>
    );
  }

  return null;
};

export default Content;
