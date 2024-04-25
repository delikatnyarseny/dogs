import { Layout } from "@/components/Layout";
import { Booking } from "@/views/book-apointment/Booking";
import { Hero } from "@/views/book-apointment/Hero";

export default function BookAppointmentPage() {
  return (
    <Layout>
      <Hero />
      <Booking />
    </Layout>
  );
}
