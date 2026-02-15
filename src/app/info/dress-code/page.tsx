import { Shirt, Watch, Crown } from 'lucide-react';

export default function DressCodePage() {
    return (
        <div className="min-h-screen bg-[#0c0c0c] text-white pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto space-y-12 text-center">

                <div>
                    <h1 className="text-4xl md:text-5xl font-serif text-[#bea98e] mb-4">Código de Vestimenta</h1>
                    <p className="text-xl text-gray-400">Elegancia Casual / Smart Casual</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                        <Shirt className="w-12 h-12 text-[#bea98e] mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Permitido</h3>
                        <p className="text-sm text-gray-400">Camisas, polos, blazers, vestidos, pantalones de vestir, jeans oscuros sin roturas.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                        <Watch className="w-12 h-12 text-[#bea98e] mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Estilo</h3>
                        <p className="text-sm text-gray-400">Fomentamos un ambiente sofisticado pero relajado. Viste para impresionar.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                        <Crown className="w-12 h-12 text-[#bea98e] mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">No Permitido</h3>
                        <p className="text-sm text-gray-400">Ropa deportiva, sandalias de playa, gorras, camisetas sin mangas.</p>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-[#bea98e]/10 rounded-xl">
                    <p className="text-[#bea98e] font-medium">
                        La gerencia se reserva el derecho de determinar la idoneidad de la vestimenta.
                    </p>
                </div>
            </div>
        </div>
    );
}
