import herodms0 from "../../../assets/images/projects/herodms/herodms-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Hero DMS",
  theme: "dark",
  tags: ["react", "node", "css", "javascript"],
  videoBorder: false,
  live: "https://www.heromotocorp.com",
  description:
    "Hero DMS भारत के सबसे बड़े दोपहिया निर्माता, Hero MotoCorp के लिए बनाया गया एक नेक्स्ट-जेनरेशन डीलर मैनेजमेंट सिस्टम है।<br/><br/>मैंने React का उपयोग करके फ़ैक्टरी प्रोसेस के लिए हाई-परफ़ॉर्मेंस UI/UX डिज़ाइन और वर्कफ़्लो ऑटोमेशन विकसित किया। मोबाइल-फ़र्स्ट यूज़ेबिलिटी और मौजूदा एंटरप्राइज़ लेगेसी प्रणालियों के साथ सहज एकीकरण पर विशेष ध्यान दिया।",
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
