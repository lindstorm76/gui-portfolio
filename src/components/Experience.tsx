import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Typewriter } from "./Typewriter";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  tools: string[];
}

const DELAY_BETWEEN_BULLET_POINT = 125;
const DELAY_BETWEEN_TECH_TAG = 150;
const DIVIDER_ANIMATION_TIME = 600;
const TYPEWRITER_TYPING_SPEED = 25;

const TOOL_ICONS: Record<string, string> = {
  Python: "https://cdn.simpleicons.org/python",
  ".NET": "https://cdn.simpleicons.org/dotnet",
  "Apache Airflow": "https://cdn.simpleicons.org/apacheairflow",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql",
  TypeScript: "https://cdn.simpleicons.org/typescript",
  AngularJS: "https://cdn.simpleicons.org/angular",
  NestJS: "https://cdn.simpleicons.org/nestjs",
  MySQL: "https://cdn.simpleicons.org/mysql",
  MongoDB: "https://cdn.simpleicons.org/mongodb",
  Redis: "https://cdn.simpleicons.org/redis",
  GCP: "https://cdn.simpleicons.org/googlecloud",
};

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "the-able",
    company: "The Able by King Power",
    role: "Senior Software Developer",
    period: "Feb 2025 – Present",
    description: [
      "Led enterprise-scale data migration of 150M+ records from SQL Server to PostgreSQL using Apache Airflow–orchestrated microservices.",
      "Accelerated migration time from days to hours through ETL optimization and parallelized processing strategies.",
      "Developed and maintained APIs using C# and .NET to support data services and system integrations.",
    ],
    tools: [
      "Python",
      "C#",
      ".NET",
      "Apache Airflow",
      "SQL Server",
      "PostgreSQL",
      "Oracle",
    ],
  },
  {
    id: "primo",
    company: "PRIMO",
    role: "Software Developer",
    period: "June 2022 - Oct 2023",
    description: [
      "Developed and maintained scalable CRM web applications using AngularJS and NestJS, ensuring high performance and reliability.",
      "Streamlined the manual file upload and scheduled batch workflow into an API-driven AWS Lambda solution for bulk data creation (up to 20,000 records), utilizing JavaScript concurrency and chunk-based processing to cut execution time by 50%.",
      "Built a scalable QR-based payment system via third-party payment gateway for the CRM system.",
      "Designed reusable automation frameworks to standardize data processing workflows across development teams.",
      "Optimized Python-based data pipelines and APIs integrated with BigQuery, improving performance by 70% and automating large-scale exports to Cloud Storage.",
    ],
    tools: [
      "TypeScript",
      "AngularJS",
      "NestJS",
      "AWS Lambda",
      "MySQL",
      "MongoDB",
      "Redis",
      "Python",
      "Apache Airflow",
      "GCP",
    ],
  },
];

const expandDown = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

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

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[20]} 0`};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.mobile["3xl"]};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop["2xl"]};
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.lavender};
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[1]};

  @media (min-width: 768px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing[6]};
    padding: ${({ theme }) => theme.spacing[6]};
  }
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 256px;
  }
`;

const Company = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.mobile["xl"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop["lg"]};
  }
`;

const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.lg};
  color: ${({ theme }) => theme.colors.lavender};
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  }
`;

const Period = styled.p<{ $visible: boolean; $delay: number }>`
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.subtext0};
  opacity: 0;

  ${({ $visible, $delay }) =>
    $visible &&
    css`
      animation: ${fadeUp} 0.4s ease ${$delay}ms forwards;
    `}

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  }
`;

const Divider = styled.div<{ $visible: boolean }>`
  display: none;
  width: 2px;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.crust};
  flex-shrink: 0;
  transform: scaleY(0);
  transform-origin: top;

  @media (min-width: 768px) {
    display: block;

    ${({ $visible }) =>
      $visible &&
      css`
        animation: ${expandDown} ${DIVIDER_ANIMATION_TIME / 1000}s ease forwards;
      `}
  }
`;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const BulletPoint = styled.li<{ $visible: boolean; $delay: number }>`
  opacity: 0;

  ${({ $visible, $delay }) =>
    $visible &&
    css`
      animation: ${fadeUp} 0.4s ease ${$delay}ms forwards;
    `}
`;

const DescriptionList = styled.ul`
  font-size: ${({ theme }) => theme.fontSizes.mobile.md};
  color: ${({ theme }) => theme.colors.subtext1};
  line-height: 1.7;
  margin: 0;
  padding-left: ${({ theme }) => theme.spacing[5]};
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  }
`;

const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
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

function useInView<T extends Element>(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const [ref, visible] = useInView<HTMLDivElement>();
  const roleDelay = exp.company.length * TYPEWRITER_TYPING_SPEED;
  const periodDelay = roleDelay + exp.role.length * TYPEWRITER_TYPING_SPEED;

  return (
    <Card ref={ref}>
      <CardLeft>
        <Company>
          <Typewriter text={exp.company} speed={TYPEWRITER_TYPING_SPEED} />
        </Company>
        <Role>
          <Typewriter
            text={exp.role}
            speed={TYPEWRITER_TYPING_SPEED}
            startDelay={roleDelay}
          />
        </Role>
        <Period $visible={visible} $delay={periodDelay}>
          {exp.period}
        </Period>
      </CardLeft>
      <Divider $visible={visible} />
      <CardRight>
        <DescriptionList>
          {exp.description.map((point, index) => (
            <BulletPoint
              key={index}
              $visible={visible}
              $delay={index * DELAY_BETWEEN_BULLET_POINT}
            >
              {point}
            </BulletPoint>
          ))}
        </DescriptionList>

        <Tools>
          {exp.tools.map((tool, index) => (
            <Tag
              key={tool}
              $visible={visible}
              $delay={DIVIDER_ANIMATION_TIME + index * DELAY_BETWEEN_TECH_TAG}
            >
              {TOOL_ICONS[tool] && <img src={TOOL_ICONS[tool]} alt={tool} />}
              {tool}
            </Tag>
          ))}
        </Tools>
      </CardRight>
    </Card>
  );
}

function Experience() {
  return (
    <Section id="experience">
      <Title>
        <Highlight>03.</Highlight> Professional Experience
      </Title>
      <List>
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </List>
    </Section>
  );
}

export default Experience;
