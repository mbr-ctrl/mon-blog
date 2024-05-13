import { getPostsSlug } from "@/lib/post";

export async function getStaticPaths() {
  const slugs = getPostsSlug("flutter");

  return {
    paths: slugs, // Use the paths variable defined above
    fallback: false, // Consider 'blocking' or 'server' for dynamic data
  };
}
