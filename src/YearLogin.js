import React from 'react';
import { useHistory } from 'react-router-dom';

const YearLogin = ({ match }) => {
  const history = useHistory();
  const year = match.params.year.toUpperCase();

  const handleLogin = () => {
    // Logic for validating login can go here
    history.push('/post-selection'); // Redirect to post selection page after login
  };

  return (
    <div style={styles.container}>
      <h2>{year} Year Login</h2>
      <button style={styles.button} onClick={handleLogin}>Login</button>
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

export default YearLogin;
