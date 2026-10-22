import { Link, useParams } from 'react-router-dom';
import { Btn, Hero, Section } from '../components/Ui';
import { offers, site } from '../data/site';
import { NotFound } from './Misc';

export default function OfferDetail() {
  const o = offers.find(x => x.slug === useParams().slug);
  if (!o) return <NotFound />;
  return (<>
    <Hero image className="hero-bg-handshake" title={o.name} lead={o.tagline}><Link to="/offres">Retour aux offres</Link></Hero>
    <Section>
      <p className="price">{o.price}</p>
      <ul className="checks">{o.features.map(f => <li key={f}>{f}</li>)}</ul>
      <div className="actions"><Btn to="/contact" kind="dark">Demander un devis</Btn><Btn href={site.whatsapp} kind="ghost">Discuter sur WhatsApp</Btn></div>
    </Section>
  </>);
}
