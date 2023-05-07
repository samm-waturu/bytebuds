import React from 'react'
import './assets/styles.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {useNavigate} from "react-router-dom";



function Outro() {

    const navigate = useNavigate()

    const scrollTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <>
            <section id="done-section">
                <div id="container36" className="container default full screen">
                    <div className="wrapper">
                        <div className="inner"><h3 id="text01" className="style4">Built with ❤ by ByteBuds</h3>
                            <h6 id="text12">Thank you</h6>
                            <ul>
                                <li>
                                    <p id={'text25'} className={'style2'}>
                                        <a id='links' onClick={() => {
                                            navigate('/reach')
                                        }} style={{textDecoration: "none", marginRight: 14 }} rel="noopener noreferrer"> Reach </a>
                                        <a id='links' onClick={() => {
                                            navigate('/soon')
                                        }} style={{textDecoration: "none", marginRight: 14 }} rel="noopener noreferrer"> FAQs  </a>
                                        <a id='links' onClick={() => {
                                            navigate('/works')
                                        }} style={{textDecoration: "none"}} rel="noopener noreferrer"> Works </a>
                                    </p>
                                </li>
                            </ul>
                            <div onClick={scrollTop}>
                                <h3 id={'text12'}><ArrowCircleUpIcon style={{cursor: "pointer"}}/></h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Outro
