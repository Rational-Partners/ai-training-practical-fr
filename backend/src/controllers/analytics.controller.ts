import { Request, Response } from 'express';
import * as AnalyticsService from './../services/analytics.service';

export const handleGetMonthlyAnalytics = async (req: Request, res: Response) => {
  try {
    const data = await AnalyticsService.getMonthlyAnalytics();
    res.status(200).json(data);
  } catch (error) {
    // Vérifier si l'erreur est une instance d'Error pour accéder en toute sécurité à la propriété message
    const errorMessage = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
    res.status(500).json({ message: 'Erreur lors de la récupération des analytiques mensuelles', error: errorMessage });
  }
}; 