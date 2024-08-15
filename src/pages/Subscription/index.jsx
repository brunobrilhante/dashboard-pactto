import React from 'react';
import './styles.css'
import { FaCheck } from "react-icons/fa";

const Subscription = () => {
    return (
        <div>
            <p className='title'>You have access to PACTTO PRO as a trial. 1 days left</p>
            <button className='buttonSub' onClick={() => fileInputRef.current.click()}>
                SUSBSCRIBRE TO PACTTO PRO
            </button>
            <h4>The PACTTO PRO subscription allows you to:</h4>
            <p>
                <FaCheck /> Every feature on the FREE plan <br />
                <FaCheck /> Full access to the Pactto app on iPhones, iPads, Android, Mac, Windows, and Web <br />
                <FaCheck /> Max screen recording duration on Pactto Desktop: unlimited <br />
                <FaCheck /> Max review duration on mobile: unlimited <br />
                <FaCheck /> Max review duration on Pactto Web: 12 minutes <br />
                <FaCheck /> Max review duration on Pactto Desktop: 20 minutes <br />
                <FaCheck /> Manage and use your reference video library on the Web and Desktop <br />
                <FaCheck /> Review videos uploaded by you, using the browser <br />
                <FaCheck /> Add your own logo to create branded reviews <br />
                <FaCheck /> If you sell reviews, the Pactto take rate for paid reviews is 3%, instead of 12% for free users <br />
                <FaCheck /> Integrate Pactto to your website so anyone can send, and pay, for your video feedback <br />
                <FaCheck /> Share your videos with others (no more sending video files around)
            </p>
        </div>
    );
};

export default Subscription;