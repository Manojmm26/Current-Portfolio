import glovisautobell0 from "../../../assets/images/projects/glovisautobell/glovisautobell-0.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Glovis Autobell",
  theme: "dark",
  tags: ["angular", "typescript", "rxjs", "bootstrap"],
  videoBorder: false,
  live: "https://www.autobell.co.kr",
  description:
    "Glovis Autobell, Hyundai Glovis द्वारा विकसित एक उच्च-ट्रैफ़िक प्रयुक्त कार नीलामी और डीलर प्रबंधन पारिस्थितिकी तंत्र है।<br/><br/>मैंने क्लाइंट के लॉजिस्टिक्स और ऑक्शन सिस्टम के मॉड्यूल बनाए, RxJS एसिंक्रोनस पाइपलाइनों के साथ रिएक्टिव कंपोनेंट विकसित किए, और पेजों की रेंडरिंग गति में व्यापक सुधार किए।",
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
