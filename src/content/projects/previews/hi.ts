import thumbnailCAB from "../../../assets/thumbnails/cab.png";
import thumbnailHeroDMS from "../../../assets/thumbnails/herodms.png";
import thumbnailKiaWorkspace from "../../../assets/thumbnails/kiaworkspace.png";
import thumbnailGlovisAutobell from "../../../assets/thumbnails/glovisautobell.png";
import thumbnailD2CHyundai from "../../../assets/thumbnails/d2chyundai.png";
import thumbnailAccentureFinance from "../../../assets/thumbnails/accenturefinance.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "CAB",
    slug: "cab",
    thumbnail: thumbnailCAB,
    description: "चिकित्सा कस्टम मूल्यांकन निर्माता समाधान",
  },
  {
    title: "Hero DMS",
    slug: "herodms",
    thumbnail: thumbnailHeroDMS,
    description: "एंटरप्राइज डीलर मैनेजमेंट और फैक्टरी यूआई",
  },
  {
    title: "Kia Workspace",
    slug: "kiaworkspace",
    thumbnail: thumbnailKiaWorkspace,
    description: "माइक्रो-फ्रंटएंड आर्किटेक्चर और सहयोग",
  },
  {
    title: "Glovis Autobell",
    slug: "glovisautobell",
    thumbnail: thumbnailGlovisAutobell,
    description: "डीलर नीलामी और प्रयुक्त कार लॉजिस्टिक्स",
  },
  {
    title: "D2C Hyundai",
    slug: "d2chyundai",
    thumbnail: thumbnailD2CHyundai,
    description: "EV कस्टमाइज़र और डायरेक्ट-टू-कंज्यूमर पोर्टल",
  },
  {
    title: "Accenture Finance",
    slug: "accenturefinance",
    thumbnail: thumbnailAccentureFinance,
    description: "सुरक्षित बैंक एजेंट और फिनटेक ऐप",
  },
] as const satisfies ProjectPreview[];
