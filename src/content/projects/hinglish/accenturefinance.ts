import accenturefinance0 from "../../../assets/images/projects/accenturefinance/accenturefinance-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Accenture Finance",
  theme: "dark",
  tags: ["angular", "typescript", "bootstrap", "css"],
  videoBorder: false,
  live: "https://www.accenture.com",
  description:
    "Accenture Finance ek secure fintech customer relationship aur agent transaction portal hai jo large-scale banking operations ke liye build kiya gaya hai.<br/><br/>Maine bank agent portal module Angular, TypeScript aur SCSS use karke develop kiya, secure layouts and data validation systems integrate kiye taaki banking representatives ka kaam aur easy ho sake.",
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
