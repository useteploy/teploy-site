import "../../styles/docs.css";
import "../../styles/prose.css";
import "../../styles/code.css";
import "../../styles/components.css";
import "../../styles/search.css";

export const config = { mode: "static" };

// Passthrough — see src/components/docs/DocsShell.tsx for why the grid
// + sidebar live inside each page rather than this layout file.
export default function DocsLayout({ children }: { children?: unknown }) {
  return <>{children}</>;
}
