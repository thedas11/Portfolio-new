import PageHeader from "./PageHeader";


const ContactMe =()=>{
    return(
        <div className="ContactMePage">
            <PageHeader headerText="ContactMe" icon=" " />




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