import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Vote = () => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const post = query.get('post');

  const handleVoteSubmit = () => {
    // Logic for submitting the vote can go here
    history.push('/thank-you'); // Redirect to thank you page after voting
  };

  return (
    <div style={styles.container}>
      <h2>Vote for {post}</h2>
      {/* Add voting options here */}
      <button style={styles.button} onClick={handleVoteSubmit}>Submit Vote</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: "'Algerian', serif",
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    margin: '10px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '5px',
  }
};

export default Vote;
