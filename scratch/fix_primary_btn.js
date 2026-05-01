const fs = require('fs');
const path = require('path');

const filesToFix = [
  path.join(__dirname, '..', 'src', 'components', 'dashboard', 'TerminalContact.tsx'),
  path.join(__dirname, '..', 'src', 'components', 'dashboard', 'ProfileIdentityPanel.tsx'),
  path.join(__dirname, '..', 'src', 'components', 'dashboard', 'HeroSection.tsx')
];

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/color:\s*'#000'/g, "color: 'var(--primary-foreground)'");
    // Also fix background: rgba(255,255,255,0.04) in HeroSection.tsx
    content = content.replace(/background:\s*'rgba\(255,255,255,0\.04\)'/g, "background: 'rgba(var(--foreground), 0.04)'");
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
