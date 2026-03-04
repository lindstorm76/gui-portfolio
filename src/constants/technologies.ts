type Technology = {
  name: string;
  icon?: string;
};

const TECHNOLOGIES: Record<string, Technology> = {
  typescript: {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript",
  },
  javascript: {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript",
  },
  go: {
    name: "Go",
    icon: "https://cdn.simpleicons.org/go",
  },
  python: {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python",
  },
  dart: {
    name: "Dart",
    icon: "https://cdn.simpleicons.org/dart",
  },
  react: {
    name: "React",
    icon: "https://cdn.simpleicons.org/react",
  },
  vuejs: {
    name: "Vue.js",
    icon: "https://cdn.simpleicons.org/vuedotjs",
  },
  angularjs: {
    name: "AngularJS",
    icon: "https://cdn.simpleicons.org/angular",
  },
  nodejs: {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs",
  },
  nestjs: {
    name: "NestJS",
    icon: "https://cdn.simpleicons.org/nestjs",
  },
  expressjs: {
    name: "Express.js",
    icon: "https://cdn.simpleicons.org/express",
  },
  grpc: { name: "gRPC" },
  graphql: {
    name: "GraphQL",
    icon: "https://cdn.simpleicons.org/graphql",
  },
  rest: { name: "REST" },
  flutter: {
    name: "Flutter",
    icon: "https://cdn.simpleicons.org/flutter",
  },
  reactnative: {
    name: "React Native",
    icon: "https://cdn.simpleicons.org/react",
  },
  airflow: {
    name: "Apache Airflow",
    icon: "https://cdn.simpleicons.org/apacheairflow",
  },
  aws: { name: "AWS" },
  gcp: {
    name: "GCP",
    icon: "https://cdn.simpleicons.org/googlecloud",
  },
  docker: {
    name: "Docker",
    icon: "https://cdn.simpleicons.org/docker",
  },
  postgresql: {
    name: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql",
  },
  sqlserver: {
    name: "SQL Server",
  },
  oracle: { name: "Oracle" },
  mysql: {
    name: "MySQL",
    icon: "https://cdn.simpleicons.org/mysql",
  },
  mongodb: {
    name: "MongoDB",
    icon: "https://cdn.simpleicons.org/mongodb",
  },
  redis: {
    name: "Redis",
    icon: "https://cdn.simpleicons.org/redis",
  },
  lambda: {
    name: "AWS Lambda",
  },
  csharp: {
    name: "C#",
  },
  dotnet: {
    name: ".NET",
  },
  styledcomponent: {
    name: "styled-components",
    icon: "https://cdn.simpleicons.org/styledcomponents",
  },
  vite: {
    name: "Vite",
    icon: "https://cdn.simpleicons.org/vite",
  },
};

export default TECHNOLOGIES;
