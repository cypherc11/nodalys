import { Btn, Cards, Hero, Section } from '../components/Ui';
import { auditFlash, site } from '../data/site';

const checks = [
  { title: 'Postes et mises à jour', text: 'Antivirus, mises à jour en attente, logiciels trop anciens.' },
  { title: 'Réseau et Wi-Fi', text: 'Mot de passe, séparation du réseau visiteurs, appareils inconnus.' },
  { title: 'Comptes et accès', text: 'Comptes d’anciens employés, droits d’administrateur, mots de passe.' },
  { title: 'Sauvegardes', text: 'Existent-elles, sont-elles gardées hors du bureau, et se restaurent-elles vraiment ?' },
];
const steps = [
  { title: 'Diagnostic gratuit', text: 'Un échange de 20 à 30 minutes pour cadrer votre situation.' },
  { title: 'Devis écrit', text: 'Le prix fixe de l’audit est confirmé avant la visite.' },
  { title: 'Visite sur site', text: 'Une demi-journée pour vérifier les postes, le Wi-Fi, les comptes et les sauvegardes.' },
  { title: 'Rapport et plan d’action', text: 'Les constats classés par priorité, avec ce qu’il faut corriger et l’effort que cela demande.' },
];

export default function AuditFlash() {
  return (<>
    <Hero image className="hero-bg-network" title="Audit Flash Sécurité" lead="Une vérification de base de votre informatique, en une demi-journée sur site et à prix fixe : savoir où sont les risques et quoi corriger en priorité.">
      <Btn href={site.whatsapp}>Discuter sur WhatsApp</Btn><Btn to="/exemple-de-rapport" kind="ghost">Voir un exemple de rapport</Btn>
    </Hero>

    <Section title="Ce que nous vérifions" tint>
      <Cards items={checks} />
    </Section>

    <Section title="Comment ça se passe">
      <ol className="steps">{steps.map(s => <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}</ol>
    </Section>

    <Section tint>
      <div className="split">
        <div>
          <h2>Prix</h2>
          <p className="price">{auditFlash.price}</p>
          <p>Le prix exact est indiqué dans le devis écrit, avant la visite. {auditFlash.deduction}</p>
        </div>
        <div className="card"><h3>Limites de l’audit</h3>
          <p>L’Audit Flash est une vérification de base. Ce n’est ni un test d’intrusion, ni un audit de cybersécurité avancé, ni une garantie de protection contre les cyberattaques : il vise à réduire les risques courants les plus fréquents.</p></div>
      </div>
    </Section>

    <section className="cta-band"><div className="wrap">
      <h2>Commencez par un diagnostic gratuit.</h2>
      <div className="actions"><Btn to="/diagnostic">Demander un diagnostic gratuit</Btn><Btn href={site.whatsapp} kind="ghost">Discuter sur WhatsApp</Btn></div>
    </div></section>
  </>);
}
