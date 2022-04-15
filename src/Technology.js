import React from 'react'
import './Technology.css'
import { Link } from 'react-router-dom'
import port from '/Users/onomeowah/Desktop/Space react/src/space-tourism-website-main/space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-portrait.jpg'


const Technology = () => {
  return (
    <div className='bg4'>
        <h4 className='launch'>03 SPACE LAUNCH 101</h4>
        


        <div className='term'>
                <section>
                    <ul className='list'>
                    <Link className='change num nam' to = '/technology'>1</Link>
                    <Link className='change num' to = '/Spaceport'>2</Link>
                    <Link className='change num' to = '/Capsule'>3</Link>
                    </ul>
                </section>                

            <div className='vehicle'>
                    <div className='own'>
                    <p>THE TERMINOLOGY...</p>

                        <h1>LAUNCH VEHICLE</h1>

                        <p>Launch vehicle A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from 
                            Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in 
                            operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                    </div>
                
            
            <div className='port'>
                <img className='pic' src={port} alt="" />

            </div>
        </div>
    </div>

    
  )
}

export default Technology