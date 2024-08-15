import React from 'react';
import './styles.css'

const ReviewPackages = () => {
    return (
        <>            
            <div className='container'>
                <button onClick={() => fileInputRef.current.click()}>
                    + ADD PACKAGE
                </button>
                <button  id='button1' onClick={() => fileInputRef.current.click()}>
                    SAVE CHANGES
                </button>
                <button onClick={() => fileInputRef.current.click()}>
                    PAYMENT DETAILS
                </button>
            </div>
        </>
    );
};

export default ReviewPackages;