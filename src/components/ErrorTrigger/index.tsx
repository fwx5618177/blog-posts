import React, { useState } from 'react';

interface ErrorTriggerProps {
  message?: string;
}

const ErrorTrigger: React.FC<ErrorTriggerProps> = ({ message = 'This is a test error!' }) => {
  const [shouldThrow, setShouldThrow] = useState(false);

  const handleClick = () => {
    setShouldThrow(true);
  };

  if (shouldThrow) {
    throw new Error(message);
  }

  return (
    <div
      style={{
        padding: '20px',
        margin: '20px auto',
        maxWidth: '600px',
        textAlign: 'center',
        backgroundColor: 'var(--color-background-alt)',
        borderRadius: 'var(--border-radius-lg)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <h2 style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>Error Boundary Test</h2>
      <p style={{ marginBottom: '20px' }}>
        Click the button below to trigger an error and see the ErrorBoundary in action.
      </p>
      <button
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          backgroundColor: 'var(--color-error)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--border-radius-md)',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Trigger Error
      </button>
    </div>
  );
};

export default ErrorTrigger;
