import kiaworkspace0 from "../../../assets/images/projects/kiaworkspace/kiaworkspace-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Kia Workspace",
  theme: "dark",
  tags: ["angular", "typescript", "rxjs", "css"],
  videoBorder: false,
  live: "https://www.kia.com/in/",
  description:
    "Kia Workspace is an enterprise microfrontend collaboration and orchestration platform for Kia India's operations.<br/><br/>I served as the lead UI architect, designing the microfrontend communication standards, guiding development best practices, implementing authentication/authorization mechanisms, and optimizing asset lazy loading to drastically improve runtime rendering speeds.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: kiaworkspace0,
        alt: "Kia Workspace Dashboard",
        caption: "Kia Workspace Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
