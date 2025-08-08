// src/routes/__root.tsx
/// <reference types="vite/client" />
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import Header from "@/layouts/header";
import Sidebar from "@/layouts/sidebar";
import appCss from "@/styles/global.css?url";

export const Route = createRootRoute({
  // @ts-expect-error
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Token Mania - Jetons de Jeu et Plaques Artisanales pour Jeux de Société",
      },
      {
        name: "description",
        content: "Jetons de jeu, plaques artisanales personnalisées et accessoires pour jeux de société et jeux de cartes. Améliorez votre expérience de jeu de table avec des composants de haute qualité.",
      },
      {
        name: "keywords",
        content: "jetons de jeu, jetons jeux de société, accessoires jeux de cartes, plaques artisanales, jeux de table, composants jeux de société, jetons personnalisés, améliorations de jeux",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "author",
        content: "Token Mania",
      },
      {
        name: "language",
        content: "fr-FR",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content: "Token Mania - Jetons de Jeu et Plaques Artisanales pour Jeux de Société",
      },
      {
        property: "og:description",
        content: "Jetons de jeu, plaques artisanales personnalisées et accessoires pour jeux de société et jeux de cartes. Améliorez votre expérience de jeu de table.",
      },
      {
        property: "og:locale",
        content: "fr_FR",
      },
      {
        property: "og:site_name",
        content: "Token Mania",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Token Mania - Jetons de Jeu et Plaques Artisanales pour Jeux de Société",
      },
      {
        name: "twitter:description",
        content: "Jetons de jeu, plaques artisanales personnalisées et accessoires pour jeux de société et jeux de cartes. Améliorez votre expérience de jeu de table.",
      },
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],
    links: links,
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body className="grid h-dvh grid-cols-6 grid-rows-20">
        <Sidebar />
        <Header />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const links = [
  {
    rel: "preload",
    href: "/fonts/inter-v19-latin-400.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/inter-v19-latin-500.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/inter-v19-latin-600.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/inter-v19-latin-700.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  { rel: "stylesheet", href: appCss },
];
