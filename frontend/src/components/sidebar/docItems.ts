import { SidebarItemsType } from "../../types/sidebar";

import {
  ArrowRightCircle,
  Code,
  Globe,
  Info,
  List,
  Mail,
  Shield,
  Users,
} from "lucide-react";

const gettingStartedSection = [
  {
    href: "/docs/introduction",
    icon: Info,
    title: "Bienvenue",
  },
  {
    href: "/docs/getting-started",
    icon: Code,
    title: "Pour Commencer",
  },
] as SidebarItemsType[];

const developmentSection = [
  {
    href: "/docs/routing",
    icon: ArrowRightCircle,
    title: "Routage",
  },
  {
    href: "/docs/auth",
    icon: Users,
    title: "Authentification",
    children: [
      {
        href: "/docs/auth/auth0",
        title: "Auth0",
      },
      {
        href: "/docs/auth/cognito",
        title: "Cognito",
      },
      {
        href: "/docs/auth/firebase",
        title: "Firebase",
      },
      {
        href: "/docs/auth/jwt",
        title: "JWT",
      },
    ],
  },
  {
    href: "/docs/guards",
    icon: Shield,
    title: "Gardes",
  },
  {
    href: "/docs/api-calls",
    icon: ArrowRightCircle,
    title: "Appels API",
  },
  {
    href: "/docs/environment-variables",
    icon: ArrowRightCircle,
    title: "Variables d'Environnement",
  },
  {
    href: "/docs/redux",
    icon: ArrowRightCircle,
    title: "Redux",
  },
  {
    href: "/docs/internationalization",
    icon: Globe,
    title: "Internationalisation",
  },
  {
    href: "/docs/eslint-and-prettier",
    icon: ArrowRightCircle,
    title: "ESLint & Prettier",
  },
  {
    href: "/docs/deployment",
    icon: ArrowRightCircle,
    title: "Déploiement",
  },
  {
    href: "/docs/migrating-to-next-js",
    icon: ArrowRightCircle,
    title: "Migration vers Next.js",
  },
] as SidebarItemsType[];

const helpSection = [
  {
    href: "/docs/support",
    icon: Mail,
    title: "Support",
  },
  {
    href: "/docs/changelog",
    icon: List,
    title: "Journal des Modifications",
    badge: "v4.0.1",
  },
] as SidebarItemsType[];

const navItems = [
  {
    title: "Pour Commencer",
    pages: gettingStartedSection,
  },
  {
    title: "Développement",
    pages: developmentSection,
  },
  {
    title: "Aide",
    pages: helpSection,
  },
];

export default navItems;
