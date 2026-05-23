<script setup lang="ts">
import { computed, watch } from "vue";
import { locale } from "../i18n/store";
import { t } from "../i18n/utils/translate";
import ButtonRound from "./ButtonRound.vue";
import CloseIcon from "./icons/X.vue";
import PinIcon from "./icons/Pin.vue";

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

// Disable body scroll when drawer is open
watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);

interface JobExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

const JOBS_EN = [
  {
    role: "Senior Developer [Magic Edtech]",
    company: "Magic Edtech",
    location: "Noida/Remote, India",
    period: "06/2025 - Present",
    highlights: [
      "Developed interactive education solution 'CAB - Custom Assessment Builder' tailored for medical faculty.",
      "Engineered systems allowing medical faculty to create, share, and review high-quality domain-specific questions.",
      "Designed custom assessment modules featuring highly flexible exam prep configurations for student testing.",
      "Optimized question bank sharing pipelines, ensuring real-time responsive workflows and secure reviews."
    ]
  },
  {
    role: "Senior Developer [Hero DMS]",
    company: "Tata Technologies",
    location: "Gurugram/Nepal",
    period: "03/2025 - 06/2025",
    highlights: [
      "Developed interactive UI/UX designs for high-efficiency Factory Processes in React.",
      "Designed data structures, integration flows, and key system architectures across the stack.",
      "Ensured seamless front-end integration with existing enterprise legacy Hero Platforms.",
      "Optimized mobile interfaces to achieve 100% mobile-first usability standards."
    ]
  },
  {
    role: "Senior Developer [Kia Workspace]",
    company: "Tata Technologies",
    location: "Chennai, India",
    period: "09/2024 - 06/2025",
    highlights: [
      "Designed and oversaw implementation of modular microfrontend architectures for corporate operations.",
      "Defined standards for cross-communication, event delegation, and microservices sharing.",
      "Mentored the engineering team on Angular best practices, component modularization, and unit tests.",
      "Optimized application loading times and runtime layout rendering speed by over 30%."
    ]
  },
  {
    role: "Developer [Glovis Autobell]",
    company: "Tata Technologies",
    location: "Gurugram, India",
    period: "12/2023 - 09/2024",
    highlights: [
      "Engineered auction blocks and logistics systems for the Dealer Management System.",
      "Integrated secure JWT token-based authentication and authorization mechanisms for REST APIs.",
      "Implemented advanced lazy-loading routes to minimize initial page weight and boost Core Web Vitals.",
      "Constructed asynchronous, high-concurrency event handling pipelines using RxJS observable operators."
    ]
  },
  {
    role: "Solution Developer [D2C Hyundai]",
    company: "Tata Technologies",
    location: "Gurugram, India",
    period: "07/2022 - 11/2023",
    highlights: [
      "Created direct-to-consumer digital car customizer purchasing platform for upcoming electric cars.",
      "Orchestrated the front-end structure from project setup to high-traffic production releases.",
      "Coordinated design files with UI/UX designers and QA teams to assure exact mock matchings.",
      "Designed multiple reactive configuration forms featuring real-time client validation schemes."
    ]
  },
  {
    role: "Associate Software Engineer",
    company: "Accenture",
    location: "Gurugram, India",
    period: "05/2019 - 07/2022",
    highlights: [
      "Developed a secure transaction web app used by bank agents to assist customers with financial actions.",
      "Built dynamic, accessible pages using HTML5, SCSS grids, TypeScript, and Angular feature modules.",
      "Collaborated using Git/GitHub version control in standard Agile/Scrum sprints.",
      "Designed, tested, and shipped product requirements under strict deadline goals."
    ]
  }
] as const satisfies JobExperience[];

