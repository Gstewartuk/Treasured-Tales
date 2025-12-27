// HTML template builder for storybook PDF
module.exports = function bookTemplate({ title, childName, sections = [], generatedAt }) {
  const escape = (s = '') =>
    String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');

  const sectionsHtml = (sections || [])
    .map(
      s => `
    <section style="page-break-inside:avoid;margin-bottom:28px;">
      <h2 style="color:#5b21b6;margin:0 0 8px">${escape(s.heading)}</h2>
      <p style="font-size:16px;line-height:1.6;color:#111">${escape(s.text)}</p>
    </section>`
    )
    .join('\n');

  return `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${escape(title)}</title>
      <style>
        @page { size: A4; margin: 28mm 18mm; }
        body { font-family: Arial, Helvetica, sans-serif; color:#111; }
      </style>
    </head>
    <body>
      <main>${sectionsHtml}</main>
    </body>
  </html>`;
};
