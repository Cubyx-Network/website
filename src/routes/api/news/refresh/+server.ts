import type { RequestHandler } from "./$types";
import { fetchAllArticles } from "$lib/server/newsArticleManager";

export const GET = (async ({ url }) => {
  const apiKey = url.searchParams.get('apiKey');

  if(apiKey !== process.env.API_KEY) {
    return new Response('Invalid API key', { status: 403 });
  }

  await fetchAllArticles().catch((err) => {
    console.error(err);
    return new Response('Internal server error', { status: 500 });
  });

  return new Response('Refreshed articles', { status: 200 });
}) satisfies RequestHandler;
