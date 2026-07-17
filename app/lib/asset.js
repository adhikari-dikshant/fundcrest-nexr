// Empty for root hosting (fundcrestcapital.com). Set NEXT_PUBLIC_BASE_PATH only if deploying under a subfolder.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path) {
    return `${BASE_PATH}${path}`;
}
