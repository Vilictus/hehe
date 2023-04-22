import type { APIContext } from "astro";

export function all({ request }: APIContext) {
  if (request.method != "GET")
    return { status: 405, body: "Method Not Allowed" };

  return {
    body: JSON.stringify(
      {
        updated: true,
      },
      undefined,
      2
    ),
  };
}
