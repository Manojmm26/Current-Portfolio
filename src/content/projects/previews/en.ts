import thumbnailHeroDMS from "../../../assets/thumbnails/herodms.png";
import thumbnailKiaWorkspace from "../../../assets/thumbnails/kiaworkspace.png";
import thumbnailGlovisAutobell from "../../../assets/thumbnails/glovisautobell.png";
import thumbnailD2CHyundai from "../../../assets/thumbnails/d2chyundai.png";
import thumbnailAccentureFinance from "../../../assets/thumbnails/accenturefinance.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Hero DMS",
    slug: "herodms",
    thumbnail: thumbnailHeroDMS,
    description: "Enterprise Dealer Management & Factory UI",
  },
  {
    title: "Kia Workspace",
    slug: "kiaworkspace",
    thumbnail: thumbnailKiaWorkspace,
    description: "Microfrontend Architecture & Collaboration",
  },
  {
    title: "Glovis Autobell",
    slug: "glovisautobell",
    thumbnail: thumbnailGlovisAutobell,
    description: "Dealer Auction & Used Car Logistics",
  },
  {
    title: "D2C Hyundai",
    slug: "d2chyundai",
    thumbnail: thumbnailD2CHyundai,
    description: "Direct-to-Consumer EV Purchasing & Customizer",
  },
  {
    title: "Accenture Finance",
    slug: "accenturefinance",
    thumbnail: thumbnailAccentureFinance,
    description: "Secure Agent Banking & Fintech App",
  },
] as const satisfies ProjectPreview[];
