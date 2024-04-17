import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";

import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cormorant",
});

export default function ContactUs() {
  return (
    <div className={`${cormorant.variable}`}>
      <Header />
      <Contact />
    </div>
  );
}
