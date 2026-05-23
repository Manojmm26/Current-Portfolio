import cab0 from "../../../assets/images/projects/cab/cab-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "CAB",
  theme: "dark",
  tags: ["angular", "react", "node", "typescript", "mongodb"],
  videoBorder: false,
  live: "https://www.magicedtech.com/",
  description:
    "CAB (Custom Assessment Builder) is a state-of-the-art educational and medical exam authoring solution developed under Magic Edtech.<br/><br/>It serves as a comprehensive tool for medical faculty to easily create, edit, organize, and review high-quality, complex domain questions (such as clinical case scenarios, multiple-choice, and multi-step diagnostic items). The system features robust custom assessment builders with dozens of configurable parameters, letting students practice exam modes, customize test prep configurations, and track real-time results.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cab0,
        alt: "CAB Custom Assessment Builder Dashboard",
        caption: "CAB Custom Assessment Builder Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
