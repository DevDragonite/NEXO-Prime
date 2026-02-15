'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Flame, MapPin, ChefHat } from 'lucide-react';
import Image from 'next/image';
import { MenuItem } from '@/types/database';

interface MenuItemModalProps {
    item: MenuItem | null;
    onClose: () => void;
}

export function MenuItemModal({ item, onClose }: MenuItemModalProps) {
    if (!item) return null;

    return (
        <AnimatePresence>
            {item && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-[#1a1a1a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl pointer-events-auto flex flex-col md:flex-row">

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 relative h-64 md:h-auto min-h-[300px]">
                                <Image
                                    src={item.image_url}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent md:bg-gradient-to-r" />
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-white/20 transition-colors md:hidden"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-8 relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors hidden md:block"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-3 py-1 bg-[#bea98e]/10 text-[#bea98e] text-xs font-bold tracking-widest uppercase rounded-full border border-[#bea98e]/20">
                                                {item.category}
                                            </span>
                                            {item.origin && (
                                                <span className="flex items-center gap-1 text-gray-400 text-xs uppercase tracking-wider">
                                                    <MapPin className="w-3 h-3" /> {item.origin}
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">{item.name}</h2>
                                        <p className="text-2xl text-[#bea98e] font-bold">${item.price}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {item.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/10">
                                            <div className="flex items-start gap-3">
                                                <Flame className="w-5 h-5 text-[#bea98e] mt-1" />
                                                <div>
                                                    <h4 className="text-white font-bold text-sm">Preparación</h4>
                                                    <p className="text-gray-400 text-xs">Técnicas de vanguardia y cocción precisa.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <ChefHat className="w-5 h-5 text-[#bea98e] mt-1" />
                                                <div>
                                                    <h4 className="text-white font-bold text-sm">Chef's Note</h4>
                                                    <p className="text-gray-400 text-xs">Recomendamos maridaje con nuestra selección de vinos.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full py-4 bg-[#bea98e] hover:bg-[#a38f75] text-black font-bold rounded-xl transition-all shadow-lg shadow-[#bea98e]/10 uppercase tracking-widest text-sm">
                                        Agregar a la Orden
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
