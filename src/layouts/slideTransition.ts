interface SlideOptions {
  easing?: string;
  duration?: string | number;
}

export function slideTransition(options: SlideOptions = {}) {
  const { easing = "cubic-bezier(0.76, 0, 0.24, 1)", duration = "0.5s" } =
    options;

  return {
    forwards: {
      old: [
        {
          name: "astroFadeOut",
          duration,
          easing,
          fillMode: "both",
        },
        {
          name: "astroSlideToLeft",
          duration,
          easing,
          fillMode: "both",
        },
      ],
      new: [
        {
          name: "astroFadeIn",
          duration,
          easing,
          fillMode: "both",
        },
        {
          name: "astroSlideFromRight",
          duration,
          easing,
          fillMode: "both",
        },
      ],
    },
    backwards: {
      old: [
        {
          name: "astroFadeOut",
          duration,
          easing,
          fillMode: "both",
        },
        {
          name: "astroSlideToRight",
          duration,
          easing,
          fillMode: "both",
        },
      ],
      new: [
        {
          name: "astroFadeIn",
          duration,
          easing,
          fillMode: "both",
        },
        {
          name: "astroSlideFromLeft",
          duration,
          easing,
          fillMode: "both",
        },
      ],
    },
  };
}
