// HTML template for story PDF
module.exports = function bookTemplate({ title, childName, sections = [], generatedAt }) {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>${escapeHtml(title)}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <style>
        @page { size: A4; margin: 28mm 18mm; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; color:#111; padding:0; }
        h1 { font-size:28px; margin:0; color:#4c1d95; }
        h2 { font-size:20px; margin:0 0 8px; }
        p { margin:0 0 12px; }
        .cover { display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:linear-gradient(180deg,#fffaf6,#f8f6ff); }
        .cover h1 { font-size:40px; }
        .meta { margin-top:12px;color:#666 }
        .content { max-width:780px;margin:24px auto;padding:8px; }
      </style>
    </head>
    <body>
      <div class="cover">
        <h1>${escapeHtml(title)}</h1>
        <div class="meta">A storybook for ${escapeHtml(childName)} — generated ${escapeHtml(generatedAt)}</div>
      </div>
      <main class="content">
        ${sections.map(s => `
          <section style="page-break-inside:avoid;margin-bottom:28px;">
            <h2>${escapeHtml(s.heading)}</h2>
            <p>${escapeHtml(s.text)}</p>
          </section>
        `).join('')}
      </main>
    </body>
  </html>
  `;
};

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
