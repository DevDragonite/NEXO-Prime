'use client';

import { useState, useEffect } from 'react';
import { MenuItem } from '@/types/database';

export type OrderStatus = 'PENDING' | 'COOKING' | 'READY' | 'DELIVERED';

export interface OrderItem {
    id: string;
    menuItem: MenuItem;
    quantity: number;
    notes?: string;
}

export interface Order {
    id: string;
    tableLabel: string;
    waiterName: string;
    status: OrderStatus;
    items: OrderItem[];
    createdAt: Date;
}

const MOCK_ORDERS: Order[] = [
    {
        id: 'ord_1',
        tableLabel: 'Mesa 4',
        waiterName: 'Carlos',
        status: 'PENDING',
        createdAt: new Date(),
        items: [
            {
                id: 'i1',
                quantity: 1,
                menuItem: { id: 'm1', name: 'Tomahawk "Prime"', price: 120, category: 'Cortes', type: 'MEAT', description: '', origin: '', image_url: '' },
                notes: 'Término Medio, Sin sal extra'
            },
            {
                id: 'i2',
                quantity: 2,
                menuItem: { id: 'm2', name: 'Espárragos Grillados', price: 14, category: 'Sides', type: 'SIDE', description: '', origin: '', image_url: '' }
            }
        ]
    },
    {
        id: 'ord_2',
        tableLabel: 'VIP 1',
        waiterName: 'Carlos',
        status: 'COOKING',
        createdAt: new Date(Date.now() - 1000 * 60 * 15), // hace 15 min
        items: [
            {
                id: 'i3',
                quantity: 1,
                menuItem: { id: 'm3', name: 'Wagyu A5', price: 150, category: 'Cortes', type: 'MEAT', description: '', origin: '', image_url: '' },
                notes: 'Piedra muy caliente'
            }
        ]
    }
];

export function useOrders() {
    const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);

    const updateOrderStatus = (orderId: string, status: OrderStatus) => {
        setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
    };

    return { orders, updateOrderStatus };
}
