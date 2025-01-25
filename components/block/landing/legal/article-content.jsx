export default function ArticleContent({ content }) {
  return (
    <div className="flex-col flex items-center justify-center w-full">
      <div className="text-md font-light text-[#171717] text-justify leading-snug lg:max-w-screen-md px-6">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="article-content"
        />
      </div>
    </div>
  );
}
