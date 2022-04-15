import React from 'react'
import './Dest.css'
import { Link, } from 'react-router-dom'
import titan from '/Users/onomeowah/Desktop/Space react/src/space-tourism-website-main/space-tourism-website-main/starter-code/assets/destination/image-titan.webp'

const Destination = () => {
  return (
    <div className='bg2'>

        <div className='flex'>


          <div className='pick'> 
              <h5>01 PICK YOUR DESTINATION</h5>

              <img className='pace' src={titan} alt="" />
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
            <h1>TITAN</h1>

            <p>Titan The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home 
                (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. 
                Avg. distance 1.6 bil. km Est. travel time 7 years</p>
            <hr />
                <div className='distance'>
                    <div>
                        <p> Avg. distance </p>
                        <p className='p'>1.6 bil. km</p>
                    </div>

                    <div className='est'>
                        <p>Est. travel time</p> 
                        <p className='p'>7 years</p>
                    </div>
                    
                </div>
                </div>

               
           
        
          </div>
          




        </div>
       




    </div>
  )
}

export default Destination