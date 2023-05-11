import React from 'react'
import './assets/styles.css'
import reactLogo from '../assets/react.png'
import nextLogo from '../assets/nextjs.png'
import sanityLogo from '../assets/Sanity.png'
import fireLogo from '../assets/firebase.png'
import nodeLogo from '../assets/nodejs.png'
import viteLogo from '../assets/vitejs.svg'
import expressLogo from '../assets/express.png'
import mongoLogo from '../assets/mongodb.png'
import squareSpace from '../assets/squarespace.png'
import wix from '../assets/wix.png'


function WhoSect() {
    return (
       <>
           <div id="container06" className="container default full screen">
               <div className="wrapper">
                   <div className="inner">
                       <h3 id="text27" className="style4">Dynamic Duo</h3>
                       <h2 id="text28" className="style3">About Us</h2>
                       <p id="text29" className="style5">
                           We're a dynamic duo of web developers with a combined experience of building quality websites.
                           We pride ourselves on our attention to detail, creativity,
                           and ability to turn complex challenges into simple, solutions.</p>
                   </div>
               </div>
           </div>
           <div id="container08" className="container columns full screen">
               <div className="wrapper">
                   <div className="inner">
                       <div>
                           <div id="image03" className="style1 image">
                               <img
                               src={reactLogo}
                               alt=""/></div>
                           <h3 id="text06">React.JS</h3>
                           <p id="text25" className="style5">We specialize in <span style={{fontWeight: 500}}>
                               React.JS
                           </span>.<br/>
                               A library used by developers to build fast, user-friendly websites and apps. Developed by the guys over at Facebook.</p>
                       </div>
                       <div>
                           <div id="image04" className="style1 image"><img
                               src={nextLogo}
                               alt=""/></div>
                           <h3 id="text26">Next.JS</h3>
                           <p id="text21" className="style5">We specialize in <span style={{fontWeight: 500}}>
                               Next.JS
                           </span>.<br/>Built on top of React, It provides additional features
                               such as server-side rendering, automatic code splitting, and static site generation.</p>
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
                                   src={nodeLogo}
                                   alt=""/></div>
                           <h3 id="text06">Node.JS</h3>
                           <p id="text25" className="style5">We specialize in <span style={{fontWeight: 500}}>
                               Node.JS
                           </span><br/>
                               an open-source, cross-platform runtime environment that allows developers to build server-side applications using JavaScript</p>
                       </div>
                       <div>
                           <div id="image04" className="style1 image"><img
                               src={viteLogo}
                               alt=""/></div>
                           <h3 id="text26">Vite</h3>
                           <p id="text21" className="style5">We specialize in <span style={{fontWeight: 500}}>
                               Vite
                           </span><br/>Vite is a opinionated build tool for modern web development,
                               designed to provide hot module replacement (HMR) capabilities.</p></div>
                   </div>
               </div>
           </div>
           <div id="container08" className="container columns full screen">
               <div className="wrapper">
                   <div className="inner">
                       <div>
                           <div id="image03" className="style1 image">
                               <img
                               src={expressLogo}
                               alt=""/></div>
                           <h3 id="text06">Express.JS</h3>
                           <p id="text25" className="style5">We specialize in <span style={{fontWeight: 500}}>
                               Express.JS
                           </span><br/>
                               A popular open-source framework for building web applications in Node.js.
                               One of the most popular web development frameworks in the Node.js ecosystem.</p>
                       </div>
                       <div>
                           <div id="image04" className="style1 image"><img
                               src={mongoLogo}
                               alt=""/></div>
                           <h3 id="text26">MongoDb</h3>
                           <p id="text21" className="style5">We specialize in <span style={{fontWeight: 500}}>
                               MongoDb
                           </span><br/> An open-source NoSQL document database that uses a flexible JSON-like data model to store and retrieve data </p></div>
                   </div>
               </div>
           </div>
           <div id="container08" className="container columns full screen">
               <div className="wrapper">
                   <div className="inner">
                       <div>
                           <div id="image03" className="style1 image">
                               <img
                                   src={fireLogo}
                                   alt=""/></div>
                           <h3 id="text06">Firebase</h3>
                           <p id="text25" className="style5">We specialize in <span style={{fontWeight: 500}}>
                               Firebase
                           </span><br/>A mobile and web development platform that provides a suite of backend services for building scalable, real-time applications.</p>
                       </div>
                       <div>
                           <div id="image04" className="style1 image"><img
                               src={sanityLogo}
                               alt=""/></div>
                           <h3 id="text26">Sanity</h3>
                           <p id="text21" className="style5">We specialize in <span style={{fontWeight: 500}}>
                               Sanity
                           </span><br/> A Headless CMS, provides a flexible data model and
                               API that can be integrated with any front-end framework, such as React or Vue.js. </p></div>
                   </div>
               </div>
           </div>

                    <div id="container08" className="container columns full screen">
               <div className="wrapper">
                   <div className="inner">
                       <div>
                           <div id="image03" className="style1 image">
                               <img
                                   src={squareSpace}
                                   alt=""/></div>
                           <h3 id="text06">SquareSpace</h3>
                           <p id="text25" className="style5">We specialize in <span style={{fontWeight: 500}}>
                               SquareSpace
                           </span><br/> A popular all-in-one website building and hosting platform, that enables one to create professional websites, without coding knowledge</p>
                       </div>
                       <div>
                           <div id="image04" className="style1 image"><img
                               src={wix}
                               alt=""/></div>
                           <h3 id="text26">Wix</h3>
                           <p id="text21" className="style5">We specialize in <span style={{fontWeight: 500}}>
                               Wix
                           </span><br/> A cloud-based website building platform that allows individuals and businesses to create professional websites without coding skills. </p></div>
                   </div>
               </div>
           </div>

       </>
    )
}

export default WhoSect
