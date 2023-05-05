import React from 'react'
import './assets/styles.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


function Outro() {

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
