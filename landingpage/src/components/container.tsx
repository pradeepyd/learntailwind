import { cn } from "@/lib/utilis"
import React from "react"

export const Container = ({ children, className }: {
    children: React.ReactNode,
    className?: string
}) => {
    return <div className={cn("max-w-5xl  mx-auto w-full", className)}>
        {children}
    </div>
}