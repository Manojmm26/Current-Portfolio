import d2chyundai0 from "../../../assets/images/projects/d2chyundai/d2chyundai-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "D2C Hyundai",
  theme: "dark",
  tags: ["angular", "typescript", "bootstrap", "css"],
  videoBorder: false,
  live: "https://www.hyundai.com",
  description:
    "D2C Hyundai आगामी इलेक्ट्रिक वाहनों के लिए डिज़ाइन किया गया एक प्रीमियम ऑनलाइन डायरेक्ट-टू-कंज्यूमर कार कस्टमाइज़र और ख़रीदने का पोर्टल है।<br/><br/>मैंने फ्रंट-एंड संरचना के निर्माण का निर्देशन किया, Angular में जटिल डेटा सत्यापन फॉर्मों के साथ गतिशील कार कॉन्फ़िगरेशन सिस्टम विकसित किए, और उत्पादन परिनियोजन तक पूरी पाइपलाइन का नेतृत्व किया।",
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
