import { SidebarItemsType } from "../../types/sidebar";

import {
  Bell,
  BookOpen,
  Calendar,
  CheckSquare,
  Grid,
  Heart,
  Layout,
  List,
  PieChart,
  Sliders,
  MapPin,
  Users,
  Share,
  Files,
  Mail,
  Trello,
  ShoppingBag,
  LayoutTemplate,
} from "lucide-react";

const navigationSection = [
  {
    href: "/dashboard",
    icon: Sliders,
    title: "Tableaux de Bord",
    badge: "5",
    children: [
      {
        href: "/dashboard/default",
        title: "Par Défaut",
      },
      {
        href: "/dashboard/analytics",
        title: "Analytique",
      },
      {
        href: "/dashboard/saas",
        title: "SaaS",
      },
      {
        href: "/dashboard/social",
        title: "Social",
      },
      {
        href: "/dashboard/crypto",
        title: "Crypto",
      },
    ],
  },
] as unknown as SidebarItemsType[];

// Define the new Exercises section
const exercisesSection = [
  {
    href: "/exercises", // Base path, maybe not directly clickable or points to an overview
    icon: CheckSquare, // Use an appropriate icon
    title: "Exercices",
    children: [
      {
        href: "/exercises/llm-query",
        title: "Requête LLM",
      },
      {
        href: "/exercises/tasks/list", // Assuming this is the correct path from routes.tsx
        title: "Liste de Tâches",
      },
      {
        href: "/exercises/analytics-chart",
        title: "Graphique d'Analytique",
      },
    ],
  },
] as unknown as SidebarItemsType[];

const appsSection = [
  {
    href: "/ecommerce",
    icon: ShoppingBag,
    title: "E-Commerce",
    children: [
      {
        href: "/ecommerce/products",
        title: "Produits",
        badge: "New",
      },
      {
        href: "/ecommerce/products-details",
        title: "Détails du Produit",
        badge: "New",
      },
      {
        href: "/ecommerce/orders",
        title: "Commandes",
        badge: "New",
      },
      {
        href: "/ecommerce/customers",
        title: "Clients",
      },
      {
        href: "/ecommerce/invoice",
        title: "Facture",
      },
      {
        href: "/ecommerce/pricing",
        title: "Tarification",
      },
    ],
  },
  {
    href: "/projects",
    icon: Layout,
    title: "Projets",
    children: [
      {
        href: "/projects/overview",
        title: "Vue d'ensemble",
      },
      {
        href: "/projects/details",
        title: "Détails",
      },
    ],
  },
  {
    href: "/chat",
    icon: List,
    title: "Discussion",
  },
  {
    href: "/file-manager",
    icon: Files,
    title: "Gestionnaire de Fichiers",
    badge: "New",
  },
  {
    href: "/calendar",
    icon: Calendar,
    title: "Calendrier",
  },
  {
    href: "/email",
    icon: Mail,
    title: "Email",
    badge: "Nouveau",
    children: [
      {
        href: "/email/inbox",
        title: "Boîte de réception",
      },
      {
        href: "/email/details",
        title: "Détails",
      },
    ],
  },
  {
    href: "/tasks",
    icon: Trello,
    title: "Tâches",
    children: [
      {
        href: "/tasks/list",
        title: "Liste",
        badge: "Nouveau",
      },
      {
        href: "/tasks/kanban",
        title: "Kanban",
      },
    ],
  },
] as unknown as SidebarItemsType[];

const pagesSection = [
  {
    href: "/pages",
    icon: Layout,
    title: "Pages",
    children: [
      {
        href: "/pages/profile",
        title: "Profil",
      },
      {
        href: "/pages/settings",
        title: "Paramètres",
      },
      {
        href: "/pages/blank",
        title: "Page Vierge",
      },
    ],
  },
  {
    href: "/auth",
    icon: Users,
    title: "Authentification",
    children: [
      {
        href: "/auth/sign-in",
        title: "Connexion",
      },
      {
        href: "/auth-cover/sign-in",
        title: "Connexion Couverture",
      },
      {
        href: "/auth/sign-up",
        title: "Inscription",
      },
      {
        href: "/auth-cover/sign-up",
        title: "Inscription Couverture",
      },
      {
        href: "/auth/reset-password",
        title: "Réinitialiser le Mot de Passe",
      },
      {
        href: "/auth-cover/reset-password",
        title: "Réinitialiser le Mot de Passe Couverture",
      },
      {
        href: "/auth/lock-screen",
        title: "Écran de Verrouillage",
      },
      {
        href: "/auth-cover/lock-screen",
        title: "Écran de Verrouillage Couverture",
      },
      {
        href: "/auth/2fa",
        title: "2FA",
      },
      {
        href: "/auth-cover/2fa",
        title: "2FA Cover",
      },
      {
        href: "/auth/404",
        title: "404 Page",
      },
      {
        href: "/auth/500",
        title: "500 Page",
      },
    ],
  },
  {
    href: "/landing",
    icon: LayoutTemplate,
    title: "Page d'Accueil",
    badge: "Nouveau",
  },
  {
    href: "/docs/introduction",
    icon: BookOpen,
    title: "Documentation",
  },
] as unknown as SidebarItemsType[];

