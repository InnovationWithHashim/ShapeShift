
import "./globals.css";
import { Poppins } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ['400','500', '700'], // Specify weights as needed
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "ShapeShift - Transform Your Fitness Journey",
  description: "ShapeShift is your go-to destination for expert fitness tips, effective workouts, and healthy recipes to help you achieve your fitness goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={poppins.className}>
      <body >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
