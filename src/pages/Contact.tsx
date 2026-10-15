import type { FormEvent } from 'react';
import { useState } from 'react';
import { services, site } from '../data/site';

function ContactIcon({ kind }: { kind: 'whatsapp' | 'phone' | 'email' | 'location' }) {
  const paths = {
    whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.2-3.7a8.5 8.5 0 1 1 15.3-4.8Z"/><path d="M9 8.5c.4 2.2 2.2 4 4.5 4.5l1.2-1.2 2 .9c-.2 1.2-.9 1.8-2.1 1.8-3.8-.2-7.2-3.6-7.4-7.4 0-1.2.6-1.9 1.8-2.1l.9 2L9 8.5Z"/></>,
    phone: <><path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.7 17.3 17.3 0 0 0 19.3 21a1.7 1.7 0 0 0 1.7-1.6V17l-5-2-1.7 2a14 14 0 0 1-5.4-5.4l2-1.7-2-5Z"/></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  };
  return <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">{paths[kind]}</svg>;
}

export default function Contact() {
  const phone = site.whatsappLabel.replace(/[^\d+]/g, '');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus('sending');
    const form = event.currentTarget;
    const body: Record<string, string> = { _subject: 'Nouvelle demande de contact — Nodalys' };
    new FormData(form).forEach((value, key) => {
      if (typeof value === 'string') body[key] = value;
    });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error('Form submission failed');
      const result: { success?: boolean | string } = await response.json();
      if (result.success !== true && result.success !== 'true') throw new Error('Email delivery was not accepted');
      form.reset();
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    }
  }

  return <>
    <section className="hero hero-photo hero-bg-repair contact-banner">
      <div className="wrap contact-banner-inner">
        <div className="contact-intro">
          <h1>Contactez-nous</h1>
          <p>Une question, un besoin de maintenance ou un projet ?<br />Notre équipe est à votre écoute pour vous accompagner.</p>
        </div>
        <div className="contact-meta" aria-label="Coordonnées de Nodalys">
          <div className="contact-meta-item"><ContactIcon kind="phone"/><span><strong>Téléphone</strong><a href={`tel:${phone}`}>{site.whatsappLabel}</a><small>(WhatsApp)</small></span></div>
          <div className="contact-meta-item"><ContactIcon kind="email"/><span><strong>Email</strong><a href={`mailto:${site.email}`}>{site.email}</a></span></div>
          <div className="contact-meta-item"><ContactIcon kind="location"/><span><strong>Localisation</strong><span>{site.city}, Cameroun</span></span></div>
        </div>
      </div>
    </section>

    <section className="contact-content">
      <div className="wrap contact-layout">
        <div className="contact-form-panel">
          <h2>Envoyez-nous un message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Nom *<input name="name" autoComplete="name" required /></label>
            <label>Entreprise<input name="company" autoComplete="organization" /></label>
            <label>Email *<input type="email" name="email" autoComplete="email" required /></label>
            <label>Téléphone<input type="tel" name="phone" autoComplete="tel" /></label>
            <label className="contact-form-wide">Type de demande
              <select name="service" defaultValue="">
                <option value="">Sélectionnez un service</option>
                {services.map(service => <option key={service.title} value={service.title}>{service.title}</option>)}
                <option value="Autre demande">Autre demande</option>
              </select>
            </label>
            <label className="contact-form-wide">Votre message *<textarea name="message" rows={4} required /></label>
            <button className="btn btn-primary contact-submit" type="submit" disabled={submitStatus === 'sending'}>{submitStatus === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}</button>
          </form>
          {submitStatus !== 'idle' && <div className="contact-submit-status" role="status" aria-live="polite">
            <p>{submitStatus === 'sending' ? 'Envoi de votre demande…' : submitStatus === 'success' ? `Votre demande a été envoyée. Nous vous répondrons à ${site.email}.` : 'L’envoi a échoué. Réessayez ou contactez-nous directement par email.'}</p>
          </div>}
        </div>

        <aside className="contact-direct">
          <h2>Ou contactez-nous directement</h2>
          <div className="contact-direct-list">
            <a className="contact-direct-card contact-whatsapp" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              <ContactIcon kind="whatsapp"/><span><strong>Discuter sur WhatsApp</strong><small>Réponse rapide en général</small></span>
            </a>
            <a className="contact-direct-card" href={`tel:${phone}`}>
              <ContactIcon kind="phone"/><span><strong>Appeler maintenant</strong><small>{site.whatsappLabel}</small></span>
            </a>
            <a className="contact-direct-card" href={`mailto:${site.email}`}>
              <ContactIcon kind="email"/><span><strong>Envoyer un email</strong><small>{site.email}</small></span>
            </a>
          </div>
          <div className="contact-tips">
            <h3>Pour un devis plus rapide, merci de préciser :</h3>
            <ul><li>votre secteur d’activité</li><li>la nature de votre besoin</li><li>vos outils et équipements, si connus</li></ul>
          </div>
          <p className="contact-availability">Zone d’intervention : {site.area}. Disponibilité : {site.availability.toLowerCase()}.</p>
        </aside>
      </div>
    </section>
  </>;
}
