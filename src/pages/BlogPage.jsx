import { Link } from '../router'
import PageHero from '../components/layout/PageHero'
import { blogPosts } from '../data/siteData'
import { StaggerGroup, StaggerItem } from '../components/ui/Motion'

export default function BlogPage() {
  return (
    <div className="page-section">
      <PageHero
        variant="draft"
        eyebrow="Knowledge Hub"
        title="Blog & Insights"
        subtitle="Expert articles on AC maintenance, energy efficiency, and cooling technology."
        breadcrumb="Blog"
      />

      <section className="section-block section-block--white page-shell">
        <div className="container">
          <StaggerGroup className="blog__grid">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <article className="blog__card">
                  <Link to={`/blog/${post.slug}`} className="blog__card-link">
                    <div className="blog__image-wrap">
                      <img src={post.image} alt={post.title} loading="lazy" width="600" height="400" />
                    </div>
                    <div className="blog__content">
                      <time dateTime={post.date}>{post.date}</time>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="blog__read">Read article — {post.readTime}</span>
                    </div>
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  )
}
