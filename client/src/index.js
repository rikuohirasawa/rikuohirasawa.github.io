import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageContextProvider } from './PageContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PageContextProvider>
        <App />
    </PageContextProvider>
);


