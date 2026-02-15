'use client';

import { useState, useEffect } from 'react';
import { Table, TableStatus } from '@/types/database';

// Mock Data inicial
const INITIAL_TABLES: Table[] = [
    { id: '1', label: 'Mesa 1', status: 'FREE', capacity: 4, position_x: 10, position_y: 10, shape: 'circle' },
    { id: '2', label: 'Mesa 2', status: 'OCCUPIED', capacity: 4, position_x: 10, position_y: 40, shape: 'circle' },
    { id: '3', label: 'Mesa 3', status: 'DESSERT', capacity: 4, position_x: 10, position_y: 70, shape: 'circle' },
    { id: '4', label: 'Mesa 4', status: 'FREE', capacity: 6, position_x: 40, position_y: 20, shape: 'rect' },
    { id: '5', label: 'Mesa 5', status: 'PAYING', capacity: 6, position_x: 40, position_y: 50, shape: 'rect' },
    { id: '6', label: 'VIP 1', status: 'FREE', capacity: 8, position_x: 80, position_y: 20, shape: 'rect' },
    { id: '7', label: 'Terraza 1', status: 'FREE', capacity: 2, position_x: 80, position_y: 60, shape: 'circle' },
    { id: '8', label: 'Terraza 2', status: 'OCUPPIED', capacity: 2, position_x: 80, position_y: 80, shape: 'circle' },
];

export function useTables() {
    const [tables, setTables] = useState<Table[]>(INITIAL_TABLES);

    // Simular actualizaciones realtime
    const updateTableStatus = (tableId: string, newStatus: TableStatus) => {
        setTables(prev => prev.map(t =>
            t.id === tableId ? { ...t, status: newStatus } : t
        ));
    };

    return {
        tables,
        updateTableStatus,
        isLoading: false
    };
}
