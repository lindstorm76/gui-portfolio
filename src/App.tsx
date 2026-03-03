import styled from "styled-components";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Email from "./components/Email";

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <h1>hello, friend.</h1>
      </Main>
      <Socials />
      <Email />
    </>
  );
}

export default App;

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[8]};
`;
