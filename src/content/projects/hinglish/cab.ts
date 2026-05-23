import cab0 from "../../../assets/images/projects/cab/cab-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "CAB",
  theme: "dark",
  tags: ["angular", "react", "node", "typescript", "mongodb"],
  videoBorder: false,
  live: "https://www.magicedtech.com/",
  description:
    "CAB (Custom Assessment Builder) ek advanced educational aur medical exam authoring platform hai jo Magic Edtech ke under build kiya gaya hai.<br/><br/>Is solution me medical faculties easily complex domain-specific questions (jaise clinical case scenario, MCQs aur multi-step diagnostic items) design, collaborate aur review kar sakte hain. Is platform me dynamic custom assessment builders built-in hain with many configuration settings, taaki students mock exams generate kar sakein, test settings customize kar sakein aur real-time prep and performance check kar sakein.",
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
