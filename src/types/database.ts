export type ItemType = 'MEAT' | 'DRINK' | 'SIDE' | 'DESSERT' | 'STARTER';

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    type: ItemType;
    origin: string | null;
    image_url: string;
    is_available?: boolean;
}

export type TableStatus = 'FREE' | 'OCCUPIED' | 'DESSERT' | 'PAYING';

export interface Table {
    id: string;
    label: string;
    status: TableStatus;
    capacity: number;
    position_x: number;
    position_y: number;
    shape: 'circle' | 'rect';
}
