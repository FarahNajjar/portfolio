import React from 'react';
import './App.css';

const Projects = () => {
  
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Etizan Application</h3>
        <p>etizan is an application for booking therapy sessions in KAU female campus</p>
        
        <a href='https://www.figma.com/proto/vwjFsTZ2zTfGZ7hk1QaTYn/Etizan-therapy-unit-app?node-id=1-2&t=aziFKVoIhv9x0obW-1' target="_blank">
        <button>view prototype</button>
        </a>
      </div>

      <div className="project">
        <h3>RetroRoom Blender animation </h3>
        <p>A short animation using blender</p>
       

        <video width="600" controls>
      <source src="/videos/retroRoom.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      </div>

      <div className="project">
        <h3>Anwar Almuhammadiyah app interface design</h3>
        <p>Anwar Almuhammadiyah is an app interface for a blumbing and electricity service store</p>
        <img src=''></img>
        <a href='https://drive.google.com/file/d/1_VbvY_gJSjt6hzU5gQqdesNCux_vtv2I/view?usp=drive_link' target="_blank">
        <button>view project report</button>
        </a>
      </div>

      <div className="project">
        <h3>FCITEC</h3>
        <p>FCITEC is an app that facilitates the FCIT female campus to report medical emergencies</p>
        <a href='https://drive.google.com/file/d/1l-ElyJIfS-IWNGe_Qv4qe61oNnXC9GMV/view?usp=drive_link' target="_blank">
        <button>view project report</button>
        </a>
      </div>

      <div className="project">
        <h3>WeddingWise App interface</h3>
        <p>WeddingWise is an interface design for an app that facilitates the search for venues and vendors for Saudi weddings</p>
        <img src=''></img>
        <a href='https://www.figma.com/proto/h1TKmCHgnVfzZhsW7qhh7N/WeddingWise-interface?node-id=1-152&t=mxqi3AKm3lQZNcQ4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A152&show-proto-sidebar=1' target="_blank">
        <button>view prototype</button>
        </a>
      </div>

    </div>
  );
};

export default Projects;
