export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  modifiers: Modifier[];
  available: boolean;
  image?: string;
}

export interface Modifier {
  id: string;
  name: string;
  price: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export interface Table {
  id: string;
  number: number;
  capacity: number;
  status: "available" | "occupied" | "reserved";
  currentOrder?: string;
  position: { x: number; y: number };
}

export interface Reservation {
  id: string;
  customerName: string;
  phone: string;
  date: Date;
  time: string;
  guests: number;
  tableId: string;
  notes?: string;
}

export interface Order {
  id: string;
  tableId: string;
  items: OrderItem[];
  status: "pending" | "preparing" | "ready" | "served" | "paid" | "cancelled";
  total: number;
  createdAt: Date;
  server: string;
  notes?: string;
}

export interface OrderItem {
  id: string;
  menuItemId: string;
  name: string;
  quantity: number;
  price: number;
  modifiers: Modifier[];
  notes?: string;
}

export interface Staff {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "server" | "cook" | "cashier";
  phone: string;
  active: boolean;
  avatar?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  alertLevel: number;
  category: string;
  lastRestocked: Date;
}

export interface DashboardStats {
  revenueToday: number;
  ordersToday: number;
  avgOrderValue: number;
  activeTables: number;
  lowStockAlerts: number;
  pendingOrders: number;
}
