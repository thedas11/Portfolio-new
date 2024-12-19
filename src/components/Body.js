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
            <div className='shim-Loading'>
            <Loding />
            </div>
        )
    
    return(
        <div className='body'>


            <div className=" body-text" >

            <h1 className='bodyh1animate'>Hello World, I am Soumalya
                <br />

                Frontend Developer
            </h1>
            </div>

            <div className='body-btns'> 

          <Link to ="/ContactMe" >  <button className= 'body-btn1'>Hire Me</button> </Link>
            
            </div>
        </div>
    )

}

export default Body;