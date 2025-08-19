import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/landing.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.landingMain}>
        <h1>Hello, I’m Victor Maldonado</h1>
        <p>I build web apps and create cool digital experiences using ChatGPT as my guide.</p>
        <a href="/about" className="cta-btn">Learn More</a>
      </main>
      <Footer />
    </>
  );
}
