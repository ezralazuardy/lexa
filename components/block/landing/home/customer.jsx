import customer1 from "@/public/images/customers/customer-1.png";
import customer2 from "@/public/images/customers/customer-2.png";
import customer3 from "@/public/images/customers/customer-3.png";
import Image from "next/image";
import Link from "next/link";

const customers = [
  {
    link: "https://lazuardy.tech",
    src: customer1,
    alt: "Customer 1",
    height: 150,
    width: 500,
  },
  {
    link: "https://maps.app.goo.gl/jRvPprWppSS5EgJS7",
    src: customer2,
    alt: "Customer 2",
    height: 150,
    width: 500,
    imageClass: "mb-0.5 mx-8 md:mx-20",
  },
  {
    link: "https://lokari.id/kantor-advokat-pengacara-anwar-effendi-sh-mh-rekan-semarang_kXxLWq6E7r",
    src: customer3,
    alt: "Customer 3",
    height: 150,
    width: 500,
  },
];

export default function Customer() {
  return (
    <div className="flex items-center justify-center w-full mt-6 px-8">
      {customers.map((customer, index) => (
        <Link
          key={index}
          href={customer.link}
          className="flex items-center justify-center w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt={customer.alt}
            src={customer.src}
            className={`select-none object-cover w-auto h-full max-h-10 md:max-h-16 ${customer.imageClass}`}
            placeholder="blur"
            draggable="false"
          />
        </Link>
      ))}
    </div>
  );
}
