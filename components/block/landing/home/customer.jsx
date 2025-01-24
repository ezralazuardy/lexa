import customer1 from "@/public/images/customer-1.png";
import customer2 from "@/public/images/customer-2.png";
import customer3 from "@/public/images/customer-3.png";
import Image from "next/image";
import Link from "next/link";

export default function Customer() {
  return (
    <>
      <div className="flex items-center justify-center mt-6">
        <div className="flex items-center justify-center w-full lg:max-w-screen-lg">
          <Link
            href="https://lazuardy.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-24 mr-20 select-none"
            style={{ userSelect: "none" }}
          >
            <Image
              alt="Customer 1"
              src={customer1}
              placeholder="blur"
              height={100}
              width={400}
              className="select-none"
              style={{ userSelect: "none" }}
              draggable="false"
            />
          </Link>
          <Link
            href="https://maps.app.goo.gl/jRvPprWppSS5EgJS7"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-28 mr-16 select-none"
            style={{ userSelect: "none" }}
          >
            <Image
              alt="Customer 2"
              src={customer2}
              placeholder="blur"
              height={100}
              width={400}
              className="select-none"
              style={{ userSelect: "none" }}
              draggable="false"
            />
          </Link>
          <Link
            href="https://lokari.id/kantor-advokat-pengacara-anwar-effendi-sh-mh-rekan-semarang_kXxLWq6E7r"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-56 pt-4 select-none"
            style={{ userSelect: "none" }}
          >
            <Image
              alt="Customer 3"
              src={customer3}
              placeholder="blur"
              height={100}
              width={400}
              className="select-none"
              style={{ userSelect: "none" }}
              draggable="false"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
