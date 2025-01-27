import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Open_Sans from "@/lib/fonts/open-sans";

export default function ArticleHeader({
  type,
  headline,
  subheadline,
  date,
  writer,
}) {
  return (
    <div className="flex-col flex items-center justify-center w-full">
      <span className="text-sm font-regular text-neutral-600 text-center leading-none uppercase md:max-w-screen-lg">
        {type}
      </span>
      <h1
        className={`text-7xl font-medium text-[#171717] text-center leading-none mt-8 md:max-w-screen-lg ${Open_Sans.className}`}
      >
        {headline}
      </h1>
      <p className="text-lg font-light text-neutral-600 text-center leading-none mt-8 md:max-w-screen-sm">
        {subheadline}
      </p>
      <div className="flex items-center mt-10">
        <p className="text-sm font-regular text-gray-800 leading-none mr-4">
          {date}
        </p>
        <Avatar className="mr-3 w-8 h-8">
          <AvatarImage src={writer.avatar} alt={writer.name} />
          <AvatarFallback>{writer.avatar_fallback}</AvatarFallback>
        </Avatar>
        <p className="text-sm font-regular text-gray-800 leading-none">
          {writer.name}
        </p>
      </div>
    </div>
  );
}
