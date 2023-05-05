import React, {useEffect} from 'react'
import './assets/styles.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {useNavigate} from "react-router-dom";


function Outro() {

    const scrollTop = () => {
        window.scrollTo(0,0)
    }

    const navigate = useNavigate()



    return (
        <>
            <section id="done-section">
                <div id="container36" className="container default full screen">
                    <div className="wrapper">
                        <div className="inner"><h3 id="text01" className="style4">Built with ❤ by ByteBuds</h3>
                            <div onClick={() => {
                                navigate('/')
                            }}>
                                <h6 id="text12" style={{cursor: "pointer"}} >Home</h6>
                            </div>
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
