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
              <Link className='change' to = '/moon'><li>MOON</li></Link>
              <Link className='change' to = '/mars'><li>MARS</li></Link>
              <Link className='change' to = '/europa'><li>EUROPA</li></Link>
              <Link className='change' to = '/titan'><li>TITAN</li></Link>
            </ul>
            </nav>
            
                  <div className='decor'>
                  <h1>MOON</h1>

                      <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come 
                          back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                          <hr />
                          <div className='distance'>
                                  <div>
                                          <p> Avg. distance </p>
                                          <p className='p'>384,400 km </p>
                                  </div>

                                  <div className='est'>
                                          <p >Est. travel time</p> 
                                          <p className='p'>3 days</p>
                                  </div>
                  
                          </div>
                              
                  </div>
           
        
          </div>
          

        </div>
       

    </div>
  )
}

export default Destination