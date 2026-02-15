'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Flame, Layers, Network } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Video Background Fallback/Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
            alt="Steak grilling"
            fill
            className="object-cover"
            priority
          />
          {/* 
            TODO: Replace with actual <video> tag when asset is available
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/hero-steak.mp4" type="video/mp4" />
            </video>
          */}
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#bea98e] mb-6 tracking-tight"
          >
            MEAT & META
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
          >
            Donde la alta cocina primitiva se encuentra con la tecnología del futuro.
            Experimenta el primer Steakhouse de lujo interactivo en Caracas.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/reserve"
              className="px-8 py-4 bg-[#bea98e] text-black font-bold text-sm tracking-widest hover:bg-[#a38f75] transition-colors duration-300"
            >
              RESERVAR MESA
            </Link>
            <Link
              href="/menu"
              className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-bold text-sm tracking-widest transition-colors duration-300 backdrop-blur-sm"
            >
              EXPLORAR MENÚ
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INNOVATION SECTION */}
      <section className="py-24 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#bea98e] text-sm font-bold tracking-widest uppercase">Nuestra Tecnología</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-serif text-white">Gastronomía Inteligente</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="group p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-500">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-[#bea98e]/10 group-hover:bg-[#bea98e]/20 transition-colors">
                  <Network className="h-8 w-8 text-[#bea98e]" />
                </div>
              </div>
              <h3 className="text-xl font-serif text-white mb-4 text-center">Trazabilidad Blockchain</h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed">
                Escanea el código de tu corte y conoce su origen exacto, desde la granja en Kagoshima hasta tu mesa.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="group p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-500">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-[#bea98e]/10 group-hover:bg-[#bea98e]/20 transition-colors">
                  <Flame className="h-8 w-8 text-[#bea98e]" />
                </div>
              </div>
              <h3 className="text-xl font-serif text-white mb-4 text-center">Maduración Controlada</h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed">
                Nuestras cámaras de sal del Himalaya monitoreadas por IA garantizan la textura perfecta en cada bocado.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="group p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-500">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-[#bea98e]/10 group-hover:bg-[#bea98e]/20 transition-colors">
                  <Layers className="h-8 w-8 text-[#bea98e]" />
                </div>
              </div>
              <h3 className="text-xl font-serif text-white mb-4 text-center">Experiencia Inmersiva</h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed">
                Mesas interactivas y realidad aumentada para visualizar tu plato antes de ordenar. El futuro está servido.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
