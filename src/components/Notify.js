import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import { faPaperPlane, faBomb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Notify(props) {

    const [successState, setSuccessState] = useState({
        icon: faPaperPlane,
        title: "Thanks!",
        message: "Your message has been successfully sent. I'll get back you soon!"
    });

    const [failureState, setFailureState] = useState({
        icon: faBomb,
        title: "Oops!",
        message: "There has been an error sending your message. Sorry for the inconvenience."
    });



    return (
        <>
            <Toast
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                }}
            >
                <Toast.Header>
                    <FontAwesomeIcon className="mr-2" icon={props.status === "true" ? successState.icon : failureState.icon} />
                    <strong className="mr-auto">{props.status === "true" ? successState.title : failureState.title}</strong>
                </Toast.Header>
                <Toast.Body>{props.status === "true" ? successState.message : failureState.message}</Toast.Body>
            </Toast>

F
        </>
    )
}

export default Notify;
