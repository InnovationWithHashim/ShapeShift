import Link from 'next/link';
import "@/app/styles/navbar.css"

const Navbar = () => {
    return (
        <section className="navbar-section">
            <div className="navbar-logo">
                <Link href="/"><h1>Shape<span>Shift.</span></h1></Link>
            </div>
            <nav className="navbar-nav">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/workouts">Workouts</Link></li>
                    <li><Link href="/nutrition">Nutrition</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
