// src/routes/index.tsx
import logoImage from "@/assets/images/logo_2.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Image } from "@unpic/react";
import * as fs from "node:fs";

const filePath = "count.txt";

async function readCount() {
  console.log("readCount");
  return parseInt(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "0"),
  );
}

const getCount = createServerFn({
  method: "GET",
}).handler(() => {
  console.log("getCount");
  return readCount();
});

const updateCount = createServerFn({ method: "POST" })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    console.log("updateCount");
    const count = await readCount();
    await fs.promises.writeFile(filePath, `${count + data}`);
  });

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <div className="grid h-full grid-cols-6 grid-rows-16">
      {/* Sidebar */}
      <aside className="border-border col-span-1 row-span-full h-full border-r p-6">
        <div className="h-[var(--spacing-header-height)]">
          <Link to="/" className="group flex items-center gap-3">
            <Image
              src={logoImage}
              layout="constrained"
              width={60}
              height={50}
              alt="Logo website"
            />
          </Link>
        </div>
        <nav className="">
          <menu className="flex flex-col gap-2">
            <li className="bg-background rounded-[15px] text-xs font-medium text-white">
              <Link to="/" className="inline-block p-2.5">
                Produits Similaires
              </Link>
            </li>
            <li className="text-foreground rounded-[15px] p-2 text-xs font-medium">
              <Link to="/" className="inline-block p-2.5">
                Produits Similaires
              </Link>
            </li>
            <li className="text-foreground rounded-[15px] p-2 text-xs font-medium">
              <Link to="/" className="inline-block p-2.5">
                Produits Similaires
              </Link>
            </li>
            <li className="text-foreground rounded-[15px] p-2 text-xs font-medium">
              <Link to="/" className="inline-block p-2.5">
                Produits Similaires
              </Link>
            </li>
          </menu>
        </nav>
        <Separator className="text-muted-foreground my-6" />
        <div>
          <h3 className="mb-2 text-sm font-medium">Actions rapides</h3>
          <ul>
            <li>Demander un produit</li>
            <li>Demander un partenariat</li>
          </ul>
        </div>
        <Separator className="text-muted-foreground my-6" />
        <div>
          <h3 className="mb-2 text-sm font-medium">Dernières commandes</h3>
          <ul>
            <li>
              Blabkla <Link to="/">voir</Link>
            </li>
            <li>
              Blabla <Link to="/">voir</Link>
            </li>
            <li></li>
            <li></li>
          </ul>
          <Link
            to="/"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            Voir tout
          </Link>
        </div>
        <Link
          to="/"
          className="inline-block pt-18 text-sm text-red-600 hover:text-red-800 hover:underline"
        >
          Se déconnecter
        </Link>
      </aside>

      {/* Header */}
      <header className="relative col-span-5 row-span-3 flex flex-col border-b p-6">
        <div className="after:bg-background flex h-[var(--spacing-header-height)] justify-between after:absolute after:-bottom-0.5 after:left-17 after:h-1 after:w-5 after:rounded-full after:content-['']">
          <section
            aria-labelledby="orders-heading"
            className="flex h-fit items-center gap-2"
          >
            <data value="37" className="text-3xl font-medium">
              37
            </data>
            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-3"
            />
            <div className="flex flex-col justify-center">
              <h2
                id="orders-heading"
                className="text-xs leading-3.5 font-medium"
              >
                Commandes
              </h2>
              <time
                dateTime="P1M"
                className="text-muted-foreground text-xs leading-3.5"
              >
                Dernier mois
              </time>
            </div>
          </section>

          <section
            aria-label="User actions"
            className="flex h-fit items-center gap-4"
          >
            {/* Cart */}
            <div className="relative">
              <button
                className="hover:bg-muted/80 flex h-8 w-8 items-center justify-center rounded-lg"
                aria-label="Shopping cart with 3 items"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
                  />
                </svg>
              </button>
              <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-xs font-medium text-white">
                3
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500">
                <span className="text-sm font-medium text-white">R</span>
              </div>
              <span className="text-sm font-medium">Ryana</span>
            </div>
          </section>
        </div>
        <div className="flex flex-1 justify-between">
          <h3 className="text-2xl font-medium">Découvre</h3>
          <div className="flex gap-1">
            <Button className="rounded-full px-7 py-5">Hey</Button>
            <Button className="rounded-full px-7 py-5">Hey</Button>
            <Button className="rounded-full px-7 py-5">Hey</Button>
          </div>
          <div className="flex gap-1">
            <Button className="rounded-full px-7 py-5">Filtrer</Button>
            <Button className="rounded-full px-7 py-5">Hey</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="col-span-5 row-span-13 p-6"></main>
    </div>
  );
}
