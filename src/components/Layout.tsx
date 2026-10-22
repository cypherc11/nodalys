import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { offers, pageMeta } from '../data/site';
import { serviceDetails } from '../data/serviceDetails';

function metaFor(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  if (pageMeta[path]) return pageMeta[path];
  const offer = path.startsWith('/offres/') ? offers.find(o => o.slug === path.slice('/offres/'.length)) : undefined;
  if (offer) return { title: `Offre ${offer.name} — Nodalys`, description: `${offer.name} : ${offer.tagline} ${offer.price}.` };
  const service = path.startsWith('/services/') ? serviceDetails.find(item => item.slug === path.slice('/services/'.length)) : undefined;
  if (service) return { title: `${service.title} — Nodalys`, description: service.lead };
  return { title: 'Page introuvable — Nodalys', description: pageMeta['/'].description };
}

export default function Layout() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    // La page suivante apparaît directement en haut après chaque changement de route.
    window.scrollTo(0, 0);
    const { title, description } = metaFor(pathname);
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [pathname]);
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const sections = document.querySelectorAll<HTMLElement>('#main > section:not(.hero)');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('scroll-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

    sections.forEach(section => {
      section.classList.add('scroll-reveal');
      // Les sections déjà à l'écran restent visibles tout de suite (pas de disparition puis réapparition).
      if (section.getBoundingClientRect().top < window.innerHeight * 0.9) section.classList.add('scroll-revealed');
      else observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#main">Aller au contenu</a>
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  );
}
