import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { Header } from "./Header";
import { About } from "./About";
import { Introduction } from "./Introduction";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Sidebar } from "./Sidebar";

import { useRef } from "react";
import { useContext } from "react";
import { PageContext } from "./PageContext";
const App = () => {
  // useRef hook used to navigate throughout the page
  // each component is passed the hook, from which a type is set - which determines
  // which component to navigate to
  // https://stackoverflow.com/questions/64967082/scroll-into-view-in-react
  // https://robinvdvleuten.nl/blog/scroll-a-react-component-into-view/
  const navRef = useRef(null);

  // import menuOpen to add blur effect to content when sidebar menu opens
  const {menuOpen} = useContext(PageContext);
  const parent = document.getElementById('sticky-container')
  // while (parent) {
  //   console.log(getComputedStyle(parent).overflow)
  // }

  return (
    <Wrapper id='sticky-container'>
      <GlobalStyle/>
      <Header navRef={navRef}/>
      <Column>
      <Row>
      <Content menuOpen={menuOpen}>
        <Introduction navRef={navRef}/>
        <About navRef={navRef}/>
        <Projects navRef={navRef}/>
        <Skills navRef={navRef}/>
        <Contact navRef={navRef}/>
      </Content>
      </Row>
      </Column>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: initial;
  max-width: 100vw;
`

const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
`

const Row = styled.div`
display: flex;

`

const Content = styled.div`

filter: ${props=>props.menuOpen && 'blur(1.5px)'};
transition: all .3s ease-in-out;
width: 100vw;

@media screen and (min-width: 400px) {

  
}

`
/* @media screen and (min-width: 800px) {
  max-width: calc(100% - 35px);
  
}` */