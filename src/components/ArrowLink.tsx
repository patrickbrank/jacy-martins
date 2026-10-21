import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface ArrowLinkProps {
  href: string;
  children: string;
  className?: string;
}

export function ArrowLink({ href, children, className = '' }: ArrowLinkProps) {
  return (
    <Link to={href} className={`link-arrow group ${className}`}>
      {children}
      <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
