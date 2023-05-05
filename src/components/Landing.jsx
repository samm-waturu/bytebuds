import React from 'react'
import './assets/styles.css'
import Form from "./Form.jsx";

function Landing() {
    return (
        <>
            <div id="container02" className="container default full screen">
                <div className="wrapper">
                    <div className="inner">
                        <h3 id="text08" className="style4">we eat, sleep & drink code <br/> we are </h3>
                        <h1 id="text07" className="style1">ByteBuds</h1>
                        <p id="text15" className="style2">
                            At ByteBuds, we believe that art is a reflection of your soul and passion.
                            That's why we create websites that capture the essence of your work and communicate your message effectively.
                        </p>
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Landing
