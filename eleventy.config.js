import fs from "fs";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

const isDev = process.env.ELEVENTY_ENV === "development";
const isProd = process.env.ELEVENTY_ENV === "production";

export default async function (eleventyConfig) {
    const scripts = new Set();

    eleventyConfig.on("eleventy.before", async () => {
        scripts.clear();

        const timestamp = new Date().toLocaleString();
        console.log(`\n[${timestamp}] 🚀 Build starting... Preparing assets.`);
    });

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addWatchTarget("./public/assets/css/");

    eleventyConfig.addPairedShortcode("script", (content) => {
        const wrappedContent = `
        <script>
            document.addEventListener('DOMContentLoaded', () => {
                ${content}
            });
        </script>`;
        scripts.add(wrappedContent);
        return "";
    });

    eleventyConfig.addShortcode("renderScripts", () => {
        return Array.from(scripts).join("\n");
    });

    eleventyConfig.addFilter("year", () => {
        return new Date().getFullYear();
    });

    eleventyConfig.addFilter("initials", (name) => {
        if (!name) return "HA";
        return name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .toUpperCase();
    });

    eleventyConfig.on("eleventy.error", async ({ error }) => {
        console.error("\n🛑 BUILD FAILED!");
        console.error(`Reason: ${error.message}`);
    });

    eleventyConfig.setServerOptions({
        module: "@11ty/eleventy-server-browsersync",
        ghostMode: true,
        port: 8080,
        callbacks: {
            ready: function (err, bs) {
                if (fs.existsSync("public/404.html")) {
                    const content_404 = fs.readFileSync("public/404.html");
                    bs.addMiddleware("*", (req, res) => {
                        res.writeHead(404, {
                            "Content-Type": "text/html; charset=UTF-8",
                        });
                        res.write(content_404);
                        res.end();
                    });
                }
            },
        },
    });

    eleventyConfig.on("eleventy.after", async ({ results }) => {
        console.log(`\n✨ Build Complete!`);
        console.log(
            `📦 Generated ${results.length} pages in the /public folder.`
        );
    });

    return {
        quietMode: isProd,
        dir: {
            input: "src",
            output: "public",
            data: "_data",
            includes: "_includes",
        },
        pathPrefix: "/",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["md", "njk", "html"],
        passthroughFileCopy: true,
    };
}
