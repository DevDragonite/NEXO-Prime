# NEXO PRIME - Meat & Meta 🥩✨

**Steakhouse de Lujo & Experiencia Gastronómica 3.0**

NEXO PRIME es una propuesta gastronómica vanguardista ubicada en Las Mercedes, Caracas, que fusiona la alta cocina de un Steakhouse premium con la innovación tecnológica.

## Stack Tecnológico 🛠️

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Backend / DB**: [Supabase](https://supabase.com/) (PostgreSQL, Realtime)

## Características Principales 🚀

- **Menú Digital Inmersivo**: Galería interactiva con precios en USD y trazabilidad de cortes.
- **Reserva de Mesas en Tiempo Real**: Croquis interactivo del local con estados en vivo (Libre, Ocupada, Pagando).
- **Checkout Fiscal Inteligente**: Cálculo automático de IGTF (3%) según método de pago.
- **KDS (Cocina)**: Sistema de visualización de comandas en tiempo real para el equipo de cocina.
- **Trazabilidad "Meat & Meta"**: Información detallada sobre el origen y maduración de cada corte.

## Configuración Local 💻

1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/DevDragonite/NEXO-Prime.git
    cd NEXO-Prime
    ```

2.  Instalar dependencias:
    ```bash
    npm install
    ```

3.  Configurar variables de entorno:
    Crear un archivo `.env.local` con las credenciales de Supabase:
    ```bash
    NEXT_PUBLIC_SUPABASE_URL=your-project-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    ```

4.  Iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Estado del Proyecto 📊

- [x] Inicialización del Proyecto (Next.js 15 + Tailwind v4)
- [ ] Integración con Supabase
- [ ] Desarrollo de UI/UX (Landing, Menú)
- [ ] Componente de Mapa de Mesas
- [ ] Sistema de Pedidos y KDS

---

*Desarrollado con ❤️ para NEXO PRIME.*
