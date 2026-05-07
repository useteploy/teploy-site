interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  publishedAt: Date;
  category: string;
  readingTime: number;
  featured?: boolean;
  image?: { src: string; alt: string };
}

export default function BlogCard({
  title, description, slug, publishedAt, category, readingTime, featured = false, image,
}: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <a href={`/blog/${slug}`} class={`blog-card group block${featured ? " featured" : ""}`}>
      {image && (
        <div class="card-image">
          <img src={image.src} alt={image.alt} loading="lazy" />
        </div>
      )}

      <div class="card-content">
        <div class="card-meta">
          <span class="category-badge">{category}</span>
          <span class="meta-separator">&#183;</span>
          <time dateTime={new Date(publishedAt).toISOString()}>{formattedDate}</time>
          <span class="meta-separator">&#183;</span>
          <span>{readingTime} min read</span>
        </div>

        <h3 class="card-title">{title}</h3>
        <p class="card-description">{description}</p>

        <div class="card-footer">
          <span class="read-more">
            Read article
            <svg class="arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
