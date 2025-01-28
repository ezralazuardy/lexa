import BlurHashImage from "@/components/ui/blurhash-image";

export default function ArticleImage({ uuid, blurhash }) {
  return (
    <div className="flex-col flex items-center justify-center w-full">
      <BlurHashImage
        blurhash={blurhash}
        alt={uuid}
        src={`/images/news/${uuid}.png`}
        draggable="false"
        rounded="false"
      />
    </div>
  );
}
