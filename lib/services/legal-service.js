import { getDateFromTimestamp, getHtmlContent } from "@/lib/utils";

const DEFAULT_LEGAL_WRITER = {
  avatar: "/images/avatars/lexa-insider.png",
  avatar_fallback: "L",
  name: "LEXA",
};

const legals = [
  {
    id: 1,
    uuid: "privacy-policy",
    type: "appendix 1",
    headline: "Privacy Policy",
    external_link: null,
    writer: DEFAULT_LEGAL_WRITER,
    created_at: 1737738000,
    updated_at: 1737738000,
  },
  {
    id: 2,
    uuid: "security-policy",
    type: "appendix 2",
    headline: "Security Policy",
    external_link: null,
    writer: DEFAULT_LEGAL_WRITER,
    created_at: 1737738000,
    updated_at: 1737738000,
  },
  {
    id: 3,
    uuid: "cookie-policy",
    type: "appendix 3",
    headline: "Cookie Policy",
    external_link: null,
    writer: DEFAULT_LEGAL_WRITER,
    created_at: 1737738000,
    updated_at: 1737738000,
  },
  {
    id: 4,
    uuid: "acceptable-use-policy",
    type: "appendix 4",
    headline: "Acceptable Use Policy",
    external_link: null,
    writer: DEFAULT_LEGAL_WRITER,
    created_at: 1737738000,
    updated_at: 1737738000,
  },
  {
    id: 5,
    uuid: "terms-and-condition",
    type: "appendix 5",
    headline: "Terms and Condition",
    external_link: null,
    writer: DEFAULT_LEGAL_WRITER,
    created_at: 1737738000,
    updated_at: 1737738000,
  },
  {
    id: 6,
    uuid: "data-processing-agreement",
    type: "appendix 6",
    headline: "Data Processing Agreement",
    external_link: null,
    writer: DEFAULT_LEGAL_WRITER,
    created_at: 1737738000,
    updated_at: 1737738000,
  },
  {
    id: 7,
    uuid: "lazuardy-privacy-policy",
    type: "appendix 7",
    headline: "Lazuardy Privacy Policy",
    external_link: "https://lazuardy.tech/privacy",
    writer: DEFAULT_LEGAL_WRITER,
    created_at: 1737738000,
    updated_at: 1737738000,
  },
  {
    id: 8,
    uuid: "lazuardy-terms-and-condition",
    type: "appendix 8",
    headline: "Lazuardy Terms and Condition",
    external_link: "https://lazuardy.tech/privacy",
    writer: DEFAULT_LEGAL_WRITER,
    created_at: 1737738000,
    updated_at: 1737738000,
  },
].sort((a, b) => a.id - b.id);

export async function getLegals() {
  return legals.map((item) => ({
    ...item,
    date: getDateFromTimestamp(item.created_at),
  }));
}

export async function getLegalByUuid(uuid) {
  const legal = (await getLegals()).find((item) => item.uuid === uuid) ?? null;
  legal.content = await getHtmlContent(`/template/legal/${uuid}.html`);
  return legal;
}

export async function getLegalLatestUpdateDate() {
  return getDateFromTimestamp(
    Math.max(...legals.map((item) => item.created_at)),
  );
}
