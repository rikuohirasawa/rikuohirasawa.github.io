import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body,
    html {
        margin: 0;
        padding: 0;
        font-family: 'Courier Prime', monospace;
        box-sizing: border-box;
        overflow-x: hidden;
        width: 100%;

    }
    
    .section-title {
        font-size: 1.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 12px 0;
        margin: 18px 0;
        text-align: center;

        @media screen and (min-width: 800px) {
            text-align: left;
        }
    }
    
    .accent-text {
        color: rgba(0, 0, 0, 0.4)
    }

    .margin-left {
        margin-left: 18px;
    }
    `

export const Page = styled.section`
    height: 80vh;
    margin: auto 0;
`