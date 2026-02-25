"use client"

import React from "react";
import * as Icons from "lucide-react";
import clsx from "clsx";
import { useDocuBook } from "./context";

type ButtonProps = {
  icon?: keyof typeof Icons;
  text?: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  size?: "sm" | "md" | "lg";
  variation?: "primary" | "accent" | "outline";
};

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  href,
  target,
  size = "md",
  variation = "primary",
}) => {
  const { Link } = useDocuBook();

  const baseStyles = "inline-flex items-center justify-center rounded font-medium focus:outline-none transition no-underline";

  const sizeStyles = {
    sm: "px-3 py-1 my-6 text-sm",
    md: "px-4 py-2 my-6 text-base",
    lg: "px-5 py-3 my-6 text-lg",
  };

  const variationStyles = {
    primary: "bg-primary text-white hover:bg-primary/90",
    accent: "bg-accent text-white hover:bg-accent/90",
    outline: "border border-accent text-accent hover:bg-accent/10",
  };

  const Icon = icon ? (Icons[icon] as React.FC<{ className?: string }>) : null;

  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={clsx(baseStyles, sizeStyles[size], variationStyles[variation])}
    >
      {text && <span>{text}</span>}
      {Icon && <Icon className="mr-2 h-5 w-5" />}
    </Link>
  );
};

export default Button;
