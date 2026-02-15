'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, DollarSign, TrendingUp, Calendar } from 'lucide-react';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const salesData = [
    { name: 'Lun', ventas: 4000 },
    { name: 'Mar', ventas: 3000 },
    { name: 'Mie', ventas: 2000 },
    { name: 'Jue', ventas: 2780 },
    { name: 'Vie', ventas: 1890 },
    { name: 'Sab', ventas: 2390 },
    { name: 'Dom', ventas: 3490 },
];

const hourlyData = [
    { name: '12 PM', ventas: 1200 },
    { name: '1 PM', ventas: 1400 },
    { name: '2 PM', ventas: 1800 },
    { name: '3 PM', ventas: 1100 },
    { name: '4 PM', ventas: 900 },
    { name: '5 PM', ventas: 1500 },
    { name: '6 PM', ventas: 2200 },
    { name: '7 PM', ventas: 3100 },
    { name: '8 PM', ventas: 3800 },
    { name: '9 PM', ventas: 3400 },
    { name: '10 PM', ventas: 2500 },
];

export default function SalesDetails() {
    return (
        <div className="min-h-screen bg-[#050505] p-8 pt-24 text-white">
            <div className="max-w-7xl mx-auto">
                <Link href="/admin" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Volver al Panel
                </Link>

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif text-[#bea98e]">Detalle de Ventas</h1>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-white/5 rounded-lg text-sm border border-white/10 flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Hoy
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-[#121212] p-6 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-[#bea98e]" /> Ventas por Hora
                        </h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={hourlyData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis dataKey="name" stroke="#666" />
                                    <YAxis stroke="#666" />
                                    <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                                    <Bar dataKey="ventas" fill="#bea98e" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-[#121212] p-6 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-[#bea98e]" /> Tendencia Semanal
                        </h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={salesData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis dataKey="name" stroke="#666" />
                                    <YAxis stroke="#666" />
                                    <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                                    <Line type="monotone" dataKey="ventas" stroke="#bea98e" strokeWidth={2} dot={{ fill: '#bea98e' }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden">
                    <div className="p-6 border-b border-white/5">
                        <h3 className="text-lg font-bold">Transacciones Recientes</h3>
                    </div>
                    <div className="p-6">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="pb-3 text-white">ID</th>
                                    <th className="pb-3 text-white">Hora</th>
                                    <th className="pb-3 text-white">Metodo</th>
                                    <th className="pb-3 text-white text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                                        <td className="py-3 text-[#bea98e]">#ORD-00{i}</td>
                                        <td className="py-3">12:3{i} PM</td>
                                        <td className="py-3">Visa •••• 4242</td>
                                        <td className="py-3 text-right text-white font-mono">$1{i}5.00</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
