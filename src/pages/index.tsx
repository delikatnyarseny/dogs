import { Cinzel_Decorative, Tangerine } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cinzel-decorative",
});
const tangerine = Tangerine({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tangerine",
});

export default function Home() {
  return (
    <div className={`${cinzelDecorative.variable} ${tangerine.variable}`}></div>
  );
}
