import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/app/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-pink rounded-full text-white font-bold text-xs leading-[1.125rem] shadow-[0px_3px_7px_rgba(0,37,46,0.22)] px-10 py-[0.69rem] lg:py-[1.56rem] lg:px-12 lg:text-xl lg:leading-[1.875rem]",
        outline:
          "border-[0.588px] text-[0.58825rem] border-pink text-pink rounded-full shadow-[0_0_5px_0_rgba(255,82,193,0.22)] px-[1.11rem] py-[0.33rem] lg:text-base lg:px-[1.94rem] lg:py-[0.56rem]",
        secondary: "",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
