'use client'
import { Search } from "@/components/search";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-cards";
import { Post } from "./../../../.contentlayer/generated";
import { Inbox } from "lucide-react";
import { useSearchParams } from "next/navigation";

export type BlogListProps = {
  posts: Post[]
}

export function BlogList({posts}: BlogListProps) {
  const searchParams = useSearchParams()
  const query = searchParams?.get('q') ?? ''
  const pageTitle = query ? `Resultados de busca para: "${query}"` : 'Dicas e estratégias para impulsionar seu negócio';

  const postsList = query ? posts.filter((post) => post.title.toLowerCase()?.includes(query.toLowerCase())) : posts
  const hasPosts = postsList.length > 0

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container space-y-6 flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 px-4 md:px-0">
            <span className="text-body-tag text-cyan-100 uppercase w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              blog
            </span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>


      {hasPosts && (<PostGridCard>
        {postsList.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            description={post.description}
            slug={post.slug}
            image={post.image}
            date={new Date(post.date).toLocaleDateString("pt-BR")}
            author={{
              name: post.author.name,
              avatar: post.author.avatar,
            }}
          />
        ))}
      </PostGridCard>)}

      {!hasPosts && (
        <div className="container flex flex-col items-center justify-center gap-8 border-dashed border-2 border-gray-400 p-8 md:p-12 rounded-lg">
          <Inbox className="h-12 w-12 text-cyan-100" />
          <p className="text-gray-100 text-center">Nenhum post encontrado</p>
        </div>
      )}
    </div>
  )
}