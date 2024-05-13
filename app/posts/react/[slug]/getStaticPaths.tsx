import { getPostsSlug } from "@/lib/post";

export async function getStaticPaths() {
  const slugs = getPostsSlug("react");

  return {
    paths: slugs, // Use the paths variable defined above
    fallback: false, // Consider 'blocking' or 'server' for dynamic data
  };
}
