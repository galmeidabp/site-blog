import { allPosts } from ".contentlayer/generated"
import { PostPage } from "@/templates/blog";
import { notFound } from "next/navigation"

type BlogPostPageProps = {
  params: {
    slug: string;
  }
}

export const revalidate = 60

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const {slug} = params
  const post = allPosts.find((post) => post.slug === slug)

  if(!post) {
    notFound()
  }

  return (
    <PostPage post={post} />
  )
}