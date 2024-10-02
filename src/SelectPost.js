import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectPost = () => {
    const navigate = useNavigate();

    const handleVoteClick = (post) => {
        navigate(`/vote?post=${post}`);
    };

    return (
        <div style={styles.container}>
            <h2>Select a Post to Vote</h2>
            <button onClick={() => handleVoteClick('president')}>President</button>
            <button onClick={() => handleVoteClick('vice-president')}>Vice President</button>
            <button onClick={() => handleVoteClick('secretary')}>Secretary</button>
            <button onClick={() => handleVoteClick('assistant-secretary')}>Assistant Secretary</button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Algerian, sans-serif',
    },
};

export default SelectPost;