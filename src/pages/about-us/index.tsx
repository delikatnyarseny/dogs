import { Heading } from "@/components/Heading";
import { Layout } from "@/components/Layout";
import { CAT_STORY, DOG_STORY } from "@/constants/about-us-stories";
import { AboutStory } from "@/views/about-us/AboutStory";

export default function AboutUsPage() {
  return (
    <Layout>
      <Heading title="About Us" note="Our Owners Love Dogs and Cats Only" />
      <AboutStory data={DOG_STORY} />
      <AboutStory data={CAT_STORY} imageLeft={false} />
    </Layout>
  );
}
