import { defineConfig } from "@neutron-build/core";

export default defineConfig({
  runtime: "preact",
  markdown: {
    // syntaxHighlight is disabled — Neutron's Shiki extension registers an
    // async renderer but Marked's async pipeline isn't fully wiring it up,
    // so code blocks were rendering as the literal text "[object Promise]".
    // Plain <pre><code> blocks ship until that's fixed upstream.
    syntaxHighlight: false,
  },
});
