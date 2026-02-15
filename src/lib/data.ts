import { MenuItem } from '@/types/database';

export const MENU_ITEMS: MenuItem[] = [
    // --- ENTRADAS SENSORIALES ---
    {
        id: '1',
        name: 'Gold Wagyu Tartare',
        description: 'Caviar Osetra, yema curada en soja, lámina de oro 24k comestible.',
        price: 32.00,
        category: 'Entradas Sensoriales',
        type: 'STARTER',
        origin: 'Kagoshima, JP',
        image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=2070', // RESTORED original
    },
    {
        id: '2',
        name: 'Burrata Molecular',
        description: 'Espuma de tomate orgánico, tierra de aceituna negra, humo de romero en mesa.',
        price: 24.00,
        category: 'Entradas Sensoriales',
        type: 'STARTER',
        origin: 'Puglia, IT',
        image_url: 'https://images.unsplash.com/photo-1568471173242-461f0a730523?auto=format&fit=crop&q=80&w=2070', // NEW VALID URL
    },
    {
        id: '3',
        name: 'Tuétano a la Brasa',
        description: 'Canoas de hueso asado, tostadas de masa madre, gremolata cítrica y sal maldón.',
        price: 20.00,
        category: 'Entradas Sensoriales',
        type: 'STARTER',
        origin: 'Nacional AAAA',
        image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2069',
    },
    // ... items ...
    // --- CORTES NACIONALES (VENEZUELA) ---
    {
        id: '201',
        name: 'Solomo de Cuerito Santa Bárbara',
        description: 'Corte clásico zuliano, grasa externa crocante, sabor intenso de pastura.',
        price: 35.00,
        category: 'Cortes Nacionales',
        type: 'MEAT',
        origin: 'Zulia, VZLA',
        image_url: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80&w=2070', // NEW VALID URL
    },
    {
        id: '202',
        name: 'Punta Trasera Carora (800g)',
        description: 'La reina de la parrilla venezolana. Ganado caroreño de libre pastoreo.',
        price: 45.00,
        category: 'Cortes Nacionales',
        type: 'MEAT',
        origin: 'Lara, VZLA',
        image_url: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=2070',
    },
    {
        id: '203',
        name: 'Lomito Viche (300g)',
        description: 'La pieza más tierna, envuelta en tocineta artesanal ahumada.',
        price: 38.00,
        category: 'Cortes Nacionales',
        type: 'MEAT',
        origin: 'Llanos, VZLA',
        image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=2070', // NEW VALID URL
    },

    // --- COCTELERÍA DE AUTOR ---
    {
        id: '7',
        name: 'The Ledger',
        description: 'Bourbon lavado en grasa de Wagyu (Fat-washed), maple ahumado, bitter de cacao.',
        price: 22.00,
        category: 'Coctelería de Autor',
        type: 'DRINK',
        origin: 'Signature',
        image_url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070',
    },
    {
        id: '8',
        name: 'Crypto Mule',
        description: 'Vodka premium, cordial de jengibre y cúrcuma, polvo de oro, top de soda.',
        price: 18.00,
        category: 'Coctelería de Autor',
        type: 'DRINK',
        origin: 'Signature',
        image_url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=2070',
    },
    {
        id: '301',
        name: 'NFT Martini',
        description: 'Gin Tanqueray Ten, Vermouth seco infusionado con algas, aceituna esférica.',
        price: 20.00,
        category: 'Coctelería de Autor',
        type: 'DRINK',
        origin: 'Signature',
        image_url: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&q=80&w=2070',
    },
    {
        id: '302',
        name: 'Metaverse Mojito',
        description: 'Ron Diplomático Planas, hierbabuena nitrógenada, espuma de coco.',
        price: 16.00,
        category: 'Coctelería de Autor',
        type: 'DRINK',
        origin: 'Signature',
        image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=2070',
    },

    // --- COCTELERÍA CLÁSICA ---
    {
        id: '401',
        name: 'Smoked Old Fashioned',
        description: 'Bourbon, azúcar mascabado, angostura, ahumado en campana de roble.',
        price: 16.00,
        category: 'Coctelería Clásica',
        type: 'DRINK',
        origin: 'Classic',
        image_url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=2069',
    },
    {
        id: '402',
        name: 'Negroni Sbagliato',
        description: 'Campari, Vermouth Rosso, Prosecco. "Un error perfecto".',
        price: 15.00,
        category: 'Coctelería Clásica',
        type: 'DRINK',
        origin: 'Classic',
        image_url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=2070',
    },
    {
        id: '403',
        name: 'Margarita Patron',
        description: 'Tequila Patron Silver, Cointreau, lima fresca, borde de sal negra.',
        price: 18.00,
        category: 'Coctelería Clásica',
        type: 'DRINK',
        origin: 'Classic',
        image_url: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=2070', // UPDATED: Classic Lime Margarita
    },
];
