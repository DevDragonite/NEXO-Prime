export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#0c0c0c] text-white pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-serif text-[#bea98e] mb-8">Política de Privacidad</h1>

                <section className="space-y-4">
                    <h2 className="text-2xl font-serif">1. Recolección de Datos</h2>
                    <p className="text-gray-400">
                        En NEXO PRIME, valoramos su privacidad. Recopilamos información únicamente para mejorar su experiencia de reserva y personalización del servicio. Esto incluye datos de contacto y preferencias alimenticias.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-serif">2. Uso de Blockchain</h2>
                    <p className="text-gray-400">
                        Nuestras transacciones y certificados de trazabilidad se registran en la blockchain. Su identidad personal nunca se publica en la cadena de bloques, solo los metadatos de sus consumos si opta por acuñar NFTs.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-serif">3. Seguridad</h2>
                    <p className="text-gray-400">
                        Implementamos encripción de grado militar para todos los datos de pago y reservas. No compartimos su información con terceros.
                    </p>
                </section>
            </div>
        </div>
    );
}
