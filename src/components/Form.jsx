import React, {useRef, useState} from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {db} from "../firebase.config.js";
import {addDoc, collection, serverTimestamp} from "@firebase/firestore";

function Form() {

    const [isEmail, setEmail] = useState('');

    const [isAlert, isSetAlert] = useState(false)

    const [isSend, isSetSend] = useState(false)


    // 👇️ called every time input's value changes

    const handleChange = event => {
        setEmail(event.target.value);
    };

    const sendEmail = async (e) => {
        e.preventDefault()
        if (!isEmail) {
            isSetAlert(true)
            isSetSend(false)
        } else {
            await addDoc(collection(db, 'clientEmails'), {
                emailAcc: isEmail,
                timestamp: serverTimestamp()
            }).then(() => {
                setEmail('')
                isSetSend(true)
            })
        }
    }
    return (
        <>
            {isAlert && (<p className="style4" style={{color: "whitesmoke", fontSize: 10}}> Fill in the field! </p>)}
            {isSend && (<p className="style4" style={{color: "whitesmoke", fontSize: 10}}> Email delivered! </p>)}
            <form id="landing-form">
                <div className="inner">
                    <label>
                        <input type='email' placeholder="Enter email" value={isEmail} onChange={handleChange}/>
                    </label>

                    <div className="actions">
                        <button type="submit" onClick={sendEmail}>
                            <svg>
                                <ChevronRightIcon/>
                            </svg>
                            <span className="label">Get in Touch</span>
                        </button>
                    </div>
                </div>
                <input type="hidden" name="id" value="landing-form"/>
            </form>
        </>
    )
}

export default Form
