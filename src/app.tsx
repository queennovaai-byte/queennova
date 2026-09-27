import React from 'react'

export default function App() {
  const path = window.location.pathname;

  if (path === '/privacy') {
    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Privacy Policy</h1>
        <p>Queen Nova respects your privacy. We do not sell or misuse your data.</p>
      </div>
    );
  }

  if (path === '/terms') {
    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Terms of Service</h1>
        <p>Welcome to Queen Nova. By using our service, you agree to our terms.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Queen Nova</h1>
      <p>Welcome to Queen Nova AI.</p>
    </div>
  );
}
