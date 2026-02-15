'use client';

import { FiscalCalculator } from '@/components/features/checkout/FiscalCalculator';
import { MENU_ITEMS } from '@/lib/data';

export default function CheckoutPage() {
    // Mock Cart Items
    const cartItems = [
        { menuItem: MENU_ITEMS[3], quantity: 1 }, // Tomahawk
        { menuItem: MENU_ITEMS[6], quantity: 2 }, // Cocktails
        { menuItem: MENU_ITEMS[0], quantity: 1 }, // Tartare
    ];

    return (
        <div className="min-h-screen bg-[#0c0c0c] py-20 px-4 flex items-center justify-center">
            <div className="w-full max-w-4xl flex flex-col md:flex-row gap-10 items-start">

                {/* Order Details */}
                <div className="flex-1 w-full">
                    <h1 className="text-4xl font-serif text-[#bea98e] mb-2">Resumen de Cuenta</h1>
                    <p className="text-gray-400 mb-8">Mesa VIP 1 • Mesonero: Carlos</p>

                    <div className="space-y-4">
                        {cartItems.map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/5 items-center">
                                <img src={item.menuItem.image_url} alt="" className="w-16 h-16 rounded object-cover" />
                                <div className="flex-1">
                                    <h3 className="text-white font-serif">{item.menuItem.name}</h3>
                                    <p className="text-[#bea98e]">${item.menuItem.price}</p>
                                </div>
                                <div className="text-white font-bold text-lg">x{item.quantity}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fiscal Calculator */}
                <div className="w-full md:w-auto flex justify-center sticky top-24">
                    <FiscalCalculator items={cartItems} />
                </div>

            </div>
        </div>
    );
}
