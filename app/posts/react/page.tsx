import NavBar from "../../_components/NavBar";
import { getSortedPostsData } from "@/lib/post";
import PostData from "../../_components/PostData";
import Footer from "../../_components/Footer";
import Banner from "../../_components/Banner";
import Categories from "../../_components/Categories";

export default function ReactPage() {
  const posts = getSortedPostsData("react");
  return (
    <main className="min-h-screen text--colors_default bg--default container mx-auto">
      <NavBar />
      <Banner />
      <div className="md:flex">
        <div className="w-full md:w-3/5">
          <PostData posts={posts} category="react" />
        </div>
        <div className="w-full md:w-2/5">
          <Categories />
        </div>
      </div>
      <Footer />
    </main>
  );
}
