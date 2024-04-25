import { Layout } from "@/components/Layout";
import { ANIMAL_CARRY_ONS } from "@/constants/animal-carry-ons";
import { DOG_COLLARS } from "@/constants/dog-collars";
import { Hero } from "@/views/home/Hero";
import { ProductShowcase } from "@/views/home/ProductShowcase";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <ProductShowcase
        title={"Dog Collars"}
        products={DOG_COLLARS}
        buttonLabel={"See More Dog Collars"}
        buttonLink={"#"}
      />
      <ProductShowcase
        title={"Animal Carry Ons"}
        products={ANIMAL_CARRY_ONS}
        buttonLabel={"See More Carry Ons"}
        buttonLink={"#"}
      />
    </Layout>
  );
}
