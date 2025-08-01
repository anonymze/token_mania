import { ExploreIcon } from "@/assets/icons/explore";
import { QuestionIcon } from "@/assets/icons/question";
import leaveImage from "@/assets/images/leave.png";
import logoImage from "@/assets/images/logo.png";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";

export default function Sidebar() {
  return (
    /* Sidebar */
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
  );
}
