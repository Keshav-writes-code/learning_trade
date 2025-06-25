interface ScaleFadeOptions {
  easing?: string;
  duration?: string | number;
}

export function scaleFadeTransition(options: ScaleFadeOptions = {}) {
  const { easing = "cubic-bezier(0,1,.1,1)", duration = 300 } = options;

  return {
    forwards: {
      old: [
        {
          name: "scaleFadeOut",
          duration,
          easing,
          fillMode: "both",
        },
      ],
      new: [
        {
          name: "scaleFadeIn",
          duration,
          easing,
          fillMode: "both",
          delay: duration, // start after the old one finishes
        },
      ],
    },
    backwards: {
      old: [
        {
          name: "scaleFadeOut",
          duration,
          easing,
          fillMode: "both",
        },
      ],
      new: [
        {
          name: "scaleFadeIn",
          duration,
          easing,
          fillMode: "both",
          delay: duration,
        },
      ],
    },
  };
}
