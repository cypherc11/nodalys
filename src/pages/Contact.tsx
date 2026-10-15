import { Btn, Hero, Section } from '../components/Ui';
import { site } from '../data/site';

export default function Contact() {
  return (<>
    <Hero image className="hero-bg-repair" title="Contactez-nous" lead="Une question, un besoin de maintenance ou un projet ? Écrivez-nous, nous vous répondons rapidement." />
    <Section><div className="two-col">
      <div className="card"><h2>Écrivez-nous</h2>
        <p>Le plus simple : un message WhatsApp ou un email.</p>
        <div className="actions"><Btn href={site.whatsapp}>Discuter sur WhatsApp</Btn><Btn href={`mailto:${site.email}`} kind="ghost">{site.email}</Btn></div>
        <p>Zone d’intervention : {site.area}. Disponibilité : {site.availability.toLowerCase()}.</p></div>
      <aside className="card"><h2>Pour un devis plus rapide</h2>
        <p>Merci de préciser :</p>
        <ul><li>votre secteur d’activité</li><li>la nature de votre besoin</li><li>vos outils et équipements, si vous les connaissez</li></ul></aside>
    </div></Section>
  </>);
}
