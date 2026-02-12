export const useStyleJoin = (...classes: Array<string | undefined | false>) => classes.filter(Boolean).join(" ");
