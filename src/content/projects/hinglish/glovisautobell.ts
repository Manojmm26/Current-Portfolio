import glovisautobell0 from "../../../assets/images/projects/glovisautobell/glovisautobell-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Glovis Autobell",
  theme: "dark",
  tags: ["angular", "typescript", "rxjs", "bootstrap"],
  videoBorder: false,
  live: "https://www.autobell.co.kr",
  description:
    "Glovis Autobell ek high-traffic used car auction aur dealer management system hai jo Hyundai Glovis ne develop kiya hai.<br/><br/>Maine logistics aur auction modules build kiye, RxJS asynchronous flow use karke super-responsive UI items banaye aur proper performance optimization ki.",
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
