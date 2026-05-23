import d2chyundai0 from "../../../assets/images/projects/d2chyundai/d2chyundai-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "D2C Hyundai",
  theme: "dark",
  tags: ["angular", "typescript", "bootstrap", "css"],
  videoBorder: false,
  live: "https://www.hyundai.com",
  description:
    "D2C Hyundai ek premium online Direct-to-Consumer electric vehicle configurator aur purchasing portal hai jo upcoming electric cars ke liye banaya gaya hai.<br/><br/>Maine front-end structure create kiya, Angular me dynamic configurators develop kiye validation forms ke saath aur is system ko setup se lekar pure production release tak lead kiya.",
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
