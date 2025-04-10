import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
 
const buttonVariants = cva(["flex","font-medium", "items-center", "rounded"], {
  variants: {
    intent: {
      primary: [
        // Normal state
        "bg-indigo-700 fill-white text-white px-4 py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]",
        // Hover state
        "hover:bg-indigo-800 hover:shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]",
        // Focus state
        "focus:bg-indigo-800 focus:shadow-[0_0px_0px_4px_rgba(68,76,231,0.12)]"
    ],
      secondary: [
        "bg-white border border-solid border-neutral-200 px-4 py-2.5 text-neutral-900 shadow-[0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10)]",
        "hover:bg-neutral-50 hover:text-neutral-950 hover:shadow-[0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10)]",
        "focus:bg-neutral-50 focus:text-neutral-950 focus:shadow-[0px 0px 0px 4px rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12)]",
    ],
    tertiary:[
        "bg-red-600 text-sm text-white px-3.5 py-2.5",
        "hover:bg-red-700",
        "focus:bg-red-700 focus:shadow-[0px 0px 0px 4px rgb(0.8509804010391235 0.1764705926179886 0.125490203499794 / 0.12), 0px 0px 0px 1px rgb(0.8509804010391235 0.1764705926179886 0.125490203499794 / 1.00)]"]
    },
    disabled: {
        false: null,
        true: ["cursor-not-allowed bg-neutral-100 text-neutral-400"],
    },
  },
  compoundVariants: [
    {intent: "tertiary",
    disabled: true,
    class: "disabled:text-neutral-400"}
  ],
  defaultVariants: {
    intent: "primary",
  },
});
 
export type ButtonVariants = VariantProps<typeof buttonVariants>;
 
export const button = (variants: ButtonVariants) =>
  twMerge(buttonVariants(variants));