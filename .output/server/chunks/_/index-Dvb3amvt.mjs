import { jsxs } from 'react/jsx-runtime';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import * as fs from 'node:fs';
import { a as createServerRpc, c as createServerFn } from './ssr.mjs';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';

const filePath = "count.txt";
async function readCount() {
  console.log("readCount");
  return parseInt(await fs.promises.readFile(filePath, "utf-8").catch(() => "0"));
}
const getCount_createServerFn_handler = createServerRpc("src_routes_index_tsx--getCount_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return getCount.__executeServer(opts, signal);
});
const getCount = createServerFn({
  method: "GET"
}).handler(getCount_createServerFn_handler, () => {
  console.log("getCount");
  return readCount();
});
const updateCount_createServerFn_handler = createServerRpc("src_routes_index_tsx--updateCount_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return updateCount.__executeServer(opts, signal);
});
const updateCount = createServerFn({
  method: "POST"
}).validator((d) => d).handler(updateCount_createServerFn_handler, async ({
  data
}) => {
  console.log("updateCount");
  const count = await readCount();
  await fs.promises.writeFile(filePath, `${count + data}`);
});
const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount()
});
function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("button", { type: "button", className: "bg-red-500 text-white p-4", onClick: () => {
    updateCount({
      data: 1
    }).then(() => {
      router.invalidate();
    });
  }, children: [
    "Add 1 to ",
    state,
    "?"
  ] });
}

export { getCount_createServerFn_handler, updateCount_createServerFn_handler };
//# sourceMappingURL=index-Dvb3amvt.mjs.map
