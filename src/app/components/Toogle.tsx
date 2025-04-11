import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

const toggleVariants = cva(
  "relative inline-flex items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2",
  {
    variants: {
      size: {
        sm: "h-5 w-9",        // 20px height, 36px width
        md: "h-6 w-11",       // 24px height, 44px width
        lg: "h-8 w-14"        // 32px height, 56px width
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

const thumbVariants = cva(
  "inline-block transform rounded-full bg-white transition-transform shadow-sm",
  {
  variants: {
      size: {
        sm: [
          "h-3.5 w-3.5",
          "translate-x-0.5 data-[checked=true]:translate-x-5"
        ],
        md: [
          "h-5 w-5",
          "translate-x-0.5 data-[checked=true]:translate-x-5"
        ],
        lg: [
          "h-7 w-7",
          "translate-x-0.5 data-[checked=true]:translate-x-6"
        ]
    }
  },
  defaultVariants: {
      size: "md"
    }
  }
);

export interface ToggleSwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
  VariantProps<typeof toggleVariants> {
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  disabled?: boolean;
}

const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>((props, ref) => {
  const {
    checked = false,
    onCheckedChange,
    disabled = false,
    size,
    className,
    ...rest
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onCheckedChange?.(e.target.checked);
    }
  };

  return (
    <div className="relative inline-flex">
      <input
        type="checkbox"
        ref={ref}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="sr-only"
        {...rest}
      />
      <div
        className={twMerge(
          toggleVariants({ size }),
          checked && !disabled ? "bg-indigo-700" : "bg-gray-100",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
          className
        )}
      >
        <span
          data-checked={checked}
          className={twMerge(
            thumbVariants({ size }),
            disabled ? "bg-gray-300" : "bg-white"
          )}
        />
      </div>
    </div>
  );
});

ToggleSwitch.displayName = "ToggleSwitch";

export { ToggleSwitch, toggleVariants };