import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
  variant?: 'up' | 'scale';
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  variant = 'up',
}: RevealProps) {
  const { ref, hasRevealed } = useReveal<HTMLDivElement>();

  const variantClass = variant === 'scale' ? 'reveal-element-scale' : 'reveal-element';

  const classes = [
    variantClass,
    hasRevealed ? 'is-revealed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag ref={ref as unknown as React.Ref<never>} className={classes} style={style}>
      {children}
    </Tag>
  );
}
