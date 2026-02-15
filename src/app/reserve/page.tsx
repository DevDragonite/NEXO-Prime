'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTables } from '@/hooks/useTables';
import { TableMap } from '@/components/features/tables/TableMap';
import { Table } from '@/types/database';
import { X, Users, Clock, CreditCard } from 'lucide-react';

export default function ReservePage() {
    const { tables } = useTables();
    const [selectedTable, setSelectedTable] = useState<Table | null>(null);

    return (
        <div className="min-h-screen bg-[#0c0c0c] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* Main Map Area */}
                <div className="flex-1">
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-5xl font-serif text-[#bea98e] mb-2">Plano en Tiempo Real</h1>
                        <p className="text-gray-400">Selecciona una mesa para ver detalles o gestionar su estado.</p>
                    </div>

                    <TableMap
                        tables={tables}
                        onTableSelect={setSelectedTable}
                    />

                    <div className="mt-6 flex gap-4 text-sm text-gray-400 justify-center">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500"></div> Libre</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div> Ocupada</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-500"></div> Postre</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-500"></div> Pagando</div>
                    </div>
                </div>

                {/* Sidebar / Details Panel */}
                <AnimatePresence>
                    {selectedTable && (
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            className="w-full lg:w-96 bg-[#1a1a1a] border border-white/10 rounded-xl p-6 shadow-2xl h-fit sticky top-24"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h2 className="text-2xl font-serif text-white">{selectedTable.label}</h2>
                                <button
                                    onClick={() => setSelectedTable(null)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                {/* Status Indicator */}
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className={`w-3 h-3 rounded-full ${selectedTable.status === 'FREE' ? 'bg-green-500' :
                                            selectedTable.status === 'OCCUPIED' ? 'bg-red-500' :
                                                selectedTable.status === 'DESSERT' ? 'bg-yellow-500' : 'bg-indigo-500'
                                        }`} />
                                    <span className="text-white font-medium uppercase tracking-wider text-sm">{selectedTable.status}</span>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-lg text-center">
                                        <Users className="w-6 h-6 text-[#bea98e] mx-auto mb-2" />
                                        <span className="block text-gray-400 text-xs uppercase">Capacidad</span>
                                        <span className="text-white font-bold text-lg">{selectedTable.capacity} Pers.</span>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-lg text-center">
                                        <Clock className="w-6 h-6 text-[#bea98e] mx-auto mb-2" />
                                        <span className="block text-gray-400 text-xs uppercase">Tiempo</span>
                                        <span className="text-white font-bold text-lg">00:00</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="pt-6 border-t border-white/10 space-y-3">
                                    <button className="w-full py-3 bg-[#bea98e] hover:bg-[#a38f75] text-black font-bold rounded-lg transition-colors">
                                        {selectedTable.status === 'FREE' ? 'RESERVAR AHORA' : 'VER CUENTA'}
                                    </button>
                                    <button className="w-full py-3 border border-white/20 hover:bg-white/10 text-white font-medium rounded-lg transition-colors text-sm">
                                        SOLICITAR MESONERO
                                    </button>
                                </div>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
}
