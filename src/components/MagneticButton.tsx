import { useRef, type ReactNode, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'solid' | 'outline';
  className?: string;
}

export default function MagneticButton({ children, to, href, onClick, variant = 'solid', className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0px, 0px)';
  }

  const base =
    'inline-flex items-center gap-3 px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase font-medium transition-colors duration-500';
  const styles =
    variant === 'solid'
      ? `${base} bg-[var(--color-charcoal)] text-[var(--color-ivory)] hover:bg-[var(--color-terra)]`
      : `${base} border border-[var(--color-charcoal)]/40 text-[var(--color-charcoal)] hover:border-[var(--color-terra)] hover:text-[var(--color-terra)]`;

  const inner = (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`${styles} ${className}`}
      style={{ transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), background-color 0.5s, color 0.5s, border-color 0.5s' }}
      data-cursor-hover
    >
      {children}
    </div>
  );

  if (to) return <Link to={to} onClick={onClick}>{inner}</Link>;
  if (href) return <a href={href} onClick={onClick}>{inner}</a>;
  return <button onClick={onClick}>{inner}</button>;
}
