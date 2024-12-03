const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(bodyParser.json());

// Swagger Setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Food Menu API',
      version: '1.0.0',
      description: 'API for managing a food menu with CRUD operations',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',  // Replace with the appropriate Vercel or production URL
      },
    ],
  },
  apis: ['./src/routes.js'], // The path to the API routes
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Index route
app.get('/', (req, res) => {
  res.send('PRIN144-Final-Exam: Your Name');
});

// API routes
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
