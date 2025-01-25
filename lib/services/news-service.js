import { getDateFromTimestamp, getHtmlContent } from "@/lib/utils";

const DEFAULT_NEWS_WRITER = {
  avatar: "/images/avatars/lexa-insider.png",
  avatar_fallback: "L",
  name: "LEXA Insider",
};

const news = [
  {
    id: 1,
    uuid: "first-private-beta",
    type: "event",
    headline: "LEXA's First Phase of Private Beta is Now Opened",
    subheadline:
      "Be among the first to explore how LEXA transforms legal work with cutting-edge AI. Join our private beta today.",
    blurhash: "LNEC:]00_4RPD%Rjt7oLNH-:M|of",
    created_at: 1737738000,
    updated_at: 1737738000,
    writer: DEFAULT_NEWS_WRITER,
  },
].sort((a, b) => b.created_at - a.created_at);

export async function getNews() {
  return news.map((item) => ({
    ...item,
    date: getDateFromTimestamp(item.created_at),
  }));
}

export async function getNewsByUuid(uuid) {
  const news = (await getNews()).find((item) => item.uuid === uuid) ?? null;
  news.content = await getHtmlContent(`/templates/news/${uuid}.html`);
  return news;
}

export async function getNewsLatestUpdateDate() {
  return getDateFromTimestamp(
    Math.max((await getNews()).map((item) => item.created_at)),
  );
}
