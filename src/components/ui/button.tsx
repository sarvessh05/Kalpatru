import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90",
        outline:
          "border-2 border-primary/30 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline",
        hero: 
          "bg-primary text-primary-foreground text-lg px-8 py-6 shadow-2xl hover:shadow-primary/40 hover:scale-105 active:scale-[0.98] font-heading uppercase tracking-wider",
        "hero-outline":
          "border-2 border-foreground/30 bg-transparent text-foreground text-lg px-8 py-6 hover:bg-foreground/10 hover:border-foreground font-heading uppercase tracking-wider backdrop-blur-sm",
        printing:
          "bg-gradient-to-r from-[hsl(15,90%,55%)] to-[hsl(200,70%,50%)] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]",
        fabex:
          "bg-gradient-to-r from-[hsl(30,95%,50%)] to-[hsl(200,40%,40%)] text-[hsl(220,20%,8%)] font-bold shadow-lg hover:shadow-xl hover:scale-[1.02]",
        whatsapp:
          "bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] hover:shadow-xl",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
