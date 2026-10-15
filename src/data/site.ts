// Toutes les données modifiables du site sont ici (textes, offres, FAQ, coordonnées).
const waNumber = '237697995579'; // provisoire : à remplacer par le numéro définitif
const waMessage = 'Bonjour, je souhaite un diagnostic gratuit pour mon entreprise.';
export const site = {
  name: 'Nodalys',
  city: 'Douala',
  area: 'Tout Douala',
  availability: 'Sur rendez-vous',
  whatsapp: `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`,
  whatsappLabel: '+237 6 97 99 55 79',
  // Renseigner ici les URL des pages officielles pour afficher leurs icônes dans le footer.
  linkedinUrl: '',
  facebookUrl: '',
  email: 'ahmedfadil1@proton.me', // provisoire : adresse sur le domaine plus tard
};
export const nav = [
  { to: '/', label: 'Accueil' }, { to: '/offres', label: 'Offres' },
  { to: '/diagnostic', label: 'Diagnostic' }, { to: '/a-propos', label: 'À propos' },
  { to: '/faq', label: 'FAQ' }, { to: '/contact', label: 'Contact' },
];
export const services = [
  { title: 'Maintenance informatique', text: 'Un contrat mensuel : votre informatique suivie en continu, à un coût connu à l’avance.' },
  { title: 'Audit Flash Sécurité', text: 'Une demi-journée, prix fixe : savoir où sont les risques et quoi corriger en priorité.' },
  { title: 'Réseau et Wi-Fi', text: 'Un réseau stable, bien dimensionné et documenté.' },
  { title: 'Vidéosurveillance', text: 'Installation et configuration de caméras avec accès à distance.' },
  { title: 'Dépannage ponctuel', text: 'Diagnostic et réparation, avec compte rendu.' },
];
// Prix : propositions du dossier de contenu, à confirmer.
export const offers = [
  { slug: 'essentiel', name: 'Essentiel', price: 'À partir de 30 000 FCFA / mois', tagline: 'Pour 1 à 5 postes.', popular: false,
    features: ['Assistance à distance', 'Mises à jour', '1 visite préventive par mois', 'Sur site sous 72 h (à distance : 1 jour ouvré)'] },
  { slug: 'standard', name: 'Standard', price: 'À partir de 60 000 FCFA / mois', tagline: 'Pour 6 à 10 postes.', popular: true,
    features: ['Tout le pack Essentiel', 'Vérification des sauvegardes', 'Rapport mensuel', 'Sur site sous 48 h'] },
  { slug: 'premium', name: 'Premium', price: 'Sur devis, dès 100 000 FCFA / mois', tagline: 'Pour 10 postes et plus.', popular: false,
    features: ['Tout le pack Standard', 'Suivi réseau et sécurité', 'Intervention prioritaire', 'Sur site sous 24 h'] },
];
export const auditFlash = {
  price: '50 000 à 100 000 FCFA',
  deduction: 'Le montant est déduit d’un contrat de maintenance signé dans les 30 jours.',
};
export const specificServices = [
  { title: 'Audit Flash Sécurité', text: '50 000 à 100 000 FCFA, déduits d’un contrat signé sous 30 jours.', to: '/audit-flash' },
  { title: 'Réseau et Wi-Fi', text: 'Sur devis.', to: undefined as string | undefined },
  { title: 'Vidéosurveillance', text: 'Sur devis, avec acompte avant l’achat du matériel.', to: undefined as string | undefined },
  { title: 'Dépannage ponctuel', text: 'Sur devis.', to: undefined as string | undefined },
];
export const analyses = [
  { title: 'Sécurité', text: 'Détection des failles et risques potentiels.' },
  { title: 'Performance', text: 'Vitesse et stabilité des systèmes.' },
  { title: 'Réseau', text: 'Configuration et connectivité.' },
  { title: 'Sauvegarde', text: 'Protection de vos données.' },
];
export const values = [
  { title: 'Fiabilité', text: 'Des solutions durables.' }, { title: 'Proximité', text: 'Une écoute attentive à Douala.' },
  { title: 'Clarté', text: 'Des explications simples, des devis écrits.' }, { title: 'Engagement', text: 'Votre satisfaction avant tout.' },
];
export const faq = [
  { q: 'Quels sont vos horaires d’intervention ?', a: 'Nous intervenons sur rendez-vous, à fixer ensemble selon vos disponibilités.' },
  { q: 'Comment se déroule un diagnostic ?', a: 'C’est un échange de 20 à 30 minutes pour faire le point sur la sécurité et les systèmes de votre entreprise. Il est gratuit et sans engagement. Nous vous remettons un court compte rendu avec les premiers constats.' },
  { q: 'Quelle différence entre le diagnostic gratuit et l’Audit Flash Sécurité ?', a: 'Le diagnostic est un échange rapide, gratuit. L’Audit Flash Sécurité est une vérification d’une demi-journée sur site (postes, Wi-Fi, comptes, sauvegardes), à prix fixe, qui débouche sur un rapport détaillé avec un plan d’action. Son montant est déduit d’un contrat de maintenance signé dans les 30 jours.' },
  { q: 'Quelle est la zone d’intervention ?', a: 'Nous intervenons dans tout Douala.' },
  { q: 'Comment obtenir un devis ?', a: 'Écrivez-nous sur WhatsApp ou par email. Après un premier échange, nous vous remettons un devis écrit, sans engagement.' },
  { q: 'Le matériel est-il inclus ?', a: 'Non. Le matériel, les licences et les pièces ne sont pas inclus dans nos prestations. Ils sont facturés à part, après devis.' },
  { q: 'Vérifiez-vous mes sauvegardes ?', a: 'Oui, à partir de la formule Standard. Lors d’un Audit Flash Sécurité, nous contrôlons aussi vos sauvegardes et testons leur restauration.' },
];

