import { useState, useEffect } from "react";
import PageHeader from "./PageHeader";
import { BsInfoCircle } from "react-icons/bs";
const Resume = () => {

  const [animateResumePage, setAnimateResumePage] = useState("false")




  useEffect(() => {
    handleResumePageAnimation();

  }, []);

  const handleResumePageAnimation = () => {
    setAnimateResumePage('true');
  };

  return (



    <div className={animateResumePage?'animate':'Resume-content'}>
      <PageHeader
        headerText="Resume"
        icon={<BsInfoCircle size={40} color="yellow" />}
      />


      <div className="Resume-content"> 
      <div className="vl-Experience">


      

        <hr className="hr1"></hr>

    

    
      </div>

        <div className="Experience">
          <h3 className="exp_header-text">Experience</h3>

          <div className="Experience-content">
            <h4 className="Experience-content-heading">Analyst,Capgemini</h4>

            <h4>Frontend Development, React developer </h4>

            <p>March 2023 - September 2024 </p>
          </div>
        </div>
        <div className="vl-Education">

        <hr className="hr2"></hr>
        </div>



        <div className="Education">

            <h3 className="Education-header-text">Education</h3>

            <div className="Education-content1">
               

            <h4 className="Experience-content-heading">Dayananda Sagar College of Engineering</h4>

            <h4>Telecommunication Engineering </h4>

            <p>August 2018 - July 2022 </p>
                   
                </div>

                <div className="Education-content1">
               

               <h4 className="Experience-content-heading">Bidhan Chandra Institutions</h4>
   
               <h4>Stream- Science </h4>
   
               <p>August 2015 - July 2017 </p>
                      
                   </div>

                   <div className="Education-content1">
               

               <h4 className="Experience-content-heading">Dav Model School, Durgapur</h4>
   
               <p>August 2003 - July 2015 </p>
                      
                   </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
