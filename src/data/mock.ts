export type Product = {
  id: string; name: string; sku: string; type: string; brand: string; category: string;
  description: string; regularPrice: number; salePrice: number; costPrice: number; tax: number;
  stock: number; minStock: number; maxStock: number; status: 'Active' | 'Draft' | 'Archived';
  rating: number; orders: number; image: string;
};

export type Order = { id: string; customer: string; email: string; products: string; amount: number; payment: string; status: string; date: string };
export type Customer = { id: string; name: string; email: string; phone: string; orders: number; spent: number; status: string; joined: string };

export const seedProducts: Product[] = [
  { id:'p-101', name:'Digital Blood Pressure Monitor', sku:'MED-BPM-001', type:'Device', brand:'CareSense', category:'Monitoring', description:'Clinically accurate upper-arm monitor with memory recall.', regularPrice:2499, salePrice:1999, costPrice:1120, tax:12, stock:84, minStock:20, maxStock:150, status:'Active', rating:4.8, orders:328, image:'BP' },
  { id:'p-102', name:'Infrared Forehead Thermometer', sku:'MED-IFT-014', type:'Device', brand:'ThermoSure', category:'Monitoring', description:'Fast, non-contact temperature readings in one second.', regularPrice:1899, salePrice:1499, costPrice:730, tax:12, stock:42, minStock:15, maxStock:100, status:'Active', rating:4.6, orders:241, image:'TF' },
  { id:'p-103', name:'Pulse Oximeter', sku:'MED-POS-003', type:'Device', brand:'CareSense', category:'Monitoring', description:'OLED fingertip pulse oximeter with low-battery alert.', regularPrice:1299, salePrice:999, costPrice:430, tax:12, stock:9, minStock:20, maxStock:120, status:'Active', rating:4.7, orders:189, image:'OX' },
  { id:'p-104', name:'Digital Weighing Scale', sku:'MED-DWS-022', type:'Device', brand:'WellForm', category:'Home Wellness', description:'Tempered glass scale with precise 100g increments.', regularPrice:1999, salePrice:1599, costPrice:840, tax:18, stock:67, minStock:15, maxStock:100, status:'Active', rating:4.4, orders:164, image:'WS' },
  { id:'p-105', name:'First Aid Kit — 100 Pieces', sku:'MED-FAK-100', type:'Kit', brand:'AidBox', category:'First Aid', description:'Organised emergency kit for home, office and travel.', regularPrice:1499, salePrice:1199, costPrice:620, tax:12, stock:23, minStock:25, maxStock:90, status:'Active', rating:4.9, orders:152, image:'FA' },
  { id:'p-106', name:'Disposable Medical Gloves', sku:'MED-DMG-500', type:'Consumable', brand:'SafeTouch', category:'Protection', description:'Powder-free nitrile gloves, box of 100.', regularPrice:699, salePrice:549, costPrice:280, tax:5, stock:312, minStock:60, maxStock:500, status:'Active', rating:4.5, orders:482, image:'GL' },
  { id:'p-107', name:'Surgical Face Masks', sku:'MED-SFM-050', type:'Consumable', brand:'SafeTouch', category:'Protection', description:'Three-layer breathable masks, pack of 50.', regularPrice:399, salePrice:299, costPrice:140, tax:5, stock:18, minStock:30, maxStock:240, status:'Active', rating:4.3, orders:391, image:'FM' },
  { id:'p-108', name:'Nebulizer Machine', sku:'MED-NBM-008', type:'Device', brand:'BreatheWell', category:'Respiratory', description:'Quiet compressor nebulizer with child and adult masks.', regularPrice:3299, salePrice:2799, costPrice:1540, tax:12, stock:36, minStock:10, maxStock:70, status:'Active', rating:4.8, orders:98, image:'NB' },
  { id:'p-109', name:'Hot & Cold Pack', sku:'MED-HCP-012', type:'Wellness', brand:'ReliefPro', category:'Pain Relief', description:'Reusable flexible gel pack for targeted relief.', regularPrice:499, salePrice:399, costPrice:180, tax:12, stock:6, minStock:15, maxStock:100, status:'Active', rating:4.2, orders:133, image:'HC' },
  { id:'p-110', name:'Walking Support Cane', sku:'MED-WSC-009', type:'Support', brand:'MoveSure', category:'Mobility', description:'Height-adjustable aluminium cane with anti-slip base.', regularPrice:899, salePrice:749, costPrice:360, tax:12, stock:51, minStock:12, maxStock:80, status:'Draft', rating:4.1, orders:74, image:'WC' },
];

export const seedOrders: Order[] = [
  { id:'ORD-48291', customer:'Ananya Mehta', email:'ananya.m@example.com', products:'Digital Blood Pressure Monitor', amount:2239, payment:'Paid', status:'Processing', date:'Today, 10:42 AM' },
  { id:'ORD-48290', customer:'Rohan Kapoor', email:'rohan.k@example.com', products:'Nebulizer Machine, Face Masks', amount:3148, payment:'Paid', status:'Shipped', date:'Today, 09:18 AM' },
  { id:'ORD-48289', customer:'Drishti Nair', email:'drishti.n@example.com', products:'First Aid Kit', amount:1199, payment:'Paid', status:'Delivered', date:'Yesterday, 06:31 PM' },
  { id:'ORD-48288', customer:'Vikram Shah', email:'vikram.s@example.com', products:'Pulse Oximeter', amount:999, payment:'Pending', status:'Pending', date:'Yesterday, 04:12 PM' },
  { id:'ORD-48287', customer:'Meera Iyer', email:'meera.i@example.com', products:'Medical Gloves × 4', amount:2196, payment:'Paid', status:'Delivered', date:'Yesterday, 01:05 PM' },
  { id:'ORD-48286', customer:'Kabir Singh', email:'kabir.s@example.com', products:'Weighing Scale', amount:1599, payment:'Refunded', status:'Cancelled', date:'12 Jun 2024, 11:32 AM' },
];

export const seedCustomers: Customer[] = [
  { id:'CUS-2041', name:'Ananya Mehta', email:'ananya.m@example.com', phone:'+91 98765 12034', orders:12, spent:28450, status:'Active', joined:'18 Feb 2024' },
  { id:'CUS-2040', name:'Rohan Kapoor', email:'rohan.k@example.com', phone:'+91 98110 22419', orders:8, spent:17240, status:'Active', joined:'02 Mar 2024' },
  { id:'CUS-2039', name:'Drishti Nair', email:'drishti.n@example.com', phone:'+91 99460 78122', orders:6, spent:11990, status:'Active', joined:'11 Mar 2024' },
  { id:'CUS-2038', name:'Vikram Shah', email:'vikram.s@example.com', phone:'+91 98204 33456', orders:3, spent:4370, status:'At risk', joined:'22 Apr 2024' },
  { id:'CUS-2037', name:'Meera Iyer', email:'meera.i@example.com', phone:'+91 98451 66780', orders:17, spent:39820, status:'Active', joined:'07 Jan 2024' },
  { id:'CUS-2036', name:'Kabir Singh', email:'kabir.s@example.com', phone:'+91 98100 44512', orders:2, spent:3198, status:'Inactive', joined:'26 May 2024' },
];

export const categories = ['Monitoring','Protection','First Aid','Home Wellness','Respiratory','Pain Relief','Mobility'];
export const brands = ['CareSense','ThermoSure','WellForm','AidBox','SafeTouch','BreatheWell','ReliefPro','MoveSure'];
export const formatINR = (n:number) => new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);