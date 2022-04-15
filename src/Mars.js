import React from 'react'
import './Dest.css'
import { Link, } from 'react-router-dom'

import space from '/Users/onomeowah/Desktop/Space react/src/space-tourism-website-main/space-tourism-website-main/starter-code/assets/destination/image-mars.png'

const Destination = () => {
  return (
    <div className='bg2'>

        <div className='flex'>


          <div className='pick'> 
              <h5>01 PICK YOUR DESTINATION</h5>

              <img className='pace' src={space} alt="" />
          </div>



          <div className='mini'>
            <nav>
            <ul className='List'>
              <Link className='change' to = '/Destination'><li>MOON</li></Link>
              <Link className='change' to = '/mars'><li>MARS</li></Link>
              <Link className='change' to = '/europa'><li>EUROPA</li></Link>
              <Link className='change' to = '/titan'><li>TITAN</li></Link>
            </ul>
            </nav>
            
            <div className='decor'>
                    <h1>MARS</h1>

                    <p>Mars Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                    <hr />
                        <div className='distance'>
                            <div>
                                <p> Avg. distance </p>
                               <p className='p'> 225 mil. km</p>
                            </div>

                            <div className='est'>
                                <p >Est. travel time</p> 
                                <p className='p'>9 months</p>


                            </div>
                                    
                        </div>
            </div>
            



           
        
          </div>
          




        </div>
       




    </div>
  )
}

export default Destination