import { body, param, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { TaskStatus, TaskPriority } from '@prisma/client';

// Règles de validation pour la création d'une tâche
export const createTaskValidationRules = [
  body('name').notEmpty().withMessage('Le nom de la tâche est requis').trim().escape(),
  body('description').optional().trim().escape(),
  body('status')
    .optional()
    .isIn(Object.values(TaskStatus))
    .withMessage('Statut de tâche invalide'),
  body('priority')
    .optional()
    .isIn(Object.values(TaskPriority))
    .withMessage('Priorité de tâche invalide'),
];

// Règles de validation pour la mise à jour d'une tâche
export const updateTaskValidationRules = [
  // La validation de l'ID est généralement gérée dans la route/le contrôleur, mais peut être ajoutée ici si nécessaire
  // param('id').isUUID().withMessage('Format d\'ID de tâche invalide'),
  body('name').optional().notEmpty().withMessage('Le nom de la tâche ne peut pas être vide').trim().escape(),
  body('description').optional({ checkFalsy: true }).trim().escape(), // Autoriser la chaîne vide
  body('status')
    .optional()
    .isIn(Object.values(TaskStatus))
    .withMessage('Statut de tâche invalide'),
  body('priority')
    .optional()
    .isIn(Object.values(TaskPriority))
    .withMessage('Priorité de tâche invalide'),
];

// Optionnel : Validation pour uniquement le paramètre ID si nécessaire séparément
export const taskIdValidationRules = [
    param('id').isUUID().withMessage('Format d\'ID de tâche invalide'),
];

/**
 * Middleware pour gérer les erreurs de validation de express-validator.
 */
export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  // Formater les erreurs pour une réponse plus utile
  const extractedErrors = errors.array().map(err => ({ [err.type === 'field' ? err.path : 'general']: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
}; 