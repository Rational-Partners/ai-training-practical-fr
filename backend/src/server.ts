import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors
import os from 'os';

// Import routes
import exerciseTaskRoutes from './routes/exerciseTask.routes'; // Updated import path and variable name
import analyticsRoutes from './routes/analytics.routes'; // Import the new analytics routes

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = parseInt(process.env.BACKEND_PORT || '5001');

// Middleware

// Enable CORS for requests from the frontend origin
app.use(cors({ 
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Allow frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  // allowedHeaders: ["Content-Type", "Authorization"], // If you need specific headers
}));

app.use(express.json()); // Parse JSON bodies (should come after CORS typically)

// --- API Routes ---
app.use('/api/exercises/tasks', exerciseTaskRoutes); // Use updated variable name
app.use('/api/analytics', analyticsRoutes); // Mount the analytics routes

// Route de vérification de santé simple (Garder accessible à la racine)
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP' });
});

// Placeholder for future routes
// app.use('/api', mainApiRouter); // Example

// Middleware de gestion d'erreurs basique (Exemple)
// Placer ceci *après* toutes les routes
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  // Vérifier si l'erreur a un code de statut spécifique, sinon utiliser 500 par défaut
  const statusCode = (err as any).statusCode || 500;
  // Envoyer un message d'erreur générique ou personnaliser selon le type d'erreur
  res.status(statusCode).json({ 
    message: err.message || 'Quelque chose s\'est cassé !' 
  });
});

app.listen(port, '0.0.0.0', () => {
  const networkIP = Object.values(os.networkInterfaces())
    .flat()
    .find((i) => i && i.family === 'IPv4' && !i.internal)?.address;
  console.log(`Backend server running at http://localhost:${port}`);
  if (networkIP) console.log(`  ➜  Network: http://${networkIP}:${port}`);
}); 