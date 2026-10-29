import { Link } from '../../router'

import { HoverLift } from '../ui/Motion'

import { blogPosts } from '../../data/siteData'

import { StaggerGroup, StaggerItem, Reveal } from '../ui/Motion'

import SectionShell from '../layout/SectionShell'



export default function Blog() {

  const [featured, ...rest] = blogPosts



  return (

    <SectionShell variant="muted" ariaLabelledby="blog-heading">

      <Reveal>

        <header className="section-header section-header--center">

          <span className="section-eyebrow">Insights</span>

          <h2 id="blog-heading" className="section-title">HVAC knowledge &amp; industry insights</h2>

          <p className="section-subtitle">

            Expert guidance on maintenance, energy efficiency, and cooling technology.

          </p>

        </header>

      </Reveal>



      <div className="blog__magazine">

        <Reveal>

          <HoverLift className="blog__featured">

            <Link to={`/blog/${featured.slug}`} className="blog__featured-link">

              <div className="blog__featured-image">

                <img src={featured.image} alt={featured.title} loading="lazy" width="800" height="500" />

              </div>

              <div className="blog__featured-content">

                <span className="blog__featured-badge">Featured</span>

                <time dateTime={featured.date}>{featured.date}</time>

                <h3>{featured.title}</h3>

                <p>{featured.excerpt}</p>

                <span className="blog__read">Read article — {featured.readTime}</span>

              </div>

            </Link>

          </HoverLift>

        </Reveal>



        <StaggerGroup className="blog__grid--compact">

          {rest.map((post) => (

            <StaggerItem key={post.slug}>

              <HoverLift className="blog__card blog__card--compact">

                <Link to={`/blog/${post.slug}`} className="blog__card-link">

                  <div className="blog__content">

                    <time dateTime={post.date}>{post.date}</time>

                    <h3>{post.title}</h3>

                    <p>{post.excerpt}</p>

                    <span className="blog__read">Read — {post.readTime}</span>

                  </div>

                </Link>

              </HoverLift>

            </StaggerItem>

          ))}

        </StaggerGroup>

      </div>



      <div className="blog__cta">

        <Link to="/blog" className="btn btn--outline">View All Articles</Link>

      </div>

    </SectionShell>

  )

}

