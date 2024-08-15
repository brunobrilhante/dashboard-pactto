import React from 'react';
import SearchBar from '../../components/SearchBar'

const WebLinks = () => {
    return (
        <div>
            <h1>There are no public web links you created</h1>
            <SearchBar />
            <h1>There are no private web links you created</h1>
            <SearchBar />
        </div>
    );
};

export default WebLinks;