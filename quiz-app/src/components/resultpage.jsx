import React from 'react';

const Result = ({ name = 'User', score = 9, total = 10 }) => {
    const handleReload = () => {
        window.location.reload();
    };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to right,rgb(13, 103, 163),rgb(6, 85, 150))',
      borderRadius: '30px'

    }}>
      <div style={{
        width: '20rem',
        textAlign: 'center',
        padding: '1rem',
        background: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '1rem'
      }}>
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <div style={{
              width: '5rem',
              height: '5rem',
              backgroundColor: '#ecc94b',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#fff'
            }}>
              🏆
            </div>
          </div>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#2d3748',
            marginBottom: '0.5rem'
          }}>Hey, Congratulations!!</h1>
          <p style={{
            color: '#4a5568',
            marginBottom: '0.5rem'
          }}>{name}</p>
          <p style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: 'black'
          }}>Your score is {score} out of {total}</p>
          <div style={{
            marginTop: '1.5rem'
          }}>
            <button style={{
              backgroundColor: '#805ad5',
              color: '#fff',
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#6b46c1'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#805ad5'}
            onClick={handleReload}>
                
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
