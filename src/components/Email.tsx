import styled from "styled-components";

const EMAIL = "thanapong.angkha@gmail.com";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: ${({ theme }) => theme.spacing[12]};

  display: none;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};

  padding-bottom: ${({ theme }) => theme.spacing[8]};
  z-index: 1000;

  @media (min-width: 1536px) {
    display: flex;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.subtext0};
`;

const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.mobile.xs};
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    color: ${({ theme }) => theme.colors.lavender};
  }
`;

const Email = () => {
  return (
    <Container>
      <EmailLink href={`mailto:${EMAIL}`}>{EMAIL}</EmailLink>
      <Line />
    </Container>
  );
};

export default Email;
