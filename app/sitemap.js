import { absoluteUrl, routes } from "./lib/site";

export const dynamic = "force-static";

export default function sitemap() {
    const lastModified = new Date();

    return routes.map(({ path, changeFrequency, priority }) => ({
        url: absoluteUrl(path),
        lastModified,
        changeFrequency,
        priority,
    }));
}
