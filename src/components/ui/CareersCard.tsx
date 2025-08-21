import * as React from "react";
import classNames from "classnames";
import { cn } from "../lib/utils";

// Helper function for background colors
const getCardBgColor = (isFocused: boolean, color: string) =>
  isFocused ? `bg-${color}-500` : `bg-${color}-200`;

// CareersCard Component with border and background color change on click
const CareersCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleClick = () => {
    setIsFocused(!isFocused); // Toggle focus state on click
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm transition duration-300 ease-in-out",
        isFocused ? "border-blue-500" : "border-gray-300",
        getCardBgColor(isFocused, "blue"), // Background color changes with focus
        className
      )}
      onClick={handleClick}
      {...props}
    />
  );
});

CareersCard.displayName = "CareersCard";

// CareersCardHeader Component with distinct border and background color change on click
const CareersCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleClick = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-1.5 p-6 rounded-t-lg transition duration-300 ease-in-out",
        isFocused ? "border-green-500" : "border-transparent",
        getCardBgColor(isFocused, "green"), // Green background on focus
        className
      )}
      onClick={handleClick}
      {...props}
    />
  );
});

CareersCardHeader.displayName = "CareersCardHeader";

// CareersCardTitle Component with color change
const CareersCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleClick = () => {
    setIsFocused(!isFocused);
  };

  return (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        isFocused ? "text-green-500" : "text-gray-900", // Green color on focus
        className
      )}
      onClick={handleClick}
      {...props}
    />
  );
});

CareersCardTitle.displayName = "CareersCardTitle";

// CareersCardDescription Component with color change
const CareersCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleClick = () => {
    setIsFocused(!isFocused);
  };

  return (
    <p
      ref={ref}
      className={cn(
        "text-sm text-muted-foreground",
        isFocused ? "text-green-500" : "text-gray-500", // Green text color on focus
        className
      )}
      onClick={handleClick}
      {...props}
    />
  );
});

CareersCardDescription.displayName = "CareersCardDescription";

// CareersCardContent Component with border and background color change on click
const CareersCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleClick = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "p-6 pt-0",
        isFocused ? "border-yellow-500" : "border-transparent",
        getCardBgColor(isFocused, "yellow"), // Yellow background color on focus
        className
      )}
      onClick={handleClick}
      {...props}
    />
  );
});

CareersCardContent.displayName = "CareersCardContent";

// CareersCardFooter Component with border and background color change on click
const CareersCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleClick = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center p-6 pt-0 rounded-b-lg",
        isFocused ? "border-red-500" : "border-transparent", // Red border on focus
        getCardBgColor(isFocused, "red"), // Red background on focus
        className
      )}
      onClick={handleClick}
      {...props}
    />
  );
});

CareersCardFooter.displayName = "CareersCardFooter";

// Additional role components (Role1 and Role2) with unique color schemes

const Role1Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleClick = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border text-card-foreground shadow-sm transition duration-300 ease-in-out",
        isFocused ? "border-purple-500" : "border-gray-300",
        getCardBgColor(isFocused, "purple"), // Purple background color on focus
        className
      )}
      onClick={handleClick}
      {...props}
    />
  );
});

Role1Card.displayName = "Role1Card";

const Role2Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleClick = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border text-card-foreground shadow-sm transition duration-300 ease-in-out",
        isFocused ? "border-orange-500" : "border-gray-300",
        getCardBgColor(isFocused, "orange"), // Orange background color on focus
        className
      )}
      onClick={handleClick}
      {...props}
    />
  );
});

Role2Card.displayName = "Role2Card";

export {
  CareersCard,
  CareersCardHeader,
  CareersCardFooter,
  CareersCardTitle,
  CareersCardDescription,
  CareersCardContent,
  Role1Card,   // Exporting Role1Card
  Role2Card,   // Exporting Role2Card
};
