const fs = require('fs');
const path = require('path');

const placeholdersDir = path.join(__dirname, 'public', 'images', 'placeholders');

// Ensure directory exists
if (!fs.existsSync(placeholdersDir)) {
  fs.mkdirSync(placeholdersDir, { recursive: true });
}

const products = [
  { name: 'engagement-round-eternal', label: 'Round Eternal' },
  { name: 'engagement-oval-halo', label: 'Oval Halo' },
  { name: 'engagement-princess-pave', label: 'Princess Pavé' },
  { name: 'engagement-emerald-solitaire', label: 'Emerald Solitaire' },
  { name: 'engagement-cushion-vintage', label: 'Cushion Vintage' },
  { name: 'engagement-radiant-trilogy', label: 'Radiant Trilogy' },
  { name: 'wedding-full-eternity', label: 'Full Eternity' },
  { name: 'wedding-half-eternity', label: 'Half Eternity' },
  { name: 'wedding-classic-gold', label: 'Classic Gold' },
  { name: 'wedding-twisted-braid', label: 'Twisted Braid' },
  { name: 'wedding-matte-band', label: 'Matte Band' },
  { name: 'wedding-hammered', label: 'Hammered' },
  { name: 'jewelry-tennis-bracelet', label: 'Tennis Bracelet' },
  { name: 'jewelry-studs', label: 'Diamond Studs' },
  { name: 'jewelry-pendant', label: 'Pendant' },
  { name: 'jewelry-hoops', label: 'Hoops' },
  { name: 'jewelry-bangle', label: 'Bangle' },
  { name: 'jewelry-drops', label: 'Drop Earrings' },
  { name: 'loose-pear', label: 'Pear Diamond' },
  { name: 'loose-marquise', label: 'Marquise Diamond' },
  { name: 'loose-heart', label: 'Heart Diamond' },
  { name: 'loose-asscher', label: 'Asscher Diamond' },
  { name: 'loose-oval', label: 'Oval Diamond' },
  { name: 'loose-round', label: 'Round Diamond' },
];

// Simple PNG base64 generator - creates a minimal valid PNG
function createMinimalPNG(width = 500, height = 500) {
  // This is a base64 encoded minimal 500x500 PNG with dark background
  // Created using: node -e "console.log(require('fs').readFileSync('placeholder.png', 'base64'))"
  // For now, we'll create a simple SVG-based placeholder
  return Buffer.from(`data:image/svg+xml;base64,${Buffer.from(createSVGContent()).toString('base64')}`);
}

function createSVGContent() {
  return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0b0b0b;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="500" height="500" fill="url(#grad1)"/>
  <polygon points="250,80 380,250 250,420 120,250" fill="#D4AF37" opacity="0.7"/>
  <circle cx="250" cy="120" r="8" fill="#E5C158" opacity="0.9"/>
  <circle cx="340" cy="250" r="6" fill="#E5C158" opacity="0.9"/>
  <circle cx="160" cy="250" r="5" fill="#E5C158" opacity="0.9"/>
</svg>`;
}

// Create PNG files from base64 data
const pngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADn4bwAAAAJcEhZcwAACEgAAAhIAeJTMiwAAADsSURBVHic7dExAQAAAMCoP7V3K4ED6QIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4NDxQAAYWrLfAAAAAElFTkSuQmCC';

products.forEach(product => {
  try {
    const pngPath = path.join(placeholdersDir, `${product.name}.png`);
    const buffer = Buffer.from(pngBase64, 'base64');
    fs.writeFileSync(pngPath, buffer);
    console.log(`✓ Created ${product.name}.png`);
  } catch (err) {
    console.error(`✗ Error creating ${product.name}.png:`, err.message);
  }
});

console.log(`\n✅ Generated ${products.length} placeholder PNG images`);
