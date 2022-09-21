import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Courier Prime', monospace;
        box-sizing: border-box;

    }
    
    .section-title {
        font-size: 1.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 12px 0;
        margin: 18px 0;
    }
    
    .accent-text {
        color: rgba(0, 0, 0, 0.4)
    }

    `

export const Page = styled.section`
    height: 80vh;
    margin: auto 0;
`