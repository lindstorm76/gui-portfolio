import styled from "styled-components";

const EMAIL = "thanapong.angkha@gmail.com";

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[12]} 0`};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing[16]} 0`};
  }

  @media (min-width: 1280px) {
    padding: ${({ theme }) => `${theme.spacing[20]} 0`};
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fontSizes.mobile["3xl"]};
  color: ${({ theme }) => theme.colors.lavender};
  font-weight: 700;
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop["2xl"]};
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[10]};
  border: 2px solid ${({ theme }) => theme.colors.subtext1};
  box-shadow: 8px 8px 0px 0px ${({ theme }) => theme.colors.subtext1};
  max-width: 480px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 560px;
    border: 4px solid ${({ theme }) => theme.colors.subtext1};
    box-shadow: 12px 12px 0px 0px ${({ theme }) => theme.colors.subtext1};
  }
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.md};
  color: ${({ theme }) => theme.colors.subtext1};
  text-align: center;
  line-height: 1.7;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[8]}`};
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.subtext1};
  transition:
    border 0.1s ease,
    box-shadow 0.15s ease,
    transform 0.2s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.lavender};
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px 0px 0px ${({ theme }) => theme.colors.lavender};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  }
`;

function Contact() {
  return (
    <Section id="contact">
      <Card>
        <Title>Get In Touch</Title>
        <Message>
          My inbox is always open. Whether you have a question, an opportunity,
          or just want to say hi — I'll do my best to get back to you.
        </Message>
        <Button href={`mailto:${EMAIL}`}>Say Hello</Button>
      </Card>
    </Section>
  );
}

export default Contact;
