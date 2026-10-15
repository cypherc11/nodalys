import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Btn, Hero, Section } from '../components/Ui';
import { services, servicePaths, site } from '../data/site';

const proofs = [
  { title: 'Diagnostic gratuit', text: '20 à 30 minutes, sans engagement' },
  { title: 'Devis écrit', text: 'Remis avant toute intervention' },
  { title: 'Compte rendu détaillé', text: 'Avec des recommandations claires' },
];
const steps = [
  { title: 'Vous nous écrivez', text: 'Par WhatsApp ou par email, en quelques lignes.' },
  { title: 'Diagnostic gratuit', text: 'Un échange de 20 à 30 minutes, sur rendez-vous.' },
  { title: 'Devis écrit', text: 'Clair, sans engagement.' },
  { title: 'Intervention et compte rendu', text: 'Nous réalisons le travail, puis nous vous expliquons ce qui a été fait.' },
];
const serviceIcons = [
  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 0 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 0 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 0 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>,
  <svg viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 7.5 11 16m5-8.5L13 16M8 6h8"/></svg>,
  <svg viewBox="0 0 24 24" fill="none"><path d="M4 8h11l3 3v6H4z"/><path d="M18 12h2l1 2v3h-3"/><circle cx="8" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>,
  <svg viewBox="0 0 24 24" fill="none"><path d="M14 6a5 5 0 0 0-6.5 6.5L3 17l4 4 4.5-4.5A5 5 0 0 0 18 10l-3 3-4-4 3-3Z"/></svg>,
];

