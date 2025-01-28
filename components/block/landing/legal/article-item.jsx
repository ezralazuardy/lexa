import { BookCover } from "book-cover-3d";
import Image from "next/image";
import Link from "next/link";

export default function Item({ data, width = 140, height = 220 }) {
  return (
    <Link
      key={data.uuid}
      href={data.external_link ? data.external_link : `/legal/${data.uuid}`}
      target={data.external_link ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="relative w-full transition-all duration-1000 hover:scale-110 mb-20"
    >
      <BookCover width={width} height={height}>
        <Image
          alt={data.headline}
          src={`/images/legal/${data.uuid}.png`}
          width={width}
          height={height}
          className="select-none object-cover w-full h-full"
          draggable="false"
        />
      </BookCover>
    </Link>
  );
}
