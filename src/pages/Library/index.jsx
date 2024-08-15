import React from 'react';
import SearchBar from '../../components/SearchBar'
import './styles.css'

const Library = () => {
    return (
        <div>
            <div className='container'>
                <h1>Select a video</h1>
                <button onClick={() => fileInputRef.current.click()}>
                    + UPLOAD NEW VIDEO
                </button>
            </div>
            <p>Videos uploaded to the reference video library can be used in side-by-side comparisons, or can be shared with learners directly.</p>
            <SearchBar />
        </div>
    );
};

export default Library;