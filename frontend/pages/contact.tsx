import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/contact.module.css'; // CSS Module import

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className={styles.contactContainer}>
        <h1>Contact Me</h1>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows={5}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
