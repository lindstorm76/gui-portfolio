import styled from "styled-components";
import Navbar from "./components/Navbar";
import Stack from "./components/Stack";
import Socials from "./components/Socials";
import Email from "./components/Email";

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[4]};

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing[8]};
  }
`;

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <h1>hello, friend.</h1>
        <Stack />
      </Main>
      <Socials />
      <Email />
    </>
  );
}

export default App;
