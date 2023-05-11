import React from 'react'
import './assets/styles.css'
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    return (
        <>
            <div id="container01" className="container default full screen">
                <div className="wrapper">
                    <div className="inner"><p id="text16" className="style5">© ByteBuds. All rights reserved {new Date().getFullYear()}.</p>
                        <ul id="icons01" className="style1 icons">
                            <li>
                                <a className="n01" href="tel:+254768989025">

                                    <svg>
                                        <PhoneIcon />
                                    </svg>
                                    <span className="label">Phone number</span></a>
                            </li>
                            <li>
                                <a className="n02" href="https://wa.me/+254768989025">
                                    <svg>
                                        <WhatsAppIcon/>
                                    </svg>
                                    <span className="label">Email Account</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
