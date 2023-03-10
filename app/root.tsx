import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/tailwind.css";
import cabinet from "../styles/cabinet.css";

import type { LinksFunction, MetaFunction } from "@remix-run/node";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  // {
  //   rel: "preconnect",
  //   href: "https://fonts.googleapis.com",
  // },
  // {
  //   rel: "preconnect",
  //   href: "https://fonts.gstatic.com",
  // },
  // {
  //   rel: "stylesheet",
  //   href: "https://fonts.googleapis.com/css2?family=DM Serif Display:wght@400;600;700;800;900&display=swap",
  // },

  { rel: "stylesheet", href: cabinet },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "tcp-tunnel",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
