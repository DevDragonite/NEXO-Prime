'use client';

import { useOrders, OrderStatus } from '@/hooks/useOrders';
import { Clock, CheckCircle, Flame, ChefHat, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const statusColors: Record<OrderStatus, string> = {
    PENDING: 'border-yellow-500/50 bg-yellow-500/10',
    COOKING: 'border-orange-500/50 bg-orange-500/10',
    READY: 'border-green-500/50 bg-green-500/10',
    DELIVERED: 'border-gray-500/50 bg-gray-500/10 opacity-50',
};

export default function KDSPage() {
    const { orders, updateOrderStatus } = useOrders();

    // Filter out delivered orders for active view
    const activeOrders = orders.filter(o => o.status !== 'DELIVERED');

    return (
        <div className="min-h-screen bg-[#0c0c0c] py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <Link href="/admin" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Volver al Panel
                        </Link>
                        <h1 className="text-3xl font-serif text-white flex items-center gap-3">
                            <ChefHat className="text-[#bea98e]" />
                            Kitchen Display System
                        </h1>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500" /> Pendiente</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500" /> En Fuego</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> Listo</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {activeOrders.map((order) => (
                            <motion.div
                                layout
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                key={order.id}
                                className={`rounded-xl border p-4 ${statusColors[order.status]} flex flex-col h-full`}
                            >
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4 pb-2 border-b border-white/10">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{order.tableLabel}</h3>
                                        <span className="text-xs text-gray-400">Mesonero: {order.waiterName}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-gray-400 block">Hace 5 min</span>
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-black/30 text-white inline-block mt-1">
                                            #{order.id.slice(-4)}
                                        </span>
                                    </div>
                                </div>

                                {/* Items */}
                                <div className="flex-1 space-y-3 mb-6">
                                    {order.items.map((item) => (
                                        <div key={item.id} className="flex justify-between items-start text-sm">
                                            <div className="flex gap-2">
                                                <span className="font-bold text-[#bea98e]">{item.quantity}x</span>
                                                <div>
                                                    <span className="text-gray-200 block">{item.menuItem.name}</span>
                                                    {item.notes && (
                                                        <span className="text-xs text-yellow-500/80 italic">{item.notes}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="mt-auto pt-4 border-t border-white/10">
                                    {order.status === 'PENDING' && (
                                        <button
                                            onClick={() => updateOrderStatus(order.id, 'COOKING')}
                                            className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
                                        >
                                            <Flame className="w-4 h-4" /> MARCAR COCINANDO
                                        </button>
                                    )}
                                    {order.status === 'COOKING' && (
                                        <button
                                            onClick={() => updateOrderStatus(order.id, 'READY')}
                                            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
                                        >
                                            <CheckCircle className="w-4 h-4" /> MARCAR LISTO
                                        </button>
                                    )}
                                    {order.status === 'READY' && (
                                        <div className="w-full py-3 bg-green-900/30 text-green-400 font-bold rounded-lg flex items-center justify-center gap-2 animate-pulse">
                                            <CheckCircle className="w-4 h-4" /> LISTO PARA ENTREGA
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
