import NavBar from "@/app/_components/NavBar";
import { MDXComponent } from "@/lib/mdxComponents/MDXComponents";
import { getPostBySlug, getPostsSlug } from "@/lib/post";
import React from "react";
import { Metadata } from "next";
import { FaCalendarCheck } from "react-icons/fa6";
import Author from "@/app/_components/Author";
import Footer from "@/app/_components/Footer";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug, "tailswindcss");
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    keywords: post.frontmatter.tags.join(", "),
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug, "tailwindcss");

  return (
    <div className="min-h-screen container mx-auto">
      <NavBar />
      <div className="flex flex-col justify-center w-full md:w-4/5 mx-auto pt-12">
        <h1 className="text-3xl text-center">{post.frontmatter.title}</h1>
        <div className="flex justify-start items-center gap-2 font-semibold text-lg">
          <FaCalendarCheck />
          <p className="text-center">
            Date: {post.frontmatter.date.toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center items-start pt-12">
          {post.frontmatter.tags.map((tag: string) => (
            <div className="px-4 py-2 bg-gray-400 rounded-full" key={post.id}>
              #{tag}
            </div>
          ))}
        </div>

        <article className="prose prose-code:w-96 max-w-none mt-4 p-2 text-justify">
          <MDXComponent code={post.code} />
        </article>
      </div>
      <Author />
      <Footer />
    </div>
  );
}
