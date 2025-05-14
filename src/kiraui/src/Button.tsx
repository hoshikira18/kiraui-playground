import type React from "react"
import { KiraUISize } from "./types"
import { cn } from "./utils"
import { PolymorphicComponentProps } from "./types/polymorphic-type"

type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<C, {
    as?: C
    variant?: "default" | "outline" | "transparent" | "filled"
    size?: KiraUISize
}>

const buttonVariants = ({
    variant,
    size,
    className
}) => {
    const base = "py-1.5 px-5 bg-blue-500 text-zinc-50 rounded-md text-sm font-medium transition-all active:scale-105 cursor-pointer focus:outline-[2px] focus:outline-blue-300"

    const variants = {
        default: base,
        outline: "border border-blue-500 text-blue-500",
        transparent: "bg-transparent text-blue-500",
        filled: "bg-blue-500 text-zinc-50"
    }

    const sizes: Record<KiraUISize, string> = {
        xs: "py-0.5 px-2 text-xs",
        sm: "py-1 px-3 text-xs",
        md: "py-1.5 px-5 text-sm",
        lg: "py-2 px-6 text-base",
        xl: "py-2.5 px-7 text-lg",
        "2xl": "py-3 px-8 text-xl",
    }

    return cn(variants[variant], sizes[size], className)
}

export const Button = <C extends React.ElementType = "button">({ as, children, ref, className, ...props }: ButtonProps<C>) => {
    const Component = as || "button"

    const c = buttonVariants({
        variant: props.variant || "default",
        size: props.size || "md",
        className
    })

    return (
        <Component ref={ref} type="button" className={c} {...props}>{children}</Component>
    )
}

