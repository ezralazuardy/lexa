const news = [
  {
    uuid: "first-private-beta",
    type: "event",
    headline: "LEXA's First Phase of Private Beta is Now Opened",
    subheadline:
      "Be among the first to explore how LEXA transforms legal work with cutting-edge AI. Join our private beta today.",
    content:
      "<section><p>LEXA, the innovative AI-powered legal platform developed by Lazuardy, is excited to announce the launch of its first phase of private beta. Designed to simplify and enhance the way legal professionals work, LEXA combines cutting-edge technology with practical tools tailored for the legal industry.</p><p>The private beta program offers early access to LEXA’s core features, including an intelligent assistant for quick answers, advanced research capabilities, a secure document vault, a powerful query engine, and seamless collaboration tools for teams and clients. This exclusive opportunity allows participants to explore LEXA’s potential while providing feedback that will help shape the platform’s future.</p><p>“We believe LEXA can redefine how legal professionals approach their work, making it smarter, faster, and more efficient,” said Ezra Lazuardy, Founder of Lazuardy. “This private beta phase is an important step in ensuring we deliver a product that truly meets the needs of the industry.”</p><p>The private beta is ideal for legal professionals, firms, and teams looking to streamline their workflow with technology. Participants will not only gain early access to LEXA but also play an active role in refining its features and performance before the full-scale launch.</p><p>If you’re ready to be part of this exciting journey, registration for the private beta is now open on LEXA’s official website. Don’t miss your chance to join the growing community shaping the future of legal work.</p><p>For questions or further information, feel free to reach out to the team at <a href='mailto:lexa@lazuardy.tech'>lexa@lazuardy.tech</a>.</p></section>",
    blurhash: "LNEC:]00_4RPD%Rjt7oLNH-:M|of",
    created_at: 1737738000,
    updated_at: 1737738000,
    writer: {
      avatar: "/images/avatars/lexa-insider.png",
      avatar_fallback: "L",
      name: "LEXA Insider",
    },
  },
].sort((a, b) => b.created_at - a.created_at);

export function getNews() {
  return news.map((item) => ({
    ...item,
    date: new Date(item.created_at * 1000)
      .toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, " "),
  }));
}

export function getNewsByUuid(uuid) {
  return getNews().find((item) => item.uuid === uuid) ?? null;
}
