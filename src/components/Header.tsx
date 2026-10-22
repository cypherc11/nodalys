import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <header className="header">
      <div className="header-in">
        <Link to="/" className="brand" aria-label="Nodalys, accueil"><img src="/assets/logo/nodalys-horizontal-couleur.svg" alt="" height="32" /></Link>
        <button className="burger" aria-expanded={open} aria-controls="main-nav" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen(!open)}><span className="burger-bar" /></button>
        <nav id="main-nav" className={open ? 'nav open' : 'nav'} aria-label="Navigation principale">
          {nav.map(n => <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>)}
          <Link to="/contact" className="btn btn-dark nav-cta">Demander un devis</Link>
        </nav>
      </div>
    </header>
  );
}
