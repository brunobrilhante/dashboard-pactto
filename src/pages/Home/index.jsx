import React, { useRef } from 'react';
import './styles.css'
import SearchBar from '../../components/SearchBar'

const Home = () => {
    const fileInputRef = useRef();
    const handleChange = (event) => {

    }
    return (
        <>
            <h3>Hey Bruno, welcome to Pactto!</h3>
            <p className='text'>Open your inbox and verify your email <br />
                Check the short video of Pactto in action <br />
                Wanna record your computer screen or review files? Download Pactto for Mac or Windows <br />
                Wanna review videos, images or audio files with your phone or tablet? Download Pactto for iOS or Android</p>
            <div className='container'>
                <h1>My uploads</h1>
                <button onClick={() => fileInputRef.current.click()}>
                    + UPLOAD NEW VIDEO
                </button>
                <input onChange={handleChange} multiple={false} ref={fileInputRef} type='file' hidden />
            </div>
            <SearchBar />
        </>
    );
};

export default Home;