-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ENUMS
create type table_status as enum ('FREE', 'OCCUPIED', 'DESSERT', 'PAYING');
create type order_status as enum ('PENDING', 'COOKING', 'READY', 'DELIVERED', 'CANCELLED');
create type staff_role as enum ('WAITER', 'CHEF', 'MANAGER');
create type item_type as enum ('MEAT', 'DRINK', 'SIDE', 'DESSERT', 'STARTER');

-- TABLES

-- 1. Tables (Mesas)
create table public.tables (
  id uuid primary key default uuid_generate_v4(),
  label text not null,
  status table_status default 'FREE',
  capacity int not null,
  position_x float not null, -- Relative X position (%)
  position_y float not null, -- Relative Y position (%)
  shape text default 'circle', -- 'circle', 'rect'
  created_at timestamptz default now()
);

-- 2. Menu Items
create table public.menu_items (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text,
  price numeric(10, 2) not null,
  category text not null, -- 'Cortes Premium', 'Entradas', etc.
  type item_type not null,
  origin text, -- 'Kagoshima, Japan', 'Santa Bárbara, Zu', etc.
  trace_id text, -- Blockchain hash simulation
  image_url text,
  is_available boolean default true,
  created_at timestamptz default now()
);

-- 3. Staff
create table public.staff (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  role staff_role not null,
  pin_code text, -- Simple auth for POS/KDS
  is_active boolean default true,
  created_at timestamptz default now()
);

-- 4. Orders
create table public.orders (
  id uuid primary key default uuid_generate_v4(),
  table_id uuid references public.tables(id),
  waiter_id uuid references public.staff(id),
  chef_id uuid references public.staff(id),
  status order_status default 'PENDING',
  total_amount numeric(10, 2) default 0,
  igtf_applied boolean default false,
  payment_method text, -- 'ZELLE', 'CASH_USD', 'BS', 'CRYPTO'
  created_at timestamptz default now()
);

-- 5. Order Items
create table public.order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid references public.orders(id) on delete cascade,
  menu_item_id uuid references public.menu_items(id),
  quantity int default 1,
  notes text,
  created_at timestamptz default now()
);

-- RLS POLICIES (Simple for MVP)
alter table public.tables enable row level security;
alter table public.menu_items enable row level security;
alter table public.staff enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- Public read access for Menu and Tables (Display)
create policy "Public items are viewable by everyone" on public.menu_items for select using (true);
create policy "Public tables are viewable by everyone" on public.tables for select using (true);

-- Authenticated/Anon access for Orders (Simulating open system for MVP demo)
create policy "Enable all access for demo" on public.orders for all using (true);
create policy "Enable all access for demo items" on public.order_items for all using (true);
create policy "Enable all access for staff" on public.staff for all using (true);
create policy "Enable update for tables" on public.tables for update using (true);

-- REALTIME setup
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
commit;
alter publication supabase_realtime add table public.tables;
alter publication supabase_realtime add table public.orders;
alter publication supabase_realtime add table public.order_items;

-- SEED DATA

-- Staff
insert into public.staff (name, role, pin_code) values
('Carlos (Mesonero)', 'WAITER', '1234'),
('Chef Ramsay (Cocina)', 'CHEF', '5678'),
('Admin', 'MANAGER', '9999');

-- Tables (Layout Standard Luxury)
insert into public.tables (label, capacity, position_x, position_y, shape) values
('Mesa 1', 4, 10, 10, 'circle'),
('Mesa 2', 4, 10, 40, 'circle'),
('Mesa 3', 4, 10, 70, 'circle'),
('Mesa 4', 6, 40, 20, 'rect'),
('Mesa 5', 6, 40, 50, 'rect'),
('VIP 1', 8, 80, 20, 'rect'),
('Terraza 1', 2, 80, 60, 'circle'),
('Terraza 2', 2, 80, 80, 'circle');

-- Menu Items
insert into public.menu_items (name, description, price, category, type, origin) values
-- Entradas
('Gold Wagyu Tartare', 'Caviar, yema curada, lámina de oro 24k.', 28.00, 'Entradas Sensoriales', 'STARTER', 'Kagoshima, JP'),
('Burrata Molecular', 'Espuma de tomate, tierra de aceituna, humo de romero.', 22.00, 'Entradas Sensoriales', 'STARTER', 'Puglia, IT'),
('Tuétano a la Brasa', 'Con tostadas de masa madre y gremolata.', 18.00, 'Entradas Sensoriales', 'STARTER', 'Nacional AAAA'),

-- Cortes
('Tomahawk "Prime" (1.2kg)', 'Madurado 45 días en cámara de sal del Himalaya.', 120.00, 'Cortes Premium', 'MEAT', 'Angus Prime, USA'),
('Wagyu A5 Kagoshima (200g)', 'Servido con piedra caliente (Ishiyaki).', 150.00, 'Cortes Premium', 'MEAT', 'Kagoshima, JP'),
('Ribeye Angus Gold', 'Inyectado con mantequilla de trufa.', 65.00, 'Cortes Premium', 'MEAT', 'Angus Certified'),

-- Sides
('Puré Robuchon Trufado', 'La receta clásica con extra de trufa negra.', 12.00, 'Side Dishes', 'SIDE', null),
('Espárragos Grillados', 'Con Hollandaise de Ajo Negro.', 14.00, 'Side Dishes', 'SIDE', null),

-- Drinks
('The Ledger', 'Bourbon lavado en grasa de Wagyu, maple, bitter.', 18.00, 'Coctelería de Autor', 'DRINK', null),
('Crypto Mule', 'Vodka premium, jengibre casero, polvo de oro.', 16.00, 'Coctelería de Autor', 'DRINK', null);
