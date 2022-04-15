import React from 'react'
import './Dest.css'
import { Link, } from 'react-router-dom'
import moon from '/Users/onomeowah/Desktop/Space react/src/space-tourism-website-main/space-tourism-website-main/starter-code/assets/destination/image-moon.webp'



const Destination = () => {
  return (
    <div className='bg2'>

        <div className='flex'>


          <div className='pick'> 
              <h5>01 PICK YOUR DESTINATION</h5>

              <img className='pace' src={moon} alt="" />
          </div>



          <div className='mini'>
            <nav>
            <ul className='List'>
              <Link to = '/moon'><li>MOON</li></Link>
              <Link to = '/mars'><li>MARS</li></Link>
              <Link to = '/europa'><li>EUROPA</li></Link>
              <Link to = '/titan'><li>TITAN</li></Link>
            </ul>
            </nav>
            
            <div className='decor'>
            <h1>EUROPA</h1>

            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come 
                back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <hr />
            <div className='distance'>
                <div>
                    <p> Avg. distance </p>
                    384,400 km 
                </div>

                <div className='est'>
                    <p>Est. travel time</p> 
                    3 days
                </div>
                        
            </div>

            </div>
           
        
          </div>
          




        </div>
       




    </div>
  )
}

export default Destination