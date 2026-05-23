import kiaworkspace0 from "../../../assets/images/projects/kiaworkspace/kiaworkspace-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Kia Workspace",
  theme: "dark",
  tags: ["angular", "typescript", "rxjs", "css"],
  videoBorder: false,
  live: "https://www.kia.com/in/",
  description:
    "Kia Workspace, Kia India के संचालन के लिए एक एंटरप्राइज़ माइक्रो-फ्रंटएंड सहयोग और ऑर्केस्ट्रेशन प्लेटफ़ॉर्म है।<br/><br/>मैंने लीड UI आर्किटेक्ट के रूप में काम किया, माइक्रो-फ्रंटएंड संचार मानकों को डिज़ाइन किया, कोडिंग मानकों का मार्गदर्शन किया, और रीयल-टाइम लोडिंग गति को नाटकीय रूप से अनुकूलित किया।",
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
