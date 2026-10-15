import { useParams } from 'react-router-dom';
import { Btn, Cards, Hero, Section } from '../components/Ui';
import { site } from '../data/site';
import { serviceDetails } from '../data/serviceDetails';
import { NotFound } from './Misc';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails.find(item => item.slug === slug);
  if (!service) return <NotFound />;

  return <>
    <Hero image className={service.heroClass} title={service.title} lead={service.lead}>
      <Btn to="/contact">Demander un devis</Btn>
      <Btn href={site.whatsapp} kind="ghost">Discuter sur WhatsApp</Btn>
    </Hero>

    <Section title="Ce que nous proposons" tint>
      <Cards items={service.checks} />
    </Section>

    <Section title="Comment ça se passe">
      <ol className="steps">{service.steps.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
    </Section>

    <Section tint>
      <div className="split">
        <div>
          <h2>Tarif</h2>
          <p className="price">{service.price}</p>
          <p>{service.priceNote}</p>
        </div>
        <div className="card"><h3>{service.sideTitle}</h3><p>{service.sideText}</p></div>
      </div>
    </Section>

    <section className="cta-band"><div className="wrap">
      <h2>Parlons de votre besoin.</h2>
      <div className="actions"><Btn to="/contact">Demander un devis</Btn><Btn href={site.whatsapp} kind="ghost">Discuter sur WhatsApp</Btn></div>
    </div></section>
  </>;
}
