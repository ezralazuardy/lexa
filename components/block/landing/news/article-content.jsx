"use client";

export default function ArticleContent({ content }) {
  return (
    <div className="flex-col flex items-center justify-center w-full">
      <div className="text-lg font-regular text-[#171717] text-justify leading-snug lg:max-w-screen-md">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="article-content"
        />
      </div>
      <style jsx global>{`
        .article-content p {
          margin-bottom: 1.5rem !important;
        }

        .article-content h3 {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .article-content h4 {
          font-size: 1.3rem;
          font-weight: bold;
        }

        .article-content strong {
          font-weight: bold;
        }

        .article-content b {
          font-weight: bold;
        }

        .article-content a {
          text-decoration: underline;
        }

        .article-content img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 60%;
          border: 1px solid #262b2f;
        }

        .article-content pre {
          border: 1px solid #262b2f;
          padding: 1.2rem;
          font-size: 0.8rem;
          overflow-x: auto;
          white-space: nowrap;
        }

        .article-content figcaption {
          margin-top: 0.8rem;
          font-size: 0.8rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
