# NEXO PRIME - Meat & Meta 🥩✨

**Steakhouse de Lujo & Experiencia Gastronómica 3.0**

NEXO PRIME es una propuesta gastronómica vanguardista ubicada en Las Mercedes, Caracas, que fusiona la alta cocina de un Steakhouse premium con la innovación tecnológica.

## Stack Tecnológico 🛠️

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Backend / DB**: [Supabase](https://supabase.com/) (PostgreSQL, Realtime)

## Funcionalidades Implementadas 🚀

### 1. Landing Page Inmersiva
- **Hero Section**: Video background cinematográfico y tipografía de lujo.
- **Innovación**: Tarjetas interactivas con efectos glassmorphism.

### 2. Menú Digital (`/menu`)
- Galería de platos con animaciones de entrada.
- Filtrado dinámico por categorías (Cortes, Coctelería, Entradas).

### 3. Mapa de Mesas Interactivo (`/reserve`)
- **Plano en Tiempo Real**: Visualización del estado de las mesas (Libre, Ocupada, Pagando).
- **Gestión**: Panel lateral para ver detalles y solicitar servicios.

### 4. KDS - Sistema de Cocina (`/kds`)
- Dashboard para el personal de cocina.
- Gestión de estados de comandas (Pendiente -> Cocinando -> Listo).

### 5. Checkout Fiscal Inteligente (`/checkout`)
- Cálculo automático de IVA (16%).
- **Lógica de IGTF (3%)**: Se aplica automáticamente si el pago es en Divisas o Crypto.

## Configuración del Proyecto 💻

1.  **Clonar y configurar dependencias**:
    ```bash
    git clone https://github.com/DevDragonite/NEXO-Prime.git
    npm install
    ```

2.  **Configurar Supabase**:
    - Ejecutar el script `supabase/schema.sql` en el SQL Editor de su proyecto Supabase.
    - Configurar las variables de entorno en `.env.local` (clave `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`).

3.  **Ejecutar**:
    ```bash
    npm run dev
    ```

---

*Desarrollado con ❤️ para NEXO PRIME.*
