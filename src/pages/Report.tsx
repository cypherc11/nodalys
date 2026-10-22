import { Btn, Hero, Section } from '../components/Ui';

export default function Report() {
  return (<>
    <Hero image className="hero-bg-backup" title="Exemple de rapport (fictif)" lead="Voici un exemple de rapport remis après un Audit Flash Sécurité. L’entreprise, les personnes et les données sont inventées." />
    <Section><p>Sommaire : résumé pour la direction, ce qui fonctionne, constats et recommandations, plan d’action, périmètre et limites.</p>
      <div className="actions"><Btn href="/assets/exemple-rapport-audit-flash-nodalys.pdf">Télécharger l’exemple complet (PDF)</Btn><Btn to="/audit-flash" kind="ghost">Découvrir l’Audit Flash</Btn></div></Section>
  </>);
}
