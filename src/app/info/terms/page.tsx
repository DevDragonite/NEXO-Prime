export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#0c0c0c] text-white pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-serif text-[#bea98e] mb-8">Términos de Servicio</h1>

                <section className="space-y-4">
                    <h2 className="text-2xl font-serif">1. Reservas</h2>
                    <p className="text-gray-400">
                        Las reservas requieren un depósito de garantía. Las cancelaciones deben realizarse con al menos 24 horas de antelación para recibir un reembolso completo.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-serif">2. Código de Conducta</h2>
                    <p className="text-gray-400">
                        Nos reservamos el derecho de admisión. NEXO PRIME es un espacio de respeto y exclusividad.
                    </p>
                </section>
            </div>
        </div>
    );
}
