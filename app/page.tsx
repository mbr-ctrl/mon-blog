import NavBar from "./_components/NavBar";
import { GetStaticProps, NextPage } from "next";
import { PostMeta } from "@/lib/types";
import { getSortedPostsData } from "@/lib/post";
import PostData from "./_components/PostData";

export default function Home({ allPosts }: { allPosts: PostMeta[] }) {
  const posts = getSortedPostsData();
  return (
    <main className="min-h-screen text--colors_default bg--default">
      <NavBar />
      <PostData posts={posts} />
    </main>
  );
}
