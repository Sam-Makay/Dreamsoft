import React, { useState, useContext } from "react";
import logo from '../../assets/Logo.png'
import mail from '../../assets/Mail outline.png'
import msg from '../../assets/Vector.png'
import seperator from '../../assets/Rectangle 129.png'
import { sectionSwitch } from "../App";

const Navbar = () => {
    const [activeSection, setActiveSection, sectionToggler] = useContext(sectionSwitch)
    const [ active, setActive ]= useState('what we do')
    const trigger = value => setActive(value)

    return ( 
          <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
                <ul>
                    <li className={active === 'what we do' ? 'active' : ''} onClick={() => {
                        trigger('what we do')
                        sectionToggler('About')
                        }}>What we do</li>
                    <li className={active === 'what we build' ? 'active' : ''} onClick={() => {
                        trigger('what we build')
                        sectionToggler('Services')
                        }} >What we build</li>
                    <li className={active === 'Our blog' ? 'active' : ''} onClick={() => {
                        trigger('Our blog')
                        sectionToggler('Blogs')
                    }}>Our blog</li>
                </ul>
            </div>
            <div className="faq">
                <ul>
                    <li className={active === 'Faq' ? 'active' : ''} onClick={() => {
                        trigger('Faq')
                        sectionToggler('Faq')
                        }}>FAQ's</li>
                </ul>
                    <img src={seperator} alt="line" className="line" />
                    <img src={mail} alt="contact icon" className="contact" />
                    <img src={msg} alt="message icon" className="msg"/>
            </div>
        </nav> 
     );
}
 
export default Navbar;