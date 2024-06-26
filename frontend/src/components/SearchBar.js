import React, { useState } from 'react';
import { Input } from 'antd';
import SearchImg from '../search.png';
const { Search } = Input;

const SearchBar = ({ searchQuery, handleSearchChange }) => {
    const [focus, setFocus] = useState(false);

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: '10px'
    };

    const searchStyle = {
        width: '100%',
        height: '50px',
        border: focus ? '3px solid rgb(255, 196, 65)' : '3px solid rgb(255, 224, 102)',
        borderRadius: '10px 0 0 10px',
        outline: 'none',
        padding: '0 15px'
    };

    const btnStyle = {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px',
        backgroundColor: 'rgb(255, 224, 102)',
        color: 'black',
        fontSize: '20px',
        border: 'none',
        borderRadius: '0 5px 5px 0',
        cursor: 'pointer',
    };

    return (
        <div style={{ width: '50%', margin: '0 auto' }}>
            <div style={containerStyle}>
                <input
                    type='text'
                    style={searchStyle}
                    placeholder="Enter Course Keywords"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                <button style={btnStyle}>
                    Search
                    <img style={{ marginLeft: '10px' }} src={SearchImg} alt='search' />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
