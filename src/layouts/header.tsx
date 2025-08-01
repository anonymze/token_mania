import { CartIcon } from "@/assets/icons/cart";
import logoTitleImage from "@/assets/images/logo_title_3.png";
import profileImage from "@/assets/images/profile.png";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";

export default function Header() {
  return (
    /* Header */
    <header className="col-span-5 row-span-2 flex justify-between px-6 pt-6">
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
        layout="constrained"
        width={80}
        height={40}
        alt="Logo titre Token Mania"
        className="mb-auto object-contain"
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
            width={34}
            height={34}
            alt="Profile Benjamin Leproust"
          />
          <div>
            <p className="text-xs font-medium">Benjamin</p>
            <p className="text-xs font-medium">Leproust</p>
          </div>
        </div>
      </section>
    </header>
  );
}
