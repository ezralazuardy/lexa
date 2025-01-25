import { BookCover } from "book-cover-3d";
import Image from "next/image";
import Link from "next/link";

export default function Item({ data }) {
  return (
    <Link
      key={data.uuid}
      href={data.external_link ? data.external_link : `/legal/${data.uuid}`}
      target={data.external_link ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="relative w-full transition-all duration-1000 hover:scale-110 mb-20"
    >
      <BookCover width={150} height={230}>
        <Image
          alt={data.headline}
          src={`/images/legal/${data.uuid}.png`}
          width={400}
          height={500}
        />
      </BookCover>
    </Link>
  );
}
