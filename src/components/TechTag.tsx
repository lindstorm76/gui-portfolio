import styled, { css, keyframes } from "styled-components";
import TECHNOLOGIES from "../constants/technologies";

type TechTagProps = {
  name: string;
  visible: boolean;
  delay: number;
};

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Tag = styled.span<{ $visible: boolean; $delay: number }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.subtext1};
  border: 1px dotted ${({ theme }) => theme.colors.subtext1};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  opacity: 0;
  cursor: default;

  ${({ $visible, $delay }) =>
    $visible &&
    css`
      animation: ${fadeUp} 0.4s ease ${$delay}ms forwards;
    `}

  img {
    width: 14px;
    height: 14px;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  }
`;

const TechTag = ({ name, visible, delay }: TechTagProps) => {
  return (
    TECHNOLOGIES[name] && (
      <Tag $visible={visible} $delay={delay}>
        {TECHNOLOGIES[name]?.icon && (
          <img src={TECHNOLOGIES[name].icon} alt={TECHNOLOGIES[name].name} />
        )}
        {TECHNOLOGIES[name]?.name}
      </Tag>
    )
  );
};

export default TechTag;
