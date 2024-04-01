import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "./sections/header";
import Footer from "./sections/footer";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Fist d.o.o.",
  description: "Prodaja plastičnih granulatov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[#EBEDEE] text-logo-blue`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
