/**
 * Tracking & Consent — Maler Sert GmbH
 *
 * DSGVO-konformes Opt-in: Google Analytics 4 (G-YFTMCYXTDX) wird erst
 * geladen, NACHDEM der Nutzer aktiv zustimmt. Ohne Zustimmung werden
 * keine Cookies gesetzt und keine Daten an Google gesendet.
 *
 * Gemessene Aktionen (nur nach Einwilligung):
 *   page_view        → automatisch durch gtag config
 *   phone_click      → Anruf-Button / Telefonnummer geklickt
 *   whatsapp_click   → WhatsApp-Button geklickt
 *   form_submit      → Kontaktformular abgeschickt (aus index.html)
 */

(function () {
  'use strict';

  var GA_ID = 'G-YFTMCYXTDX';
  var STORAGE_KEY = 'msert_consent'; // 'granted' | 'denied'

  /* ────────────────────────────────────────────────────────────────
   * GA4 laden (nur nach Einwilligung)
   * ──────────────────────────────────────────────────────────────── */
  function loadGA() {
    if (window.__msGaLoaded) return;
    window.__msGaLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);

    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }

  /** Event sicher feuern — passiert nur, wenn GA bereits geladen ist */
  function track(eventName, params) {
    if (typeof window.gtag === 'function' && window.__msGaLoaded) {
      window.gtag('event', eventName, params || {});
    }
  }

  /* ────────────────────────────────────────────────────────────────
   * Event-Delegation: Telefon- und WhatsApp-Klicks
   * (immer registriert, sendet aber nur nach Einwilligung)
   * ──────────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('a[href]');
    if (!el) return;
    var href = el.getAttribute('href') || '';

    if (href.indexOf('tel:') === 0) {
      track('phone_click', { event_category: 'Kontakt', event_label: 'Telefon', value: 1 });
    } else if (href.indexOf('wa.me') !== -1) {
      track('whatsapp_click', { event_category: 'Kontakt', event_label: 'WhatsApp', value: 1 });
    }
  });

  /* ────────────────────────────────────────────────────────────────
   * Consent-Banner
   * ──────────────────────────────────────────────────────────────── */
  function injectStyles() {
    if (document.getElementById('ms-consent-style')) return;
    var css = ''
      + '.ms-consent{position:fixed;z-index:9999;left:50%;bottom:1rem;transform:translateX(-50%);'
      + 'width:min(640px,calc(100% - 2rem));background:#1d2023;color:#f2ede6;border:1px solid rgba(255,255,255,.12);'
      + 'border-radius:8px;box-shadow:0 1.4rem 2.8rem rgba(0,0,0,.35);padding:20px 22px;'
      + 'font-family:"Source Sans 3","Segoe UI",Arial,sans-serif;font-size:.92rem;line-height:1.55;'
      + 'opacity:0;transition:opacity .25s ease,transform .25s ease;}'
      + '.ms-consent.is-visible{opacity:1;}'
      + '.ms-consent p{margin:0 0 14px;color:rgba(242,237,230,.82);}'
      + '.ms-consent a{color:#dfb28f;text-decoration:underline;}'
      + '.ms-consent-row{display:flex;flex-wrap:wrap;gap:10px;}'
      + '.ms-consent button{flex:1 1 auto;min-width:130px;cursor:pointer;border:none;border-radius:5px;'
      + 'padding:11px 18px;font-weight:700;font-size:.9rem;font-family:inherit;transition:background .15s ease;}'
      + '.ms-consent .ms-accept{background:#9b572f;color:#fff;}'
      + '.ms-consent .ms-accept:hover{background:#8d4b2a;}'
      + '.ms-consent .ms-decline{background:rgba(255,255,255,.08);color:#f2ede6;border:1px solid rgba(255,255,255,.16);}'
      + '.ms-consent .ms-decline:hover{background:rgba(255,255,255,.14);}'
      + '@media(max-width:480px){.ms-consent-row{flex-direction:column-reverse;}}';
    var style = document.createElement('style');
    style.id = 'ms-consent-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildPrivacyHref() {
    // Auf Unterseiten liegt datenschutz.html im selben Verzeichnis
    return 'datenschutz.html';
  }

  function showBanner() {
    injectStyles();

    var banner = document.createElement('div');
    banner.className = 'ms-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie-Einwilligung');
    banner.innerHTML =
      '<p>Wir verwenden Google Analytics, um anonym zu verstehen, wie unsere Website genutzt wird. '
      + 'Das hilft uns, sie zu verbessern. Sie entscheiden frei — Ihre Anfrage funktioniert auch ohne. '
      + 'Mehr dazu in der <a href="' + buildPrivacyHref() + '">Datenschutzerklärung</a>.</p>'
      + '<div class="ms-consent-row">'
      + '<button type="button" class="ms-decline">Nur notwendige</button>'
      + '<button type="button" class="ms-accept">Akzeptieren</button>'
      + '</div>';

    document.body.appendChild(banner);
    requestAnimationFrame(function () { banner.classList.add('is-visible'); });

    function close() {
      banner.classList.remove('is-visible');
      setTimeout(function () { banner.remove(); }, 250);
    }

    banner.querySelector('.ms-accept').addEventListener('click', function () {
      try { localStorage.setItem(STORAGE_KEY, 'granted'); } catch (e) {}
      loadGA();
      close();
    });

    banner.querySelector('.ms-decline').addEventListener('click', function () {
      try { localStorage.setItem(STORAGE_KEY, 'denied'); } catch (e) {}
      close();
    });
  }

  /* ────────────────────────────────────────────────────────────────
   * Start: gespeicherte Entscheidung prüfen
   * ──────────────────────────────────────────────────────────────── */
  var stored;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { stored = null; }

  if (stored === 'granted') {
    loadGA();
  } else if (stored !== 'denied') {
    if (document.body) showBanner();
    else document.addEventListener('DOMContentLoaded', showBanner);
  }
})();
