// Kanonischer Host: www und die pages.dev-Produktionsadresse per 301 auf maler-sert.de.
// ponytail: Function statt Cloudflare-Redirect-Regel, weil der API-Token keine Zonenrechte hat.
// Ceiling: laeuft bei jedem Request (Free: 100k/Tag) — bei viel Traffic durch eine Single Redirect Rule im Dashboard ersetzen.
const CANONICAL = 'maler-sert.de';
const REDIRECT_HOSTS = new Set(['www.maler-sert.de', 'maler-sert.pages.dev']);

export const onRequest = ({ request, next }) => {
  const url = new URL(request.url);
  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = CANONICAL;
    return Response.redirect(url.toString(), 301);
  }
  return next();
};
