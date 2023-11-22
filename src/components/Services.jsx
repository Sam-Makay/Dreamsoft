import React from "react";
import google from '../../assets/google.png'
import letiarts from '../../assets/Letiarts-Logo.png'
import logic from '../../assets/logic.png'
import leftElipse from '../../assets/elipse left.png'
import rightElipse from '../../assets/elipse right.png'
import { useContext, useState } from "react";
import { sectionSwitch } from "../App";

const Services = () => {

    const [activeSection, setActiveSection, sectionToggler] = useContext(sectionSwitch)

    return ( 
        <main style={{display: activeSection === 'Services' ? 'block' : 'none'}}>

                <header className="services__header">
                    <div className="header__circle"></div>
                    <div className="services__greetings">
                        <h2>Technologies that bring the world closer <br />together</h2>
                        <p>We're building new ways to help you explore your interests and <br />connect with the people you care about.</p>
                    </div>
                    <div className="sponsors">
                        <img src={letiarts} alt="letiarts" id="letiarts" />
                        <img src={google} alt="google" id="google"/>
                        <img src={logic} alt="logic kids" id="logic_kids"/>
                    </div>
                </header>
                <section className="ads__section">
                    <div className="instant__ads">
                        <div className="txt">
                            <h3>Instant Ads</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, eaque hic ad natus velit facilis magni, cum ullam odit magnam blanditiis unde fugit dolorum quis dicta mollitia quo iusto iste libero necessitatibus alias ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, possimus ex dicta pariatur temporibus optio ab, quas totam vitae corporis beatae?</p> <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquid fuga aspernatur amet aperiam minima, doloremque dicta et consequatur eius, nam voluptas at cumque expedita nesciunt similique sapiente eum! Hic eligendi itaque consectetur aperiam? Dolor sit amet, consectetur adipisicing elit. Rerum, atque!</p> <br />
                            <button>Grow your business</button>
                        </div>
                        <img src={rightElipse} alt="" />
                    </div>
                    <div className="sprint__cash">
                        <div className="txt">
                            <h3>Sprint Cash</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, eaque hic ad natus velit facilis magni, cum ullam odit magnam blanditiis unde fugit dolorum quis dicta mollitia quo iusto iste libero necessitatibus alias ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, possimus ex dicta pariatur temporibus optio ab, quas totam vitae corporis beatae?</p> <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquid fuga aspernatur amet aperiam minima, doloremque dicta et consequatur eius, nam voluptas at cumque expedita nesciunt similique sapiente eum! Hic eligendi itaque consectetur aperiam? Dolor sit amet, consectetur adipisicing elit. Rerum, atque!</p> <br />
                            <button>Start now</button>
                        </div>
                        <img src={leftElipse} alt="" />
                    </div>
                    <div className="training">
                        <h3>Training</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat <br />dolorem laborum provident cupiditate assumenda officia dolorum. Sapiente <br />atque tempora dolores odio beatae? Doloremque laborum tenetur <br />nostrum velit. Corrupti hic ea enim molestias!</p> <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, eos labore!</p>
                        <input type="button" className="read_more" value="Read more" />
                    </div>
                </section>

        </main>
     );
}
 
export default Services;