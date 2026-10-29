import { useParams, Link } from '../router'
import PageHero from '../components/layout/PageHero'
import SectionShell from '../components/layout/SectionShell'
import { blogPosts } from '../data/siteData'
import { Reveal } from '../components/ui/Motion'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="page-section">
        <PageHero variant="whisper" title="Article Not Found" breadcrumb="Not Found" />
        <SectionShell>
          <div className="blog-article__empty">
            <Link to="/blog" className="btn btn--primary">Back to Blog</Link>
          </div>
        </SectionShell>
      </div>
    )
  }

  return (
    <div className="page-section">
      <PageHero
        variant="stream"
        eyebrow="Article"
        title={post.title}
        subtitle={`${post.date} · ${post.readTime} read`}
        breadcrumbs={[
          { label: 'Blog', to: '/blog' },
          { label: post.title },
        ]}
      />

      <SectionShell>
        <Reveal>
          <article className="blog-article">
            <figure className="blog-article__figure">
              <img
                src={post.image}
                alt={post.title}
                loading="eager"
                width="900"
                height="520"
              />
            </figure>

            <div className="blog-article__body">
              <p className="blog-article__lead">{post.excerpt}</p>
              <p>
                At Cold Point, we believe informed customers make better decisions about their cooling systems.
                Regular maintenance, timely repairs, and choosing the right AC type for your space can save
                significant energy costs over time.
              </p>
              <p>
                Our certified technicians are available for consultations, inspections, and same-day service
                across 50+ cities. Contact us for personalized advice on your AC needs.
              </p>
            </div>

            <footer className="blog-article__footer">
              <Link to="/contact" className="btn btn--primary">Book AC Service</Link>
              <Link to="/blog" className="blog-article__back">← Back to all articles</Link>
            </footer>
          </article>
        </Reveal>
      </SectionShell>
    </div>
  )
}
