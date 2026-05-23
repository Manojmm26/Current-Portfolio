<script setup lang="ts">
import { computed, ref, watchEffect, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { locale } from "../../../i18n/store";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
import { BREAKPOINTS } from "../../../utils/sizes";
import { Vector3 } from "three";
import ProjectedElement from "../../../components/ProjectedElement.vue";

const point = new Vector3(0.75, 1.3, 6.75);

const wrapperRef = ref<HTMLDivElement | null>(null);
const timelines = ref<{ timeline: gsap.core.Timeline; delay: number }[]>([]);
const subRefs = ref<HTMLParagraphElement[]>([]);
let matchMedia: gsap.MatchMedia | null = null;

const emit = defineEmits<{
  "timeline:created": [timeline: gsap.core.Timeline];
}>();

watchEffect((onInvalidate) => {
  const wrapperEl = wrapperRef.value;
  if (!wrapperEl) return;

  if (matchMedia) {
    matchMedia.revert();
    matchMedia = null;
  }

  matchMedia = gsap.matchMedia();

  matchMedia.add(
    {
      isMobile: `(max-width: ${BREAKPOINTS.md - 1}px)`,
      isDesktop: `(min-width: ${BREAKPOINTS.md}px)`,
    },
    (context) => {
      const { conditions } = context;
      const { isMobile } = conditions as { isMobile: boolean; isDesktop: boolean };

      const tl = gsap.timeline({
        paused: true,
      });

      if (!isMobile) {
        tl.fromTo(
          wrapperEl,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.4, ease: "none" },
          0,
        );
      } else {
        gsap.set(wrapperEl, { clipPath: "inset(0% 0% 0% 0%)" });
      }

      for (let i = 0; i < timelines.value.length; i++) {
        const item = timelines.value[i];
        if (!item) continue;
        tl.add(() => {
          item.timeline.restart(true);
        }, item.delay + 0.25);
      }

      if (!isMobile && subRefs.value.length > 0) {
        const subItems = subRefs.value.filter((ref) => ref !== null && ref !== undefined);
        if (subItems.length > 0) {
          tl.fromTo(subItems, { opacity: 0 }, { opacity: 1, duration: 0.2, stagger: 0.1 }, 0.3);
        }
      } else if (isMobile && subRefs.value.length > 0) {
        const subItems = subRefs.value.filter((ref) => ref !== null && ref !== undefined);
        if (subItems.length > 0) {
          gsap.set(subItems, { opacity: 1 });
        }
      }

      emit("timeline:created", tl);

      return () => {
        tl.kill();
      };
    },
  );

  onInvalidate(() => {
    if (matchMedia) {
      matchMedia.revert();
      matchMedia = null;
    }
  });
});

onBeforeUnmount(() => {
  if (matchMedia) {
    matchMedia.revert();
  }
});

const handleTimelineCreated = (timeline: gsap.core.Timeline, delay: number) => {
  const updatedTimelines = [...timelines.value, { timeline, delay }];
  timelines.value = updatedTimelines;
};

const EXPERIENCE_EN = [
  { role: "Senior Developer [Magic Edtech]", company: "Magic Edtech", years: "2025 - Pres." },
  { role: "Senior Developer [Hero DMS]", company: "Tata Technologies", years: "2025" },
  { role: "Senior Developer [Kia Workspace]", company: "Tata Technologies", years: "2024 - 2025" },
  { role: "Developer [Glovis Autobell]", company: "Tata Technologies", years: "2023 - 2024" },
  { role: "Solution Developer [D2C Hyundai]", company: "Tata Technologies", years: "2022 - 2023" },
  { role: "Associate Software Engineer", company: "Accenture", years: "2019 - 2022" },
] as const satisfies { role: string; company: string; years: string }[];

const EXPERIENCE_HI = [
  { role: "वरिष्ठ डेवलपर [Magic Edtech]", company: "Magic Edtech", years: "2025 - वर्तमान" },
  { role: "वरिष्ठ डेवलपर [Hero DMS]", company: "Tata Technologies", years: "2025" },
  { role: "वरिष्ठ डेवलपर [Kia Workspace]", company: "Tata Technologies", years: "2024 - 2025" },
  { role: "डेवलपर [Glovis Autobell]", company: "Tata Technologies", years: "2023 - 2024" },
  { role: "सॉल्यूशन डेवलपर [D2C Hyundai]", company: "Tata Technologies", years: "2022 - 2023" },
  { role: "एसोसिएट सॉफ्टवेयर इंजीनियर", company: "Accenture", years: "2019 - 2022" },
] as const satisfies { role: string; company: string; years: string }[];

