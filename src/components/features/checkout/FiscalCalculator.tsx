'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '@/types/database';
import { Calculator, DollarSign, Bitcoin, CreditCard, Banknote } from 'lucide-react';

interface FiscalCalculatorProps {
    items: { menuItem: MenuItem; quantity: number }[];
}

type PaymentMethod = 'BS' | 'ZELLE' | 'CASH_USD' | 'CRYPTO';

const IVA_RATE = 0.16;
const IGTF_RATE = 0.03;

export function FiscalCalculator({ items }: FiscalCalculatorProps) {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('BS');

    const subtotal = useMemo(() => {
        return items.reduce((acc, item) => acc + (item.menuItem.price * item.quantity), 0);
    }, [items]);

    const iva = subtotal * IVA_RATE;

    const isIgtfApplicable = paymentMethod !== 'BS';
    const igtf = isIgtfApplicable ? (subtotal + iva) * IGTF_RATE : 0;

    const total = subtotal + iva + igtf;

    return (
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 shadow-2xl max-w-md w-full">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <Calculator className="w-6 h-6 text-[#bea98e]" />
                <h2 className="text-xl font-serif text-white">Checkout Fiscal Inteligente</h2>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                    onClick={() => setPaymentMethod('BS')}
                    className={`px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all ${paymentMethod === 'BS'
                            ? 'bg-[#bea98e] text-black shadow-[0_0_15px_#bea98e40]'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                        }`}
                >
                    <CreditCard className="w-4 h-4" /> Bolívares
                </button>
                <button
                    onClick={() => setPaymentMethod('ZELLE')}
                    className={`px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all ${paymentMethod === 'ZELLE'
                            ? 'bg-[#bea98e] text-black shadow-[0_0_15px_#bea98e40]'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                        }`}
                >
                    <DollarSign className="w-4 h-4" /> Zelle / USD
                </button>
                <button
                    onClick={() => setPaymentMethod('CASH_USD')}
                    className={`px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all ${paymentMethod === 'CASH_USD'
                            ? 'bg-[#bea98e] text-black shadow-[0_0_15px_#bea98e40]'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                        }`}
                >
                    <Banknote className="w-4 h-4" /> Efectivo $
                </button>
                <button
                    onClick={() => setPaymentMethod('CRYPTO')}
                    className={`px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all ${paymentMethod === 'CRYPTO'
                            ? 'bg-[#bea98e] text-black shadow-[0_0_15px_#bea98e40]'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                        }`}
                >
                    <Bitcoin className="w-4 h-4" /> Crypto
                </button>
            </div>

            {/* Summary */}
            <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between text-gray-400">
                    <span>Subtotal Base</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                    <span>IVA (16%)</span>
                    <span>${iva.toFixed(2)}</span>
                </div>

                <AnimatePresence>
                    {isIgtfApplicable && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex justify-between text-red-400"
                        >
                            <span>IGTF (3%)</span>
                            <span>+${igtf.toFixed(2)}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="border-t border-white/10 pt-4 mt-4">
                    <div className="flex justify-between items-end">
                        <span className="text-white font-bold text-lg">TOTAL A PAGAR</span>
                        <div className="text-right">
                            <span className="block text-2xl font-bold text-[#bea98e]">${total.toFixed(2)}</span>
                            {paymentMethod === 'BS' && (
                                <span className="text-xs text-gray-500">Ref. BCV Calculada</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 py-4 bg-gradient-to-r from-[#bea98e] to-[#a38f75] text-black font-bold rounded-xl shadow-lg hover:shadow-[#bea98e]/20 transition-all flex justify-center items-center gap-2"
            >
                <CheckCircle className="w-5 h-5" />
                PROCESAR PAGO
            </motion.button>
        </div>
    );
}

import { CheckCircle } from 'lucide-react';
