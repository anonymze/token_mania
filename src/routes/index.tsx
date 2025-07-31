// src/routes/index.tsx
import { BuildingIcon } from "@/assets/icons/building";
import { CartIcon } from "@/assets/icons/cart";
import { ExploreIcon } from "@/assets/icons/explore";
import { QuestionIcon } from "@/assets/icons/question";
import { SearchIcon } from "@/assets/icons/search";
import leaveImage from "@/assets/images/leave.png";
import logoImage from "@/assets/images/logo.png";
import logoTitleImage from "@/assets/images/logo_title_3.png";
import profileImage from "@/assets/images/profile.png";
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
    <div className="grid h-full grid-cols-6 grid-rows-20">
      {/* Sidebar */}
      <aside className="border-r-gray-light col-span-1 row-span-full grid grid-rows-20 border-r p-6">
        <Link to="/" className="row-span-2 gap-3">
          <Image
            src={logoImage}
            layout="constrained"
            width={60}
            height={60}
            alt="Logo Token Mania"
            className="mx-auto"
          />
        </Link>

        <div className="row-span-17 flex flex-col">
          <nav>
            <menu className="flex flex-col gap-1">
              <li className="bg-background rounded-default text-xs font-medium text-white">
                <Link to="/" className="flex items-center gap-2 px-5 py-3.5">
                  <ExploreIcon className="size-5" />
                  Produits populaires
                </Link>
              </li>
              <li className="text-foreground rounded-default text-xs font-medium">
                <Link to="/" className="flex items-center gap-2 px-5 py-3.5">
                  <ExploreIcon className="size-5" />
                  Nouveautés
                </Link>
              </li>
              <li className="text-foreground rounded-default text-xs font-medium">
                <Link to="/" className="flex items-center gap-2 px-5 py-3.5">
                  <ExploreIcon className="size-5" />
                  Cadeaux
                </Link>
              </li>
              <li className="text-foreground rounded-default text-xs font-medium">
                <Link to="/" className="flex items-center gap-2 px-5 py-3.5">
                  <ExploreIcon className="size-5" />
                  Inspiration
                </Link>
              </li>
            </menu>
          </nav>
          <Separator className="my-6" />
          <section aria-labelledby="quick-actions">
            <h3
              id="quick-actions"
              className="text-gray mb-1.5 pl-5 text-xs font-medium"
            >
              Actions rapides
            </h3>
            <ul>
              <li className="text-foreground rounded-default group text-xs">
                <Link to="/" className="flex items-center gap-2 px-5 py-1.5">
                  <span className="group-hover:bg-background inline-block rounded p-1">
                    <QuestionIcon className="size-4 group-hover:text-white" />
                  </span>
                  Demander un produit
                </Link>
              </li>
              <li className="text-foreground rounded-default group text-xs">
                <Link to="/" className="flex items-center gap-2 px-5 py-1.5">
                  <span className="group-hover:bg-background inline-block rounded p-1">
                    <QuestionIcon className="size-4 group-hover:text-white" />
                  </span>
                  Demander un partenariat
                </Link>
              </li>
            </ul>
          </section>
          <Separator className="my-6" />
          <section aria-labelledby="last-orders">
            <h3
              id="last-orders"
              className="text-gray mb-1.5 pl-5 text-xs font-medium"
            >
              Dernières commandes
            </h3>
            <ul>
              <li className="text-foreground rounded-default group text-xs">
                <Link to="/" className="flex items-center gap-2 px-5 py-1.5">
                  <span className="group-hover:bg-tertiary inline-block rounded p-1">
                    <Image
                      src={logoImage}
                      layout="constrained"
                      width={15}
                      height={15}
                      alt="Logo Token Mania"
                      className="mx-auto"
                    />
                  </span>
                  Demander un produit
                </Link>
              </li>
              <li className="text-foreground rounded-default group text-xs">
                <Link to="/" className="flex items-center gap-2 px-5 py-1.5">
                  <span className="group-hover:bg-tertiary inline-block rounded p-1">
                    <Image
                      src={logoImage}
                      layout="constrained"
                      width={15}
                      height={15}
                      alt="Logo Token Mania"
                      className="mx-auto"
                    />
                  </span>
                  Demander un produit
                </Link>
              </li>
            </ul>
            <Link
              to="/"
              className="text-gray-dark mt-2 inline-block pl-5 text-xs font-medium hover:underline"
            >
              Voir tout
            </Link>
          </section>
          <Link
            to="/"
            className="hover:bg-tertiary rounded-default mt-auto flex items-center gap-2 px-4 py-2.5 text-xs font-medium"
          >
            <Image
              src={leaveImage}
              layout="constrained"
              width={35}
              height={35}
              alt=""
              className="mt-auto"
            />
            Se déconnecter
          </Link>
        </div>
      </aside>

      {/* Header */}
      <header className="col-span-5 row-span-2 flex justify-between p-6">
        <section
          aria-labelledby="orders-heading"
          className="flex h-fit items-center gap-2"
        >
          <data value="37" className="text-3xl font-medium">
            37
          </data>
          <Separator
            orientation="vertical"
            className="bg-gray data-[orientation=vertical]:h-3.5"
          />
          <div className="flex flex-col justify-center">
            <h2 id="orders-heading" className="text-xs leading-3.5 font-medium">
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

        <Image
          src={logoTitleImage}
          layout="fixed"
          width={100}
          height={40}
          alt="Logo titre Token Mania"
        />

        <section
          aria-label="User actions"
          className="flex h-fit items-center gap-4"
        >
          {/* Cart */}
          <div className="relative">
            <Link
              to="/"
              className="bg-gray-light text-foreground rounded-default hover:bg-tertiary flex items-center gap-1.5 px-4 py-4 text-xs"
            >
              <CartIcon />
              Panier
            </Link>
            <div className="bg-background absolute top-0.5 right-0.5 size-2.5 animate-pulse rounded-full"></div>
          </div>

          {/* User Profile */}
          <div className="hover:bg-tertiary rounded-default relative flex items-center gap-3 px-4 py-1.5">
            <Link to="/" className="absolute inset-0 z-10"></Link>
            <Image
              src={profileImage}
              layout="constrained"
              width={35}
              height={35}
              alt="Profile Benjamin Leproust"
            />
            <div>
              <p className="text-xs font-medium">Benjamin</p>
              <p className="text-xs font-medium">Leproust</p>
            </div>
          </div>
        </section>
      </header>

      <header className="border-b-gray-light after:bg-background relative col-span-5 row-span-2 border-b px-6 py-5 after:absolute after:-bottom-0.5 after:left-16 after:h-1 after:w-5 after:rounded-full after:content-['']">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium">Découvre</h3>
          <div className="flex gap-1.5">
            <Button className="text-foreground hover:bg-secondary bg-secondary flex items-center rounded-full">
              <BuildingIcon />
              Tout
            </Button>
            <Button className="text-gray hover:bg-secondary flex items-center rounded-full">
              <BuildingIcon />
              Cartes
            </Button>
            <Button className="text-gray hover:bg-secondary flex items-center rounded-full py-5">
              <BuildingIcon />
              Tokens
            </Button>
          </div>
          <div className="flex gap-1.5">
            <Button className="hover:bg-secondary rounded-full px-7 py-5">
              Filtrer
            </Button>
            <Button size={"icon"} className="hover:bg-secondary">
              <SearchIcon />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="col-span-5 row-span-12 p-6"></main>
    </div>
  );
}
