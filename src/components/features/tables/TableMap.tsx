'use client';

import { motion } from 'framer-motion';
import { Table } from '@/types/database';
import { TableNode } from './TableNode';

interface TableMapProps {
    tables: Table[];
    onTableSelect: (table: Table) => void;
}

export function TableMap({ tables, onTableSelect }: TableMapProps) {
    return (
        <div className="relative w-full h-[600px] bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Floor Plan Background (Grid Pattern) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #bea98e 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Architectural Elements (Walls/Zones) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Main Entrance */}
                <div className="absolute top-[90%] left-[50%] -translate-x-1/2 text-white/20 text-xs tracking-[0.5em] font-bold">
                    ENTRADA PRINCIPAL
                </div>

                {/* Kitchen Area */}
                <div className="absolute top-5 left-5 w-[150px] h-[100px] border border-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/20 text-xs tracking-widest">COCINA</span>
                </div>

                {/* Bar Area */}
                <div className="absolute top-5 right-5 w-[120px] h-[150px] border border-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/20 text-xs tracking-widest rotate-90">BAR</span>
                </div>
            </div>

            {/* Tables Layer */}
            <div className="relative w-full h-full">
                {tables.map((table) => (
                    <TableNode
                        key={table.id}
                        table={table}
                        onSelect={onTableSelect}
                    />
                ))}
            </div>
        </div>
    );
}
