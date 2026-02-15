# NEXO PRIME - Meat & Meta 🥩✨

**Steakhouse de Lujo & Experiencia Gastronómica 3.0**

NEXO PRIME es una propuesta gastronómica vanguardista ubicada en Las Mercedes, Caracas, que fusiona la alta cocina de un Steakhouse premium con la innovación tecnológica.

## Stack Tecnológico 🛠️

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Backend / DB**: [Supabase](https://supabase.com/) (PostgreSQL, Realtime)

## Configuración de Base de Datos (Supabase) 🗄️

1.  Crear un nuevo proyecto en [Supabase](https://supabase.com/).
2.  Ir al **SQL Editor** y ejecutar el contenido del archivo `supabase/schema.sql`.
    - Esto creará las tablas `tables`, `menu_items`, `orders`, `staff`.
    - Insertará datos de prueba (Seed Data) para el menú y las mesas.
    - Habilitará Realtime para las tablas críticas.
3.  Obtener las credenciales (URL y Anon Key) y agregarlas a `.env.local`:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```

## Estado del Proyecto 📊

- [x] Inicialización del Proyecto
- [x] Esquema de Base de Datos (SQL & Seeds)
- [x] Frontend: Landing Page (Hero y Feature Cards)
- [ ] Frontend: Menú Interactivo
- [ ] Componente: Mapa de Mesas
- [ ] Backend: Dashboard & KDS

---

*Desarrollado con ❤️ para NEXO PRIME.*
