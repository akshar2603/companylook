'use client'

import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
    
    const variants = {
      default: "relative overflow-hidden bg-primary text-primary-foreground hover:scale-105 active:scale-95 before:absolute before:inset-0 before:bg-white/20 before:transform before:scale-x-0 before:opacity-0 hover:before:scale-x-100 hover:before:opacity-100 before:transition-transform before:duration-300 before:origin-left",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95",
      ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95",
      link: "text-primary underline-offset-4 hover:underline hover:scale-105",
      destructive: "relative overflow-hidden bg-destructive text-destructive-foreground hover:scale-105 active:scale-95 before:absolute before:inset-0 before:bg-white/20 before:transform before:scale-x-0 before:opacity-0 hover:before:scale-x-100 hover:before:opacity-100 before:transition-transform before:duration-300 before:origin-left"
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }