export interface Product {
    id: string;
    name: string;
    shape: string;
    carat: number;
    color: string;
    clarity: string;
    price: number;
    image: string;
    category: string;
}

export const mockProducts: Product[] = [
    // Engagement Rings (6)
    { id: 'e1', name: 'Eternal Solitaire — 1.5ct Round Brilliant', shape: 'round', carat: 1.5, color: 'D', clarity: 'VVS1', price: 8900, image: '/images/Engagement Rings/Eternal Solitaire -Round Brilliant.png', category: 'engagement' },
    { id: 'e2', name: 'Halo Dream — 2.0ct Cushion Cut', shape: 'cushion', carat: 2.0, color: 'E', clarity: 'VS1', price: 12500, image: '/images/Engagement Rings/Halo Dream —Cushion Cut.png', category: 'engagement' },
    { id: 'e3', name: 'Vintage Romance — 1.8ct Oval Pavé', shape: 'oval', carat: 1.8, color: 'F', clarity: 'VVS2', price: 11200, image: '/images/Engagement Rings/Vintage Romance — Oval Pavé.png', category: 'engagement' },
    { id: 'e4', name: 'Princess Elegance — 1.2ct Princess Cut', shape: 'princess', carat: 1.2, color: 'E', clarity: 'VS1', price: 7800, image: '/images/Engagement Rings/Princess Elegance —Princess Cut.png', category: 'engagement' },
    { id: 'e5', name: 'Emerald Luxe — 2.5ct Emerald Cut', shape: 'emerald', carat: 2.5, color: 'D', clarity: 'VVS1', price: 18500, image: '/images/Engagement Rings/Emerald Luxe —  Emerald Cut.png', category: 'engagement' },
    { id: 'e6', name: 'Three Stone Legacy — 3.0ct Total', shape: 'round', carat: 3.0, color: 'E', clarity: 'VS2', price: 22000, image: '/images/Engagement Rings/Three Stone Legacy —.png', category: 'engagement' },

    // Fine Jewelry (6)
    { id: 'j1', name: 'Radiance Tennis Bracelet — 4.5ct Total', shape: 'bracelet', carat: 4.5, color: 'G', clarity: 'VS2', price: 11200, image: '/images/Fine Jewelry/radiance-tennis-bracelet.png', category: 'jewelry' },
    { id: 'j2', name: 'Lumière Diamond Studs — Classic Stud Earrings', shape: 'earrings', carat: 1.2, color: 'F', clarity: 'VVS1', price: 6800, image: '/images/Fine Jewelry/Lumière Diamond Studs — Classic Stud Earrings.png', category: 'jewelry' },
    { id: 'j3', name: 'Solitaire Pendant — Minimal Gold Pendant', shape: 'pendant', carat: 0.8, color: 'E', clarity: 'VS1', price: 4200, image: '/images/Fine Jewelry/Solitaire Pendant — Minimal Gold Pendant.png', category: 'jewelry' },
    { id: 'j4', name: 'Orbit Hoops — Diamond Hoop Earrings', shape: 'hoops', carat: 1.6, color: 'G', clarity: 'VS2', price: 5400, image: '/images/Fine Jewelry/Orbit Hoops — Diamond Hoop Earrings.png', category: 'jewelry' },
    { id: 'j5', name: 'Bangle of Light — Diamond Bangle', shape: 'bangle', carat: 2.8, color: 'F', clarity: 'VVS2', price: 9800, image: '/images/Fine Jewelry/Bangle of Light — Diamond Bangle.png', category: 'jewelry' },
    { id: 'j6', name: 'Cascade Drops — Diamond Drop Earrings', shape: 'drop', carat: 1.4, color: 'E', clarity: 'VS1', price: 7300, image: '/images/Fine Jewelry/Cascade Drops — Diamond Drop Earrings.png', category: 'jewelry' },

    // Wedding Bands (6)
    { id: 'w1', name: 'Classic Gold Band — Polished Finish', shape: 'band', carat: 0, color: 'N/A', clarity: 'N/A', price: 1200, image: '/images/Wedding Bands/classic-gold-band.png', category: 'wedding' },
    { id: 'w2', name: 'Platinum Channel-Set Diamond Band', shape: 'band', carat: 0.5, color: 'D', clarity: 'VVS1', price: 3800, image: '/images/Wedding Bands/platinum-diamond-channel.png', category: 'wedding' },
    { id: 'w3', name: 'Rose Gold Brushed Matte Band', shape: 'band', carat: 0, color: 'N/A', clarity: 'N/A', price: 1500, image: '/images/Wedding Bands/rose-gold-brushed.png', category: 'wedding' },
    { id: 'w4', name: 'White Gold Pavé Eternity Band', shape: 'band', carat: 1.2, color: 'E', clarity: 'VS1', price: 5200, image: '/images/Wedding Bands/white-gold-pave.png', category: 'wedding' },
    { id: 'w5', name: 'Two-Tone Twisted Rope Band', shape: 'band', carat: 0, color: 'N/A', clarity: 'N/A', price: 1800, image: '/images/Wedding Bands/two-tone-twisted.png', category: 'wedding' },
    { id: 'w6', name: 'Black Titanium Modern Band', shape: 'band', carat: 0, color: 'N/A', clarity: 'N/A', price: 950, image: '/images/Wedding Bands/black-titanium-band.png', category: 'wedding' },

    // Loose Diamonds (expanded to 10)
    { id: 'l1', name: 'Round Brilliant — 2.01ct Lab-Grown', shape: 'round', carat: 2.01, color: 'D', clarity: 'VVS1', price: 4200, image: '/images/Loose Diamonds/round-brilliant.png', category: 'loose' },
    { id: 'l2', name: 'Princess Cut — 1.75ct Lab-Grown', shape: 'princess', carat: 1.75, color: 'E', clarity: 'VS1', price: 3600, image: '/images/Loose Diamonds/princess-cut.png', category: 'loose' },
    { id: 'l3', name: 'Emerald Cut — 2.50ct Lab-Grown', shape: 'emerald', carat: 2.50, color: 'D', clarity: 'VVS2', price: 5100, image: '/images/Loose Diamonds/emerald-cut.png', category: 'loose' },
    { id: 'l4', name: 'Oval Cut — 1.90ct Lab-Grown', shape: 'oval', carat: 1.90, color: 'F', clarity: 'VS1', price: 3900, image: '/images/Loose Diamonds/oval-cut.png', category: 'loose' },
    { id: 'l5', name: 'Cushion Cut — 2.30ct Lab-Grown', shape: 'cushion', carat: 2.30, color: 'E', clarity: 'VVS1', price: 4800, image: '/images/Loose Diamonds/cushion-cut.png', category: 'loose' },
    { id: 'l6', name: 'Pear Cut — 1.60ct Lab-Grown', shape: 'pear', carat: 1.60, color: 'D', clarity: 'VS2', price: 3200, image: '/images/Loose Diamonds/pear-cut.png', category: 'loose' },
    { id: 'l7', name: 'Marquise Majesty — 2.1ct Lab-Grown', shape: 'marquise', carat: 2.1, color: 'E', clarity: 'VVS2', price: 5800, image: '/images/Loose Diamonds/marquise.png', category: 'loose' },
    { id: 'l8', name: 'Heart of Light — 1.2ct Lab-Grown', shape: 'heart', carat: 1.2, color: 'F', clarity: 'VS1', price: 3900, image: '/images/Loose Diamonds/heart.png', category: 'loose' },
    { id: 'l9', name: 'Asscher Allure — 2.0ct Lab-Grown', shape: 'asscher', carat: 2.0, color: 'D', clarity: 'VVS2', price: 6200, image: '/images/Loose Diamonds/asscher.png', category: 'loose' },
    { id: 'l10', name: 'Radiant Glow — 1.8ct Lab-Grown', shape: 'radiant', carat: 1.8, color: 'G', clarity: 'VS1', price: 4100, image: '/images/Loose Diamonds/radiant.png', category: 'loose' },
];
