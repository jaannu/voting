import React from 'react';
import { useHistory } from 'react-router-dom';

const Index = () => {
  const history = useHistory();

  const handleStudentClick = () => {
    const studentYear = prompt("Enter your year (II, III, IV):").toUpperCase();
    if (studentYear === 'II' || studentYear === 'III' || studentYear === 'IV') {
      history.push(`/year-login/${studentYear.toLowerCase()}`); // Redirect to year-specific login
    } else {
      alert('Invalid year. Please enter II, III, or IV.');
    }
  };

  const handleTeacherClick = () => {
    history.push('/teacher-login');
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to the Voting System</h1>
      <button style={styles.button} onClick={handleStudentClick}>Student</button>
      <button style={styles.button} onClick={handleTeacherClick}>Teacher</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
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

export default Index;