export default function Home() {
  const track = useRef<HTMLDivElement>(null);
  const settleTimer = useRef<number | undefined>(undefined);
  const [position, setPosition] = useState(0); // index de la première carte visible
  const [visible, setVisible] = useState(3); // nombre de cartes visibles à l'écran
  const [paused, setPaused] = useState(false);
  const maxPosition = services.length - 1;
  const featured = (position + Math.floor(visible / 2)) % services.length;
  // Des clones aux deux extrémités permettent une boucle fluide dans les deux sens.
  const cloneCount = Math.min(3, services.length);
  const carouselServices = [...services.slice(-cloneCount), ...services, ...services.slice(0, cloneCount)];

  // Mesures du carrousel : largeur d'un pas (carte + espace) et nombre de cartes visibles.
  const measure = () => {
    const el = track.current;
    const card = el?.querySelector<HTMLElement>('.service-slide');
    if (!el || !card) return null;
    const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 16;
    const step = card.offsetWidth + gap;
    return { el, step, count: Math.max(1, Math.round((el.clientWidth + gap) / step)) };
  };
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Recalcule la position affichée (points, carte mise en avant) d'après le défilement réel.
  const getLogicalPosition = (physicalIndex: number) =>
    ((physicalIndex - cloneCount) % services.length + services.length) % services.length;

  const finishScrolling = () => {
    const m = measure();
    if (!m) return;
    const physicalIndex = Math.round(m.el.scrollLeft / m.step);
    if (physicalIndex < cloneCount) {
      m.el.scrollTo({ left: m.el.scrollLeft + services.length * m.step, behavior: 'auto' });
    } else if (physicalIndex >= cloneCount + services.length) {
      m.el.scrollTo({ left: m.el.scrollLeft - services.length * m.step, behavior: 'auto' });
    }
    const settledIndex = Math.round(m.el.scrollLeft / m.step);
    setPosition(getLogicalPosition(settledIndex));
  };

  const sync = () => {
    const m = measure();
    if (!m) return;
    setVisible(m.count);
    const physicalIndex = Math.round(m.el.scrollLeft / m.step);
    setPosition(getLogicalPosition(physicalIndex));
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(finishScrolling, 140);
  };
  const goTo = (index: number) => {
    const m = measure();
    if (!m) return;
    const target = cloneCount + index;
    m.el.scrollTo({ left: target * m.step, behavior: reducedMotion() ? 'auto' : 'smooth' });
  };
  const next = () => {
    const m = measure();
    if (m) goTo(getLogicalPosition(Math.round(m.el.scrollLeft / m.step)) + 1);
  };
  const prev = () => {
    const m = measure();
    if (m) goTo(getLogicalPosition(Math.round(m.el.scrollLeft / m.step)) - 1);
  };

  useEffect(() => {
    const m = measure();
    m?.el.scrollTo({ left: cloneCount * m.step, behavior: 'auto' });
    sync();
    const el = track.current;
    el?.addEventListener('scrollend', finishScrolling);
    window.addEventListener('resize', sync);
    return () => {
      window.clearTimeout(settleTimer.current);
      el?.removeEventListener('scrollend', finishScrolling);
      window.removeEventListener('resize', sync);
    };
  }, []);

  // Défilement automatique : une carte toutes les 4 s, retour au début à la fin.
  // Il s'arrête au survol, au focus, au toucher et si le visiteur préfère moins d'animations.
  useEffect(() => {
    if (paused || reducedMotion()) return;
    const id = window.setInterval(() => {
      const m = measure();
      if (!m) return;
      const physicalIndex = Math.round(m.el.scrollLeft / m.step);
      const current = ((physicalIndex - cloneCount) % services.length + services.length) % services.length;
      goTo(current + 1);
    }, 4000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (<>
    <Hero image className="hero-home" title="Votre partenaire en maintenance et sécurité informatique à Douala"
      lead="Des solutions fiables pour protéger vos données, optimiser vos systèmes et assurer la continuité de votre activité.">
      <Btn to="/diagnostic">Demander un diagnostic gratuit</Btn><Btn to="/offres" kind="ghost">Découvrir nos offres</Btn>
    </Hero>

    <Section tint>
      <ul className="trust">{proofs.map(p => <li key={p.title}><strong>{p.title}</strong><span>{p.text}</span></li>)}</ul>
    </Section>

    <section className="section">
      <div className="wrap">
        <div className="carousel-shell"
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false); }}
          onTouchStart={() => setPaused(true)} onTouchEnd={() => window.setTimeout(() => setPaused(false), 6000)}>
          <div className="services-heading">
            <h2>Nos services principaux</h2>
            <div className="carousel-arrows">
              <button type="button" onClick={prev} aria-label="Service précédent" aria-controls="services-track"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg></button>
              <button type="button" onClick={next} aria-label="Service suivant" aria-controls="services-track"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg></button>
            </div>
          </div>
          <div className="services-carousel" id="services-track" ref={track} onScroll={sync} role="region" aria-label="Carrousel des services principaux" tabIndex={0}>
            {carouselServices.map((service, index) => {
              const originalIndex = (index - cloneCount + services.length) % services.length;
              const isClone = index < cloneCount || index >= cloneCount + services.length;
              return <article key={`${service.title}-${index}`} className={`service-slide${originalIndex === featured ? ' featured-service' : ''}`} aria-hidden={isClone ? true : undefined}>
                <span className="service-icon" aria-hidden="true">{serviceIcons[originalIndex]}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link to={servicePaths[originalIndex]} className="service-more" tabIndex={isClone ? -1 : undefined}>En savoir plus <span aria-hidden="true">&#8599;</span></Link>
              </article>;
            })}
          </div>
          <div className="carousel-pagination" role="group" aria-label="Position du carrousel des services">
            {Array.from({ length: maxPosition + 1 }, (_, i) => (
              <button key={i} type="button" className={i === position ? 'active' : ''} aria-label={`Afficher le groupe de services ${i + 1} sur ${maxPosition + 1}`} aria-current={i === position ? 'true' : undefined} onClick={() => goTo(i)} />
            ))}
          </div>
        </div>
        <div className="actions"><Btn to="/offres" kind="dark">Voir les offres et tarifs</Btn></div>
      </div>
    </section>

    <Section title="Comment ça se passe" tint>
      <ol className="steps">{steps.map(s => <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}</ol>
    </Section>

    <Section>
      <div className="split">
        <div>
          <h2>Du diagnostic gratuit à l’Audit Flash</h2>
          <p>Le diagnostic gratuit vous donne un premier compte rendu : les points qui méritent attention. Pour un état des lieux complet, l’Audit Flash Sécurité (une demi-journée sur site, prix fixe) produit un rapport qui explique l’état de votre informatique, les risques détectés et quoi corriger en priorité, sans jargon.</p>
          <div className="actions"><Btn to="/audit-flash" kind="dark">Découvrir l’Audit Flash</Btn><Btn to="/exemple-de-rapport" kind="ghost">Voir un exemple de rapport</Btn></div>
        </div>
        <div className="card"><h3>Le rapport de l’Audit Flash contient</h3>
          <ul><li>L’état général de vos systèmes</li><li>Les vulnérabilités détectées</li><li>L’état de vos sauvegardes</li><li>Un plan d’action par priorité</li></ul></div>
      </div>
    </Section>

    <section className="cta-band"><div className="wrap">
      <h2>Faites le point sur votre informatique, gratuitement.</h2>
      <div className="actions"><Btn href={site.whatsapp}>Discuter sur WhatsApp</Btn><Link to="/diagnostic" className="btn btn-ghost">Voir le diagnostic</Link></div>
    </div></section>
  </>);
}
