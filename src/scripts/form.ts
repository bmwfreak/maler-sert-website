/**
 * Kontaktformular (Startseite) + Reveal-Animation.
 * Wird in index.astro per <script> eingebunden.
 */

/* ── Kontaktformular: baut WhatsApp-Nachricht, trackt form_submit (nach Consent) ── */
(() => {
  const form = document.getElementById('anfrage-form') as HTMLFormElement | null;
  if (!form) return;

  const byId = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameEl = byId<HTMLInputElement>('anf-name');
    const telefonEl = byId<HTMLInputElement>('anf-telefon');
    const leistungEl = byId<HTMLSelectElement>('anf-leistung');
    const msgEl = byId<HTMLTextAreaElement>('anf-nachricht');

    const name = nameEl.value.trim();
    const telefon = telefonEl.value.trim();
    const leistung = leistungEl.value;
    const msg = msgEl.value.trim();

    let ok = true;
    if (!name) {
      nameEl.setCustomValidity('Bitte geben Sie Ihren Namen ein.');
      nameEl.reportValidity();
      ok = false;
    } else {
      nameEl.setCustomValidity('');
    }
    if (!msg && ok) {
      msgEl.setCustomValidity('Bitte beschreiben Sie Ihr Vorhaben.');
      msgEl.reportValidity();
      ok = false;
    } else {
      msgEl.setCustomValidity('');
    }
    if (!ok) return;

    const lines = ['📋 *Neue Anfrage von maler-sert.de*', ''];
    lines.push('*Name:* ' + name);
    if (telefon) lines.push('*Telefon:* ' + telefon);
    if (leistung) lines.push('*Leistung:* ' + leistung);
    lines.push('*Nachricht:* ' + msg);
    const waText = encodeURIComponent(lines.join('\n'));

    if (typeof window.gtag === 'function' && window.__msGaLoaded) {
      window.gtag('event', 'form_submit', {
        event_category: 'Lead',
        event_label: leistung || 'Keine Auswahl',
        value: 1,
      });
    }

    window.open('https://wa.me/491738615002?text=' + waText, '_blank', 'noopener,noreferrer');

    form.hidden = true;
    byId<HTMLElement>('anfrage-success').hidden = false;
  });

  ['anf-name', 'anf-nachricht'].forEach((id) => {
    byId<HTMLInputElement | HTMLTextAreaElement>(id).addEventListener('input', function (this: HTMLInputElement) {
      this.setCustomValidity('');
    });
  });
})();

/* ── Reveal-Animation beim Scrollen ── */
(() => {
  const elements = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
  );
  elements.forEach((el) => observer.observe(el));
})();

export {};
