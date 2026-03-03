import styled from "styled-components";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tools: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "the-able",
    company: "The Able by King Power",
    role: "Senior Software Developer",
    period: "Feb 2025 – Present",
    description:
      "Led enterprise data migration of 150M+ records from SQL Server to PostgreSQL, orchestrating microservices with Apache Airflow and cutting migration time from days to hours through ETL optimizations. Built and maintained backend APIs using C# and .NET, implementing new endpoints and resolving issues across existing services.",
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
    description:
      "Developed and maintained CRM web applications using AngularJS and NestJS, optimizing complex queries across MySQL, MongoDB, and Redis for high-performance data retrieval. Refactored AWS Lambda scripts to handle bulk data creation of up to 20,000 records — reducing execution time by 50%. Implemented a scalable QR-based payment system via third-party gateway, ensuring 100% transaction integrity. Designed reusable automation frameworks to standardize data processing workflows across teams, and built Python data pipelines and APIs for BigQuery — improving performance by 70% and automating exports to Cloud Storage.",
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

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[20]} 0`};
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.mono};
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
  padding: ${({ theme }) => theme.spacing[6]};
  border: 2px solid ${({ theme }) => theme.colors.subtext1};
  box-shadow: 8px 8px 0 0 ${({ theme }) => theme.colors.subtext1};

  @media (min-width: 768px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing[8]};
    border: 4px solid ${({ theme }) => theme.colors.subtext1};
    box-shadow: 12px 12px 0 0 ${({ theme }) => theme.colors.subtext1};
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
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.mobile["xl"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop["lg"]};
  }
`;

const Role = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.mobile.lg};
  color: ${({ theme }) => theme.colors.lavender};
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  }
`;

const Period = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.subtext0};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  }
`;

const Divider = styled.div`
  display: none;
  width: 2px;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.surface1};
  flex-shrink: 0;

  @media (min-width: 768px) {
    display: block;
  }
`;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.md};
  color: ${({ theme }) => theme.colors.subtext1};
  line-height: 1.7;
  margin: 0;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  }
`;

const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Tag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.subtext1};
  border: 1px solid ${({ theme }) => theme.colors.subtext1};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  }
`;

function Experience() {
  return (
    <Section id="experience">
      <Title>
        <Highlight>03.</Highlight> Professional Experience
      </Title>
      <List>
        {EXPERIENCES.map((exp) => (
          <Card key={exp.id}>
            <CardLeft>
              <Company>{exp.company}</Company>
              <Role>{exp.role}</Role>
              <Period>{exp.period}</Period>
            </CardLeft>
            <Divider />
            <CardRight>
              <Description>{exp.description}</Description>
              <Tools>
                {exp.tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </Tools>
            </CardRight>
          </Card>
        ))}
      </List>
    </Section>
  );
}

export default Experience;
