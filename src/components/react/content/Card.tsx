import React, { ReactNode } from 'react';
import * as Icons from 'lucide-react';
import { componentStyles, cn } from '../../shared';
import { useDocuBook } from '../context';

type IconName = keyof typeof Icons;

interface CardProps {
  title: string;
  icon?: IconName;
  href?: string;
  horizontal?: boolean;
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, icon, href, horizontal, children, className }) => {
  const { Link } = useDocuBook();
  const Icon = icon ? (Icons[icon] as React.FC<{ className?: string }>) : null;

  const content = (
    <div
      className={cn(
        componentStyles.card.base,
        "hover:bg-accent/5 hover:border-accent/30 transition-all duration-200",
        horizontal ? "flex-row items-center gap-3" : "flex-col gap-2",
        className
      )}
    >
      {Icon && <Icon className="w-5 h-5 text-primary flex-shrink-0" />}
      <div className="flex-1 min-w-0">
        <h3 className={componentStyles.card.title}>{title}</h3>
        <p className={componentStyles.card.description}>{children}</p>
      </div>
    </div>
  );

  return href ? <Link className="no-underline block" href={href}>{content}</Link> : content;
};

export default Card;
