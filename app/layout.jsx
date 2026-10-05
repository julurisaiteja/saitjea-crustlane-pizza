import './globals.css';
import { CartProvider } from '../lib/cart';
import Shell from '../components/Shell';
export const metadata = { title: 'Crustlane — Fire-kissed pies, built your way', description: "Premium Neapolitan-style pizza delivery with full customization." };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Archivo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body><CartProvider><Shell>{children}</Shell></CartProvider></body>
    </html>
  );
}
