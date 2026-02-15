import { MenuItem } from '@/types/database';

export const MENU_ITEMS = [
    // Entradas
    {
        id: '1',
        name: 'Gold Wagyu Tartare',
        description: 'Caviar, yema curada, lámina de oro 24k.',
        price: 28.00,
        category: 'Entradas Sensoriales',
        type: 'STARTER',
        origin: 'Kagoshima, JP',
        image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=2070',
    },
    {
        id: '2',
        name: 'Burrata Molecular',
        description: 'Espuma de tomate, tierra de aceituna, humo de romero.',
        price: 22.00,
        category: 'Entradas Sensoriales',
        type: 'STARTER',
        origin: 'Puglia, IT',
        image_url: 'https://images.unsplash.com/photo-1599389974254-08eb41e86d79?auto=format&fit=crop&q=80&w=2070',
    },
    {
        id: '3',
        name: 'Tuétano a la Brasa',
        description: 'Con tostadas de masa madre y gremolata.',
        price: 18.00,
        category: 'Entradas Sensoriales',
        type: 'STARTER',
        origin: 'Nacional AAAA',
        image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2069',
    },

    // Cortes Premium
    {
        id: '4',
        name: 'Tomahawk "Prime" (1.2kg)',
        description: 'Madurado 45 días en cámara de sal del Himalaya.',
        price: 120.00,
        category: 'Cortes Premium',
        type: 'MEAT',
        origin: 'Angus Prime, USA',
        image_url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=2070',
    },
    {
        id: '5',
        name: 'Wagyu A5 Kagoshima (200g)',
        description: 'Servido con piedra caliente (Ishiyaki).',
        price: 150.00,
        category: 'Cortes Premium',
        type: 'MEAT',
        origin: 'Kagoshima, JP',
        image_url: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3e69b?auto=format&fit=crop&q=80&w=2070',
    },
    {
        id: '6',
        name: 'Ribeye Angus Gold',
        description: 'Inyectado con mantequilla de trufa.',
        price: 65.00,
        category: 'Cortes Premium',
        type: 'MEAT',
        origin: 'Angus Certified',
        image_url: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=2070',
    },

    // Coctelería
    {
        id: '7',
        name: 'The Ledger',
        description: 'Bourbon lavado en grasa de Wagyu, maple, bitter.',
        price: 18.00,
        category: 'Coctelería de Autor',
        type: 'DRINK',
        origin: null,
        image_url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070',
    },
    {
        id: '8',
        name: 'Crypto Mule',
        description: 'Vodka premium, jengibre casero, polvo de oro.',
        price: 16.00,
        category: 'Coctelería de Autor',
        type: 'DRINK',
        origin: null,
        image_url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=2070',
    },
];
