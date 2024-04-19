import { Layout } from "@/components/Layout";
import { animalCarryOns } from "@/constants/animal-carry-ons";
import { dogCollors } from "@/constants/dog-collars";
import { Hero } from "@/views/home/Hero";
import { ProductShowcase } from "@/views/home/ProductShowcase";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProductShowcase
        title={"Dog Collars"}
        products={dogCollors}
        buttonLabel={"See More Dog Collars"}
        buttonLink={"#"}
      />
      <ProductShowcase
        title={"Animal Carry Ons"}
        products={animalCarryOns}
        buttonLabel={"See More Carry Ons"}
        buttonLink={"#"}
      />
    </Layout>
  );
}
