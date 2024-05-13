import { PostMeta } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { FaCalendarCheck } from "react-icons/fa6";
import Footer from "./Footer";

export default function PostData({
  posts,
  category,
}: {
  posts: PostMeta[];
  category: string;
}) {
  const sortedPosts = posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return (
    <div className="container mx-auto">
      {sortedPosts.length > 0 ? (
        sortedPosts.map((post: PostMeta) => (
          <div
            key={post.id}
            className="flex flex-col gap-2 md:px-20 pt-12 pb-4"
          >
            <Link href={`/posts/${category}/${post.id}`}>
              <h1 className="text-3xl font-bold underline hover:no-underline text--colors_primary">
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
        ))
      ) : (
        <div className="flex justify-center items-center">
          <p className="text-xl">
            Aucun article disponible pour le moment pour cette catégorie
          </p>
        </div>
      )}
    </div>
  );
}