const JOBS_HI = [
  {
    role: "वरिष्ठ डेवलपर [Magic Edtech]",
    company: "Magic Edtech",
    location: "नोएडा/रिमोट, भारत",
    period: "06/2025 - वर्तमान",
    highlights: [
      "मेडिकल फैकल्टी के लिए कस्टम एडटेक समाधान 'CAB - Custom Assessment Builder' का निर्माण और विकास किया।",
      "मेडिकल फैकल्टी को उच्च गुणवत्ता वाले विभिन्न प्रकार के चिकित्सा डोमेन प्रश्नों को बनाने, साझा करने और समीक्षा करने में सक्षम बनाया।",
      "छात्रों के लिए परीक्षा की तैयारी और टेस्ट देने के लिए अत्यधिक लचीले और कॉन्फ़िगर करने योग्य मूल्यांकन मॉड्यूल डिजाइन किए।",
      "प्रश्न बैंक शेयरिंग पाइपलाइन को इष्टतम किया, जिससे रीयल-टाइम उत्तरदायी वर्कफ़्लो और सुरक्षित समीक्षाएं सुनिश्चित हुईं।"
    ]
  },
  {
    role: "वरिष्ठ डेवलपर [Hero DMS]",
    company: "Tata Technologies",
    location: "गुरुग्राम/नेपाल",
    period: "03/2025 - 06/2025",
    highlights: [
      "React में उच्च-दक्षता वाले फ़ैक्टरी प्रोसेस के लिए इंटरैक्टिव UI/UX डिज़ाइन विकसित किए।",
      "पूरे स्टैक में डेटा संरचनाओं, एकीकरण प्रवाह और प्रमुख सिस्टम आर्किटेक्चर को डिज़ाइन किया।",
      "मौजूदा एंटरप्राइज लीगेसी Hero प्लेटफॉर्म के साथ सहज फ्रंट-एंड एकीकरण सुनिश्चित किया।",
      "100% मोबाइल-फर्स्ट उपयोगिता मानकों को प्राप्त करने के लिए मोबाइल इंटरफेस को अनुकूलित किया।"
    ]
  },
  {
    role: "वरिष्ठ डेवलपर [Kia Workspace]",
    company: "Tata Technologies",
    location: "चेन्नई, भारत",
    period: "09/2024 - 06/2025",
    highlights: [
      "कॉर्पोरेट संचालन के लिए मॉड्यूलर माइक्रो-फ्रंटएंड आर्किटेक्चर के डिजाइन और कार्यान्वयन की देखरेख की।",
      "क्रॉस-कम्युनिकेशन, इवेंट डेलिगेशन और माइक्रो-सर्विसेज शेयरिंग के लिए मानक निर्धारित किए।",
      "Angular सर्वोत्तम प्रथाओं, घटक मॉड्यूलाइजेशन और यूनिट परीक्षणों पर इंजीनियरिंग टीम का मार्गदर्शन किया।",
      "एप्लिकेशन लोड होने के समय और रनटाइम लेआउट रेंडरिंग स्पीड को 30% से अधिक सुधारा।"
    ]
  },
  {
    role: "डेवलपर [Glovis Autobell]",
    company: "Tata Technologies",
    location: "गुरुग्राम, भारत",
    period: "12/2023 - 09/2024",
    highlights: [
      "डीलर मैनेजमेंट सिस्टम (DMS) के लिए ऑक्शन ब्लॉक्स और लॉजिस्टिक्स सिस्टम का निर्माण किया।",
      "REST APIs के लिए सुरक्षित JWT टोकन-आधारित प्रमाणीकरण (authentication) और प्राधिकरण (authorization) को एकीकृत किया।",
      "प्रारंभिक पेज साइज को कम करने और कोर वेब व्हाइटल्स को बढ़ावा देने के लिए उन्नत लेजी-लोडिंग रूट्स लागू किए।",
      "RxJS ऑब्ज़र्वेबल ऑपरेटर्स का उपयोग करके अतुल्यकालिक (asynchronous), उच्च-समानता (high-concurrency) वाले इवेंट हैंडलिंग पाइपलाइनों का निर्माण किया।"
    ]
  },
  {
    role: "सॉल्यूशन डेवलपर [D2C Hyundai]",
    company: "Tata Technologies",
    location: "गुरुग्राम, भारत",
    period: "07/2022 - 11/2023",
    highlights: [
      "आने वाली इलेक्ट्रिक कारों के लिए डायरेक्ट-टू-कंज्यूमर डिजिटल कार कस्टमाइज़र खरीद प्लेटफॉर्म बनाया।",
      "प्रोजेक्ट सेटअप से लेकर हाई-ट्रैफिक प्रोडक्शन रिलीज तक फ्रंट-एंड संरचना का नेतृत्व किया।",
      "सटीक मॉक मैचिंग सुनिश्चित करने के लिए UI/UX डिजाइनरों और QA टीमों के साथ डिजाइन फाइलों का समन्वय किया।",
      "रीयल-टाइम क्लाइंट वैलिडेशन स्कीमों के साथ कई प्रतिक्रियाशील (reactive) कॉन्फ़िगरेशन फॉर्म डिज़ाइन किए।"
    ]
  },
  {
    role: "एसोसिएट सॉफ्टवेयर इंजीनियर",
    company: "Accenture",
    location: "गुरुग्राम, भारत",
    period: "05/2019 - 07/2022",
    highlights: [
      "एक सुरक्षित वित्तीय लेनदेन वेब ऐप विकसित किया जिसका उपयोग बैंक एजेंट ग्राहकों की सहायता के लिए करते हैं।",
      "HTML5, SCSS ग्रिड, TypeScript और Angular फ़ीचर मॉड्यूल का उपयोग करके गतिशील, सुलभ पेज बनाए।",
      "मानक एजाइल/स्कम स्प्रिंट में Git/GitHub संस्करण नियंत्रण (version control) का उपयोग करके सहयोग किया।",
      "कठिन समय सीमा के तहत उत्पाद आवश्यकताओं को डिज़ाइन, परीक्षण और डिलीवर किया।"
    ]
  }
] as const satisfies JobExperience[];

