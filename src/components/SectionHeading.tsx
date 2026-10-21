interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-3.5 ${alignment} ${className}`}>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gold/60" />
        <span className="eyebrow text-gold font-bold">{eyebrow}</span>
      </div>
      <h2 className="heading-lg max-w-3xl text-navy-900 font-bold tracking-tight">{title}</h2>
    </div>
  );
}
