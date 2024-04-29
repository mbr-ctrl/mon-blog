import { MDXComponent } from "@/lib/mdxComponents/MDXComponents";
import { getPostBySlug, getPostsSlug } from "@/lib/post";
import { Post } from "@/lib/types";
import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return (
    <div>
      <h1 className="text-3xl text-center">{post.frontmatter.title}</h1>
      <article className="mt-4 bg-gray-400 p-2 shadow-xl">
        <MDXComponent code={post.code} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = getPostsSlug();

  return {
    paths: slugs, // Use the paths variable defined above
    fallback: false, // Consider 'blocking' or 'server' for dynamic data
  };
}
