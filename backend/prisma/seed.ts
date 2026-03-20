import { PrismaClient, TaskPriority, TaskStatus } from '@prisma/client';

const prisma = new PrismaClient();

const seedTasks = [
  // Tâches à venir (depuis todoTasks)
  {
    name: "Améliorer la stratégie d'email marketing",
    assignedToName: "Ashley Briggs",
    assignedToAvatar: "/assets/img/avatars/avatar-5.jpg", // Use generic path
    dueDate: new Date("2024-08-01T00:00:00Z"), // Use ISO format or Date object
    priority: TaskPriority.MEDIUM,
    status: TaskStatus.UPCOMING,
  },
  {
    name: "Développer une nouvelle vidéo produit",
    assignedToName: "Carl Jenkins",
    assignedToAvatar: "/assets/img/avatars/avatar-2.jpg",
    dueDate: new Date("2024-07-15T00:00:00Z"),
    priority: TaskPriority.HIGH,
    status: TaskStatus.UPCOMING,
  },
  {
    name: "Mener des entretiens utilisateurs pour la nouvelle fonctionnalité",
    assignedToName: "Bertha Martin",
    assignedToAvatar: "/assets/img/avatars/avatar-3.jpg",
    dueDate: new Date("2024-06-20T00:00:00Z"),
    priority: TaskPriority.LOW,
    status: TaskStatus.UPCOMING,
  },
  // Tâches en cours
  {
    name: "Implémenter le nouveau suivi analytique",
    assignedToName: "Carl Jenkins",
    assignedToAvatar: "/assets/img/avatars/avatar-2.jpg",
    dueDate: new Date("2024-07-01T00:00:00Z"),
    priority: TaskPriority.LOW,
    status: TaskStatus.IN_PROGRESS,
  },
  {
    name: "Concevoir une nouvelle campagne marketing",
    assignedToName: "Bertha Martin",
    assignedToAvatar: "/assets/img/avatars/avatar-3.jpg",
    dueDate: new Date("2024-08-15T00:00:00Z"),
    priority: TaskPriority.HIGH,
    status: TaskStatus.IN_PROGRESS,
  },
  {
    name: "Réaliser des tests A/B sur la page d'accueil",
    assignedToName: "Ashley Briggs",
    assignedToAvatar: "/assets/img/avatars/avatar-5.jpg",
    dueDate: new Date("2024-06-30T00:00:00Z"),
    priority: TaskPriority.LOW,
    status: TaskStatus.IN_PROGRESS,
  },
  // Tâches terminées
  {
    name: "Optimiser les performances du site web",
    assignedToName: "Bertha Martin",
    assignedToAvatar: "/assets/img/avatars/avatar-3.jpg",
    dueDate: new Date("2024-06-15T00:00:00Z"),
    priority: TaskPriority.LOW,
    status: TaskStatus.COMPLETED,
  },
  {
    name: "Développer le prototype de l'application mobile",
    assignedToName: "Ashley Briggs",
    assignedToAvatar: "/assets/img/avatars/avatar-5.jpg",
    dueDate: new Date("2024-08-10T00:00:00Z"),
    priority: TaskPriority.MEDIUM,
    status: TaskStatus.COMPLETED,
  },
  {
    name: "Mener des entretiens de recherche utilisateur",
    assignedToName: "Ashley Briggs",
    assignedToAvatar: "/assets/img/avatars/avatar-5.jpg",
    dueDate: new Date("2024-07-20T00:00:00Z"),
    priority: TaskPriority.LOW,
    status: TaskStatus.COMPLETED,
  },
];

async function main() {
  console.log(`Début du seeding ...`);

  // Supprimer les données existantes
  console.log(`Suppression des tâches existantes...`);
  await prisma.exampleTask.deleteMany({});
  console.log(`Tâches existantes supprimées.`);

  // Créer les nouvelles tâches
  console.log(`Création des tâches de seed...`);
  const result = await prisma.exampleTask.createMany({
    data: seedTasks,
  });
  console.log(`${result.count} tâches créées.`);

  console.log('Seeding des données analytiques mensuelles...');
  const analyticsData = [
    { month: 1, year: 2024, sessionDuration: 10, pageViews: 5000, totalVisits: 2000 },
    { month: 2, year: 2024, sessionDuration: 11, pageViews: 4550, totalVisits: 2250 },
    { month: 3, year: 2024, sessionDuration: 9,  pageViews: 4980, totalVisits: 2400 },
    { month: 4, year: 2024, sessionDuration: 10, pageViews: 5520, totalVisits: 2750 },
    { month: 5, year: 2024, sessionDuration: 12, pageViews: 5100, totalVisits: 2500 },
    { month: 6, year: 2024, sessionDuration: 11, pageViews: 4750, totalVisits: 2800 },
    { month: 7, year: 2024, sessionDuration: 13, pageViews: 5300, totalVisits: 3100 },
    { month: 8, year: 2024, sessionDuration: 12, pageViews: 5900, totalVisits: 3500 },
    { month: 9, year: 2024, sessionDuration: 10, pageViews: 5200, totalVisits: 3000 },
    { month: 10, year: 2024, sessionDuration: 11, pageViews: 5800, totalVisits: 3300 },
    { month: 11, year: 2024, sessionDuration: 13, pageViews: 6200, totalVisits: 3800 },
    { month: 12, year: 2024, sessionDuration: 12, pageViews: 5600, totalVisits: 3500 },
  ];

  // Supprimer d'abord les données analytiques existantes pour assurer la cohérence si les données de seed changent
  console.log('Suppression des données analytiques mensuelles existantes...');
  await prisma.monthlyAnalytics.deleteMany({});
  console.log('Données analytiques mensuelles existantes supprimées.');

  console.log('Création des données analytiques mensuelles...');
  for (const data of analyticsData) {
    await prisma.monthlyAnalytics.upsert({
      where: { month_year: { month: data.month, year: data.year } }, // Using the @@unique constraint
      update: data, // Update if exists (though we delete first)
      create: data, // Create if not exists
    });
  }
  console.log(`Données analytiques mensuelles peuplées pour ${analyticsData.length} mois.`);

  console.log(`Seeding terminé.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 