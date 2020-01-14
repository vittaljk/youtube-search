import React from 'react'
import './ErrorMessage.css';

function ErrorMessage({show}) {
    return (
        <>
            {show && 
                <div className="error-container">
                    Error loading your search result try again!
                </div>
            }
        </>
    )
}

export default ErrorMessage
