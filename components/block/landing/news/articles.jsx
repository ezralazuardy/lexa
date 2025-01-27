import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurHashImage from "@/components/ui/blurhash-image";
import Link from "next/link";

export default function Articles({ news }) {
  return (
    <div className="flex items-center justify-center mt-14 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full md:max-w-screen-lg">
        {news.map((data) => (
          <Item key={data.uuid} data={data} />
        ))}
      </div>
    </div>
  );
}

export function Item({ data }) {
  return (
    <Link
      key={data.uuid}
      href={`/news/${data.uuid}`}
      className="relative w-full transition-opacity duration-1000 hover:cursor-pointer hover:opacity-70"
    >
      <BlurHashImage
        alt={data.headline}
        src={`/images/news/${data.uuid}.png`}
        blurhash={data.blurhash}
        layout="responsive"
        draggable="false"
        width={500}
        height={280}
      />
      <h2 className="text-lg font-medium text-[#171717] mt-4 leading-snug">
        {data.headline}
      </h2>
      <p className="text-sm font-light text-gray-600 mt-2 leading-snug">
        {data.subheadline}
      </p>
      <div className="flex items-center mt-4">
        <Avatar className="mr-3 w-8 h-8">
          <AvatarImage src={data.writer.avatar} alt={data.writer.name} />
          <AvatarFallback>{data.writer.avatar_fallback}</AvatarFallback>
        </Avatar>
        <p className="text-sm font-regular text-gray-800 leading-none">
          {data.writer.name}
        </p>
      </div>
    </Link>
  );
}
