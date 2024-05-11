import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Post, PostMeta } from "./types";
import { bundleMDX } from "mdx-bundler";

export const getSortedPostsData = (directory: string): PostMeta[] => {
  const postDirectory = path.join(process.cwd(), `posts/${directory}`);
  const fileNames = fs
    .readdirSync(postDirectory)
    .filter((f) => f.includes(".mdx"));

  const allPostsData: PostMeta[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as Omit<PostMeta, "id">),
    };
  });
  return allPostsData;
};

export type PostSlugParams = {
  params: {
    slug: string;
  };
};

export const getPostsSlug = (directory: string): PostSlugParams[] => {
  // Fetch all post data
  const allPostsData = getSortedPostsData(directory);
  // Create paths based on post IDs
  const paths = allPostsData.map((post) => ({
    params: { slug: post.id }, // Ensure the key is 'slug' (not 'slud')
  }));

  return paths;
};

export const getPostBySlug = async (
  slug: string,
  directory: string
): Promise<Post> => {
  const postDirectory = path.join(process.cwd(), `posts/${directory}`);
  const fullPath = path.join(postDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: fileContents,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];

      return options;
    },
  });
  return {
    id: slug,
    code,
    frontmatter: frontmatter as PostMeta,
  };
};
