'use client';

import { ArrowLeft, ShoppingBag, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const orders = [
    { id: '#ORD-001', table: 'Mesa 4', status: 'COOKING', items: ['Tomahawk Prime', 'Vino Tinto'], time: '12:30 PM', total: '$180.00' },
    { id: '#ORD-002', table: 'Mesa 1', status: 'READY', items: ['Carpaccio', 'Negroni'], time: '12:35 PM', total: '$45.00' },
    { id: '#ORD-003', table: 'VIP 2', status: 'PENDING', items: ['Wagyu A5', 'Champagne'], time: '12:40 PM', total: '$420.00' },
    { id: '#ORD-015', table: 'Bar', status: 'DELIVERED', items: ['Margarita', 'Old Fashioned'], time: '12:15 PM', total: '$34.00' },
];

export default function OrdersDetails() {
    return (
        <div className="min-h-screen bg-[#050505] p-8 pt-24 text-white">
            <div className="max-w-7xl mx-auto">
                <Link href="/admin" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Volver al Panel
                </Link>

                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-serif text-[#bea98e]">Órdenes Activas</h1>
                        <p className="text-gray-400 mt-1">Gestión detallada de comandas.</p>
                    </div>
                </div>

                <div className="grid gap-4">
                    {orders.map((order, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={order.id}
                            className="bg-[#121212] p-6 rounded-xl border border-white/5 hover:border-[#bea98e]/30 transition-all flex flex-col md:flex-row justify-between items-center gap-4"
                        >
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <div className={`p-4 rounded-full ${order.status === 'PENDING' ? 'bg-yellow-500/10 text-yellow-500' :
                                    order.status === 'COOKING' ? 'bg-orange-500/10 text-orange-500' :
                                        order.status === 'READY' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'
                                    }`}>
                                    <ShoppingBag className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{order.id} <span className="text-gray-500 text-sm font-normal">• {order.table}</span></h3>
                                    <p className="text-sm text-gray-400">{order.items.join(', ')}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                                <div className="text-right">
                                    <div className="flex items-center gap-2 text-sm text-gray-400 justify-end">
                                        <Clock className="w-4 h-4" /> {order.time}
                                    </div>
                                    <div className="font-mono text-[#bea98e] font-bold">{order.total}</div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${order.status === 'PENDING' ? 'border-yellow-500/20 text-yellow-500 bg-yellow-500/5' :
                                    order.status === 'COOKING' ? 'border-orange-500/20 text-orange-500 bg-orange-500/5' :
                                        order.status === 'READY' ? 'border-green-500/20 text-green-500 bg-green-500/5' : 'border-gray-500/20 text-gray-500 bg-gray-500/5'
                                    }`}>
                                    {order.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
