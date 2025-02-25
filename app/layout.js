import { Pacifico, Nunito_Sans } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
    variable: "--font-pacifico",
    weight: '400',
    subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    weight: '400',
    subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${nunitoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
