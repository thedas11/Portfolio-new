import { Line } from "rc-progress";
import { Animate } from "react-simple-animate";
import PageHeader from "./PageHeader";
import { BsInfoCircle } from "react-icons/bs";
import skillsData from "../utils/skillsData";
import { AnimateKeyframes } from "react-simple-animate";

const Skills =()=>{
    return(

        <div className="SkillsPage">
        <div>
          <PageHeader headerText="Skills" icon={<BsInfoCircle size={40} color="yellow" />} />
        </div>
  
        <div className="skills-content-wrapper" >

          {skillsData.map((item,i)=>(

            <div key={i} className="skill-content-wrapper-inner-content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: 'translateX(-200px)'
                }}

                end={{

                  transform: 'translateX(0px)'
                }}
                >

                  <h3 className="skills-content-wrapper-inner-content-categoy-text">{item.label}</h3>
                  <div>

                    {item.data.map((skillItem,j)=>(

                      <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity:1", "opacity:0" ]}
                      iterationCount={1}
                      
                      >
                          <div className="progressbar-wrapper" key={j}>
                            <p>{skillItem.skillName}</p>
                            <Line 
                              percent={skillItem.percentage}
                              strokeWidth="2"
                              strokeColor="yellow"
                              trailWidth="2"
                              strokeLineCap="square"
                              
                              />
                          </div>


                      </AnimateKeyframes>
                    ))}
                  </div>


              </Animate>
            </div>
          ))}
  
  
        </div>
  
      </div>
    )
}

export default Skills;