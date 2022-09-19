import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Courier Prime', monospace;
    }
    
    .section-title {
        font-size: 1.5rem;
    }
    
    .accent-text {
        color: rgba(0, 0, 0, 0.4)
    }
    `