// Set via npm scripts: empty in dev, "/fundcrest" for production builds.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path) {
    return `${BASE_PATH}${path}`;
}
