import { Btn, Section } from '../components/Ui';
import { analyses } from '../data/site';

const analysisIcons = [
  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none"><path d="M4 16a8 8 0 1 1 16 0" /><path d="m12 13 4-4M6 18h12" /></svg>,
  <svg viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="M8 7.5 11 16m5-8.5L13 16M8 6h8" /></svg>,
  <svg viewBox="0 0 24 24" fill="none"><path d="M6 18a4 4 0 0 1-.5-8A6.5 6.5 0 0 1 18 9a4.5 4.5 0 0 1 0 9H6Z" /><path d="M12 11v6m-2-2 2 2 2-2" /></svg>,
];

export default function Diagnostic() {
  return (<>
    <section className="hero hero-photo diagnostic-hero">
      <div className="wrap diagnostic-hero-grid">
        <div className="diagnostic-copy">
          <p className="diagnostic-eyebrow">Audit informatique pour votre entreprise</p>
          <h1>Diagnostic gratuit</h1>
          <p className="lead">Faites le point sur la s&eacute;curit&eacute; et la performance de votre syst&egrave;me informatique. Nous faisons avec vous un premier point en 20 &agrave; 30 minutes, sans engagement.</p>
          <div className="actions">
            <Btn to="/contact">Prendre rendez-vous</Btn>
          </div>
        </div>

        <div className="diagnostic-time-card">
          <span className="diagnostic-time-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></svg>
          </span>
          <span><strong>20 &agrave; 30 minutes</strong><small>100 % gratuit</small></span>
        </div>
        <article className="diagnostic-float-report" aria-label="Exemple de constats dans un rapport d'audit">
          <header><strong>Fiche de diagnostic</strong><span>Exemple fictif</span></header>
          <div className="diagnostic-float-row critical"><b>Critique</b><p><strong>Sauvegardes.</strong> Jamais test&eacute;es : les dossiers pourraient &ecirc;tre perdus en cas de panne.</p></div>
          <div className="diagnostic-float-row important"><b>Important</b><p><strong>Comptes.</strong> Un ancien employ&eacute; a encore un acc&egrave;s actif.</p></div>
          <div className="diagnostic-float-row improve"><b>&Agrave; am&eacute;liorer</b><p><strong>Wi-Fi.</strong> R&eacute;seau visiteurs non s&eacute;par&eacute;.</p></div>
          <footer>Constats et recommandations apr&egrave;s la visite.</footer>
        </article>

      </div>
    </section>

    <Section title="Ce que nous analysons" tint>
      <div className="diagnostic-analysis-grid">
        {analyses.map((item, index) => (
          <article className="diagnostic-analysis-card" key={item.title}>
            <span className="diagnostic-analysis-icon" aria-hidden="true">{analysisIcons[index]}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
    <section className="section audit-preview-section">
      <div className="wrap">
        <header className="audit-preview-heading">
          <h2>Aper&ccedil;u de notre rapport d&apos;audit</h2>
          <p>Voici un exemple de ce que vous recevez apr&egrave;s un Audit Flash S&eacute;curit&eacute;, la suite possible du diagnostic gratuit.</p>
        </header>
        <div className="audit-preview-grid">
          <article className="audit-report-card">
            <h3>Rapport d&apos;audit de s&eacute;curit&eacute; informatique</h3>
            <p className="audit-company"><strong>Entreprise :</strong> Cabinet Exemple &amp; Associ&eacute;s<br /><span>Exemple fictif : entreprise et donn&eacute;es invent&eacute;es</span></p>
            <h4>Sommaire</h4>
            <ol>
              <li>&Eacute;tat g&eacute;n&eacute;ral</li>
              <li>Vuln&eacute;rabilit&eacute;s d&eacute;tect&eacute;es</li>
              <li>Sauvegardes</li>
              <li>Plan d&apos;action</li>
            </ol>
          </article>
          <article className="audit-score-card">
            <h3>Score de s&eacute;curit&eacute;</h3>
            <div className="audit-score-content">
              <div className="audit-score-ring" aria-label="Score de s&eacute;curit&eacute; : 68 %"><span>68%</span></div>
              <div>
                <h4>Principales recommandations</h4>
                <ul>
                  <li>Renforcer les mots de passe</li>
                  <li>Activer la sauvegarde automatique</li>
                  <li>Mettre &agrave; jour les syst&egrave;mes</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        <div className="audit-preview-actions">
          <a className="btn btn-dark" href="/assets/exemple-rapport-audit-flash-nodalys.pdf" download>T&eacute;l&eacute;charger l&apos;exemple complet (PDF)</a>
        </div>
      </div>
    </section>
    <section className="section diagnostic-cta">
      <div className="wrap">
        <div><h2>Un compte rendu clair apr&egrave;s le diagnostic</h2><p>Nous vous remettons un court compte rendu avec les premiers constats. Pour aller plus loin, l&apos;Audit Flash S&eacute;curit&eacute; produit un rapport d&eacute;taill&eacute; avec un plan d&apos;action.</p></div>
        <Btn to="/contact">Demander un diagnostic gratuit</Btn>
      </div>
    </section>
  </>);
}
