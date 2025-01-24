import BlurHashImage from "@/components/ui/blurhash-image";

export default function ArticleImage({ uuid, blurhash }) {
  return (
    <div className="flex-col flex items-center justify-center w-full">
      <BlurHashImage
        alt={uuid}
        src={`/images/news/${uuid}.png`}
        blurhash={blurhash}
        layout="responsive"
        draggable="false"
        width={1024}
        height={576}
      />
    </div>
  );
}
