import accenturefinance0 from "../../../assets/images/projects/accenturefinance/accenturefinance-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Accenture Finance",
  theme: "dark",
  tags: ["angular", "typescript", "bootstrap", "css"],
  videoBorder: false,
  live: "https://www.accenture.com",
  description:
    "Accenture Finance is a secure fintech customer relationship and agent transaction portal built for large scale bank operations.<br/><br/>I designed and developed the agent banking app module using Angular, TypeScript, SCSS, and reactive bootstrap grids, incorporating complex data validation flows to streamline bank representative workflows.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: accenturefinance0,
        alt: "Accenture Bank Agent Portal",
        caption: "Accenture Bank Agent Portal",
      },
    },
  ],
} as const satisfies ProjectContent;
