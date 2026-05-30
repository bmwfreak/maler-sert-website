/**
 * GA4 Conversion Tracking — Maler Sert GmbH
 *
 * Feuert Events auf das bereits laufende GA4 (via Hosting eingebunden).
 * Voraussetzung: window.gtag ist definiert (kein zweites Init nötig).
 *
 * Gemessene Aktionen:
 *   phone_click      → Anruf-Button / Telefonnummer geklickt
 *   whatsapp_click   → WhatsApp-Button geklickt
 *   form_submit      → Kontaktformular abgeschickt (wird aus index.html gefeuert)
 */

(function () {
  'use strict';

  /** Sicher feuern — kein Fehler wenn gtag nicht verfügbar */
  function track(eventName, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, Object.assign({ send_to: 'default' }, params || {}));
    }
    // Fallback: dataLayer für GTM
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(Object.assign({ event: eventName }, params || {}));
    }
  }

  /** Event-Delegation auf document — fängt alle Links */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('a[href]');
    if (!el) return;

    var href = el.getAttribute('href') || '';

    /* ── Telefon ── */
    if (href.startsWith('tel:')) {
      track('phone_click', {
        event_category: 'Kontakt',
        event_label: 'Telefon',
        value: 1
      });
      return;
    }

    /* ── WhatsApp ── */
    if (href.indexOf('wa.me') !== -1) {
      track('whatsapp_click', {
        event_category: 'Kontakt',
        event_label: 'WhatsApp',
        value: 1
      });
    }
  });

})();