const componentsSection = [
  {
    href: "/ui",
    icon: Grid,
    title: "Éléments UI",
    children: [
      {
        href: "/ui/alerts",
        title: "Alertes",
      },
      {
        href: "/ui/buttons",
        title: "Boutons",
      },
      {
        href: "/ui/cards",
        title: "Cartes",
      },
      {
        href: "/ui/carousel",
        title: "Carrousel",
      },
      {
        href: "/ui/embed-video",
        title: "Vidéo Intégrée",
      },
      {
        href: "/ui/general",
        title: "Général",
      },
      {
        href: "/ui/grid",
        title: "Grille",
      },
      {
        href: "/ui/modals",
        title: "Modals",
      },
      {
        href: "/ui/offcanvas",
        title: "Offcanvas",
      },
      {
        href: "/ui/tabs",
        title: "Tabs",
      },
      {
        href: "/ui/typography",
        title: "Typographie",
      },
    ],
  },
  {
    href: "/icons",
    icon: Heart,
    title: "Icônes",
    badge: "1500+",
    children: [
      {
        href: "/icons/lucide",
        title: "Lucide",
      },
      {
        href: "/icons/font-awesome",
        title: "Font Awesome",
      },
    ],
  },
  {
    href: "/forms",
    icon: CheckSquare,
    title: "Formulaires",
    children: [
      {
        href: "/forms/layouts",
        title: "Mises en page",
      },
      {
        href: "/forms/basic-inputs",
        title: "Champs Basiques",
      },
      {
        href: "/forms/input-groups",
        title: "Groupes de Champs",
      },
      {
        href: "/forms/floating-labels",
        title: "Libellés Flottants",
      },
    ],
  },
  {
    href: "/tables",
    icon: List,
    title: "Tableaux",
  },
] as unknown as SidebarItemsType[];

const pluginsSection = [
  {
    href: "/form-plugins",
    icon: CheckSquare,
    title: "Plugins de Formulaire",
    children: [
      {
        href: "/form-plugins/advanced-inputs",
        title: "Champs Avancés",
      },
      {
        href: "/form-plugins/formik",
        title: "Formik",
        badge: "New",
      },
      {
        href: "/form-plugins/editors",
        title: "Éditeurs",
      },
    ],
  },
  {
    href: "/advanced-tables",
    icon: List,
    title: "Tableaux Avancés",
    children: [
      {
        href: "/advanced-tables/pagination",
        title: "Pagination",
      },
      {
        href: "/advanced-tables/column-sorting",
        title: "Tri par Colonne",
      },
      {
        href: "/advanced-tables/column-filtering",
        title: "Filtrage par Colonne",
      },
      {
        href: "/advanced-tables/row-expanding",
        title: "Extension de Ligne",
      },
      {
        href: "/advanced-tables/row-selection",
        title: "Sélection de Ligne",
      },
    ],
  },
  {
    href: "/charts",
    icon: PieChart,
    title: "Graphiques",
    badge: "Nouveau",
    children: [
      {
        href: "/charts/chartjs",
        title: "Chart.js",
      },
      {
        href: "/charts/apexcharts",
        title: "ApexCharts",
        badge: "New",
      },
    ],
  },
  {
    href: "/notifications",
    icon: Bell,
    title: "Notifications",
  },
  {
    href: "/maps",
    icon: MapPin,
    title: "Cartes",
    children: [
      {
        href: "/maps/google-maps",
        title: "Google Maps",
      },
      {
        href: "/maps/vector-maps",
        title: "Cartes Vectorielles",
      },
    ],
  },
  {
    href: "/404",
    icon: Share,
    title: "Multi Niveau",
    children: [
      {
        href: "/404",
        title: "Deux Niveaux",
        children: [
          {
            href: "/404",
            title: "Item 1",
          },
          {
            href: "/404",
            title: "Item 2",
          },
        ],
      },
      {
        href: "/404",
        title: "Trois Niveaux",
        children: [
          {
            href: "/404",
            title: "Item 1",
            children: [
              {
                href: "/404",
                title: "Item 1",
              },
              {
                href: "/404",
                title: "Item 2",
              },
            ],
          },
          {
            href: "/404",
            title: "Item 2",
          },
        ],
      },
    ],
  },
] as unknown as SidebarItemsType[];

const navItems = [
  {
    title: "Navigation",
    pages: navigationSection,
  },
  {
    title: "Exercices",
    pages: exercisesSection,
  },
  {
    title: "Applications",
    pages: appsSection,
  },
  {
    title: "Pages",
    pages: pagesSection,
  },
  {
    title: "Outils et Composants",
    pages: componentsSection,
  },
  {
    title: "Plugins et Extensions",
    pages: pluginsSection,
  },
];

export default navItems;