const EXPERIENCE_HINGLISH = [
  { role: "Senior Developer [Magic Edtech]", company: "Magic Edtech", years: "2025 - Abhi Tak" },
  { role: "Senior Developer [Hero DMS]", company: "Tata Technologies", years: "2025" },
  { role: "Senior Developer [Kia Workspace]", company: "Tata Technologies", years: "2024 - 2025" },
  { role: "Developer [Glovis Autobell]", company: "Tata Technologies", years: "2023 - 2024" },
  { role: "Solution Developer [D2C Hyundai]", company: "Tata Technologies", years: "2022 - 2023" },
  { role: "Associate Software Engineer", company: "Accenture", years: "2019 - 2022" },
] as const satisfies { role: string; company: string; years: string }[];

const experiences = computed(() => {
  if (locale.value === "hi") return EXPERIENCE_HI;
  if (locale.value === "hinglish") return EXPERIENCE_HINGLISH;
  return EXPERIENCE_EN;
});
</script>

<template>
  <ProjectedElement :point="point">
    <div ref="wrapperRef" class="box-experience">
      <div class="box-experience-content">
        <div class="box-experience-title">
          <AppearingText
            :text="t('experience')"
            :steps="1"
            :duration="0.35"
            @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0)"
          />
        </div>
        <div class="box-experience-list">
          <div class="box-experience-list-item" v-for="(exp, index) in experiences" :key="exp.role">
            <div class="box-experience-list-item-header">
              <span class="box-experience-list-item-role">
                <AppearingText
                  :text="exp.role"
                  :steps="1"
                  :duration="0.35"
                  @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.1 + index * 0.08)"
                />
              </span>
              <span class="box-experience-list-item-years">
                <AppearingText
                  :text="exp.years"
                  :steps="1"
                  :duration="0.35"
                  @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.15 + index * 0.08)"
                />
              </span>
            </div>
            <p class="box-experience-list-item-company">
              <AppearingText
                :text="exp.company"
                :steps="1"
                :duration="0.35"
                @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.2 + index * 0.08)"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-experience {
  --line-length: min(48px, calc(var(--svw) * 5));

  position: absolute;
  bottom: var(--count-height);
  width: calc(100% - var(--space-outer) * 2);
  left: var(--space-outer);

  @include mixins.landscape {
    width: 480px;
    max-width: calc(var(--svw) * 37);
    padding-left: var(--line-length);
    position: relative;
    left: 0;
    bottom: 0;
    padding-top: 3px;
    transform: translate(0, -50%);
  }

  @include mixins.landscape-large {
    width: 380px;
    max-width: calc(var(--svw) * 36);
  }

  &::after,
  &::before {
    display: none;

    @include mixins.landscape {
      display: block;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 11px;
    height: 11px;
    background-color: var(--color-cyan-400);
    border-radius: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 0;
    border-top: var(--stroke-sm) solid var(--color-cyan-400);

    @include mixins.landscape {
      width: var(--line-length);
    }
  }

  &-content {
    border: var(--stroke-sm) solid var(--color-cyan-400);
    border-radius: var(--radius-md);
    background: linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-md);

    @include mixins.landscape {
      padding: var(--space-xs) var(--space-sm);
    }

    @include mixins.mq("md") {
      padding: var(--space-sm) var(--space-md);
    }
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    &-item {
      display: flex;
      flex-direction: column;
      padding-left: 12px;
      position: relative;
      border-left: 1px solid var(--color-hologram-bottom);

      &::before {
        content: "";
        position: absolute;
        left: -3px;
        top: 6px;
        width: 5px;
        height: 5px;
        background-color: var(--color-cyan-400);
        border-radius: 50%;
      }

      &-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: var(--space-xs);
      }

      &-role {
        font-size: var(--font-size-md);
        font-weight: 700;
        color: var(--color-text-cyan-400);

        @include mixins.landscape {
          font-size: var(--font-size-sm);
        }

        @include mixins.landscape-large {
          font-size: var(--font-size-lg);
        }
      }

      &-years {
        font-size: var(--font-size-sm);
        color: var(--color-white-400);
        white-space: nowrap;

        @include mixins.landscape {
          font-size: var(--font-size-xs);
        }
      }

      &-company {
        font-size: var(--font-size-sm);
        color: var(--color-white-400);
        opacity: 0.8;

        @include mixins.landscape {
          font-size: var(--font-size-xs);
        }
      }
    }
  }

  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 700;

    @include mixins.landscape {
      font-size: var(--font-size-title-xxs);
    }

    @include mixins.landscape-large {
      font-size: var(--font-size-title-xs);
    }
  }
}
</style>
