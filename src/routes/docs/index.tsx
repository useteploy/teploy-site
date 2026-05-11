import { getCollection } from "@neutron-build/core/content";
import { DocsShell, loadDocsEntries } from "../../components/docs/DocsShell";

export const config = { mode: "static" };

interface DocEntry {
  slug: string;
  data: { title: string; description?: string; order?: number; draft?: boolean };
}

interface Section {
  name: string;
  label: string;
  description: string;
  pages: { slug: string; title: string; description?: string; order: number }[];
}

const SECTION_LABELS: Record<string, { label: string; description: string }> = {
  "getting-started": {
    label: "Getting started",
    description: "What Teploy is, how the ecosystem fits together, and your first deploy.",
  },
  deploying: {
    label: "Deploying",
    description: "Static sites, containers, databases, GitHub integration.",
  },
  domains: {
    label: "Domains",
    description: "Custom domains, automatic SSL via Let's Encrypt, Cloudflare setup.",
  },
  servers: {
    label: "Servers",
    description: "Provisioning, configuration, and operating your fleet.",
  },
  reference: {
    label: "Reference",
    description: "CLI commands, configuration files, and API specifications.",
  },
};

export async function loader() {
  const docs = (await getCollection("docs")) as DocEntry[];
  const live = docs.filter((d) => !d.data.draft);

  const grouped = new Map<string, Section>();
  for (const d of live) {
    const segment = d.slug.split("/")[0] || "getting-started";
    const meta = SECTION_LABELS[segment] || { label: segment, description: "" };
    if (!grouped.has(segment)) {
      grouped.set(segment, { name: segment, ...meta, pages: [] });
    }
    grouped.get(segment)!.pages.push({
      slug: d.slug,
      title: d.data.title,
      description: d.data.description,
      order: d.data.order ?? 999,
    });
  }
  for (const s of grouped.values()) s.pages.sort((a, b) => a.order - b.order);

  // Stable section order: known sections first in the order declared above,
  // then anything else alphabetically.
  const known = Object.keys(SECTION_LABELS);
  const sections = [...grouped.values()].sort((a, b) => {
    const ai = known.indexOf(a.name);
    const bi = known.indexOf(b.name);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.name.localeCompare(b.name);
  });

  const entries = await loadDocsEntries();
  return { sections, entries };
}

export function head() {
  return {
    title: "Docs",
    description: "Teploy documentation — deploy, observe, and operate your stack.",
  };
}

export default function DocsIndex({
  data,
}: {
  data: { sections: Section[]; entries: { slug: string; data: any }[] };
}) {
  return (
    <DocsShell activeSlug="index" entries={data.entries}>
      <div class="docs-index">
        <header class="docs-index-header">
          <h1>Documentation</h1>
          <p>
            Self-hosted deploy, observability, and developer tools — one binary each, free, MIT or
            AGPL. Pick a section below or jump into the{" "}
            <a href="/docs/getting-started/quick-start">quick start</a>.
          </p>
        </header>

        <div class="docs-index-grid">
          {data.sections.map((section) => (
            <section key={section.name} class="docs-index-section">
              <h2>{section.label}</h2>
              {section.description && <p class="docs-index-section-desc">{section.description}</p>}
              <ul>
                {section.pages.map((page) => (
                  <li key={page.slug}>
                    <a href={`/docs/${page.slug}`}>{page.title}</a>
                    {page.description && (
                      <span class="docs-index-page-desc"> — {page.description}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </DocsShell>
  );
}
