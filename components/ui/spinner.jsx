import { Loader } from "lucide-react";

export default function Spinner({ className }) {
  return (
    <Loader className={`animate-spin text-gray-900 h-10 w-10 ${className}`} />
  );
}
