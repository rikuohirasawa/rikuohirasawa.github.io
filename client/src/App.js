import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { Header } from "./Header";
import { About } from "./About";
import { Introduction } from "./Introduction";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

import { useRef } from "react";

const App = () => {
  const navRef = useRef(null);

  return (
    <Wrapper>
    <GlobalStyle/>
      <Header navRef={navRef}/>
      <Introduction navRef={navRef}/>
      <About navRef={navRef}/>
      <Projects navRef={navRef}/>
      <Skills/>
  
      <Contact navRef={navRef}/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`

`