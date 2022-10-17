import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --dark-color: #353535;
        --bg-color: #f7f7f7;
        --dark-bg-color: #1f1f1f;
        --soft-white-color: rgba(255, 255, 255, 0.8);
    }

    body,
    html {
        margin: 0;
        padding: 0;
        font-family: 'Mulish', sans-serif;
        box-sizing: border-box;
        overflow-x: hidden;
        width: 100%;
        color: var(--dark-color);
        background: var(--bg-color);

    }
    
    .section-title {
        font-size: 50px;
        font-weight: 700;

        @media only screen and (min-width: 600px) {
        font-size: 100px;
    }
    }
    
    .accent-text {
        color: rgba(0, 0, 0, 0.4)
    }

    .margin-left {
        margin-left: 18px;
    }

    .container-padding {
        padding: 30px;
        
        @media screen and (min-width: 800px) {  
        padding: 40px;
    }

    }

    .text-bold {
        font-weight: 700;
    }

    .largest-header-text {
        font-size: 70px;

        
    @media only screen and (min-width: 600px) {
        font-size: 110px;
    }
    }
    `

export const Page = styled.section`
    display: block;
    min-height: 80vh;
`