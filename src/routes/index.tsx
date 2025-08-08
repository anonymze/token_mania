// src/routes/index.tsx
import { BuildingIcon } from "@/assets/icons/building";
import { SearchIcon } from "@/assets/icons/search";
import { PromotionCard } from "@/components/PromotionCard";
import { Button } from "@/components/ui/button";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
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
    <>
      {/* Header home */}
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
      <main className="col-span-5 row-span-12 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <PromotionCard
            id="winter-discount"
            title="GET UP TO 50% OFF"
            description="Get Discount"
            image="/api/placeholder/150/150"
            backgroundColor="#a8e6a3"
            ctaText="Shop Now"
            ctaLink="/shop/winter-sale"
            className="md:col-span-2"
          />

          <PromotionCard
            id="winter-weekend"
            title="Winter's weekend"
            description="keep it casual"
            image="/api/placeholder/150/150"
            backgroundColor="#f4d03f"
            ctaText="Explore"
            ctaLink="/collections/weekend"
            className="md:col-span-1"
          />
        </div>
      </main>
    </>
  );
}