const JOBS_HINGLISH = [
  {
    role: "Senior Developer [Magic Edtech]",
    company: "Magic Edtech",
    location: "Noida/Remote, India",
    period: "06/2025 - Abhi Tak",
    highlights: [
      "Medical faculty ke liye custom edtech solution 'CAB - Custom Assessment Builder' develop kiya.",
      "Medical domain ke highly technical aur high-quality questions create, share aur review karne ke features build kiye.",
      "Students ke liye exams ki preparation aur custom test setup karne ke highly configurable modules design kiye.",
      "Question bank sharing, secure reviews aur real-time workflows ko optimize aur refine kiya."
    ]
  },
  {
    role: "Senior Developer [Hero DMS]",
    company: "Tata Technologies",
    location: "Gurugram/Nepal",
    period: "03/2025 - 06/2025",
    highlights: [
      "React me high-efficiency Factory Processes ke liye interactive UI/UX designs develop kiye.",
      "Poore stack me data structures, integration flows aur key system architectures design kiye.",
      "Existing enterprise legacy Hero Platforms ke sath seamless front-end integration ensure kiya.",
      "100% mobile-first usability standards achieve karne ke liye mobile interfaces ko optimize kiya."
    ]
  },
  {
    role: "Senior Developer [Kia Workspace]",
    company: "Tata Technologies",
    location: "Chennai, India",
    period: "09/2024 - 06/2025",
    highlights: [
      "Corporate operations ke liye modular microfrontend architectures design aur implement kiye.",
      "Cross-communication, event delegation aur microservices sharing ke standards set kiye.",
      "Engineering team ko Angular best practices, component modularization aur unit tests pe mentor kiya.",
      "Application load times aur runtime layout rendering speed ko 30% se zyada improve kiya."
    ]
  },
  {
    role: "Developer [Glovis Autobell]",
    company: "Tata Technologies",
    location: "Gurugram, India",
    period: "12/2023 - 09/2024",
    highlights: [
      "Dealer Management System ke liye auction blocks aur logistics systems engineer kiye.",
      "REST APIs ke liye secure JWT token-based authentication aur authorization mechanisms integrate kiye.",
      "Initial page load weight kam karne aur Core Web Vitals ko boost karne ke liye advanced lazy-loading routes implement kiye.",
      "RxJS observable operators use karke asynchronous, high-concurrency event handling pipelines banaye."
    ]
  },
  {
    role: "Solution Developer [D2C Hyundai]",
    company: "Tata Technologies",
    location: "Gurugram, India",
    period: "07/2022 - 11/2023",
    highlights: [
      "Aane wali electric cars ke liye direct-to-consumer digital car customizer purchasing platform banaya.",
      "Project setup se lekar high-traffic production releases tak front-end structure ko lead kiya.",
      "Exact design matchings ke liye UI/UX designers aur QA teams ke sath design files coordinate kiye.",
      "Real-time client validation ke sath multiple reactive configuration forms design kiye."
    ]
  },
  {
    role: "Associate Software Engineer",
    company: "Accenture",
    location: "Gurugram, India",
    period: "05/2019 - 07/2022",
    highlights: [
      "Bank agents ke liye customers ki financial transaction me help karne wala secure web app banaya.",
      "HTML5, SCSS grids, TypeScript aur Angular modules use karke dynamic aur accessible pages build kiye.",
      "Standard Agile/Scrum sprints me Git/GitHub version control ke sath collaborate kiya.",
      "Strict deadlines ke under product requirements ko design, test aur ship kiya."
    ]
  }
] as const satisfies JobExperience[];

