import React from 'react';
import { createRoot } from 'react-dom/client';  // Use createRoot from react-dom/client
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);  // Initialize the root with createRoot

root.render(<App />);  // Render the App component
