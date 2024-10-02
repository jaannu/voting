import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/'); // Redirect back to SelectPost
    };

    return (
        <div style={styles.container}>
            <h2>Thank You for Voting!</h2>
            <button onClick={handleRedirect}>Go Back</button>
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

export default ThankYou;