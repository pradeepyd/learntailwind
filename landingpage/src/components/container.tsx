import { cn } from "@/lib/utilis"
import React from "react"

export const Container = ({children, className}:{
    children:React.ReactNode,
    className?:string
}) => {
return <div className={cn("max-w-5xl  mx-auto w-full h-screen border-l border-r border-x-neutral-300/60 via-neutral-200 to-transparent ", className)}>
    {children}
</div>
}