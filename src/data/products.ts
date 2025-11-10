import { Product } from "@/contexts/CartContext";
import headphones from "@/assets/headphones.jpg";
import smartwatch from "@/assets/smartwatch.jpg";
import backpack from "@/assets/backpack.jpg";
import charger from "@/assets/charger.jpg";
import speaker from "@/assets/speaker.jpg";
import organizer from "@/assets/organizer.jpg";
import coffeeMaker from "@/assets/coffee-maker.jpg";
import yogaMat from "@/assets/yoga-mat.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 89.99,
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals.",
    image: headphones,
    category: "Electronics",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 249.99,
    description: "Feature-rich smartwatch with fitness tracking, heart rate monitor, GPS, and 7-day battery life. Compatible with both iOS and Android.",
    image: smartwatch,
    category: "Electronics",
  },
  {
    id: "3",
    name: "Laptop Backpack",
    price: 59.99,
    description: "Durable and spacious laptop backpack with multiple compartments, USB charging port, and water-resistant material. Fits laptops up to 17 inches.",
    image: backpack,
    category: "Accessories",
  },
  {
    id: "4",
    name: "Portable Charger",
    price: 34.99,
    description: "High-capacity 20,000mAh portable charger with fast charging support and dual USB ports. Keep your devices powered on the go.",
    image: charger,
    category: "Electronics",
  },
  {
    id: "5",
    name: "Bluetooth Speaker",
    price: 79.99,
    description: "Waterproof Bluetooth speaker with 360° sound, 12-hour battery life, and deep bass. Perfect for outdoor adventures and parties.",
    image: speaker,
    category: "Electronics",
  },
  {
    id: "6",
    name: "Desk Organizer",
    price: 24.99,
    description: "Modern wooden desk organizer with multiple compartments for pens, paper clips, sticky notes, and phone holder. Keep your workspace tidy.",
    image: organizer,
    category: "Office",
  },
  {
    id: "7",
    name: "Coffee Maker",
    price: 129.99,
    description: "Programmable coffee maker with thermal carafe, brew strength control, and 24-hour programming. Makes up to 12 cups of delicious coffee.",
    image: coffeeMaker,
    category: "Home",
  },
  {
    id: "8",
    name: "Yoga Mat",
    price: 39.99,
    description: "Eco-friendly non-slip yoga mat with extra thickness for comfort and support. Includes carrying strap for easy transport.",
    image: yogaMat,
    category: "Fitness",
  },
];
