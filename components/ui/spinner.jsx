import { Loader } from "lucide-react";

export default function Spinner({ className }) {
  return (
    <Loader
      className={`animate-spin text-gray-900 h-8 w-8 md:h-10 md:w-10 ${className}`}
    />
  );
}
