const fs = require('fs');
const path = require('path');

const mapping = {
  'directorio.html': 'directorio',
  'admin.html': 'admin',
  'mensajeria.html': 'mensajes',
  'perfil.html': 'perfil',
  'admin_solicitudes.html': 'admin/solicitudes'
};

for (const [htmlFile, routeDir] of Object.entries(mapping)) {
  const html = fs.readFileSync(path.join('stitch_html', htmlFile), 'utf8');
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/);
  if (!bodyMatch) { console.log('No body in ' + htmlFile); continue; }
  let body = bodyMatch[1];
  body = body.replace(/class=/g, 'className=');
  body = body.replace(/ for=/g, ' htmlFor=');
  body = body.replace(/ data-alt="/g, ' alt="');
  body = body.replace(/ data-icon="[^"]*"/g, '');
  body = body.replace(/ data-weight="[^"]*"/g, '');
  body = body.replace(/ data-location="[^"]*"/g, '');
  body = body.replace(/<!--[\s\S]*?-->/g, '');
  body = body.replace(/style="([^"]*)"/g, function(m, s) {
    var pairs = s.split(';').filter(function(x){return x.trim();}).map(function(x) {
      var parts = x.split(':');
      var key = parts[0].trim();
      var val = parts.slice(1).join(':').trim();
      var jsKey = key.replace(/-([a-z])/g, function(mm, c) { return c.toUpperCase(); });
      return jsKey + ': "' + val + '"';
    });
    return 'style={{' + pairs.join(', ') + '}}';
  });
  body = body.replace(/<br\s*\/?>/g, '<br />');
  body = body.replace(/<hr\s*\/?>/g, '<hr />');
  body = body.replace(/<img\s+([^>]*[^\/])>/g, '<img $1 />');
  body = body.replace(/<input\s+([^>]*[^\/])>/g, '<input $1 />');
  body = body.replace(/disabled=""/g, 'disabled');
  var component = '/* eslint-disable @next/next/no-img-element */\nimport React from "react";\n\nexport default function Page() {\n  return (\n    <>' + body + '\n    </>\n  );\n}\n';
  var dir = path.join('src', 'app', routeDir.replace(/\//g, path.sep));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), component);
  console.log('Created: ' + routeDir);
}
console.log('Done!');
