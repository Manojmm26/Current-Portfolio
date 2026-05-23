import d2chyundai0 from "../../../assets/images/projects/d2chyundai/d2chyundai-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "D2C Hyundai",
  theme: "dark",
  tags: ["angular", "typescript", "bootstrap", "css"],
  videoBorder: false,
  live: "https://www.hyundai.com",
  description:
    "D2C Hyundai is a premium online Direct-to-Consumer electric vehicle purchasing and customizer portal designed for upcoming EVs.<br/><br/>I directed the front-end structure creation, built dynamic vehicle configurators with validation forms in Angular, coordinated closely with design and product teams, and led the pipeline from construction all the way to production deployment.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: d2chyundai0,
        alt: "D2C Hyundai EV Configurator",
        caption: "D2C Hyundai EV Configurator",
      },
    },
  ],
} as const satisfies ProjectContent;
