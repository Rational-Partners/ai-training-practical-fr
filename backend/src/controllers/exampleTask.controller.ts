import { Request, Response, NextFunction } from 'express';
import { TaskStatus } from '@prisma/client';
import { Prisma } from '@prisma/client'; // Import Prisma for error handling
import * as TaskService from '../services/exampleTask.service';

/**
 * Gère la récupération de toutes les tâches, potentiellement filtrées par statut.
 */
export const handleGetAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Extraire le statut des paramètres de requête
    const statusQuery = req.query.status as string | undefined;

    // Valider et convertir le paramètre de requête statut vers l'enum TaskStatus
    let status: TaskStatus | undefined = undefined;
    if (statusQuery && Object.values(TaskStatus).includes(statusQuery as TaskStatus)) {
      status = statusQuery as TaskStatus;
    }

    const tasks = await TaskService.getAllTasks(status);
    res.json(tasks);
  } catch (error) {
    next(error); // Transmettre les erreurs au gestionnaire d'erreurs central
  }
};

/**
 * Gère la récupération d'une tâche unique par son ID.
 */
export const handleGetTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params; // Extraire l'ID des paramètres d'URL
    const task = await TaskService.getTaskById(id);

    if (!task) {
      return res.status(404).json({ message: 'Tâche non trouvée' });
    }

    res.json(task);
  } catch (error) {
    next(error);
  }
};

/**
 * Gère la création d'une nouvelle tâche.
 */
export const handleCreateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // La validation est gérée par le middleware
    const newTaskData = req.body; 
    const createdTask = await TaskService.createTask(newTaskData);
    res.status(201).json(createdTask);
  } catch (error) {
    next(error);
  }
};

/**
 * Gère la mise à jour d'une tâche existante par son ID.
 */
export const handleUpdateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Vérification basique si updateData est vide
    if (Object.keys(updateData).length === 0) {
        return res.status(400).json({ message: 'Aucune donnée de mise à jour fournie' });
    }

    const updatedTask = await TaskService.updateTask(id, updateData);
    
    // TaskService.updateTask now returns null if not found (or we can catch Prisma P2025)
    // Let's rely on Prisma error for now, can adjust later if needed
    res.json(updatedTask);

  } catch (error) {
     // Handle Prisma's specific error for record not found during update/delete
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ message: 'Tâche non trouvée' });
    }
    next(error);
  }
};

/**
 * Gère la suppression d'une tâche par son ID.
 */
export const handleDeleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await TaskService.deleteTask(id);
    // TaskService.deleteTask returns the deleted task or throws P2025 if not found
    res.status(204).send(); // Send No Content on successful deletion
  } catch (error) {
     // Handle Prisma's specific error for record not found during update/delete
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ message: 'Tâche non trouvée' });
    }
    next(error);
  }
};

// Nous ajouterons les gestionnaires pour POST, PUT, DELETE plus tard 