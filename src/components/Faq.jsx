import React from 'react';
import rigth_arrow from '../../assets/righ arrow.png'
import downarrow from '../../assets/Arrow downward.png'
import { useContext, useState } from 'react';
import { sectionSwitch } from '../App';
import search from '../../assets/Search.png'

const Faq = () => {
    const [activeSection, setActiveSection, sectionToggler] = useContext(sectionSwitch)
    const questions = [
        {
            key: 1,
            title: 'Who are we',
            frag1: `We're building new ways to help you explore your interests and connect with the`,
            frag2: 'people you care about.'
        },
        {
            key: 2,
            title: 'Who are we',
            frag1: `We're building new ways to help you explore your interests and connect with the`,
            frag2: 'people you care about.'
        },
        {
            key: 3,
            title: 'Who are we',
            frag1: `We're building new ways to help you explore your interests and connect with the`,
            frag2: 'people you care about.'
        },
    ]

    return ( 
        <main style={{display: activeSection === 'Faq' ? 'block' : 'none'}}>
            <header className="faq__header">
                <div className="bubble1"></div>
                <div className="bubble2"></div>
                <div className="bubble3"></div>
                <div className="bubble4"></div>
                <div className="bubble5"></div>
                <div className="bubble6"></div>
                <div className="blogs__greeting__text">
                    <h3>FAQs</h3>
                    <p>We're building new ways to help you explore your interest and <br />connect with the people you care about.</p>
                    <div className="form">
                        <input type="text" placeholder="Type topic here..."/>
                        <img src={search} className="search"/>
                    </div>
                    <p className="time">Recent update : Today 12:45 am</p>
                </div>
            </header>
            <section>
                <div className="faq__wrapper">
                    <h3>Popular Questions</h3>
                    <p>{questions[0].frag1} <br />{questions[0].frag2}</p>
                    {
                        questions.map(ques => {
                            return (
                                <div key={ques.key} className="qbox">
                                    <div className="text__box">
                                        <h3>{ques.title}</h3>
                                        <p>{ques.frag1} <br />{ques.frag2}</p>
                                        <input type="button" value={'Read more'}/>
                                    </div>
                                    <div className="action__box">
                                        <div className="arrow__bg">
                                            <img src={rigth_arrow} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                                    <div className="arrow__bg">
                        <img src={downarrow}/>
                    </div>
            </section>
        </main>
     );
}
 
export default Faq;