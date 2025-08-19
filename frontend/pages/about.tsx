import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/about.module.css'; // use CSS Module

export default function About() {
  return (
    <>
      <Navbar />
      <main className={styles.aboutContainer}>
        <h1>About Me</h1>
                <section>
          <p>Hey! I’m Victor Maldonado 👋</p>

          <p>I’ve always loved tinkering with the web and finding new ways to build fast, modern applications. 
          My journey started with the basics—HTML, CSS, and JavaScript—but I quickly wanted more of a challenge. 
          That’s when I jumped into Next.js and NestJS with TypeScript.</p>

          <p>To be honest, it’s been a pretty steep learning curve. Luckily, I’ve been using ChatGPT as my coding buddy 
          along the way, and it’s helped me figure things out faster. For example, I built my first landing page 
          in just two days!</p>

          <p>Right now, my focus is on really understanding TypeScript logic and getting more comfortable with how 
          Next.js and NestJS work together. Next.js is running the frontend—styling and pages—while NestJS handles 
          my backend API calls, which update my projects as I create and add them.</p>

          <p><strong>My main objective is to learn using ChatGPT as my teacher. In fact, it even helped refine this summary!</strong></p>

          <p>This blog is where I’ll share what I’m learning, the mistakes I make, and the cool stuff I build along the way 🚀</p>
        </section>

      </main>
      <Footer />
    </>
  );
}


