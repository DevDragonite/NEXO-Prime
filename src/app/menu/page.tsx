'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '@/lib/data';
import Image from 'next/image';

const categories = ['Todos', 'Cortes Premium', 'Entradas Sensoriales', 'Coctelería de Autor'];

export default function MenuPage() {
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const filteredItems = selectedCategory === 'Todos'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[#0c0c0c] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-serif text-[#bea98e] mb-4">Nuestro Menú</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Una selección curada de los mejores cortes del mundo y mixología de vanguardia.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-[#bea98e] text-black'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className="group bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-[#bea98e]/30 transition-colors"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image_url}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="text-[#bea98e] text-xs font-bold tracking-widest uppercase block mb-1">
                                            {item.origin || 'NEXO Signature'}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-serif text-white group-hover:text-[#bea98e] transition-colors">
                                            {item.name}
                                        </h3>
                                        <span className="text-[#bea98e] font-bold">${item.price}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <button className="w-full py-3 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-[#bea98e] hover:text-black hover:border-transparent transition-all duration-300">
                                        AGREGAR A LA MESA
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
