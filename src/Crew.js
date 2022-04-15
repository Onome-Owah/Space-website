import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Crew.css'
import flight from '/Users/onomeowah/Desktop/Space react/src/space-tourism-website-main/space-tourism-website-main/starter-code/assets/crew/image-anousheh-ansari.webp'
import command from '/Users/onomeowah/Desktop/Space react/src/space-tourism-website-main/space-tourism-website-main/starter-code/assets/crew/image-douglas-hurley.webp'
import pilot from '/Users/onomeowah/Desktop/Space react/src/space-tourism-website-main/space-tourism-website-main/starter-code/assets/crew/image-victor-glover.webp'
import mission from '/Users/onomeowah/Desktop/Space react/src/space-tourism-website-main/space-tourism-website-main/starter-code/assets/crew/image-mark-shuttleworth.webp'


const Crew = () => {
  return (
    <div className='bg3'>

       <div className = 'hide'>
       <div className='meet'>
       <h4>02 MEET YOUR CREW</h4>
       </div>

        <Carousel>

  <Carousel.Item>
            <div className='flexmi'>

                <div className='ansariimg'>
                    <img
                className="flight"
                src={flight}
                alt="First slide"
                />
                    </div>

                    <div >
                    <Carousel.Caption className='ansaritext'>
                <h3>Flight Engineer</h3>
                <h1 className='name'>Anousheh Ansari</h1>
                <p> Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                    Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian 
                    in space.</p>
                </Carousel.Caption>
                    </div>

            </div>
  </Carousel.Item>





  <Carousel.Item>
            <div className='flexmi'>
                <div>
                                <img
                    className="command"
                    src={command}
                    alt="Second slide"
                    />

    
                </div>

                <div>
                                    <Carousel.Caption className='ansaritext'>
                        <h3>Commander</h3>
                        <h1 className='name'>Douglas Hurley</h1>
                        <p> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. 
                            He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                        </Carousel.Caption>
                </div>
            </div>
  </Carousel.Item>





  <Carousel.Item>
            <div className='flexmi'>
                <div>
                   <img
                    className="pilot"
                    src={pilot}
                    alt="Third slide"
                    />

                    
                </div>
                <div>
                <Carousel.Caption className='ansaritext'>
                    <h3>Pilot</h3>
                    <h1 className='name'>Victor Glover</h1>
                    <p> Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. 
                        Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as 
                        a station systems flight engineer.</p>
                    </Carousel.Caption>
                </div>
            </div>
  </Carousel.Item>




<Carousel.Item>
            <div className='flexmi'>
                <div>
                    <img
                    className="mission"
                    src={mission}
                    alt="Third slide"
                    />

    
                </div>
                <div>
                            <Carousel.Caption className='ansaritext'>
                    <h3>Mission Specialist</h3>
                <h1 className='name'>Mark Richard Shuttleworth</h1>
                <p > Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the 
                    Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                </Carousel.Caption>
                </div>
            </div>
  </Carousel.Item>

</Carousel>

       </div>


{/* ============================================================================================================================= */}

        <div className='show'>
        <div className='meet'>
       <h4>02 MEET YOUR CREW</h4>
       </div>

       <section className="boot">
       <h5>FLIGHT ENGINEER</h5>

            <h1>Anousheh Ansari </h1>

            <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space 
                tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>

            
            <img className='flight' src={flight} alt="" />
       </section>

       <section className="boot">
       <h5>COMMANDER</h5>

            <h1>Douglas Hurley </h1>

            <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA 
                astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>

            
            <img className='command' src={command} alt="" />
       </section>

       <section className="boot">
       <h5>PILOT</h5>

            <h1>Victor Glover </h1>

            <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. 
                Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as 
                a station systems flight engineer.</p>

            
            <img className='pilot' src={pilot} alt="" />
       </section>


       <section className="boot">
       <h5>MISSION SPECIALIST</h5>

            <h1>Mark Shuttleworth</h1>

            <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space 
                tourist.</p>

            
            <img className='mission' src={mission} alt="" />
       </section>

        </div>


        
    </div>
  )
}

export default Crew