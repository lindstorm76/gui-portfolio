import styled from "styled-components";

interface ProjectLink {
  label: string;
  href: string;
  type?: "github" | "link";
}

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  links?: ProjectLink[];
  image?: string;
}

const PROJECTS: Project[] = [
  {
    id: "1",
    name: "Terminal Portfolio",
    description:
      "A terminal-inspired portfolio application built with a modular, component-driven architecture. Designed for performance, minimalism, and structured navigation through a command-driven interface.",
    tech: ["TypeScript", "React", "styled-components", "Vite"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/lindstorm72/terminal-portfolio",
        type: "github",
      },
      {
        label: "Live",
        href: "https://terminal-portfolio-deploy.vercel.app/",
        type: "link",
      },
    ],
  },
  {
    id: "2",
    name: "Remote Code Executor",
    description:
      "Microservices-based execution engine that runs untrusted code in short-lived, sandboxed environments.",
    tech: ["Go", "Docker", "Redis", "gRPC"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/lindstorm76/code_executor",
        type: "github",
      },
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
  gap: ${({ theme }) => theme.spacing[10]};

  @media (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing[20]};
  }
`;

const ProjectRow = styled.div<{ $reverse: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: 768px) {
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.3s ease;
`;

const Card = styled.div`
  flex-shrink: 0;
  width: 100%;
  min-height: 412px;
  border: 2px solid ${({ theme }) => theme.colors.crust};
  box-shadow: 8px 8px 0px 0px ${({ theme }) => theme.colors.crust};
  flex: 3;

  @media (min-width: 768px) {
    border: 4px solid ${({ theme }) => theme.colors.crust};
    box-shadow: 12px 12px 0px 0px ${({ theme }) => theme.colors.crust}80;
  }
`;

const Details = styled.div<{ $reverse: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  flex: 2;
  align-items: start;
  margin: auto 0px;
  padding: ${({ theme }) => theme.spacing["4"]};
  padding-top: ${({ theme }) => theme.spacing["4"]};

  @media (min-width: 768px) {
    align-items: ${({ $reverse }) => ($reverse ? "start" : "end")};
  }
`;

const NameRow = styled.div<{ $reverse: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: ${({ $reverse }) => ($reverse ? "row" : "row-reverse")};
  }
`;

const NameLine = styled.span`
  display: none;
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.crust};
  transform: translateY(2px);

  @media (min-width: 768px) {
    display: block;
  }
`;

const ProjectName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.mobile.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.lg};
  }
`;

const Desc = styled.p<{ $reverse: boolean }>`
  color: ${({ theme }) => theme.colors.subtext1};
  font-size: ${({ theme }) => theme.fontSizes.mobile.md};
  line-height: 1.7;
  text-align: left;
  white-space: pre-line;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.md};
    text-align: ${({ $reverse }) => ($reverse ? "left" : "right")};
  }
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  list-style: none;
`;

const Tag = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[1]}`};
  border: 1px dotted ${({ theme }) => theme.colors.subtext1};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  }
`;

const LinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
`;

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="32px"
      height="32px"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="28px"
      height="28px"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing[2]};
  transition: transform 0.2s ease;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.xl};
  }
`;

function Projects() {
  return (
    <Section id="projects">
      <Title>
        <Highlight>04.</Highlight> Featured Projects
      </Title>
      <List>
        {PROJECTS.map((project, index) => (
          <ProjectRow key={project.id} $reverse={index % 2 !== 0}>
            <Card>
              {project.image && (
                <CardImg src={project.image} alt={project.name} />
              )}
            </Card>
            <Details $reverse={index % 2 !== 0}>
              <NameRow $reverse={index % 2 !== 0}>
                <ProjectName>{project.name}</ProjectName>
                <NameLine />
              </NameRow>
              <Desc $reverse={index % 2 !== 0}>{project.description}</Desc>
              {project.tech.length > 0 && (
                <TechList>
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </TechList>
              )}
              {project.links && project.links.length > 0 && (
                <LinkList>
                  {project.links.map((link) => (
                    <ProjectLink
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type === "github" ? (
                        <GitHubIcon />
                      ) : (
                        <ExternalLinkIcon />
                      )}
                    </ProjectLink>
                  ))}
                </LinkList>
              )}
            </Details>
          </ProjectRow>
        ))}
      </List>
    </Section>
  );
}

export default Projects;
