import React from 'react'
import './assets/styles.css'
import { useNavigate } from 'react-router-dom';
function ServiceSect() {
    const navigate = useNavigate()
    return (
        <div id="container05" className="container columns full screen">
            <div className="wrapper">
                <div className="inner">
                    <div><h3 id="text35" className="style4">Services</h3>
                        <h2 id="text02" className="style3">Our services</h2>
                        <p id="text11" className="style5">We specialize in frontend & fullstack web development, <br/>
                            E-commerce development for creative designers | niche product owners and branding. </p>
                        <ul id="buttons01" className="style1 buttons">
                            <li>
                                <a className="button n01">
                                <span onClick={() => {
                                    navigate('/works')
                                }} className="label">View Works </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div id="image01" className="image"><img
                            src="https://3691413f8d701214.demo.carrd.co/assets/images/image01.svg?v=81f23adc"
                            alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSect
