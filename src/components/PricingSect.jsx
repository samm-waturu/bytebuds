import React from 'react'
import './assets/styles.css'

function PricingSect() {
    return (
        <>
            <div id="container07" className="container default full screen">
                <div className="wrapper">
                    <div className="inner">
                        <hr id="divider03"/>
                        <h2 id="text13" className="style3">Our Rates</h2>
                        <p id="text18" className="style5">
                            We gauge our rates, with value based pricing model in context.
                            This is because here at ByteBuds we believe we aren't just selling websites,
                            but solutions that might positively affect your business' financial trajectory going
                            forward.
                        </p>
                        <p id="text18" className="style5">
                            Below are our starting prices:
                        </p>
                    </div>
                </div>
            </div>
            <div id="container03" className="container columns">
                <div className="wrapper">
                    <div className="inner">
                        <div>
                            <h3 id="text30" className="style4">FrontEnd</h3>
                            <h2 id="text22">$110 to $588</h2>
                            <h3 id="text05" className="style4">15000Ksh to 80000Ksh</h3>
                            <h3 id="text05" className="style6">UI | UX </h3>
                            <p id="text24" className="style5">
                                A great tier for photographers,
                                niche product & fashion designers, who want to showcase their works.
                                This tier offers basic functionalities great for simple web projects
                            </p>
                            <ul id="buttons04" className="style1 buttons">
                                <li>
                                    <a href="tel:+254791881086" className="button n01">
                                        <span className="label">Front-End</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 id="text30" className="style4">FullStack</h3>
                            <h2 id="text32">$220 to $1838</h2>
                            <h3 id="text05" className="style4">30000Ksh to 250000Ksh</h3>
                            <h3 id="text05" className="style6">UI | UX & Logic </h3>
                            <p id="text24" className="style5">
                                A great tier for serious individuals who wants to venture into the e-commerce.
                                This tier includes advanced features, great for web apps and systems.
                            </p>
                            <ul id="buttons03" className="buttons">
                                <li>
                                    <a href="tel: +254791881086" className="button n01">
                                        <span className="label">Full-Stack</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingSect
