# Nodalys IT — React + Vite

Site vitrine (SPA) : accueil, offres, détail d'offre, diagnostic, à propos, FAQ, contact, exemple de rapport, mentions légales, confidentialité, 404.

## Commandes
npm install · npm run dev · npm run build · npm run preview

## Où modifier quoi
- `src/data/site.ts` : textes, offres, FAQ, coordonnées (à compléter : téléphone, WhatsApp, email)
- `src/pages/` : une page par fichier · `src/components/` : Layout (header/footer) et blocs réutilisables
- `src/styles.css` : jetons de design en haut du fichier (couleurs, police)
- `public/assets/` : logos, polices, icônes, PDF d'exemple

## Déploiement Netlify (site `nodalys-it`)
Build : `npm run build` · Publish : `dist` (déjà dans `netlify.toml`). Les redirections SPA sont dans `public/_redirects`.
Le contact se fait par WhatsApp et email (pas de formulaire pour l’instant).

## Notes de la dernière révision
- Page `/audit-flash` ajoutée ; le diagnostic gratuit (échange de 20 à 30 min) est distingué de l'Audit Flash Sécurité (demi-journée sur site, prix fixe, rapport détaillé).
- Exemple de rapport présenté comme **fictif** partout (et non « anonymisé »).
- Titres et descriptions par page : `pageMeta` dans `src/data/site.ts` (appliqués dans `src/components/Layout.tsx`).
- Aperçu des liens (Open Graph) dans `index.html` + `public/assets/og-image.jpg`. Adresse du site : `https://nodalys-it.netlify.app` (à remplacer dans `index.html`, `public/robots.txt` et `public/sitemap.xml` si tu passes à un domaine personnalisé).
- Images de fond converties en WebP (≈ 100 Ko au lieu de ≈ 2 Mo). Les PNG d'origine sont dans `design-sources/`, hors du build.
- Carrousel des services (accueil) : flèches précédent/suivant, points = positions réelles, défilement auto avec retour au début, sans duplication des cartes. Logique dans `src/pages/Home.tsx`, styles `.services-carousel` / `.carousel-arrows`.
- Photos de héros par page : classes `hero-bg-*` dans `src/styles.css` (image via `--hero-img`, cadrage via `--hero-pos`). Images WebP dans `public/assets/images/` (`hero-*.webp`) ; `design-sources/` garde les PNG d'origine, dont la photo de vidéosurveillance, pas encore utilisée.
- Rythme commun : variables `--section-y` (espacement des sections), `--hero-h` (héros des pages intérieures) et `--hero-h-tall` (accueil et diagnostic) en haut de `src/styles.css`.
- Formulaire de contact : envoi via FormSubmit (`connect-src` autorisé dans `public/_headers`). Au premier envoi, FormSubmit envoie un email d'activation à l'adresse du site : il faut le valider. Champ anti-spam `_honey` ajouté.
- Cache : toutes les règles de cache sont dans `netlify.toml` ; `public/_headers` ne contient que la sécurité (CSP, etc.).
- Photos : vidéosurveillance = caméra (image retournée), maintenance = poste de travail, dépannage = réparation, contact = poignée de main. Logos inutilisés déplacés dans `design-sources/logo/`.
