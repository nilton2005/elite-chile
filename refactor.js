const fs = require('fs');

const files = [
  'src/app/admin/solicitudes/page.tsx',
  'src/app/perfil/page.tsx',
  'src/app/directorio/page.tsx',
  'src/app/mensajes/page.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let code = fs.readFileSync(file, 'utf8');

  // Add Link import
  if (!code.includes('import Link from "next/link"')) {
    code = code.replace(/import React(?:[^;]*)?;/, 'import React from "react";\nimport Link from "next/link";');
  }

  // Remove <aside> (and its content)
  code = code.replace(/([\s]*)\{\/\* Sidebar \*\/\}\s*<aside[\s\S]*?<\/aside>/g, '');
  code = code.replace(/([\s]*)\{\/\* SideNavBar \*\/\}\s*<aside[\s\S]*?<\/aside>/g, '');
  code = code.replace(/([\s]*)<aside[\s\S]*?<\/aside>/g, ''); // Catch all remaining asides

  // Remove <header>
  code = code.replace(/([\s]*)\{\/\* TopAppBar \*\/\}\s*<header[\s\S]*?<\/header>/g, '');
  code = code.replace(/([\s]*)\{\/\* Top Nav \*\/\}\s*<header[\s\S]*?<\/header>/g, '');
  code = code.replace(/([\s]*)<header[\s\S]*?<\/header>/g, ''); // Catch all remaining headers

  // Remove <footer>
  code = code.replace(/([\s]*)<footer[\s\S]*?<\/footer>/g, '');

  // Fix `<main>` layout wrappers (remove specific layout paddings)
  code = code.replace(/className="ml-64 min-h-screen flex flex-col"/g, 'className="flex flex-col flex-1"');
  code = code.replace(/className="lg:pl-64 pt-20 min-h-screen"/g, 'className="flex flex-col w-full"');
  code = code.replace(/className="pt-24 lg:pl-64 pb-20 min-h-screen transition-all duration-300"/g, 'className="flex-1 w-full pb-20"');
  code = code.replace(/className="ml-64 flex-1 flex flex-row overflow-hidden bg-surface relative"/g, 'className="flex-1 flex flex-row overflow-hidden bg-surface relative"');

  // Fix the custom weird div wrapper in mensajes
  code = code.replace(/<div className="flex h-screen pt-20">/g, '<div className="flex h-full w-full">');
  
  // Replace <a> with <Link>
  code = code.replace(/<a(\s)/g, '<Link$1');
  code = code.replace(/<\/a>/g, '</Link>');

  fs.writeFileSync(file, code);
  console.log("Refactored: " + file);
});
