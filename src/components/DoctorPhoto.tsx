import type { ReactNode } from 'react';

interface DoctorPhotoProps {
  children?: ReactNode;
  src?: string;
  alt?: string;
  className?: string;
}

export function DoctorPhoto({
  children,
  src = '/imagens/jacy imagem 1.png',
  alt = 'Dr. Jacy Martins Junior — Médico UNIFACS',
  className = 'h-full w-full object-cover object-top rounded-2xl',
}: DoctorPhotoProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading="eager"
        decoding="async"
      />
    );
  }

  return <>{children}</>;
}
