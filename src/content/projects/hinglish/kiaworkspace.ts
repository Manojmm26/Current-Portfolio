import kiaworkspace0 from "../../../assets/images/projects/kiaworkspace/kiaworkspace-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Kia Workspace",
  theme: "dark",
  tags: ["angular", "typescript", "rxjs", "css"],
  videoBorder: false,
  live: "https://www.kia.com/in/",
  description:
    "Kia Workspace ek enterprise microfrontend collaboration aur orchestration platform hai jo Kia India ke operations ke liye banaya gaya hai.<br/><br/>Maine lead UI architect ke taur pe kaam kiya, microfrontend communication standards design kiye, best coding practices guide kiye aur loading speed ko super-fast kiya.",
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
