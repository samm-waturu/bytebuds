import React from 'react';
import {useEffect, useState} from 'react'
import Landing from "./components/Landing.jsx";
import WhoSect from "./components/WhoSect.jsx";
import ServiceSect from "./components/ServiceSect.jsx";
import PricingSect from "./components/PricingSect.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";
import Outro from "./components/Outro.jsx";
import Cursor from "./components/Cursor";
import Soon from "./components/Soon";
import OutroB from "./components/OutroB";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import Scroll from "./components/SmoothScroll";
import './App.css'


function App() {

    const [isLoading, isSetLoading] = useState(false)

    useEffect(() => {
        isSetLoading(true)
        setTimeout(() => {
            isSetLoading(false)
        }, 2500)
    }, [])

    return (

        <>
            {isLoading ? (<div className={'lds-container'}>
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>) :

                (
                    <Router>

                        {/*<Scroll/>*/}


                        <div id="wrapper">

                            <Cursor/>

                            <Routes>

                                <Route path='/' element={[
                                    <div id={'main'}>

                                        <div className={'inner'}>

                                            <section id={'home-section'}>

                                                <Landing/>

                                                <WhoSect/>

                                                <ServiceSect/>

                                                <PricingSect/>

                                                <Testimonials/>

                                                <Cta/>

                                                <Footer/>

                                            </section>

                                            {/*Outro */}

                                            <Outro/>

                                        </div>
                                        {/* SVG section */}
                                    </div>
                                ]}/>
                                <Route path='/soon' element={[
                                    <div id={'main'}>

                                        <div className={'inner'}>

                                            <section id={'home-section'}>

                                                <Soon/>

                                            </section>

                                            {/*Outro */}

                                            <OutroB/>

                                        </div>

                                        {/* SVG section */}
                                    </div>
                                ]}/>
                            </Routes>
                        </div>

                    </Router>


                )
            }

        </>
    )
}

export default App

