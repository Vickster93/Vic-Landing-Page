import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import styles from '../styles/projects.module.css';

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main className={styles.projectsMain}>
        <h1 className={styles.projectsTitle}>My Projects</h1>
        {loading ? (
          <p className={styles.loading}>Loading projects...</p>
        ) : (
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
