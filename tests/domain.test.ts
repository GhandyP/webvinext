import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vite-plus/test";
import robots from "../app/robots";
import sitemap from "../app/sitemap";
import { buildMetadata } from "../lib/seo";
import { SITE_URL } from "../lib/site-config";

describe("production domain", () => {
  it("uses the apex domain throughout public metadata", () => {
    expect(SITE_URL).toBe("https://ghandy.dev");
    const metadata = buildMetadata({ title: "Blog", path: "/blog" });
    expect(metadata.canonical).toBe("https://ghandy.dev/blog");
    expect(metadata.openGraph.url).toBe("https://ghandy.dev/blog");
    expect(metadata.openGraph.images[0]?.url).toBe("https://ghandy.dev/og-default.svg");
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: "https://ghandy.dev/sitemap.xml",
      host: "https://ghandy.dev",
    });
    const entries = sitemap();
    expect(entries.length).toBeGreaterThan(4);
    expect(entries.every((entry) => new URL(entry.url).origin === "https://ghandy.dev")).toBe(true);
  });

  it("binds the Worker to the apex domain without changing asset handling", async () => {
    const source = await readFile(resolve(import.meta.dirname, "..", "wrangler.jsonc"), "utf8");
    // The checked-in JSONC uses only full-line comments.
    const config = JSON.parse(source.replace(/^\s*\/\/.*$/gm, ""));
    expect(config.routes).toEqual([{ pattern: "ghandy.dev", custom_domain: true }]);
    expect(config.main).toBe("./worker/index.ts");
    expect(config.assets).toEqual({ not_found_handling: "none", binding: "ASSETS" });
    expect(config.images).toEqual({ binding: "IMAGES" });
  });
});
