import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { Header } from "./Header";
import { About } from "./About";
import { Introduction } from "./Introduction";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

const App = () => {
  return (
    <Wrapper>
    <GlobalStyle/>
      <Header/>
      <Introduction/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`

`