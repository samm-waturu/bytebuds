import React, {useEffect} from 'react'
import constLogo from '../assets/construct.jpg'
import './assets/styles.css'

function Soon() {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return (
        <div id="container05" className="container columns full screen">
            <div className="wrapper">
                <div className="inner">
                    <div><h3 id="text35" className="style4">Soon</h3>
                        <h2 id="text02" className="style3">Coming soon</h2>
                        <p id="text11" className="style5"> We are crafting out this page at the moment

                        </p>
                        <ul id="buttons01" className="style1 buttons">
                            <li>
                                <a href="tel:+254791881086" className="button n01">
                                    <span className="label">Reach us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div id="image01" className="image"><img
                            src={constLogo}
                            alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Soon
