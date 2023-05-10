import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStyles from "./styles/tailwind.css"

import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Header from "./client/components/header/header";
import Main from "./client/components/layout/main/main";


export const links: LinksFunction = () => [
  {
    rel: "preload",
    as: "font",
    href: "/assets/fonts/Satoshi-Regular.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/assets/fonts/Satoshi-Bold.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  { rel: "stylesheet", href: tailwindStyles },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/assets/favicons/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/assets/favicons/favicon-32x32.png",
  },

  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/assets/favicons/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/assets/favicons/site.webmanifest",
  },
  {
    rel: "mask-icon",
    href: "/assets/favicons/safari-pinned-tab.svg",
    color: "#5bbad5",
  }
];



export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    title: "Dioni Mara Yoga & Terapias",
    viewport: "width=device-width,initial-scale=1",
    description: "Dioni Mara Yoga & Terapias",
    keywords: "yoga, terapias, massagem, reiki, meditação, yoga em casa, yoga online, yoga em grupo, yoga em empresas, yoga em escolas, yoga em academias, yoga em condomínios, yoga"
  }
}


export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{ textRendering: "optimizeLegibility" }}>
        <Main>
          <Header />
          <Outlet />
        </Main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

      </body>
    </html>
  );
}
