import React from 'react'
import './Technology.css'
import { Link } from 'react-router-dom'
import ports from '/Users/onomeowah/Desktop/Space react/src/space-tourism-website-main/space-tourism-website-main/starter-code/assets/technology/image-spaceport-portrait.jpg'

const Technology = () => {
  return (
    <div className='bg4'>
        <h4 className='launch'>03 SPACE LAUNCH 101</h4>
        


        <div className='term'>
                <section>
                    <ul className='list'>
                    <Link className='change num' to = '/technology'><li>1</li></Link>
                    <Link className='change num nam' to = '/Spaceport'><li>2</li></Link>
                    <Link className='change num' to = '/Capsule'><li>3</li></Link>
                    </ul>
                </section>

            <div className='vehicle'>
                    <div className='own'>
                    <p>THE TERMINOLOGY...</p>

                        <h1>SPACEPORT</h1>

                        <p>Spaceport A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the 
                            seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally 
                            situated to take advantage of the Earth’s rotation for launch.</p>
                    </div>
            </div>
            <div className='port'>
                <img className='pic' src={ports} alt="" />

            </div>
        </div>
    </div>

    
  )
}

export default Technology