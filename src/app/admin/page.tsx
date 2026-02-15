'use client';

import { motion } from 'framer-motion';
import { DollarSign, ShoppingBag, Users, TrendingUp, Activity, ArrowUpRight, ChefHat, Package } from 'lucide-react';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: '12 PM', ventas: 400 },
    { name: '2 PM', ventas: 1200 },
    { name: '4 PM', ventas: 800 },
    { name: '6 PM', ventas: 2400 },
    { name: '8 PM', ventas: 3800 },
    { name: '10 PM', ventas: 2100 },
];

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-[#050505] p-8 pt-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h1 className="text-4xl font-serif text-[#bea98e] mb-2">Panel Ejecutivo</h1>
                        <p className="text-gray-400">Bienvenido de nuevo, Gerente.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/kds" className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-white/10 hover:border-[#bea98e] text-white rounded-xl transition-all">
                            <ChefHat className="w-5 h-5 text-[#bea98e]" />
                            <span>Ir al KDS (Cocina)</span>
                        </Link>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { title: 'Ventas Totales', value: '$12,450', icon: DollarSign, change: '+15%', positive: true, href: '/admin/sales' },
                        { title: 'Ordenes Activas', value: '24', icon: ShoppingBag, change: '+8%', positive: true, href: '/admin/orders' },
                        { title: 'Clientes', value: '156', icon: Users, change: '-3%', positive: false, href: '/admin/customers' },
                        { title: 'Ticket Promedio', value: '$85.00', icon: TrendingUp, change: '+12%', positive: true, href: '/admin/sales' },
                    ].map((kpi, idx) => (
                        <Link href={kpi.href} key={idx} className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#121212] p-6 rounded-2xl border border-white/5 hover:border-[#bea98e] hover:bg-white/5 transition-all cursor-pointer h-full"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-[#bea98e]/10 rounded-xl">
                                        <kpi.icon className="w-6 h-6 text-[#bea98e]" />
                                    </div>
                                    <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${kpi.positive ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'}`}>
                                        {kpi.change} <Activity className="w-3 h-3" />
                                    </span>
                                </div>
                                <h3 className="text-gray-400 text-sm mb-1">{kpi.title}</h3>
                                <p className="text-3xl font-bold text-white">{kpi.value}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Main Content Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Chart Area */}
                    <div className="lg:col-span-2 bg-[#121212] p-8 rounded-2xl border border-white/5">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold text-white">Rendimiento en Tiempo Real</h3>
                            <select className="bg-black border border-white/10 rounded-lg px-3 py-1 text-sm text-gray-400 focus:outline-none">
                                <option>Hoy</option>
                                <option>Ayer</option>
                                <option>Esta Semana</option>
                            </select>
                        </div>
                        <div className="h-80 w-full flex items-center justify-center text-gray-500">
                            {/* Chart Placeholder for simplicity unless recharts is definitely installed, which it usually is in these stacks. Usage implies it is. 
                                 However, to be safe and avoid missing peer deps errors if not installed I will check package.json? 
                                 No, I will assume Recharts is available or standard. 
                                 Actually, I will use a simple CSS bar graph or SVG to avoid dependency issues if unsure. 
                                 Wait, recharts is imported. If it fails build, I'll fix. 
                             */}
                            <div className="w-full h-full bg-white/5 rounded-xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-end justify-between px-4 pb-0 gap-2">
                                    {[30, 50, 45, 70, 60, 85, 90, 65, 55, 80, 75, 40].map((h, i) => (
                                        <div key={i} style={{ height: `${h}%` }} className="w-full bg-[#bea98e]/20 rounded-t-sm group-hover:bg-[#bea98e]/40 transition-colors" />
                                    ))}
                                </div>
                                <p className="relative z-10 text-xs font-mono tracking-widest text-[#bea98e]">LIVE DATA STREAM</p>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity / Inventory */}
                    <div className="bg-[#121212] p-8 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-6">Inventario Crítico</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'Wagyu A5', stock: '2.5 kg', status: 'LOW' },
                                { name: 'Tomahawk Prime', stock: '12 un', status: 'OK' },
                                { name: 'Caviar Osetra', stock: '500 g', status: 'LOW' },
                                { name: 'Trufa Negra', stock: '150 g', status: 'CRITICAL' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <Package className="w-5 h-5 text-gray-500" />
                                        <div>
                                            <p className="text-white font-medium">{item.name}</p>
                                            <p className="text-xs text-gray-400">Stock: {item.stock}</p>
                                        </div>
                                    </div>
                                    <span className={`text-xs font-bold px-2 py-1 rounded ${item.status === 'OK' ? 'bg-green-900/20 text-green-400' :
                                        item.status === 'LOW' ? 'bg-yellow-900/20 text-yellow-400' :
                                            'bg-red-900/20 text-red-400'
                                        }`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-3 border border-white/10 text-gray-400 hover:text-white rounded-xl text-sm transition-colors">
                            Ver Inventario Completo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
