"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*
  Все варианты кнопок переведены на CSS-переменные из globals.css.
  Оранжевый (#ff8c00) заменён на var(--accent) / var(--accent-2).
  shadow-orange-500/20 → rgba(178,34,34,0.2) чтобы работало с кирпичным.
*/
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Основная кнопка — кирпичный градиент
        default:
          "bg-[var(--accent)] text-white hover:opacity-90 border-0 [box-shadow:0_4px_12px_rgba(178,34,34,0.25)]",
        primary:
          "bg-[var(--accent)] text-white hover:opacity-90 border-0 [box-shadow:0_4px_12px_rgba(178,34,34,0.25)]",
        outline:
          "border border-[var(--muted-border)] bg-transparent hover:bg-[var(--card-bg)] text-[var(--text-main)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-secondary text-[var(--text-muted)] hover:text-[var(--text-main)]",
        dark:
          "bg-[var(--text-main)] text-[var(--bg)] hover:opacity-90",
        hero:
          "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4",
        lg: "h-14 rounded-xl px-10 text-base",
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
    const Comp = (asChild ? Slot : motion.button) as any;
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const Container = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props}>
    {children}
  </div>
);

const Card = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("rounded-3xl border border-border bg-card text-card-foreground shadow-sm", className)}
    {...props}
  >
    {children}
  </div>
);

const Pill = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground",
      className
    )}
    {...props}
  >
    {children}
  </span>
);

const Divider = ({ className }: { className?: string }) => (
  <div className={cn("h-px w-full bg-border", className)} />
);

export { Button, buttonVariants, Container, Card, Pill, Divider };