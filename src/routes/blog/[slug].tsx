import "../../styles/blog.css";
import { getCollection, getEntry } from "@neutron-build/core/content";
import { calculateReadingTime } from "@neutron-build/core";

export const config = { mode: "static" };

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return {
    paths: posts
      .filter((p: any) => !p.data.draft)
      .map((p: any) => ({ params: { slug: p.slug } })),
  };
}

export async function loader({ params }: { params: Record<string, string> }) {
  const entry = await getEntry("blog", params.slug);
  if (!entry) throw new Response("Not found", { status: 404 });

  const readingTime = calculateReadingTime(entry.body);

  return {
    title: entry.data.title,
    description: entry.data.description,
    publishedAt: entry.data.publishedAt,
    updatedAt: entry.data.updatedAt,
    author: entry.data.author,
    category: entry.data.category,
    tags: entry.data.tags,
    html: entry.html,
    readingTime,
  };
}

export function head({ data }: { data: any }) {
  return {
    title: data.title,
    description: data.description,
  };
}

export default function BlogPost({ data }: { data: any }) {
  const formattedDate = new Date(data.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div class="py-24 sm:py-32">
      <article class="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div class="mb-12">
          <div class="flex items-center gap-3 mb-6">
            <span class="category-badge">{data.category}</span>
            <span class="text-zinc-600 text-[13px]">&#183;</span>
            <time class="text-zinc-500 text-[13px]">{formattedDate}</time>
            {data.readingTime && (
              <>
                <span class="text-zinc-600 text-[13px]">&#183;</span>
                <span class="text-zinc-500 text-[13px]">{data.readingTime.text}</span>
              </>
            )}
          </div>

          <h1 class="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-4">
            {data.title}
          </h1>
          <p class="text-zinc-600 dark:text-zinc-400 text-[17px] leading-relaxed">{data.description}</p>

          {data.author && (
            <div class="mt-6 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-zinc-200/70 dark:bg-white/[0.06] flex items-center justify-center text-[13px] text-zinc-600 dark:text-zinc-400 font-medium">
                {data.author.name.charAt(0)}
              </div>
              <div>
                <div class="text-[14px] text-zinc-900 dark:text-white font-medium">{data.author.name}</div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div class="prose" dangerouslySetInnerHTML={{ __html: data.html }} />

        {/* Tags */}
        {data.tags && data.tags.length > 0 && (
          <div class="mt-12 pt-8 border-t border-zinc-200/70 dark:border-white/[0.06]">
            <div class="flex flex-wrap gap-2">
              {data.tags.map((tag: string) => (
                <span class="px-3 py-1 text-[12px] text-zinc-500 bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/70 dark:border-white/[0.06] rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div class="mt-12">
          <a href="/blog" class="inline-flex items-center gap-2 text-[14px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </a>
        </div>
      </article>
    </div>
  );
}
