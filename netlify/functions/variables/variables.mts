import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;

  if (!myImportantVariable) throw "Missing MY_IMPORTANT_VARIABLE";

  console.log("Hello world from logs");

  return new Response(JSON.stringify({ myImportantVariable }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
