import { Btn, Hero, Section } from '../components/Ui';
import { site, values } from '../data/site';

const valueIcons = [
  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3" /><path d="M5 20v-1a7 7 0 0 1 14 0v1M3 8a3 3 0 0 1 3-3m15 3a3 3 0 0 0-3-3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z" /><path d="m9 12 2 2 4-4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" /><path d="M9 12h6" /></svg>,
];

export default function About() {
  return (<>
    <Hero image className="about-hero" title="À propos de Nodalys" lead="Une expertise locale au service de votre sécurité numérique.">
      <Btn href={site.whatsapp}>Discuter sur WhatsApp</Btn></Hero>
    <Section>
      <div className="prose">
        <p>Nodalys est un service de maintenance et de sécurité informatique basé à Douala.</p>
        <p>Nous aidons les entreprises et les professionnels à garder leur informatique en bon état, à protéger leurs données et à savoir où sont les risques, sans jargon.</p>
        <p>Tout commence par un diagnostic gratuit et un devis écrit. Nous intervenons ensuite selon vos besoins : contrat mensuel, audit ponctuel ou dépannage.</p>
        <p>Nous intervenons sur rendez-vous, dans tout Douala.</p>
      </div>
    </Section>
    <Section title="Nos valeurs" tint>
      <div className="values-grid">
        {values.map((value, index) => (
          <article className="card value-card" key={value.title}>
            <span className="value-icon" aria-hidden="true">{valueIcons[index]}</span>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
    </Section>
  </>);
}
