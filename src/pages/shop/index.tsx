import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cormorant",
});

export default function Shop() {
  return <div className={`${cormorant.variable}`}></div>;
}
