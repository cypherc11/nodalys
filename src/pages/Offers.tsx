import { Link } from 'react-router-dom';
import { Btn, Hero, Section } from '../components/Ui';
import { offers, site, specificServices } from '../data/site';

const specificServiceIcons = [
  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="M8 7.5 11 16m5-8.5L13 16M8 6h8" /></svg>,
  <svg viewBox="0 0 24 24" fill="none"><path d="M4 8h11l3 3v6H4z" /><path d="M18 12h2l1 2v3h-3" /><circle cx="8" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M8 8V5h5v3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none"><path d="M14 6a5 5 0 0 0-6.5 6.5L3 17l4 4 4.5-4.5A5 5 0 0 0 18 10l-3 3-4-4 3-3Z" /></svg>,
];

export default function Offers() {
  return (<>
    <Hero image className="hero-bg-handshake" title="Nos offres et tarifs" lead="Des formules de maintenance claires, adaptées à la taille de votre parc informatique.">
      <Btn href={site.whatsapp} kind="ghost">Discuter sur WhatsApp</Btn></Hero>
    <Section><div className="cards">{offers.map(o => (
      <article key={o.slug} className={o.popular ? 'card plan featured' : 'card plan'}>
        {o.popular && <span className="badge">Recommandé</span>}
        <h3>{o.name}</h3><p>{o.tagline}</p>
        <p className="price">{o.price}</p>
        <ul>{o.features.map(f => <li key={f}>{f}</li>)}</ul>
        <Link to={`/offres/${o.slug}`}>Voir le détail</Link>
        <Btn to="/contact" kind={o.popular ? 'dark' : 'ghost'}>Demander un devis</Btn>
      </article>))}</div></Section>
    <Section title="Services spécifiques" tint>
      <div className="specific-services-grid">
        {specificServices.map((service, index) => (
          <article className="card specific-service-card" key={service.title}>
            <span className="specific-service-icon" aria-hidden="true">{specificServiceIcons[index]}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            {service.to && <Link to={service.to}>Voir le détail</Link>}
          </article>
        ))}
      </div>
    </Section>
  </>);
}
