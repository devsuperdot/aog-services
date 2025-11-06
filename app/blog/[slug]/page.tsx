import Link from 'next/link'
import { getPostBySlug, getRelatedPosts, BLOG_POSTS } from '@/constants/blog'
import { ArticleHeroClient, ArticleContentClient, RelatedPostsClient, CTASectionClient } from './components'

// Generate static params for all blog posts
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

// Main Component
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-light text-black">Artículo no encontrado</h1>
          <Link href="/blog" className="text-aog-primary hover:underline">
                Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = getRelatedPosts(post.slug, 3)

  return (
    <main className="bg-white">
      <ArticleHeroClient post={post} />
      <ArticleContentClient post={post} />
      <RelatedPostsClient relatedPosts={relatedPosts} />
      <CTASectionClient />
    </main>
  )
}
