import { Link } from 'react-router-dom';
import { nav, offers, site } from '../data/site';
import { serviceDetails } from '../data/serviceDetails';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo/nodalys-horizontal-blanc.svg" alt="Nodalys" height="30" />
          <p>Maintenance et sécurité informatique pour les entreprises et professionnels de {site.city}.</p>
          <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Discuter sur WhatsApp</a>
          <nav className="footer-socials" aria-label="Réseaux sociaux">
            <a href={site.whatsapp} aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <svg className="social-whatsapp" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.4 2.5 2 4.1 4.5 4.8l1.2-1.2 2 .9c-.2 1.2-.9 1.8-2.1 1.8-3.8-.2-7.2-3.6-7.4-7.4 0-1.2.6-1.9 1.8-2.1l.9 2L9 8.5Z"/></svg>
            </a>
            {site.linkedinUrl && <a href={site.linkedinUrl} aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9h3v10H5zM6.5 5a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 6.5 5ZM11 9h2.9v1.4a3.2 3.2 0 0 1 2.9-1.6c2.4 0 3.2 1.6 3.2 4V19h-3v-5.5c0-1.3-.2-2.2-1.5-2.2s-1.7 1-1.7 2.2V19h-3z"/></svg>
            </a>}
            {site.facebookUrl && <a href={site.facebookUrl} aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z"/></svg>
            </a>}
          </nav>
        </div>
        <nav aria-label="Pages du site"><h2>Navigation</h2>
          {nav.map(n => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </nav>
        <nav aria-label="Offres et services"><h2>Offres et services</h2>
          {offers.map(o => <Link key={o.slug} to={`/offres/${o.slug}`}>{o.name}</Link>)}
          <Link to="/audit-flash">Audit Flash Sécurité</Link>
          {serviceDetails.map(s => <Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>)}
          <Link to="/exemple-de-rapport">Exemple de rapport</Link>
        </nav>
        <address><h2>Contact</h2>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp : {site.whatsappLabel}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.city}, Cameroun · {site.availability}</span>
        </address>
      </div>
      <div className="wrap footer-bar">
        <span>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</span>
        <span><Link to="/mentions-legales">Mentions légales</Link><Link to="/confidentialite">Confidentialité</Link></span>
      </div>
    </footer>
  );
}
