import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: ${({ theme }) => theme.spacing[12]};

  display: none;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};

  background: transparent;
  padding-bottom: ${({ theme }) => theme.spacing[8]};
  z-index: 1000;

  @media (min-width: 1536px) {
    display: flex;
  }
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.desktop["xl"]};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    color: ${({ theme }) => theme.colors.lavender};
  }
`;

const Line = styled.div`
  width: 2px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.subtext0};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

const Socials = () => {
  return (
    <Container>
      <IconLink
        href="https://github.com/lindstorm76"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </IconLink>

      <IconLink
        href="https://leetcode.com/u/lindstorm76"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode />
      </IconLink>

      <IconLink
        href="https://hackerrank.com/profile/lindstorm76"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiHackerrank />
      </IconLink>

      <Line />
    </Container>
  );
};

export default Socials;
