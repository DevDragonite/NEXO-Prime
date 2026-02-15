'use client';

import { motion } from 'framer-motion';
import { Table, TableStatus } from '@/types/database';
import { User, DollarSign, Coffee, Clock } from 'lucide-react';

interface TableNodeProps {
    table: Table;
    onSelect: (table: Table) => void;
}

const statusColors: Record<TableStatus, string> = {
    FREE: 'bg-green-500/20 border-green-500 text-green-500',
    OCCUPIED: 'bg-red-500/20 border-red-500 text-red-500',
    DESSERT: 'bg-yellow-500/20 border-yellow-500 text-yellow-500',
    PAYING: 'bg-indigo-500/20 border-indigo-500 text-indigo-500',
};

const StatusIcon = ({ status }: { status: TableStatus }) => {
    switch (status) {
        case 'FREE': return <User className="w-4 h-4" />;
        case 'OCCUPIED': return <Clock className="w-4 h-4" />;
        case 'DESSERT': return <Coffee className="w-4 h-4" />;
        case 'PAYING': return <DollarSign className="w-4 h-4" />;
        default: return <User className="w-4 h-4" />;
    }
};

export function TableNode({ table, onSelect }: TableNodeProps) {
    const isCircle = table.shape === 'circle';
    const colorClass = statusColors[table.status] || statusColors['FREE'];

    return (
        <motion.div
            layout
            onClick={() => onSelect(table)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            style={{
                position: 'absolute',
                left: `${table.position_x}%`,
                top: `${table.position_y}%`,
                width: isCircle ? '80px' : '120px',
                height: '80px',
                transform: 'translate(-50%, -50%)', // Centrar nodo
            }}
            className={`
        cursor-pointer backdrop-blur-md border-2 
        flex flex-col items-center justify-center
        transition-colors duration-500
        ${isCircle ? 'rounded-full' : 'rounded-lg'}
        ${colorClass}
        shadow-[0_0_15px_rgba(0,0,0,0.5)]
        hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
      `}
        >
            <div className="flex flex-col items-center gap-1">
                <span className="font-bold text-xs tracking-wider">{table.label}</span>
                <div className="flex items-center gap-1 opacity-80">
                    <StatusIcon status={table.status} />
                    <span className="text-[10px]">{table.capacity}p</span>
                </div>
            </div>

            {/* Pulse effect for active tables */}
            {table.status !== 'FREE' && (
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 ${isCircle ? 'rounded-full' : 'rounded-lg'} border ${colorClass.split(' ')[1]}`}
                />
            )}
        </motion.div>
    );
}
