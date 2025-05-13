import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";

export type PolymorphicComponentProps<C extends ElementType, P = {}> =
    PropsWithChildren<P> & Omit<ComponentPropsWithoutRef<C>, keyof P>
