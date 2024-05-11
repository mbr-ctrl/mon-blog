import { PostMeta } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { FaCalendarCheck } from "react-icons/fa6";
import Footer from "../Footer";

export default function PostData({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="container mx-auto">
      {posts.map((post: PostMeta) => (
        <div key={post.id} className="flex flex-col gap-2 md:px-20 pt-12 pb-4">
          <Link href={`/posts/${post.id}`}>
            <h1 className="text-3xl font-bold underline hover:no-underline text--colors_primary ">
              {post.title}
            </h1>
            <p> {post.description} </p>
          </Link>
          <div className="flex justify-start items-center gap-2">
            <FaCalendarCheck />
            <p>Date: {post.date.toLocaleDateString()}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
