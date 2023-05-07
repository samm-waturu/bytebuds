import React, {useEffect} from 'react'
import errImg from '../assets/404.jpg'
import './assets/styles.css'
import {useNavigate} from "react-router-dom";

function Soon() {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return (
        <div id="container05" className="container columns full screen">
            <div className="wrapper">
                <div className="inner">
                    <div><h3 id="text35" className="style4">404</h3>
                        <h2 id="text02" className="style3">404 Error</h2>
                        <p id="text11" className="style5"> Page not available....!
                        </p>
                    </div>
                    <div>
                        <div id="image01" className="image"><img
                            src={errImg}
                            alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Soon
