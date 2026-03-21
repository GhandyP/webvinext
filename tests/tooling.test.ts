import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vite-plus/test";

describe("tooling baseline", () => {
  it("defines the required lifecycle scripts", async () => {
    const packageJsonPath = resolve(import.meta.dirname, "..", "package.json");
    const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8")) as {
      scripts?: Record<string, string>;
    };

    expect(packageJson.scripts).toMatchObject({
      "content:generate": "node scripts/generate-mdx-content.mjs",
      dev: "npm run content:generate && vp dev",
      build: "npm run content:generate && vp build",
      preview: "npm run content:generate && vp preview",
      check: "npm run typecheck && npm run test",
      deploy: "wrangler deploy",
    });
  });
});
