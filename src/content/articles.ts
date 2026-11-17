import { type Article, type ArticleLang, articles as snapshot } from "./data";

const DEVTO_USERNAME = "renanbastos93";
const DEVTO_API = `https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=1000`;

/** How often the server refreshes the list from dev.to, in seconds. */
export const ARTICLES_REVALIDATE = 60 * 60 * 24;

type DevtoArticle = {
  title: string;
  url: string;
  published_at: string;
  language: string | null;
};

async function fetchDevto(): Promise<Article[]> {
  const response = await fetch(DEVTO_API, {
    headers: { Accept: "application/vnd.forem.api-v1+json" },
    next: { revalidate: ARTICLES_REVALIDATE },
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) throw new Error(`dev.to API responded ${response.status}`);
  const data: DevtoArticle[] = await response.json();
  const knownLang = new Map(snapshot.map((article) => [article.href, article.lang]));
  return data.map((article) => ({
    title: article.title,
    href: article.url,
    date: article.published_at.slice(0, 10),
    lang: article.language === "pt" || article.language === "en"
      ? (article.language as ArticleLang)
      : (knownLang.get(article.url) ?? "en"),
    source: "dev.to",
  }));
}

/**
 * Articles from the dev.to API merged with the hand-kept list in data.ts
 * (Medium posts, plus a dev.to snapshot used when the API is unreachable).
 * Newest first.
 */
export async function getArticles(): Promise<Article[]> {
  let live: Article[] = [];
  try {
    live = await fetchDevto();
  } catch (error) {
    console.warn("Could not load articles from dev.to, using the saved list:", error);
  }
  const byHref = new Map<string, Article>();
  for (const article of [...snapshot, ...live]) byHref.set(article.href, article);
  return [...byHref.values()].sort((a, b) => b.date.localeCompare(a.date));
}
