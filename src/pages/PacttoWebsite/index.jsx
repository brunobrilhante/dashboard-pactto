import React, { useState, useEffect } from 'react';
import './styles.css'

const PacttoWebsite = () => {
    return (
        <>
            <form className='form'>
                <div className='buttons'>
                    <button type="submit">Launch</button>
                    <button className='buttonReset' type="submit">Save</button>
                </div>
                <div className='field'>
                    <label>Hero</label>
                    <input
                        className='text'
                        id="nome"
                    />
                    <input
                        className='text'
                        type="text"
                        placeholder='Headline'
                    />

                    <label>About Me</label>
                    <input
                        className='text'
                        type="text"
                    />

                    <input
                        placeholder='Expertise title'
                        className='text'
                        type="text"
                    />

                    <input
                        placeholder='Awards title'
                        className='text'
                        type="text"
                    />

                    <label>Give me a follow</label>
                    <input
                        className='text'
                        type="text"
                    />

                    <label>YouTube video</label>
                    <input
                        className='text'
                        type="text"
                        placeholder='YouTube video URL'
                    />
                    
                    <label>Footer</label>
                    <input
                        className='text'
                        type="text"
                        placeholder='Quote'
                    />
                </div>
            </form>
        </>
    );
};

export default PacttoWebsite;