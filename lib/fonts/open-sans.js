import { Open_Sans as font } from "next/font/google";

const Open_Sans = font({
  weights: [300, 400, 500, 600, 700],
  styles: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default Open_Sans;
