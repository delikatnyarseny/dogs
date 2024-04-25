import { Heading } from "@/components/Heading";
import { Layout } from "@/components/Layout";
import { REX_STORY1, REX_STORY2 } from "@/constants/blog-stories";
import { BlogStory } from "@/views/blog/BlogStory";

export default function BlogPage() {
  return (
    <Layout>
      <Heading title="The Bark Chronicles" note="Where To Read All About The Bark!" />

      <BlogStory data={REX_STORY1} />
      <BlogStory data={REX_STORY2} imageLeft={false} />
    </Layout>
  );
}
