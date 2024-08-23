// app/page.tsx or pages/index.tsx
import "@/app/styles/herosection.css";
import Image from "next/image";
import Link from 'next/link';

const Herosection = () => {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1>Transform Your Fitness Journey</h1>
        <p>Discover expert tips, effective workouts, and healthy recipes to achieve your fitness goals.</p>
        <Link href="/workouts" className="hero-button">Get Started</Link>
      </div>
      <div className="hero-image">
        <Image
          src="/images/home-img.jpg"
          alt="Picture of a woman in the gym"
          layout="fill" 
          objectFit="cover" 
        />
      </div>
    </main>
  );
}

export default Herosection;
