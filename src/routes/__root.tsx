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
        title: "Token Mania",
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
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="grid h-dvh grid-cols-6 grid-rows-20">
          <Sidebar />
          <Header />
          {children}
        </div>
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
    crossorigin: true,
  },
  {
    rel: "preload",
    href: "/fonts/inter-v19-latin-500.woff2",
    as: "font",
    type: "font/woff2",
    crossorigin: true,
  },
  {
    rel: "preload",
    href: "/fonts/inter-v19-latin-600.woff2",
    as: "font",
    type: "font/woff2",
    crossorigin: true,
  },
  {
    rel: "preload",
    href: "/fonts/inter-v19-latin-700.woff2",
    as: "font",
    type: "font/woff2",
    crossorigin: true,
  },
  { rel: "stylesheet", href: appCss },
];
