import { ChefHat, Coffee, Award, Send } from 'lucide-react';

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-[#0c0c0c] text-white pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-[#bea98e] mb-4">Únete al Equipo</h1>
                    <p className="text-gray-400 text-lg">Buscamos talento apasionado por la excelencia gastronómica y la innovación.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#bea98e] transition-colors">
                        <ChefHat className="w-10 h-10 text-[#bea98e] mb-4" />
                        <h3 className="text-2xl font-serif mb-2">Cocina</h3>
                        <p className="text-gray-400 mb-4">Buscamos Sous Chefs y parrilleros con experiencia en cortes premium y técnicas moleculares.</p>
                        <button className="text-[#bea98e] font-bold text-sm hover:underline">APLICAR AHORA &rarr;</button>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#bea98e] transition-colors">
                        <Coffee className="w-10 h-10 text-[#bea98e] mb-4" />
                        <h3 className="text-2xl font-serif mb-2">Servicio</h3>
                        <p className="text-gray-400 mb-4">Sommeliers, Bartenders y Meseros con vocación de servicio de lujo.</p>
                        <button className="text-[#bea98e] font-bold text-sm hover:underline">APLICAR AHORA &rarr;</button>
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 text-center">
                    <h3 className="text-xl font-serif text-white mb-4">Envíanos tu CV</h3>
                    <p className="text-gray-400 mb-6">Si crees que tienes lo necesario para ser parte de la revolución Meat & Meta.</p>
                    <a href="mailto:talento@nexoprime.com" className="inline-flex items-center gap-2 px-8 py-3 bg-[#bea98e] text-black font-bold rounded-lg hover:bg-[#a38f75] transition-colors">
                        <Send className="w-4 h-4" /> talento@nexoprime.com
                    </a>
                </div>
            </div>
        </div>
    );
}