const jobs = computed(() => {
  if (locale.value === "hi") return JOBS_HI;
  if (locale.value === "hinglish") return JOBS_HINGLISH;
  return JOBS_EN;
});
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen" class="drawer-overlay" @click="emit('close')"></div>
  </Transition>

  <Transition name="slide">
    <div v-if="isOpen" class="drawer-container" data-lenis-prevent>
      <div class="drawer-header">
        <h2 class="drawer-title">{{ t("experience") }}</h2>
        <ButtonRound
          variant="accent"
          @click="emit('close')"
          aria-label="Close"
          data-sound="click"
          data-hoversound="hover"
          data-cursor="circle-white"
        >
          <CloseIcon class="close-icon" />
        </ButtonRound>
      </div>

      <div class="drawer-body" data-lenis-prevent>
        <div class="timeline">
          <div v-for="job in jobs" :key="job.role" class="timeline-item">
            <div class="timeline-badge"></div>
            <div class="timeline-content-box">
              <div class="job-meta">
                <span class="job-company">{{ job.company }}</span>
                <span class="job-period">{{ job.period }}</span>
              </div>
              <h3 class="job-role">{{ job.role }}</h3>
              <div class="job-location">
                <PinIcon class="location-icon" />
                <span>{{ job.location }}</span>
              </div>
              <ul class="job-highlights">
                <li v-for="bullet in job.highlights" :key="bullet">{{ bullet }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  z-index: calc(var(--z-index-header) + 4);
}

.drawer-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 550px;
  max-width: 90vw;
  background: linear-gradient(to right, rgba(0, 8, 12, 0.95) 0%, rgba(0, 18, 26, 0.98) 100%);
  border-left: var(--stroke-sm) solid var(--color-cyan-400);
  box-shadow: -10px 0 35px rgba(0, 242, 254, 0.15);
  z-index: calc(var(--z-index-header) + 5);
  display: flex;
  flex-direction: column;
  color: var(--color-white-400);
  font-family: "ProFontWindows", sans-serif;
  overflow: hidden;

  @media (max-width: 480px) {
    max-width: 95vw;
    width: 100%;
  }
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) var(--space-lg);
  border-bottom: 1px solid rgba(0, 242, 254, 0.2);

  @media (max-width: 480px) {
    padding: var(--space-sm) var(--space-md);
  }

  .close-icon {
    width: 16px;
    height: 16px;
    --icon-color: var(--color-white-400);
  }
}

.drawer-title {
  font-size: var(--font-size-title-sm);
  font-weight: 700;
  color: var(--color-text-cyan-400);
  letter-spacing: 1px;
}

.drawer-body {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-lg);

  @media (max-width: 480px) {
    padding: var(--space-md);
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-cyan-400);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 242, 254, 0.05);
  }
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  position: relative;
  padding-left: 20px;
  border-left: 1px solid rgba(0, 242, 254, 0.2);

  &-item {
    position: relative;
  }

  &-badge {
    position: absolute;
    left: -25px;
    top: 6px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--color-cyan-400);
    box-shadow: 0 0 8px var(--color-cyan-400);
  }
}

.timeline-content-box {
  background: rgba(0, 242, 254, 0.03);
  border: 1px solid rgba(0, 242, 254, 0.1);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  transition: all 0.25s ease;

  @media (max-width: 480px) {
    padding: var(--space-sm);
  }

  &:hover {
    border-color: rgba(0, 242, 254, 0.4);
    background: rgba(0, 242, 254, 0.06);
    transform: translateX(4px);
    box-shadow: 0 4px 20px rgba(0, 242, 254, 0.05);
  }
}

.job-meta {
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-sm);
  color: var(--color-white-400);
  margin-bottom: var(--space-xxs);

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 2px;
  }
}

.job-company {
  font-weight: 700;
  letter-spacing: 0.5px;
}

.job-period {
  opacity: 0.8;
}

.job-role {
  font-size: var(--font-size-md);
  color: var(--color-text-cyan-400);
  font-weight: 700;
  margin-bottom: var(--space-xxs);
}

.job-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-size-xs);
  color: var(--color-white-400);
  opacity: 0.7;
  margin-bottom: var(--space-sm);

  .location-icon {
    width: 12px;
    height: 12px;
    --icon-color: var(--color-white-400);
  }
}

.job-highlights {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxs);
  padding-left: 14px;
  font-size: var(--font-size-sm);
  color: var(--color-white-400);
  opacity: 0.9;
  line-height: 1.4;

  li {
    list-style-type: square;
    &::marker {
      color: var(--color-cyan-400);
    }
  }
}

// Vue transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
