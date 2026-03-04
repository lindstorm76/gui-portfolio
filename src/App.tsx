import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Expertise";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Email from "./components/Email";

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[12]}
    ${({ theme }) => theme.spacing[4]};

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing[12]}
      ${({ theme }) => theme.spacing[8]};
  }
`;

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <Hero />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </Main>
      <Socials />
      <Email />
    </>
  );
}

export default App;
