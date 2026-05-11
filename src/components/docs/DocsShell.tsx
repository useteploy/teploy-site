import { getCollection } from "@neutron-build/core/content";
import { buildSidebarTree } from "../../lib/sidebar";
import { Sidebar } from "./Sidebar";
import { Island } from "@neutron-build/core/client";
import { SidebarToggle } from "./SidebarToggle";
import { Search } from "./Search";

// Used as a wrapper inside each docs page (docs/index, docs/[...slug]).
// We can't use docs/_layout for this because Neutron's nested-layout
// composition currently renders the parent layout INSIDE the child layout
// — so wrapping the page in docs/_layout puts Nav+Footer inside the docs
// content column. Wrapping inside the page instead keeps Nav+main+Footer
// from RootLayout outside, and the docs grid inside main, where it belongs.

interface DocsShellProps {
  activeSlug: string;
  entries: { slug: string; data: any }[];
  children: any;
}

export function DocsShell({ activeSlug, entries, children }: DocsShellProps) {
  const tree = buildSidebarTree(entries, activeSlug);

  return (
    <>
      <Island component={SidebarToggle} client="load" id="sidebar-toggle" />
      <div class="docs-layout">
        <aside class="docs-sidebar">
          <div class="docs-sidebar-header">
            <a href="/docs" class="docs-sidebar-logo">Teploy Docs</a>
            <Island component={Search} client="idle" id="docs-search" props={{ entries }} />
          </div>
          <nav class="docs-sidebar-nav">
            <Sidebar tree={tree} />
          </nav>
        </aside>
        <div class="docs-content">
          {children}
        </div>
      </div>
    </>
  );
}

export async function loadDocsEntries() {
  const docs = await getCollection("docs");
  return docs
    .filter((d: any) => !d.data.draft)
    .map((d: any) => ({ slug: d.slug, data: d.data }));
}
