import { Btn } from '../components/Ui';
import { faq } from '../data/site';

export default function Faq() {
  return (
    <section className="faq-page">
      <div className="wrap">
        <header className="faq-intro">
          <h1>Questions fr&#233;quentes</h1>
          <p>Retrouvez ici les r&#233;ponses aux questions les plus courantes sur nos services,<br className="faq-desktop-break" /> notre fonctionnement et nos tarifs.</p>
        </header>

        <div className="faq-layout">
          <div className="faq-list">
            {faq.map(item => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          <aside className="faq-contact">
            <div className="faq-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M10 23a12 12 0 0 1 21-8" />
                <path d="M31 15h-8m8 0v8" />
                <path d="M36 26a12 12 0 0 1-21 8l-5 2 1.8-5A12 12 0 0 1 12 19" />
              </svg>
            </div>
            <h2>Vous avez d&#39;autres questions ?</h2>
            <p>Nous vous r&#233;pondons rapidement.</p>
            <Btn to="/contact" kind="dark">Nous contacter</Btn>
          </aside>
        </div>
      </div>
    </section>
  );
}
