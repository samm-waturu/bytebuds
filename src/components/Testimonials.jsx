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
                            <h3 id="text19" className="style6">Joe Kigathi</h3>
                            <p id="text20" className="style5">As a developer at ByteBuds the quality of code and passion that goes into projects
                                is unmatched. Making something that leaves an impression ain't easy </p></div>
                    </div>
                </div>
        </>
    )
}

export default Testimonials
