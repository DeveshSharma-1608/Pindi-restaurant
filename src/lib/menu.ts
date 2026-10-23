export type MenuItem = { name: string; price: number };
export type MenuSection = { title: string; veg: boolean; items: MenuItem[] };

export const chineseMenu: MenuSection[] = [
  {
    title: "Soups — Non Vegetarian",
    veg: false,
    items: [
      { name: "Prawn Soup", price: 375 },
      { name: "Hot & Sour Chicken Soup", price: 345 },
      { name: "Chicken Manchow Soup", price: 345 },
      { name: "Sweet Corn Chicken Soup", price: 345 },
      { name: "Lemon Coriander Chicken Soup", price: 345 },
      { name: "Talumein Chicken Soup", price: 345 },
      { name: "Chicken Clear Soup", price: 345 },
    ],
  },
  {
    title: "Soups — Vegetarian",
    veg: true,
    items: [
      { name: "Tomato Soup", price: 325 },
      { name: "Vegetable Hot & Sour Soup", price: 325 },
      { name: "Vegetable Manchow Soup", price: 325 },
      { name: "Vegetable Clear Soup", price: 325 },
      { name: "Lemon Coriander Soup (Thick or Clear)", price: 325 },
      { name: "Vegetable Sweet Corn Soup", price: 325 },
      { name: "Mushroom Soup", price: 325 },
      { name: "Sour Pepper Vegetable Soup", price: 325 },
    ],
  },
  {
    title: "Appetizers — Non Vegetarian",
    veg: false,
    items: [
      { name: "Prawn Salt & Pepper", price: 995 },
      { name: "Chung King Prawn", price: 995 },
      { name: "Golden Fried Prawns", price: 995 },
      { name: "Fish Pepper Salt", price: 995 },
      { name: "Honey Chicken / Chilli Chicken (Dry/Gravy)", price: 745 },
      { name: "Crispy Chicken Pepper Salt", price: 745 },
      { name: "Spicy Chicken Winglet (Fried)", price: 745 },
      { name: "Chicken Manchurian (Dry)", price: 745 },
      { name: "Chicken Manchurian (Gravy)", price: 745 },
      { name: "Chicken Spring Roll", price: 575 },
      { name: "Egg Spring Roll", price: 525 },
      { name: "Crispy Conjee Lamb", price: 845 },
    ],
  },
  {
    title: "Appetizers — Vegetarian",
    veg: true,
    items: [
      { name: "Vegetable Pepper Salt", price: 595 },
      { name: "Crispy Chilli Paneer", price: 645 },
      { name: "Veg. Spring Roll", price: 495 },
      { name: "Crispy Honey Chilli Potato", price: 595 },
      { name: "Corn Salt and Pepper", price: 595 },
    ],
  },
];

export const info = {
  name: "Pindi Restaurant",
  cuisine: "North Indian",
  rating: 4.2,
  reviews: "3,515",
  address: "16, Pandara Rd, Pandara Flats, Market, New Delhi, Delhi 110003",
  phone: "098187 39131",
  phoneHref: "tel:+919818739131",
  hours: "Open daily · Closes 1 am",
  features: ["All you can eat", "Rooftop seating", "Fireplace"],
  reserveUrl: "https://www.dineout.co.in",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pindi+Restaurant+Pandara+Road+New+Delhi",
  mapEmbed: "https://www.google.com/maps?q=Pindi+Restaurant+Pandara+Road+New+Delhi&output=embed",
};
