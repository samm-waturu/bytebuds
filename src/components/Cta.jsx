import React from 'react'
import './assets/styles.css'
import PhoneIcon from '@mui/icons-material/Phone';

function Cta() {
    return (
        <>
            <hr id="divider02"/>
            <div id="container28" className="style1 container default full screen">
                <div className="wrapper">
                    <div className="inner"><h3 id="text17" className="style7">Talk to us</h3>
                        <h2 id="text14" className="style1">Get a free Quote</h2>
                        <p id="text03">"Ready to take your online presence to the next level? Schedule a free consultation with our expert team and
                            discover how we can help you achieve your goals. Book now and receive a 10% discount on your first project!"</p>
                        <ul id="buttons02" className="style2 buttons">
                            <li><a href="tel: +254791881086" className="button n01">
                                <svg>
                                    <PhoneIcon/>
                                </svg>
                                <span className="label">Reach us</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta
