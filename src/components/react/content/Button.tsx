import React from "react";
import * as Icons from "lucide-react";
import { componentStyles, cn } from "../../shared";
import { useDocuBook } from "../context";

type ButtonProps = {
  icon?: keyof typeof Icons;
  text?: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  size?: "sm" | "md" | "lg";
  variation?: "primary" | "accent" | "outline" | "ghost" | "link";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  href,
  target,
  size = "md",
  variation = "primary",
  className,
}) => {
  const { Link } = useDocuBook();

  const buttonClasses = cn(
    componentStyles.button.base,
    componentStyles.button.sizes[size],
    componentStyles.button.variations[variation],
    className
  );

  const Icon = icon ? (Icons[icon] as React.FC<{ className?: string }>) : null;

  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={buttonClasses}
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {text && <span>{text}</span>}
    </Link>
  );
};

export default Button;
