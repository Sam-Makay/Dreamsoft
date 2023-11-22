import React from "react";
import { useContext, useState } from "react";
import { sectionSwitch } from "../App";
import google from '../../assets/google rect.png'
import figma from '../../assets/figma.png'
import abstract from '../../assets/abstract.png'
import Apple from '../../assets/Apple.png'
import appstore from '../../assets/apple appstore.png'
import graphics from '../../assets/graphics.png'
import downarrow from '../../assets/Arrow downward.png'
import search from '../../assets/Search.png'

const Blogs = () => {
    const [activeSection, setActiveSection, sectionToggler] = useContext(sectionSwitch)
    const articles = [
        {
            key: 1,
            title: 'Recent Updates',
            frag1: `We're building new ways to help you explore your`,
            frag2: `interests and connect with the people you care about.`,
            src: graphics
        },
        {
            key: 2,
            title: 'Recent Updates',
            frag1: `We're building new ways to help you explore your`,
            frag2: `interests and connect with the people you care about.`,
            src: Apple
        },
        {
            key: 3,
            title: 'Recent Updates',
            frag1: `We're building new ways to help you explore your`,
            frag2: `interests and connect with the people you care about.`,
            src: google
        },
        {
            key: 4,
            title: 'Recent Updates',
            frag1: `We're building new ways to help you explore your`,
            frag2: `interests and connect with the people you care about.`,
            src: figma
        },
        {
            key: 7,
            title: 'Recent Updates',
            frag1: `We're building new ways to help you explore your`,
            frag2: `interests and connect with the people you care about.`,
            src: appstore
        },
        {
            key: 8,
            title: 'Recent Updates',
            frag1: `We're building new ways to help you explore your`,
            frag2: `interests and connect with the people you care about.`,
            src: abstract
        },
    ]

    return ( 
        <main style={{display: activeSection === 'Blogs' ? 'block' : 'none'}}>
            <header className="blogs__header">
                <div className="blogs__bg__circle"></div>
                <div className="blogs__greeting__text">
                    <h3>Get Updated</h3>
                    <p>We're building new ways to help you explore your interest and <br />connect with the people you care about.</p>
                    <div className="form">
                        <input type="text" placeholder="Type topic here..."/>
                        <img src={search} className="search"/>
                    </div>
                    <p className="time">Recent update : Today 12:45 am</p>
                </div>
            </header>
            <section className="blogs__section">
                <div className="wrapper">
                    <h3>Recent updates</h3>
                    <p>We're building new ways to help you explore your interests and connect with the <br/> people you care about.</p>
                <div className="blog__wrapper">
                {
                    articles.map(article => {
                        return (<div key={article.key} className="blog">
                            <img src={article.src} />
                            <div className="blog__text">
                            <h3>{article.title}</h3>
                            <p>{article.frag1} <br />{article.frag2}</p>
                            </div>
                        </div>)
                    })
                }
                </div>
                </div>
                <div className="arrow__bg">
                    <img src={downarrow} />
                </div>
            </section>
        </main>
     );
}
 
export default Blogs;