import "../../styles/blog.css";
import { getCollection } from "@neutron-build/core/content";
import BlogCard from "../../components/blog/BlogCard";

export const config = { mode: "static" };

export async function loader() {
  const posts = await getCollection("blog");
  const published = posts
    .filter((p: any) => !p.data.draft)
    .sort((a: any, b: any) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime());

  const featured = published.find((p: any) => p.data.featured);
  const regular = published.filter((p: any) => !p.data.featured);

  return { featured, regular };
}

export function head() {
  return { title: "Blog" };
}

function getReadingTime(body: string): number {
  return Math.max(1, Math.ceil(body.split(/\s+/).length / 200));
}

export default function BlogIndex({ data }: { data: any }) {
  return (
    <div class="py-24 sm:py-32">
      <div class="max-w-4xl mx-auto px-6">
        <div class="mb-16">
          <p class="text-indigo-400 text-[13px] font-medium uppercase tracking-wider mb-4">Blog</p>
          <h1 class="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">
            News & Updates
          </h1>
          <p class="text-zinc-700 dark:text-zinc-400 text-[16px] leading-relaxed max-w-2xl">
            The latest from the Teploy team -- product updates, engineering insights, tutorials, and guides to help you deploy better.
          </p>
        </div>

        {data.featured && (
          <div class="mb-12">
            <BlogCard
              title={data.featured.data.title}
              description={data.featured.data.description}
              slug={data.featured.slug}
              publishedAt={data.featured.data.publishedAt}
              category={data.featured.data.category}
              readingTime={getReadingTime(data.featured.body)}
              featured={true}
              image={data.featured.data.image}
            />
          </div>
        )}

        {data.regular.length > 0 ? (
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.regular.map((post: any) => (
              <BlogCard
                title={post.data.title}
                description={post.data.description}
                slug={post.slug}
                publishedAt={post.data.publishedAt}
                category={post.data.category}
                readingTime={getReadingTime(post.body)}
                image={post.data.image}
              />
            ))}
          </div>
        ) : (
          !data.featured && (
            <div class="text-center py-16">
              <p class="text-zinc-600 dark:text-zinc-500 text-[15px]">No posts yet. Check back soon!</p>
            </div>
          )
        )}

        <div class="mt-16 rounded-2xl border border-zinc-200/70 dark:border-white/[0.06] bg-zinc-100/60 dark:bg-white/[0.02] p-8 text-center">
          <h2 class="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Stay Updated</h2>
          <p class="text-zinc-600 dark:text-zinc-500 text-[14px] mb-6 max-w-md mx-auto">
            Get the latest posts and product updates delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              required
              class="flex-1 px-4 py-3 bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] rounded-lg text-zinc-900 dark:text-white text-[14px] placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
            />
            <button
              type="submit"
              class="px-6 py-3 bg-white text-zinc-900 text-[14px] font-medium rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
