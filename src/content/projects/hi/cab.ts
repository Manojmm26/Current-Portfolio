import cab0 from "../../../assets/images/projects/cab/cab-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "CAB",
  theme: "dark",
  tags: ["angular", "react", "node", "typescript", "mongodb"],
  videoBorder: false,
  live: "https://www.magicedtech.com/",
  description:
    "CAB (Custom Assessment Builder) एक अत्याधुनिक शैक्षिक और चिकित्सा परीक्षा निर्माण समाधान है, जिसे Magic Edtech के तहत विकसित किया गया है।<br/><br/>यह चिकित्सा संकाय (medical faculty) के लिए उच्च-गुणवत्ता वाले, जटिल डोमेन प्रश्नों (जैसे नैदानिक मामले के परिदृश्य, बहुविकल्पीय, और बहु-चरणीय नैदानिक वस्तुएं) को आसानी से बनाने, संपादित करने, व्यवस्थित करने और समीक्षा करने के लिए एक व्यापक उपकरण के रूप में कार्य करता है। इस सिस्टम में छात्रों के लिए परीक्षा मोड का अभ्यास करने, टेस्ट प्रेप सेटिंग्स को कस्टमाइज़ करने और वास्तविक समय के परिणामों को ट्रैक करने के लिए दर्जनों कॉन्फ़िगर करने योग्य मापदंडों के साथ मजबूत कस्टम मूल्यांकन निर्माता शामिल हैं।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cab0,
        alt: "CAB कस्टम असेसमेंट बिल्डर डैशबोर्ड",
        caption: "CAB कस्टम असेसमेंट बिल्डर डैशबोर्ड",
      },
    },
  ],
} as const satisfies ProjectContent;
