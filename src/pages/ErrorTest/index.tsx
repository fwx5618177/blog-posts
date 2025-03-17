import React from 'react';
import ErrorTrigger from '../../components/ErrorTrigger';
import { Link } from 'react-router-dom';

const ErrorTestPage: React.FC = () => {
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ marginBottom: '16px' }}>Error Boundary Test Page</h1>
        <p>
          This page demonstrates how the ErrorBoundary component catches JavaScript errors in the
          component tree and displays a fallback UI.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div
          style={{
            padding: '20px',
            backgroundColor: 'var(--color-background-alt)',
            borderRadius: 'var(--border-radius-lg)',
            marginBottom: '20px',
          }}
        >
          <h2 style={{ marginBottom: '16px' }}>How it works</h2>
          <ol style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
            <li>
              The ErrorBoundary component is wrapped around the entire application in App.tsx.
            </li>
            <li>
              When you click the "Trigger Error" button below, it will throw a JavaScript error.
            </li>
            <li>
              The ErrorBoundary will catch this error and display a fallback UI instead of crashing
              the entire application.
            </li>
            <li>
              In a real application, you would typically wrap ErrorBoundary around smaller sections
              of your app to isolate errors.
            </li>
          </ol>
        </div>

        <ErrorTrigger message="This is a test error from the ErrorTest page!" />

        <div
          style={{
            padding: '20px',
            backgroundColor: 'var(--color-background-alt)',
            borderRadius: 'var(--border-radius-lg)',
            marginTop: '20px',
          }}
        >
          <h2 style={{ marginBottom: '16px' }}>Additional Information</h2>
          <p style={{ marginBottom: '16px' }}>
            Error boundaries are React components that catch JavaScript errors anywhere in their
            child component tree, log those errors, and display a fallback UI instead of the
            component tree that crashed.
          </p>
          <p>
            They are useful for preventing the entire application from crashing when an error occurs
            in a specific part of the UI.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            to="/"
            style={{
              padding: '10px 20px',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: 'var(--border-radius-md)',
              fontWeight: 'bold',
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorTestPage;
