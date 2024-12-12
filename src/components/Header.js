import { Link } from "react-router";



const Header =() =>{

    return(

        <div className="Header-box">
          <Link to= "/body" > <img className= "head-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEkql7cgDI3boRmP0g9rWDVZ1grNa1Rz7Mw&s"/></Link>

            <div className="nav-items">
                <ul>
                <Link to ="/body" className="link"><li>Home</li></Link>                    
                <Link to ="/about"className="link"><li>About</li></Link>
                <Link to ="/skills"className="link"><li>Skills</li></Link>        
                <Link to ="/ContactMe"className="link"><li>ContactMe</li></Link>  
                <Link to ="/resume"className="link"><li>Resume</li></Link>                    
                  
            
                </ul>
            </div>
        </div>
    )
}

export default Header;