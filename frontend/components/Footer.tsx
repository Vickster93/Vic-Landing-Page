import styles from '../styles/footer.module.css'; // use CSS Module


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className = {styles.fontColor}>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}
