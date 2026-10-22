import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export function Hero({ title, lead, image, className = '', children }: { title: string; lead?: string; image?: boolean; className?: string; children?: ReactNode }) {
  return (
    <section className={`${image ? 'hero hero-photo' : 'hero'} ${className}`.trim()}><div className="wrap">
      <h1>{title}</h1>{lead && <p className="lead">{lead}</p>}{children && <div className="actions">{children}</div>}
    </div></section>
  );
}
export function Section({ title, children, tint }: { title?: string; children: ReactNode; tint?: boolean }) {
  return <section className={tint ? 'section tint' : 'section'}><div className="wrap">{title && <h2>{title}</h2>}{children}</div></section>;
}
export function Cards({ items }: { items: { title: string; text: string }[] }) {
  return <div className="cards">{items.map(i => <article key={i.title} className="card"><h3>{i.title}</h3><p>{i.text}</p></article>)}</div>;
}
export function Btn({ to, href, children, kind = 'primary' }: { to?: string; href?: string; children: ReactNode; kind?: 'primary' | 'ghost' | 'dark' }) {
  const cls = `btn btn-${kind}`;
  const external = href ? /^https?:\/\//i.test(href) : false;
  return to ? <Link to={to} className={cls}>{children}</Link> : <a href={href} className={cls} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>;
}
