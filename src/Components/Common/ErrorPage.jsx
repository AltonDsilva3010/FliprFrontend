import React from 'react';
// import { useHistory } from 'react-router-dom';
import "../../Style/ErrorPage.css"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    // const history = useHistory();
    const navigate = useNavigate()
    const handleGoBack = ()=>{
        navigate("/dashboard");
    }

    return (
        <div className='error-container'>
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but the page you requested could not be found.</p>
            <Button onClick={handleGoBack}>Go Back</Button>
        </div>
    );
}

export default ErrorPage;
