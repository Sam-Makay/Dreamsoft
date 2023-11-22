import React from "react";
import location from '../../assets/Share location.svg'
import schedule from '../../assets/Schedule.svg'
import thomas from '../../assets/Rectangle 138.png'
import { useContext } from "react";
import { sectionSwitch } from '../App'


const About = () => {
    const tgf1 = 'Dreamsoft, a technical company that builds international scalable and efficient'
    const tgf2 = 'software and tools to help your bussiness thrive.'
    const [activeSection, setActiveSection, sectionToggler] = useContext(sectionSwitch)

    return ( 
        <main style={{display: activeSection === 'About' ? 'block' : 'none'}}>
            <h1>{activeSection}</h1>
            <header className="about">

                <div className="about__greeting__text">
                    <h3>OUR MISSION</h3>
                    <h2>Provide scalable efficient and reliable <br />software and tools to make your <br />bussiness thrive.</h2>
                </div>
            </header>
            <section className="about__main__section">
                <div className="about__about__us">
                    <h1>About Us</h1>
                    <p>{tgf1} <br /> {tgf2}</p>
                </div>
                <div className="details__container">
                    <div className="about__location">
                    <img src={location} alt="location" />
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae qui laudantium ut iure exercitationem iusto aliquid quae facilis numquam?</p>
                        <br />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel placeat nisi quos deleniti et quia rerum voluptatibus atque! Provident id officia perspiciatis beatae ipsa.</p>
                    </div>
                    </div>
                    <div className="schedule">
                        <img src={schedule} alt="schedule" />
                        <div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae qui laudantium ut iure exercitationem iusto aliquid quae facilis numquam?</p>
                        <br />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel placeat nisi quos deleniti et quia rerum voluptatibus atque! Provident id officia perspiciatis beatae ipsa.</p>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="reviews__section">
                <div className="reviews__section__greet__text">
                    <h3>Reviews & Recomendations</h3>
                    <p>{tgf1} <br /> {tgf2}</p>
                </div>
                <div className="review">
                    <h3>Thomas Cole</h3>
                    <h2>I really enjoyed working with <br />Dreamsoft. Their customer <br />support is the best I've ever <br />encountered</h2>
                    <p>2 minutes ago</p>
                    <img src={thomas} alt="client" />
                </div>
                <div className="slider__wrapper">
                    <div className="slider"></div>
                    <div className="slider"></div>
                    <div className="slider"></div>
                </div>
            </section>
            <section className="email__form">
                <h3>Email Letters</h3>
                <p>{tgf1} <br />{tgf2}</p>
                <form action="POST">
                    <input type="emial" name="email" />
                    <br />
                    <button>Apply</button>
                    <div className="circle"></div>
                </form>
            </section>

        </main>
     );
}
 
export default About;