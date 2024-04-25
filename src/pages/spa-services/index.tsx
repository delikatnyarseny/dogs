import { Heading } from "@/components/Heading";
import { Layout } from "@/components/Layout";
import { SPA_SERVICES } from "@/constants/spa-services";
import { SpaServices } from "@/views/spa-services/SpaServices";

export default function SpaServicesPage() {
  return (
    <Layout>
      <Heading title="Spa Services" />

      <SpaServices data={SPA_SERVICES} />
    </Layout>
  );
}
