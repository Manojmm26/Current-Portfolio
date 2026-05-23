export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "angular"
  | "typescript"
  | "rxjs"
  | "java"
  | "spring"
  | "bootstrap"
  | "tailwind"
  | "mongodb";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  angular: "Angular",
  typescript: "TypeScript",
  rxjs: "RxJS",
  java: "Java",
  spring: "Spring Boot",
  bootstrap: "Bootstrap",
  tailwind: "Tailwind CSS",
  mongodb: "MongoDB",
} as const satisfies Record<TagVariant, string>;
