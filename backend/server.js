require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth').router;
const aboutRoutes = require('./routes/about');
const heroRoutes = require('./routes/hero');
const projectsRoutes = require('./routes/projects');
const experienceRoutes = require('./routes/experience');
const educationRoutes = require('./routes/education');
const certificatesRoutes = require('./routes/certificates');
const testimonialsRoutes = require('./routes/testimonials');
const contactRoutes = require('./routes/contact');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/', authRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/hero', heroRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/certificates', certificatesRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/contact', contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
