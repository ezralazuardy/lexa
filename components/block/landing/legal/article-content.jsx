export default function ArticleContent({ content }) {
  return (
    <div className="flex-col flex items-center justify-center w-full px-8 md:px-0">
      <div className="text-sm md:text-md font-light text-[#171717] text-justify leading-snug md:max-w-screen-md md:px-6">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="article-content"
        />
      </div>
    </div>
  );
}
