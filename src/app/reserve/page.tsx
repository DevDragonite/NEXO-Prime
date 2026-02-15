'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TableMap } from '@/components/features/tables/TableMap';
import { useTables } from '@/hooks/useTables';
import { Table } from '@/types/database';
import { X, Users, Clock, CreditCard, ChefHat, Music, GlassWater, ArrowLeft, Calendar } from 'lucide-react';

type ExperienceType = 'DINING' | 'EVENTS' | 'SHOW' | null;

export default function ReservePage() {
    const { tables } = useTables();
    const [selectedTable, setSelectedTable] = useState<Table | null>(null);
    const [selectedExperience, setSelectedExperience] = useState<ExperienceType>(null);

    const handleTableClick = (table: Table) => {
        setSelectedTable(table);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-[#0c0c0c] pt-10">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-serif text-[#bea98e] mb-4">
                    {selectedExperience === 'DINING' ? 'Selecciona tu Mesa' :
                        selectedExperience === 'EVENTS' ? 'Eventos Privados' :
                            selectedExperience === 'SHOW' ? 'Prime Show' : 'Elige tu Experiencia'}
                </h1>
                {selectedExperience && (
                    <button
                        onClick={() => setSelectedExperience(null)}
                        className="flex items-center gap-2 mx-auto text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Volver a experiencias
                    </button>
                )}
            </div>

            {/* EXPERIENCE SELECTOR */}
            {!selectedExperience && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 h-[60vh] items-center"
                >
                    {/* Card 1: Dining */}
                    <motion.div variants={itemVariants} onClick={() => setSelectedExperience('DINING')} className="group relative h-96 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-[#bea98e]/50 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070" alt="Dining" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                        <div className="absolute bottom-0 p-8 z-20 w-full">
                            <ChefHat className="w-10 h-10 text-[#bea98e] mb-4" />
                            <h3 className="text-2xl font-serif text-white mb-2">Cena NEXO</h3>
                            <p className="text-gray-400 text-sm">Reserva una mesa estándar para disfrutar de nuestra carta de carnes y coctelería.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Private Events */}
                    <motion.div variants={itemVariants} onClick={() => setSelectedExperience('EVENTS')} className="group relative h-96 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-[#bea98e]/50 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2070" alt="Private" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                        <div className="absolute bottom-0 p-8 z-20 w-full">
                            <GlassWater className="w-10 h-10 text-[#bea98e] mb-4" />
                            <h3 className="text-2xl font-serif text-white mb-2">The Vault</h3>
                            <p className="text-gray-400 text-sm">Salones privados y eventos corporativos. Privacidad absoluta y servicio personalizado.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Shows */}
                    <motion.div variants={itemVariants} onClick={() => setSelectedExperience('SHOW')} className="group relative h-96 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-[#bea98e]/50 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <img src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=2070" alt="Show" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                        <div className="absolute bottom-0 p-8 z-20 w-full">
                            <Music className="w-10 h-10 text-[#bea98e] mb-4" />
                            <h3 className="text-2xl font-serif text-white mb-2">Prime Show</h3>
                            <p className="text-gray-400 text-sm">Mesas con vista privilegiada para nuestros espectáculos de música en vivo y fuego.</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* DINING VIEW (Table Map) */}
            {selectedExperience === 'DINING' && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex flex-col lg:flex-row h-[80vh] border-t border-white/10"
                >
                    <div className="flex-1 bg-[#121212] relative overflow-hidden">
                        <TableMap tables={tables} onTableSelect={handleTableClick} />
                        <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs text-center text-gray-400 pointer-events-none md:pointer-events-auto">
                            <div className="flex justify-center gap-6">
                                <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div> Disponible</span>
                                <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div> Ocupada</span>
                                <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div> Reservada</span>
                            </div>
                        </div>
                    </div>

                    <AnimatePresence mode='wait'>
                        {selectedTable ? (
                            <motion.div
                                key="details"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                className="w-full lg:w-96 bg-[#0c0c0c] border-l border-white/10 p-8 overflow-y-auto"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h2 className="text-3xl font-serif text-white">{selectedTable.label}</h2>
                                        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold ${selectedTable.status === 'FREE' ? 'bg-green-900/30 text-green-400' :
                                            selectedTable.status === 'OCCUPIED' ? 'bg-red-900/30 text-red-400' : 'bg-yellow-900/30 text-yellow-400'
                                            }`}>
                                            {selectedTable.status === 'FREE' ? 'DISPONIBLE' : selectedTable.status === 'OCCUPIED' ? 'OCUPADA' : 'RESERVADA'}
                                        </span>
                                    </div>
                                    <button onClick={() => setSelectedTable(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                        <X className="w-6 h-6 text-gray-400" />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-gray-300">
                                            <Users className="w-5 h-5 text-[#bea98e]" />
                                            <span>Capacidad: {selectedTable.capacity} Personas</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-gray-300">
                                            <Clock className="w-5 h-5 text-[#bea98e]" />
                                            <span>Turno: Cena (7:00 PM - 1:00 AM)</span>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/10">
                                        <button className="w-full py-4 bg-[#bea98e] hover:bg-[#a38f75] text-black font-bold rounded-xl transition-all shadow-lg shadow-[#bea98e]/10">
                                            CONFIRMAR RESERVA
                                        </button>
                                        <p className="mt-4 text-xs text-center text-gray-500">
                                            Se requiere un depósito de garantía de $50 USD.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="hidden lg:flex w-96 items-center justify-center p-8 bg-[#0c0c0c] border-l border-white/10 text-center"
                            >
                                <div>
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                                        <ChefHat className="w-8 h-8 text-gray-600" />
                                    </div>
                                    <p className="text-gray-500">Selecciona una mesa en el mapa para ver detalles y reservar.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}

            {/* EVENTS VIEW */}
            {selectedExperience === 'EVENTS' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto px-4 py-12">
                    <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-serif text-white mb-6">Solicitud de Evento Privado</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#bea98e] focus:outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#bea98e] focus:outline-none transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Tipo de Evento</label>
                                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#bea98e] focus:outline-none transition-colors">
                                    <option>Cena Corporativa</option>
                                    <option>Celebración Privada</option>
                                    <option>Lanzamiento de Producto</option>
                                </select>
                            </div>
                            <button className="w-full py-4 bg-[#bea98e] text-black font-bold rounded-xl hover:bg-[#a38f75] transition-colors">
                                ENVIAR SOLICITUD
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}

            {/* SHOW VIEW */}
            {selectedExperience === 'SHOW' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <div className="mb-12">
                        <Music className="w-16 h-16 text-[#bea98e] mx-auto mb-6" />
                        <h2 className="text-3xl font-serif text-white mb-4">Próximos Espectáculos</h2>
                        <p className="text-gray-400">Reserva tu mesa para disfrutar de la experiencia Meat & Meta en vivo.</p>
                    </div>

                    <div className="grid gap-6">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-center bg-[#1a1a1a] p-6 rounded-xl border border-white/10 hover:border-[#bea98e] transition-colors cursor-pointer group">
                                <div className="flex-1 text-left mb-4 md:mb-0">
                                    <div className="flex items-center gap-3 text-[#bea98e] mb-2 font-mono text-sm">
                                        <Calendar className="w-4 h-4" /> 2{i} de Octubre • 9:00 PM
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Noche de Jazz & Wagyu</h3>
                                    <p className="text-gray-500 text-sm">Con la banda "The Prime Cuts".</p>
                                </div>
                                <button className="px-6 py-2 border border-[#bea98e] text-[#bea98e] rounded-lg font-bold group-hover:bg-[#bea98e] group-hover:text-black transition-all">
                                    RESERVAR ($50 pp)
                                </button>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
}
