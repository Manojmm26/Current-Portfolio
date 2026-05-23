import glovisautobell0 from "../../../assets/images/projects/glovisautobell/glovisautobell-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Glovis Autobell",
  theme: "dark",
  tags: ["angular", "typescript", "rxjs", "bootstrap"],
  videoBorder: false,
  live: "https://www.autobell.co.kr",
  description:
    "Glovis Autobell is a high-traffic used car auction and dealer management ecosystem developed by Hyundai Glovis.<br/><br/>I built modules for Client's Logistics & Auction system, developed reactive components with RxJS asynchronous pipelines, integrated secure JWT authentication, and structured lazy loading schemes to minimize load screens and optimize core web vitals.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: glovisautobell0,
        alt: "Glovis Autobell Bidding Console",
        caption: "Glovis Autobell Bidding Console",
      },
    },
  ],
} as const satisfies ProjectContent;
