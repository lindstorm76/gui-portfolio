import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Typewriter } from "./Typewriter";

interface StackItem {
  name: string;
  url: string;
  icon?: string;
  abbr?: string;
}

interface StackGroup {
  category: string;
  items: StackItem[];
}

const TECH_STACK_CARD_DELAY = 175;

const STACKS: StackGroup[] = [
  {
    category: "Computer Languages",
    items: [
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org",
        icon: `https://cdn.simpleicons.org/typescript`,
      },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: `https://cdn.simpleicons.org/javascript`,
      },
      {
        name: "Go",
        url: "https://go.dev",
        icon: `https://cdn.simpleicons.org/go`,
      },
      {
        name: "Python",
        url: "https://www.python.org",
        icon: `https://cdn.simpleicons.org/python`,
      },
      {
        name: "Dart",
        url: "https://dart.dev",
        icon: `https://cdn.simpleicons.org/dart`,
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        url: "https://react.dev",
        icon: `https://cdn.simpleicons.org/react`,
      },
      {
        name: "Vue.js",
        url: "https://vuejs.org",
        icon: `https://cdn.simpleicons.org/vuedotjs`,
      },
      {
        name: "AngularJS",
        url: "https://angular.dev",
        icon: `https://cdn.simpleicons.org/angular`,
      },
    ],
  },
  {
    category: "Backend/APIs",
    items: [
      {
        name: "Node.js",
        url: "https://nodejs.org",
        icon: `https://cdn.simpleicons.org/nodedotjs`,
      },
      {
        name: "NestJS",
        url: "https://nestjs.com",
        icon: `https://cdn.simpleicons.org/nestjs`,
      },
      {
        name: "Express.js",
        url: "https://expressjs.com",
        icon: `https://cdn.simpleicons.org/express`,
      },
      { name: "gRPC", url: "https://grpc.io", abbr: "gRPC" },
      {
        name: "GraphQL",
        url: "https://graphql.org",
        icon: `https://cdn.simpleicons.org/graphql`,
      },
      { name: "REST", url: "https://restfulapi.net", abbr: "REST" },
    ],
  },
  {
    category: "Mobile",
    items: [
      {
        name: "Flutter",
        url: "https://flutter.dev",
        icon: `https://cdn.simpleicons.org/flutter`,
      },
      {
        name: "React Native",
        url: "https://reactnative.dev",
        icon: `https://cdn.simpleicons.org/react`,
      },
    ],
  },
  {
    category: "Data & DevOps",
    items: [
      {
        name: "Apache Airflow",
        url: "https://airflow.apache.org",
        icon: `https://cdn.simpleicons.org/apacheairflow`,
      },
      { name: "AWS", url: "https://aws.amazon.com", abbr: "AWS" },
      {
        name: "GCP",
        url: "https://cloud.google.com",
        icon: `https://cdn.simpleicons.org/googlecloud`,
      },
      {
        name: "Docker",
        url: "https://www.docker.com",
        icon: `https://cdn.simpleicons.org/docker`,
      },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org",
        icon: `https://cdn.simpleicons.org/postgresql`,
      },
      {
        name: "SQL Server",
        url: "https://www.microsoft.com/en-us/sql-server",
        abbr: "MSSQL",
      },
      { name: "Oracle", url: "https://www.oracle.com/database", abbr: "ORA" },
      {
        name: "MySQL",
        url: "https://www.mysql.com",
        icon: `https://cdn.simpleicons.org/mysql`,
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com",
        icon: `https://cdn.simpleicons.org/mongodb`,
      },
      {
        name: "Redis",
        url: "https://redis.io",
        icon: `https://cdn.simpleicons.org/redis`,
      },
    ],
  },
];

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

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
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

const Groups = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const CategoryGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const CategoryLabel = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.mobile.xl};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.08em;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.lg};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Card = styled.a<{ $delay: number; $visible: boolean }>`
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  border-radius: 0;
  opacity: 0;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    transform: translate(-50%, -50%) scale(0.95);
    transition:
      border-color 0.1s ease,
      transform 0.2s ease;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
    border: 2px solid ${({ theme }) => theme.colors.crust};
  }

  @media (min-width: 768px) {
    filter: grayscale(1);
    transition: filter 0.15s ease;

    &:hover {
      filter: grayscale(0);
    }
  }

  ${({ $visible, $delay }) =>
    $visible &&
    css`
      animation: ${fadeUp} 0.4s ease ${$delay}ms forwards;
    `}
`;

const IconArea = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const AbbrBox = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: #000;
  border: 1px solid #000;
`;

const Name = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.mobile.md};
  color: ${({ theme }) => theme.colors.subtext1};
`;

function StackGroupSection({ group }: { group: StackGroup }) {
  const [ref, visible] = useInView<HTMLDivElement>();

  const getRandomTypeSpeed = () => {
    return Math.floor(Math.random() * (55 - 45 + 1)) + 45;
  };

  return (
    <CategoryGroup ref={ref}>
      <CategoryLabel>
        <Typewriter text={group.category} speed={getRandomTypeSpeed()} />
      </CategoryLabel>
      <Grid>
        {group.items.map((item, i) => (
          <Card
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            $delay={i * TECH_STACK_CARD_DELAY}
            $visible={visible}
          >
            <IconArea>
              {item.icon ? (
                <img src={item.icon} alt={item.name} width={36} height={36} />
              ) : (
                <AbbrBox>{item.abbr}</AbbrBox>
              )}
            </IconArea>
            <Name>{item.name}</Name>
          </Card>
        ))}
      </Grid>
    </CategoryGroup>
  );
}

function Stack() {
  return (
    <Section id="expertise">
      <Title>
        <Highlight>02.</Highlight> My Expertise
      </Title>
      <Groups>
        {STACKS.map((group) => (
          <StackGroupSection key={group.category} group={group} />
        ))}
      </Groups>
    </Section>
  );
}

export default Stack;
