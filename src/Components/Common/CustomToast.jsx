import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function CustomToast(props) {
    const [position, setPosition] = useState('top-center');

    return (

        <div
            aria-live="polite"
            aria-atomic="true"
            style={{ minHeight: '240px' }}
        >
            <ToastContainer className="p-3" position={position}>
                <Toast
                    bg={props.variant}  
                    onClose={() => props.setShow(false)} show={props.show} delay={3000} autohide  
                >
                    <Toast.Body>{props.toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>

    );
}

export default CustomToast;