import type { Metadata } from "next";
import { Roboto, Poppins} from "next/font/google"
import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400', // Specify subsets based on your needs
  variable: '--font-roboto', // Custom variable name
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400', // Specify subsets based on your needs
  variable: '--font-poppins', // Custom variable name
});

export const metadata: Metadata = {
  title: "Blog Website",
  description: "This is tech blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} antialiased flex flex-col min-h-screen `}
      >
        <Header/>
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
