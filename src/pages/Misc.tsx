import { Btn, Hero, Section } from '../components/Ui';
import { site } from '../data/site';

// Brouillons : à faire relire par un juriste connaissant la réglementation camerounaise avant publication.
export const Legal = () => (<><Hero title="Mentions légales" /><Section><div className="prose">
  <h2>Éditeur du site</h2>
  <p>Nodalys, service de maintenance et de sécurité informatique, Douala, Cameroun. Entreprise non immatriculée à ce jour. Responsable : Ahmed Fadil Nchare.</p>
  <p>Contact : {site.email}</p>
  <h2>Directeur de la publication</h2><p>Ahmed Fadil Nchare.</p>
  <h2>Hébergeur</h2><p>Netlify, Inc. (États-Unis). Coordonnées sur netlify.com.</p>
</div></Section></>);
export const Privacy = () => (<><Hero title="Politique de confidentialité" /><Section><div className="prose">
  <p>Ce site ne comporte pas de formulaire : vous nous contactez par WhatsApp ou par email.</p>
  <h2>Données reçues</h2>
  <p>Nous recevons uniquement les informations que vous nous envoyez (nom, numéro, adresse email, contenu du message). Nous les utilisons pour répondre à votre demande et préparer un devis.</p>
  <h2>Partage et conservation</h2>
  <p>Nous ne vendons ni ne partageons vos données. Vous pouvez demander leur suppression à tout moment à {site.email}.</p>
  <h2>Cookies</h2><p>Ce site n’utilise pas de cookies de suivi pour le moment.</p>
</div></Section></>);
export const NotFound = () => (<><Hero title="Page introuvable" lead="Cette page n’existe pas ou a été déplacée." /><Section><Btn to="/">Retour à l’accueil</Btn></Section></>);
