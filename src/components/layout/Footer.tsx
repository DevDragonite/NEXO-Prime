import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl text-[#bea98e] tracking-widest">NEXO PRIME</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Donde la tradición primitiva del fuego se encuentra con la innovación del futuro. Una experiencia gastronómica sin precedentes en Caracas.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-[#bea98e] transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-[#bea98e] transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-[#bea98e] transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">Contacto</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#bea98e] shrink-0" />
                                <span>Calle Madrid, Las Mercedes,<br />Caracas, Venezuela.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#bea98e] shrink-0" />
                                <span>+58 (212) 999-0000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#bea98e] shrink-0" />
                                <span>reservas@nexoprime.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">Horario</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex gap-3">
                                <Clock className="w-5 h-5 text-[#bea98e] shrink-0" />
                                <div>
                                    <span className="block text-white">Lunes - Jueves</span>
                                    <span>12:00 PM - 11:00 PM</span>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-5" /> {/* Spacer */}
                                <div>
                                    <span className="block text-white">Viernes - Sábado</span>
                                    <span>12:00 PM - 02:00 AM</span>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-5" /> {/* Spacer */}
                                <div>
                                    <span className="block text-white">Domingo</span>
                                    <span>12:00 PM - 10:00 PM</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-[#bea98e] transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="#" className="hover:text-[#bea98e] transition-colors">Términos de Servicio</Link></li>
                            <li><Link href="#" className="hover:text-[#bea98e] transition-colors">Código de Vestimenta</Link></li>
                            <li><Link href="#" className="hover:text-[#bea98e] transition-colors">Trabaja con Nosotros</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} NEXO PRIME. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
