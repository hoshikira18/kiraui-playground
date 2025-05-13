import type React from "react"
import { KiraUISize } from "./types"
import { cn } from "./utils"
import { PolymorphicComponentProps } from "./types/polymorphic-type"

type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<C, {
    as?: C
    variant?: "default" | "outline" | "transparent" | "filled"
    size?: KiraUISize
}>

export const Button = <C extends React.ElementType = "button">({ as, children, ref, className, ...props }: ButtonProps<C>) => {
    const Component = as || "button"

    const c = cn("py-1.5 px-5 bg-blue-500 text-zinc-50 rounded-md text-sm font-medium transition-all active:scale-105 cursor-pointer focus:outline-[2px] focus:outline-blue-300", className)

    return (
        <Component ref={ref} type="button" className={c} {...props}>{children}</Component>
    )
}

