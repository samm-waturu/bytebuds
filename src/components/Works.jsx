import React, {useEffect} from 'react'
import onlineShop from '../assets/shopping.png'
import resume from '../assets/resume.png'
import agency from '../assets/marketing.png'
import artist from '../assets/artist.png'
import photo from '../assets/photographer.png'
import business from '../assets/meeting.png'
import {useNavigate} from "react-router-dom";


function Works() {

    useEffect(() => {
        window.scrollTo(0,0)
    })
    const navigate = useNavigate()

    return (
        <>
            <div id="container06" className="container default full screen">
                <div className="wrapper">
                    <div className="inner">
                        <h3 id="text27" className="style4">Our Works</h3>
                        <h2 id="text28" className="style3">Our Works</h2>
                        <p id="text29" className="style5">View some of our custom designs. <br/>
                            These templates are only meant to provide basis, for potential clients to describe which design inspires them most.
                            <br/> *TEMPLATES NOT FOR SALE* </p>
                    </div>
                </div>
            </div>
            <div id="container08" className="container columns full screen">
                <div className="wrapper">
                    <div className="inner">
                        <div>
                            <div id="image03" className="style1 image">
                                <img
                                    src={onlineShop}
                                    alt=""/></div>
                            <h3 id="text06">Online Shops</h3>
                            <p id="text25" className="style4">eCommerce templates</p>
                            <ul>
                                <li>
                                    <p id={'text25'} className={'style5'}>
                                        <a style={{textDecoration: "none"}} id='links' target="_blank" rel="noopener noreferrer" href={'https://bytebuds-demo-2.netlify.app/'}> Shop A </a>
                                        |
                                        <a style={{textDecoration: "none"}} id='links' target="_blank" rel="noopener noreferrer" href={'https://bytebuds-demo-3.netlify.app/'}> Shop B </a>
                                    </p>
                                </li>
                            </ul>

                        </div>

                        <div>
                            <div id="image03" className="style1 image">
                                <img
                                    src={resume}
                                    alt=""/></div>
                            <h3 id="text06">Online Resume</h3>
                            <p id="text25" className="style4">Portfolio templates</p>
                            <ul>
                                <li>
                                    <p id={'text25'} className={'style5'}>
                                        <a style={{textDecoration: "none"}} id={'links'} target="_blank" rel="noopener noreferrer" href={'https://bytebuds-demo-1.netlify.app/'}> Resume A </a>
                                        |
                                        <a style={{textDecoration: "none"}} id={'links'} target="_blank" rel="noopener noreferrer" href={'https://bytebuds-demo-5.netlify.app/'}> Resume B </a>
                                    </p>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
            <div id="container08" className="container columns full screen">
                <div className="wrapper">
                    <div className="inner">
                        <div>
                            <div id="image03" className="style1 image">
                                <img
                                    src={agency}
                                    alt=""/></div>
                            <h3 id="text06">Design Agency</h3>
                            <p id="text25" className="style4">Online marketer kind sites</p>
                            <ul>
                                <li>
                                    <p id={'text25'} className={'style5'}>
                                        <a style={{textDecoration: "none"}} id={'links'} target="_blank" rel="noopener noreferrer" href={'https://bytebuds-demo-4.netlify.app/'}> Agency A  </a>
                                        |
                                        <a style={{textDecoration: "none"}} id={'links'} target="_blank" rel="noopener noreferrer" href={'https://bytebuds-demo-6.netlify.app/'}> Agency B </a>
                                    </p>
                                </li>
                            </ul>

                        </div>

                        <div>
                            <div id="image03" className="style1 image">
                                <img
                                    src={artist}
                                    alt=""/>
                            </div>
                            <h3 id="text06">Creative artists</h3>
                            <p id="text25" className="style4">Digital artists</p>
                            <ul>
                                <li>
                                    <p id={'text25'} className={'style5'}>
                                    <a style={{textDecoration: "none"}}  onClick={() => {
                                        navigate('/soon')
                                    }}> Coming soon </a>
                                    </p>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
            <div id="container08" className="container columns full screen">
                <div className="wrapper">
                    <div className="inner">
                        <div>
                            <div id="image03" className="style1 image">
                                <img
                                    src={photo}
                                    alt=""/></div>
                            <h3 id="text06">Creative Imagery</h3>
                            <p id="text25" className="style4"> Creative Photographer portfolios</p>
                            <ul>
                                <li>
                                    <p id={'text25'} className={'style5'}>
                                        <a style={{textDecoration: "none"}}  onClick={() => {
                                            navigate('/soon')
                                        }}> Coming soon </a>
                                    </p>
                                </li>
                            </ul>

                        </div>

                        <div>
                            <div id="image03" className="style1 image">
                                <img
                                    src={business}
                                    alt=""/>
                            </div>
                            <h3 id="text06">Corporate Business</h3>
                            <p id="text25" className="style4">Businesses targeting a wide audience</p>
                            <ul>
                                <li>
                                    <p id={'text25'} className={'style5'}>
                                        <a style={{textDecoration: "none"}}  onClick={() => {
                                            navigate('/soon')
                                        }}> Coming soon </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Works
