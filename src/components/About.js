import React from 'react';

import PageHeader from "./PageHeader";
import { BsInfoCircle } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import {DiCss3, DiHtml5, DiJavascript} from "react-icons/di"
import {FaDev, FaDatabase} from "react-icons/fa"

const About = () => {
  const PersonalInformation = [
    {
      label: "Name",
      value: "Soumalya Das",
    },
    {
      label: "Age",
      value: "25",
    },
    {
      label: "Address",
      value: "Durgapur, West Bengal",
    },
    {
      label: "Email",
      value: "daswork99@gmail.com",
    },
    {
      label: "ContactNo",
      value: "9382110326",
    },
  ];

  return (
    <div className="AboutPage">
      <div className='About-head'>
        <PageHeader
          headerText="About"
          icon={<BsInfoCircle size={40} color="yellow" />}
        />
      </div>

      <div className="About_personal_info">
        
        <div className="About_body">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(-900px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3>Frontend Developer</h3>

          <p>
            I am a passionate, dedicated software developer with a proven track
            record of delivering high-quality software solutions. I have a
            strong foundation in programming languages like Html,Css,
            JavaScript, and Java. I have worked on various projects, including
            web development, mobile app development, and data analysis. My
            expertise lies in developing scalable, efficient, and maintainable
            software applications.
          </p>
        </Animate>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(500px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
        <h3 className='personalinformationtext'>Personal Information</h3>

        
            {PersonalInformation.map((item, index)=>
              ( 
              <li key={index} className='about-li' >
            
                
                <span className='span-label'>{item.label}</span>         
                <span className='span-value'>{item.value }</span>
                
            </li>
           )
            )}
            </Animate>
      </div>

            <div className='about_body_icon'>
            <div className='about_body_icon_contents'>

              
              <div>
                <FaDev size={60} color='yellow'/>
              </div>
              <div>
              <DiCss3 size={60} color='yellow'/>

              </div>

              <div>

              <DiHtml5 size={60} color='yellow'/>

              </div>

              <div>

              <DiJavascript size={60} color='yellow'/>

              </div>

              <div>

              <FaDatabase size={60} color='yellow'/>

              </div>
            
            </div>
      </div>

      
    </div>
    </div>
  );
};

export default About;
