import React from 'react'
import './Technology.css'
import { Link } from 'react-router-dom'
import cap from '/Users/onomeowah/Desktop/Space react/src/space-tourism-website-main/space-tourism-website-main/starter-code/assets/technology/image-space-capsule-portrait.jpg'

const Technology = () => {
  return (
    <div className='bg4'>
        <h4 className='launch'>03 SPACE LAUNCH 101</h4>
        


        <div className='term'>
                <section>
                    <ul className='list'>
                    <Link className='change num' to = '/technology'><li>1</li></Link>
                    <Link className='change num' to = '/Spaceport'><li>2</li></Link>
                    <Link className='change num nam' to = '/Capsule'><li>3</li></Link>
                    </ul>
                </section>

            <div className='vehicle'>
                    <div className='own'>
                    <p>THE TERMINOLOGY...</p>

                        <h1>SPACE CAPSULE</h1>

                        <p>Space capsule A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter 
                            the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. 
                            It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                    </div>
            </div>
            <div className='port'>
                <img className='pic' src={cap} alt="" />

            </div>
        </div>
    </div>

    
  )
}

export default Technology