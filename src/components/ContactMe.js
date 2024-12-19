import PageHeader from "./PageHeader";
import { BsInfoCircle } from "react-icons/bs";

const ContactMe =()=>{
    return(

        <div className="ContactMePage">
            <PageHeader headerText="ContactMe" icon={<BsInfoCircle size={40} color="yellow" />} />




            <div className="ContactMeContent">

             <h3 className="ContactMeContent-h3"> Let's Talk</h3>


             <div className="ContactMeContent-details">

                <div className="Name"> Name </div>
                <div className="Email"> Email </div>

                <div className="Phone"> Phone no </div>


             </div>

            </div>
        </div>




    )
}
export default ContactMe;