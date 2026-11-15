export default defineAppConfig({
  ui: {
    colors: {
      primary: "denva-blue",
      secondary: "denva-orange",
      // neutral: "neutral",
    },
    slideover: {
      slots: {
        content: "will-change-transform transform-gpu",
        overlay: "will-change-[opacity]",
      },
      compoundVariants: [
        {
          side: "left",
          class: {
            content:
              "w-[75vw] max-w-[75vw] sm:w-80 sm:max-w-sm data-[state=open]:animate-[slide-in-from-left_350ms_cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:animate-[slide-out-to-left_300ms_cubic-bezier(0.16,1,0.3,1)]",
          },
        },
        {
          transition: true,
          class: {
            overlay:
              "data-[state=open]:animate-[fade-in_300ms_cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:animate-[fade-out_250ms_cubic-bezier(0.16,1,0.3,1)]",
          },
        },
      ],
    },
    navigationMenu: {
      compoundVariants: [
        // Horizontal: underline grows from the center.
        {
          orientation: "horizontal",
          highlight: true,
          class: {
            link: "after:bg-secondary after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)]",
          },
        },
        {
          orientation: "horizontal",
          highlight: true,
          active: true,
          class: {
            link: "after:scale-x-100",
          },
        },
        // Vertical (mobile): line grows from the top.
        {
          orientation: "vertical",
          highlight: true,
          class: {
            link: "after:bg-secondary after:origin-top after:scale-y-0 hover:after:scale-y-100 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)]",
          },
        },
        {
          orientation: "vertical",
          highlight: true,
          active: true,
          class: {
            link: "after:scale-y-100",
          },
        },
      ],
    },
  },
});
