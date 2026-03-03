import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  text-align: center;
  position: relative;
  min-height: calc(100svh - ${({ theme }) => theme.spacing["24"]});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(3rem, 8vw, 8rem);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  line-height: 1.05;
`;

const Role = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(1.5rem, 3vw, 3rem);
  color: ${({ theme }) => theme.colors.lavender};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 1.5em;
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const bounceDown = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: ${({ theme }) => theme.colors.lavender};
  margin-left: 2px;
  animation: ${blink} 1s step-start infinite;
`;

const ArrowWrapper = styled.div`
  display: flex;
  position: absolute;
  color: ${({ theme }) => theme.colors.subtext0};
  cursor: pointer;
  left: 50%;
  bottom: ${({ theme }) => theme.spacing[12]};
  animation: ${bounceDown} 1.6s ease-in-out infinite;
`;

const Tagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.lg};
  color: ${({ theme }) => theme.colors.subtext1};
  max-width: 560px;
  line-height: 1.7;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.lg};
  }
`;

const ROLES = [
  "Front End Developer.",
  "Back End Developer.",
  "Mobile Developer.",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 1500;
const PAUSE_AFTER_DELETE = 400;

function Typewriter() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[index];

    if (isTyping) {
      if (displayText.length < current.length) {
        const t = setTimeout(
          () => setDisplayText(current.slice(0, displayText.length + 1)),
          TYPING_SPEED,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsTyping(false), PAUSE_AFTER_TYPE);
        return () => clearTimeout(t);
      }
    } else {
      if (displayText.length > 0) {
        const t = setTimeout(
          () => setDisplayText(displayText.slice(0, -1)),
          DELETING_SPEED,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setIndex((prev) => (prev + 1) % ROLES.length);
          setIsTyping(true);
        }, PAUSE_AFTER_DELETE);
        return () => clearTimeout(t);
      }
    }
  }, [displayText, isTyping, index]);

  return (
    <Role>
      {displayText}
      <Cursor />
    </Role>
  );
}

function Hero() {
  return (
    <Section id="about">
      <Name>Thanapong Ankha</Name>
      <Typewriter />
      <Tagline>
        a passionate developer, builder of things, breaker of things.
      </Tagline>
      <ArrowWrapper
        onClick={() =>
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </ArrowWrapper>
    </Section>
  );
}

export default Hero;
