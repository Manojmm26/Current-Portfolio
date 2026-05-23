import herodms0 from "../../../assets/images/projects/herodms/herodms-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Hero DMS",
  theme: "dark",
  tags: ["react", "node", "css", "javascript"],
  videoBorder: false,
  live: "https://www.heromotocorp.com",
  description:
    "Hero DMS ek next-generation Dealer Management System hai jo India ke sabse bade two-wheeler manufacturer, Hero MotoCorp ke liye banaya gaya hai.<br/><br/>Maine React use karke Factory Process ke liye high-performance UI/UX design aur workflow automation develop kiya. Pura focus mobile-first usability aur legacy Hero systems ke saath smooth architectural integration par tha.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: herodms0,
        alt: "Hero DMS Factory Process UI",
        caption: "Hero DMS Factory Process UI",
      },
    },
  ],
} as const satisfies ProjectContent;
