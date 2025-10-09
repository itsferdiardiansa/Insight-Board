import Link from 'next/link'
import { BiChevronLeft } from 'react-icons/bi'
import { BsExclamationCircleFill } from 'react-icons/bs'
import { Button } from '@/components/ui/button'
import { BasedCategorArticle } from '@/features/article/components/feature-article'
import { ArticleStats } from './_components/article-stats'
import './Article.style.css'

export default function ArticleDetailPage() {
  return (
    <div>
      <div className="bg-default border-b border-default sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-space-md py-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-gap-md">
              <Button className="font-semibold pl-0!" variant="ghost" asChild>
                <Link href="/article">
                  <BiChevronLeft className="text-heading-lg" />
                  <span>Back to article list</span>
                </Link>
              </Button>
            </div>
            {/* <div className="text-sm text-gray-400">
              <span>5 min read</span>
            </div> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-12">
          <main className="flex-1 max-w-3xl">
            <article className="bg-default">
              <div className="mb-space-3xl">
                {/* <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    JS
                  </div>
                  <div>
                    <p className="font-medium ">Jane Smith</p>
                  </div>
                </div> */}
                <div className="flex items-center text-subtle mb-space-md">
                  <p className="text-body-sm">March 15, 2024</p>
                  <span className="mx-space-sm">•</span>
                  <p className="text-body-sm">7 min read</p>
                </div>

                <h1 className="text-heading-5xl font-bold! mb-space-md leading-tight tracking-tight">
                  The Future of Web Development: Trends Shaping 2024
                </h1>

                <p className="text-heading-xl text-subtle mb-space-lg leading-relaxed font-light">
                  Exploring the cutting-edge technologies and methodologies that
                  are revolutionizing how we build web applications in the
                  modern era.
                </p>

                <div className="flex flex-wrap gap-space-sm mb-space-lg">
                  {[
                    'technology',
                    'analytics',
                    'product-issues',
                    'user-story',
                  ].map((tag, index) => (
                    <Button
                      key={index}
                      className="bg-neutral! text-accent-neutral! rounded-full text-body-sm"
                      size="sm"
                      asChild
                    >
                      <Link href={`article/tag?category=${tag}`}>{tag}</Link>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-body-md text-subtle leading-relaxed font-light">
                  The landscape of web development continues to evolve at an
                  unprecedented pace. As we navigate through 2024, several key
                  trends are emerging that promise to reshape how we approach
                  building digital experiences. From revolutionary frameworks to
                  AI-powered development tools, the future looks incredibly
                  exciting.
                </p>

                <h2
                  id="component-architecture"
                  className="text-heading-2xl font-bold"
                >
                  Component-Driven Architecture
                </h2>
                <p className="text-subtle font-light">
                  Modern web applications are increasingly built using
                  component-driven architectures. This approach promotes
                  reusability, maintainability, and scalability. Frameworks like
                  React, Vue, and Angular have paved the way, but we&apos;re
                  seeing even more sophisticated patterns emerge.
                </p>

                <p className="text-subtle font-light">
                  The shift towards micro-frontends and design systems has
                  fundamentally changed how teams collaborate and build
                  applications. Component libraries are no longer just
                  collections of UI elements—they&apos;re becoming the
                  foundation of entire product ecosystems.
                </p>

                <div className="bg-inverse border-l-4 border-secondary p-space-md my-space-lg rounded-r">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <BsExclamationCircleFill className="mt-1.5" />
                    </div>
                    <div className="ml-3">
                      <p className="font-bold mt-0">Key Insight</p>
                      <p className="text-subtle mt-1 font-light">
                        Component libraries are becoming essential for
                        maintaining consistency across large applications.
                        Consider investing time in building a robust design
                        system.
                      </p>
                    </div>
                  </div>
                </div>

                <h2
                  id="performance-first"
                  className="text-heading-xl font-bold"
                >
                  Performance-First Development
                </h2>
                <p className="text-subtle font-light">
                  With Core Web Vitals becoming increasingly important for SEO
                  and user experience, developers are prioritizing performance
                  from the ground up. This shift represents a fundamental change
                  in how we approach web development—performance is no longer an
                  afterthought.
                </p>

                <p className="text-subtle font-light">
                  Modern performance optimization includes:
                </p>

                <ul className="list-disc pl-space-md space-y-gap-sm text-subtle my-space-md font-light">
                  <li>
                    Implementing lazy loading strategies for images and
                    components
                  </li>
                  <li>
                    Optimizing bundle sizes with advanced tree shaking
                    techniques
                  </li>
                  <li>Leveraging edge computing for faster content delivery</li>
                  <li>Using modern image formats like WebP and AVIF</li>
                  <li>Adopting streaming server-side rendering</li>
                </ul>

                <h3 id="web-vitals" className="text-heading-xl font-bold">
                  Understanding Core Web Vitals
                </h3>
                <p className="text-subtle font-light">
                  Core Web Vitals have become the standard for measuring user
                  experience. The three key metrics—Largest Contentful Paint
                  (LCP), First Input Delay (FID), and Cumulative Layout Shift
                  (CLS)—directly impact search rankings and user satisfaction.
                </p>

                <h2 id="ai-development" className="text-heading-xl font-bold">
                  AI-Powered Development
                </h2>
                <p className="text-subtle font-light">
                  Artificial Intelligence is no longer just a buzzword in web
                  development. AI-powered tools are helping developers write
                  better code, catch bugs earlier, and even generate entire
                  components. GitHub Copilot, ChatGPT, and similar tools are
                  becoming integral parts of the development workflow.
                </p>

                <p className="text-subtle font-light">
                  The integration of AI in development workflows is creating new
                  possibilities for automation and code generation. From
                  automated testing to intelligent code reviews, AI is
                  transforming every aspect of the development process.
                </p>

                <div className="bg-inverse rounded-lg p-space-md my-space-lg border border-default">
                  <h4 className="font-semibold mb-space-sm">Looking Ahead</h4>
                  <p className="text-subtle font-light">
                    The next few years will likely see even more integration
                    between AI and development tools, making coding more
                    accessible and efficient than ever before. We&apos;re moving
                    towards a future where AI assists in architectural
                    decisions, not just code completion.
                  </p>
                </div>

                <h2
                  id="modern-frameworks"
                  className="text-heading-xl font-bold"
                >
                  Next-Generation Frameworks
                </h2>
                <p className="text-subtle font-light">
                  The framework landscape continues to evolve with new players
                  entering the scene. Frameworks like Svelte, SolidJS, and Qwik
                  are challenging traditional approaches with innovative
                  solutions for performance and developer experience.
                </p>

                <p className="text-subtle font-light">
                  These frameworks are pushing the boundaries of what&apos;s
                  possible in web development, offering compile-time
                  optimizations, fine-grained reactivity, and resumable
                  applications that load instantly.
                </p>

                <h2 id="conclusion" className="text-heading-xl font-bold ">
                  Conclusion
                </h2>
                <p className="text-subtle font-light">
                  As we continue through 2024, staying updated with these trends
                  will be crucial for any web developer looking to remain
                  competitive. The key is to balance innovation with
                  practicality, always keeping user experience at the forefront
                  of our decisions.
                </p>

                <p className="text-subtle font-light">
                  The future of web development is not just about new
                  technologies—it&apos;s about creating better experiences for
                  users while making development more efficient and enjoyable
                  for creators. What trends are you most excited about? The
                  future is bright, and we&apos;re just getting started.
                </p>
              </div>

              <div className="mt-space-4xl pt-space-lg border-t border-default">
                <ArticleStats />
              </div>
            </article>

            <div className="mt-space-4xl">
              <BasedCategorArticle
                title="Related Articles"
                titleClassName="text-heading-2xl font-bold!"
                limit={3}
              />
            </div>
          </main>

          <aside className="w-68 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-inverse rounded-lg p-space-md">
                <h3 className="font-semibold mb-space-md text-sm uppercase tracking-wide">
                  Table of Contents
                </h3>
                <nav className="space-y-3">
                  <a
                    href="#component-architecture"
                    className="toc-item block text-sm text-gray-600 hover: transition-colors relative pl-4 cursor-pointer"
                  >
                    Component-Driven Architecture
                  </a>
                  <a
                    href="#performance-first"
                    className="toc-item block text-sm text-gray-600 hover: transition-colors relative pl-4 cursor-pointer"
                  >
                    Performance-First Development
                  </a>
                  <a
                    href="#web-vitals"
                    className="toc-item block text-sm text-gray-600 hover: transition-colors relative pl-4 ml-4 cursor-pointer"
                  >
                    Understanding Core Web Vitals
                  </a>
                  <a
                    href="#ai-development"
                    className="toc-item block text-sm text-gray-600 hover: transition-colors relative pl-4 cursor-pointer"
                  >
                    AI-Powered Development
                  </a>
                  <a
                    href="#modern-frameworks"
                    className="toc-item block text-sm text-gray-600 hover: transition-colors relative pl-4 cursor-pointer"
                  >
                    Next-Generation Frameworks
                  </a>
                  <a
                    href="#conclusion"
                    className="toc-item block text-sm text-gray-600 hover: transition-colors relative pl-4 cursor-pointer"
                  >
                    Conclusion
                  </a>
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
