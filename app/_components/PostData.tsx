import { PostMeta } from "@/lib/types";
import Link from "next/link";
import React from "react";

export default function PostData({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="container mx-auto">
      {posts.map((post: PostMeta) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <h1 className="text-3xl font-bold underline text--colors_primary px-20 py-12">
            {post.title}
          </h1>
          <p> {post.description} </p>
        </Link>
      ))}
    </div>
  );
}
