export default async function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();

  const botUAs = [
    'facebookexternalhit', 'facebot', 'facebookbot',
    'adsbot', 'googlebot', 'bingbot', 'twitterbot',
    'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',
    'crawler', 'spider', 'headless', 'phantom', 'python',
    'curl', 'wget', 'java/', 'apache-httpclient'
  ];

  const metaIPs = [
    '66.220.', '69.63.', '69.171.', '173.252.',
    '31.13.', '157.240.', '179.60.', '204.15.'
  ];

  const isBot = botUAs.some(b => ua.includes(b));
  const isMeta = metaIPs.some(r => ip.startsWith(r));

  if (isBot || isMeta) {
    res.writeHead(302, { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' });
    res.end();
    return;
  }

  // ── Calendário de links por dia ──────────────────────────────
  const START_DATE = new Date('2026-05-19T00:00:00-03:00'); // Dia 1 = 19/05

  const linksPorDia = {
    1: [
      'https://chat.whatsapp.com/KeJ1meRXOCDJduORhbFkc0', // 202
      'https://chat.whatsapp.com/GrjJ74h1p8Q1hp5dddudW4', // 205
      'https://chat.whatsapp.com/Bbo5D3rsRsuKAIDTRoUzv3', // 206
      'https://chat.whatsapp.com/C6DW6qAHOVtKLdnikwzXOd', // 207
      'https://chat.whatsapp.com/JrBMdPMT3lU6Jxjqjo0xwN', // 208
    ],
    2: [
      'https://chat.whatsapp.com/EA8hNTX4kU2EReqZqYt7fB', // 201
      'https://chat.whatsapp.com/EZxnBqOPzmd2RHU4LzqhhZ', // 203
      'https://chat.whatsapp.com/HmaEwyz6Z5YEybkEi2wbmp', // 209
      'https://chat.whatsapp.com/LsoCzVRiJVYH5bYSuqNzgF', // 210
      'https://chat.whatsapp.com/CJbIHqgbGAn3OSM8eSChL0', // 211
    ],
    3: [
      'https://chat.whatsapp.com/IFNVs35Qr8I6xyA9WpUp8Q', // 212
      'https://chat.whatsapp.com/FXLDkdHW8Km8Kb2LfONynX', // 213
      'https://chat.whatsapp.com/FPEB58b9tCfB2hmLYo3Zdn', // 214
      'https://chat.whatsapp.com/HxGZc3MdjinBibtjF97kGl', // 215
      'https://chat.whatsapp.com/HqzoA3E2ZqfH7voPxEmuqF', // 216
    ],
  };
  // ─────────────────────────────────────────────────────────────

  const now = new Date();
  const diffMs = now - START_DATE;
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;

  // Cicla entre dia 1, 2, 3, 1, 2, 3...
  const totalDias = Object.keys(linksPorDia).length;
  const diaAtual = ((diffDias - 1) % totalDias) + 1;
  const links = linksPorDia[diaAtual];

  const link = links[Math.floor(Math.random() * links.length)];

  res.writeHead(302, { Location: link });
  res.end();
}
