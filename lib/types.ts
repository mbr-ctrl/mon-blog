export type PostMeta = {
  id: string;
  title: string;
  description: string;
  date: Date;
  tags: string[];
  thumbnail: string;
};

export type Post = {
  frontmatter: PostMeta;
  id: string;
  code: string;
};
