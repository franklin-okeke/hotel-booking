import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const OutfitSans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});



export const metadata = {
  title: "Hotel Booking Site",
  description: "Developed by frotech Intl",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${OutfitSans.variable} antialiased`}
      >
        <ClerkProvider afterSignOutUrl="/">
        {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
