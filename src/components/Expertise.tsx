import styled from "styled-components";

interface StackItem {
  name: string;
  icon?: string;
  abbr?: string;
}

interface StackGroup {
  category: string;
  items: StackItem[];
}

const STACKS: StackGroup[] = [
  {
    category: "Computer Languages",
    items: [
      {
        name: "TypeScript",
        icon: `https://cdn.simpleicons.org/typescript/4c4f69`,
      },
      {
        name: "JavaScript",
        icon: `https://cdn.simpleicons.org/javascript/4c4f69`,
      },
      { name: "Go", icon: `https://cdn.simpleicons.org/go/4c4f69` },
      { name: "Python", icon: `https://cdn.simpleicons.org/python/4c4f69` },
      { name: "Dart", icon: `https://cdn.simpleicons.org/dart/4c4f69` },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: `https://cdn.simpleicons.org/react/4c4f69` },
      { name: "Vue.js", icon: `https://cdn.simpleicons.org/vuedotjs/4c4f69` },
      {
        name: "AngularJS",
        icon: `https://cdn.simpleicons.org/angular/4c4f69`,
      },
    ],
  },
  {
    category: "Backend/APIs",
    items: [
      { name: "Node.js", icon: `https://cdn.simpleicons.org/nodedotjs/4c4f69` },
      { name: "NestJS", icon: `https://cdn.simpleicons.org/nestjs/4c4f69` },
      {
        name: "Express.js",
        icon: `https://cdn.simpleicons.org/express/4c4f69`,
      },
      { name: "gRPC", abbr: "gRPC" },
      { name: "GraphQL", icon: `https://cdn.simpleicons.org/graphql/4c4f69` },
      { name: "REST", abbr: "REST" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: `https://cdn.simpleicons.org/flutter/4c4f69` },
      {
        name: "React Native",
        icon: `https://cdn.simpleicons.org/react/4c4f69`,
      },
    ],
  },
  {
    category: "Data & DevOps",
    items: [
      {
        name: "Apache Airflow",
        icon: `https://cdn.simpleicons.org/apacheairflow/4c4f69`,
      },
      { name: "AWS", abbr: "AWS" },
      { name: "GCP", icon: `https://cdn.simpleicons.org/googlecloud/4c4f69` },
      { name: "Docker", icon: `https://cdn.simpleicons.org/docker/4c4f69` },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        name: "PostgreSQL",
        icon: `https://cdn.simpleicons.org/postgresql/4c4f69`,
      },
      { name: "SQL Server", abbr: "MSSQL" },
      { name: "Oracle", abbr: "ORA" },
      { name: "MySQL", icon: `https://cdn.simpleicons.org/mysql/4c4f69` },
      { name: "MongoDB", icon: `https://cdn.simpleicons.org/mongodb/4c4f69` },
      { name: "Redis", icon: `https://cdn.simpleicons.org/redis/4c4f69` },
    ],
  },
];

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

const Card = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  border: 1px solid transparent;
  border-radius: 0;
  cursor: default;
  transition: border-color 0.1s ease;
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

function Stack() {
  return (
    <Section id="expertise">
      <Title>
        <Highlight>02.</Highlight> My Expertise
      </Title>
      <Groups>
        {STACKS.map((group) => (
          <CategoryGroup key={group.category}>
            <CategoryLabel>{group.category}</CategoryLabel>
            <Grid>
              {group.items.map((item) => (
                <Card key={item.name}>
                  <IconArea>
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt={item.name}
                        width={36}
                        height={36}
                      />
                    ) : (
                      <AbbrBox>{item.abbr}</AbbrBox>
                    )}
                  </IconArea>
                  <Name>{item.name}</Name>
                </Card>
              ))}
            </Grid>
          </CategoryGroup>
        ))}
      </Groups>
    </Section>
  );
}

export default Stack;
