import React, {useEffect} from 'react'
import phone from '../assets/phone.jpg'
import {useNavigate} from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Contact() {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div id="container05" className="container columns full screen">
            <div className="wrapper">
                <div className="inner">
                    <div><h3 id="text35" className="style4">Reach us</h3>
                        <h2 id="text02" className="style3">Reach us</h2>
                        <p id="text11" className="style5"> Leave as a message, in our official handles.
                        </p>
                        <ul id="icons01" className="style1 icons">
                            <li>
                                <a className="n01" href="tel:+254791881086">

                                    <svg>
                                        <PhoneIcon/>
                                    </svg>
                                    <span className="label">Phone number</span></a>
                            </li>
                            <li>
                                <a className="n02" href="https://wa.me/+254791881086">
                                    <svg>
                                        <WhatsAppIcon/>
                                    </svg>
                                    <span className="label">Whatsapp</span>
                                </a>
                            </li>
                            <li>
                                <a className="n02" href="https://wa.me/+254791881086">
                                    <svg>
                                        <EmailIcon/>
                                    </svg>
                                    <span className="label">Email Account</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div id="image01" className="image"><img
                            src={phone}
                            alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact