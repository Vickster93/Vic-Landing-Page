import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'La Poblana taco truck menu',
      description: "The web app was created with simple HTML, CSS and Javascript for a friend that owns a taco truck.",
      link: 'https://lapoblana.netlify.app'
    
    },
    {
      id: 2,
      title: 'Task Manager',
      description: 'A productivity app built with React, Node.js, and MongoDB.',
      link: 'https://github.com/yourusername/task-manager'
    },
    {
      id: 3,
      title: 'E-commerce Store',
      description: 'Full-stack shop app with Next.js frontend + backend API.',
      link: 'https://github.com/yourusername/ecommerce'
    }
  ]);
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
