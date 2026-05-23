import accenturefinance0 from "../../../assets/images/projects/accenturefinance/accenturefinance-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Accenture Finance",
  theme: "dark",
  tags: ["angular", "typescript", "bootstrap", "css"],
  videoBorder: false,
  live: "https://www.accenture.com",
  description:
    "Accenture Finance, बड़े पैमाने पर बैंकिंग संचालन के लिए बनाया गया एक सुरक्षित फ़िनटेक ग्राहक संबंध और बैंक प्रतिनिधि लेन-देन पोर्टल है।<br/><br/>मैंने Angular, TypeScript, SCSS और प्रतिक्रियाशील ग्रिड का उपयोग करके बैंक प्रतिनिधि एप्लिकेशन मॉड्यूल को डिज़ाइन और विकसित किया, जिसमें बैंक प्रतिनिधि वर्कफ़्लो को सुव्यवस्थित करने के लिए जटिल डेटा सत्यापन प्रवाह शामिल थे।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: accenturefinance0,
        alt: "Accenture Bank Agent Portal",
        caption: "Accenture Bank Agent Portal",
      },
    },
  ],
} as const satisfies ProjectContent;
