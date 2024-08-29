import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.css';

import TodoApp from './components/TodoApp';

const root = createRoot(document.getElementById('root'));
root.render(<TodoApp />);