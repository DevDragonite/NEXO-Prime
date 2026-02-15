'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Network, Flame, Layers, Box, ShieldCheck, Thermometer, ScanLine } from 'lucide-react';

export type InnovationType = 'BLOCKCHAIN' | 'MATURATION' | 'IMMERSIVE' | null;

interface InnovationModalProps {
    type: InnovationType;
    onClose: () => void;
}

const CONTENT = {
    BLOCKCHAIN: {
        title: 'Trazabilidad Blockchain',
        icon: Network,
        color: '#bea98e',
        description: 'Cada corte en NEXO PRIME cuenta con un certificado digital único (NFT) que garantiza su origen y calidad.',
        details: [
            { icon: ScanLine, title: 'Origen Certificado', text: 'Escanea el código QR en tu mesa para ver la granja exacta en Kagoshima o USA.' },
            { icon: ShieldCheck, title: 'Inmutable', text: 'El historial de temperatura y transporte se registra en la blockchain, imposible de alterar.' },
            { icon: Box, title: 'Tokenización', text: 'Posibilidad de adquirir cortes exclusivos como activos digitales antes de su consumo.' }
        ],
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2070' // Blockchain/Tech abstract
    },
    MATURATION: {
        title: 'Maduración Controlada',
        icon: Flame,
        color: '#bea98e',
        description: 'Nuestras cámaras de Dry Aged utilizan inteligencia artificial para monitorear humedad y temperatura 24/7.',
        details: [
            { icon: Thermometer, title: 'Control IA', text: 'Sensores IoT ajustan el microclima cada segundo para una maduración perfecta.' },
            { icon: Box, title: 'Sal del Himalaya', text: 'Paredes recubiertas de bloques de sal que purifican el aire e intensifican el sabor.' },
            { icon: ScanLine, title: 'Proceso Visible', text: 'Cámaras de exhibición donde puedes ver la evolución de tu corte reservado.' }
        ],
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=2070' // Steak aging/raw
    },
    IMMERSIVE: {
        title: 'Experiencia Inmersiva',
        icon: Layers,
        color: '#bea98e',
        description: 'La cena se convierte en espectáculo. Tecnología de proyección y realidad aumentada en tu propia mesa.',
        details: [
            { icon: ScanLine, title: 'Menú AR', text: 'Visualiza los platos en 3D sobre tu plato antes de ordenar usando nuestros iPads Pro.' },
            { icon: Flame, title: 'Chef\'s Table Virtual', text: 'Proyecciones mapping sobre la mesa te muestran la preparación de tu plato.' },
            { icon: Network, title: 'Ambiente Reactivo', text: 'La iluminación y música se adaptan al ritmo de la velada y los platos servidos.' }
        ],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070' // Future/Tech vibe
    }
};

export function InnovationModal({ type, onClose }: InnovationModalProps) {
    if (!type) return null;

    const content = CONTENT[type];
    const Icon = content.icon;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#121212] w-full max-w-3xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-white/20 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Image Side */}
                    <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                        <img
                            src={content.image}
                            alt={content.title}
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r" />
                        <div className="absolute bottom-8 left-8">
                            <div className="p-3 bg-[#bea98e]/10 rounded-xl mb-4 w-fit border border-[#bea98e]/20">
                                <Icon className="w-8 h-8 text-[#bea98e]" />
                            </div>
                            <h2 className="text-3xl font-serif text-white font-bold">{content.title}</h2>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#121212]">
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            {content.description}
                        </p>

                        <div className="grid gap-6">
                            {content.details.map((detail, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#bea98e]/20 transition-colors">
                                    <div className="mt-1">
                                        <detail.icon className="w-5 h-5 text-[#bea98e]" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{detail.title}</h4>
                                        <p className="text-sm text-gray-400">{detail.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <button onClick={onClose} className="text-[#bea98e] text-sm hover:text-white transition-colors flex items-center gap-2">
                                <ScanLine className="w-4 h-4" /> VERIFICAR TECNOLOGÍA EN PERSONA
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
