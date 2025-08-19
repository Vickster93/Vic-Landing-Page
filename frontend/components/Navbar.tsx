import Link from 'next/link';
import React from 'react';
import styles from '../styles/navbar.module.css'; // Using CSS module

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>My Portfolio</h2>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
