import React from 'react'

import {useEffect, useState} from 'react'
import Loding from './Loding'
import { Link } from 'react-router'
import {Animate} from 'react-simple-animate'
const Body=() =>{
const [changeview, setChangeview] = useState(null)


useEffect(()=>{

    setTimeout(()=>{
        setChangeview(1)
    }, 3000)
 }, [])


     if(changeview === null)

        return(
            <Loding />
        )
    
    return(
        <div className='body'>


            <div className='body-text'>

            <h1>Welcome to my world, I am Soumalya
                <br />

                Frontend Developer
            </h1>
            </div>

            <div className='body-btns'> 

            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform: 'translateY(500px)'
            }}

            end={{
             transform:  'translateX(0px)'
            }}
            >

            {/* */}

            
          <Link to ="/ContactMe" >  <button className= 'body-btn1'>Hire Me</button> </Link>
            
            
           

            </Animate >
            </div>
        </div>
    )

}

export default Body;