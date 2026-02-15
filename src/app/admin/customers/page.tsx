'use client';

import { ArrowLeft, Search, Mail, Phone, Star, User } from 'lucide-react';
import Link from 'next/link';

const customers = [
    { id: 1, name: 'Carlos Mendoza', email: 'carlos@example.com', visits: 12, spent: '$1,450', tier: 'PLATINUM' },
    { id: 2, name: 'Valentina Rojas', email: 'valen@example.com', visits: 5, spent: '$680', tier: 'GOLD' },
    { id: 3, name: 'Andres Silva', email: 'andres@example.com', visits: 2, spent: '$180', tier: 'SILVER' },
    { id: 4, name: 'Sofia P.', email: 'sofia@example.com', visits: 8, spent: '$920', tier: 'GOLD' },
];

export default function CustomersDetails() {
    return (
        <div className="min-h-screen bg-[#050505] p-8 pt-24 text-white">
            <div className="max-w-7xl mx-auto">
                <Link href="/admin" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Volver al Panel
                </Link>

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif text-[#bea98e]">Clientes (CRM)</h1>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Buscar cliente..."
                            className="pl-10 pr-4 py-2 bg-[#121212] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#bea98e]"
                        />
                    </div>
                </div>

                <div className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-gray-400">
                            <tr>
                                <th className="p-4">Cliente</th>
                                <th className="p-4">Contacto</th>
                                <th className="p-4 text-center">Nivel</th>
                                <th className="p-4 text-right">Visitas</th>
                                <th className="p-4 text-right">Gasto Total</th>
                                <th className="p-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-gray-300">
                            {customers.map((c) => (
                                <tr key={c.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#bea98e]/20 flex items-center justify-center text-[#bea98e]">
                                                <User className="w-4 h-4" />
                                            </div>
                                            <span className="font-bold text-white">{c.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col gap-1 text-xs">
                                            <span className="flex items-center gap-2"><Mail className="w-3 h-3" /> {c.email}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${c.tier === 'PLATINUM' ? 'bg-purple-900/30 text-purple-400 border border-purple-500/30' :
                                            c.tier === 'GOLD' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/30' :
                                                'bg-gray-800 text-gray-400'
                                            }`}>
                                            {c.tier}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">{c.visits}</td>
                                    <td className="p-4 text-right font-mono text-white">{c.spent}</td>
                                    <td className="p-4 text-center">
                                        <button className="text-[#bea98e] hover:underline text-xs">Ver Perfil</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
