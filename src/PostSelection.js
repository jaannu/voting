import React from 'react';
import { useHistory } from 'react-router-dom';

const PostSelection = () => {
  const history = useHistory();

  const handleVote = (post) => {
    history.push(`/vote?post=${post}`); // Redirect to voting page for the selected post
  };

  return (
    <div style={styles.container}>
      <h2>Select a Post to Vote</h2>
      <button style={styles.button} onClick={() => handleVote('president')}>President</button>
      <button style={styles.button} onClick={() => handleVote('vice-president')}>Vice President</button>
      <button style={styles.button} onClick={() => handleVote('secretary')}>Secretary</button>
      {/* Add more posts as needed */}
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

export default PostSelection;