// Titres et descriptions par page (mis à jour dans le navigateur à chaque changement de route).
export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'Nodalys — Maintenance et sécurité informatique à Douala', description: 'Maintenance informatique, sécurité, réseaux et vidéosurveillance pour entreprises et professionnels à Douala. Diagnostic gratuit et devis écrit.' },
  '/offres': { title: 'Offres et tarifs — Nodalys', description: 'Formules de maintenance informatique Essentiel, Standard et Premium, et services spécifiques : Audit Flash Sécurité, réseau, vidéosurveillance, dépannage.' },
  '/audit-flash': { title: 'Audit Flash Sécurité — Nodalys', description: 'Une demi-journée sur site, prix fixe : postes, Wi-Fi, comptes et sauvegardes vérifiés, avec un rapport et un plan d’action par priorité.' },
  '/diagnostic': { title: 'Diagnostic informatique gratuit — Nodalys', description: 'Un premier point gratuit de 20 à 30 minutes, sans engagement, sur la sécurité et les systèmes de votre entreprise à Douala.' },
  '/a-propos': { title: 'À propos — Nodalys', description: 'Nodalys, service de maintenance et de sécurité informatique basé à Douala.' },
  '/faq': { title: 'Questions fréquentes — Nodalys', description: 'Horaires, zone d’intervention, devis, matériel, sauvegardes : les réponses aux questions les plus courantes.' },
  '/contact': { title: 'Contact — Nodalys', description: 'Écrivez-nous sur WhatsApp ou par email pour un devis ou un diagnostic gratuit à Douala.' },
  '/exemple-de-rapport': { title: 'Exemple de rapport d’audit (fictif) — Nodalys', description: 'Exemple fictif du rapport remis après un Audit Flash Sécurité.' },
  '/mentions-legales': { title: 'Mentions légales — Nodalys', description: 'Mentions légales du site Nodalys.' },
  '/confidentialite': { title: 'Confidentialité — Nodalys', description: 'Politique de confidentialité du site Nodalys.' },
};
