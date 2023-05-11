import React from 'react'
import './assets/styles.css'
import placeHolder from '../assets/person.png'


function Testimonials() {
    return (
        <>
            <hr id="divider01" />
                <div id="container04" className="container default">
                    <div className="wrapper">
                        <div className="inner">
                            <div id="image02" className="image"><img
                                src={placeHolder}
                                alt=""/></div>
                            <h3 id="text34" className="style4">Team</h3>
                            <h3 id="text19" className="style6">Stephen</h3>
                            <p id="text20" className="style5">The attention to detail,
                                typography and design ethics is what i adored with these ByteBuds developers</p></div>
                    </div>
                </div>
        </>
    )
}

export default Testimonials
