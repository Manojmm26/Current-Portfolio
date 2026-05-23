import herodms0 from "../../../assets/images/projects/herodms/herodms-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Hero DMS",
  theme: "dark",
  tags: ["react", "node", "css", "javascript"],
  videoBorder: false,
  live: "https://www.heromotocorp.com",
  description:
    "Hero DMS is a next-generation Dealer Management System built for Hero MotoCorp, the largest two-wheeler manufacturer in India.<br/><br/>I developed the high-performance UI/UX design and workflow automation for the Factory Process using React. Focused heavily on mobile first-use responsiveness and seamless architectural integration with existing legacy Hero systems.",
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
