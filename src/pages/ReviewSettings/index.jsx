import React from 'react';
import './styles.css'

const ReviewSettings = () => {
    return (
        <>
            <div className='buttons'>
                <h4>Review Settings</h4>
                <button className='buttonReset' type="submit">RESET CHANGES</button>
                <button type="submit">SAVE CHANGES</button>
            </div>
            <div className='list'>
                <label>
                    <input type="checkbox" />
                    <span>Show logo</span>
                </label> <br />
                <label>
                    <input type="checkbox" />
                    <span>Start with microphone enabled</span>
                </label> <br />
                <label>
                    <input type="checkbox" />
                    <span>Start with camera enabled</span>
                </label> <br />
                <label>
                    <input type="checkbox" />
                    <span>Videos loaded start muted</span>
                </label> <br />
                <label>
                    <input type="checkbox" />
                    <span>Notes disappear after 1 second</span>
                </label> <br />
                <label>
                    <input type="checkbox" />
                    <span>Trackpad: pinch to zoom</span>
                </label>
                <label> <br />
                    <input type="checkbox" />
                    <span>Trackpad: reposition with 2-finger swipe</span>
                </label>
            </div>
        </>
    );
};

export default ReviewSettings;