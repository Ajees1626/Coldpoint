import { useState, useEffect } from 'react'

import { testimonials } from '../../data/siteData'

import { Reveal, AnimateSwap } from '../ui/Motion'

import SectionShell from '../layout/SectionShell'



export default function Testimonials() {

  const [active, setActive] = useState(0)



  useEffect(() => {

    const timer = setInterval(() => {

      setActive((prev) => (prev + 1) % testimonials.length)

    }, 6000)

    return () => clearInterval(timer)

  }, [])



  const current = testimonials[active]



  return (

    <SectionShell ariaLabelledby="testimonials-heading">

      <Reveal>

        <header className="section-header section-header--center">

          <span className="section-eyebrow">Client Stories</span>

          <h2 id="testimonials-heading" className="section-title">Trusted by thousands nationwide</h2>

        </header>

      </Reveal>



      <div className="testimonials__slider">

        <AnimateSwap activeKey={active}>

          <article className="testimonials__card frost-card">

            <div className="testimonials__stars" aria-label={`${current.rating} out of 5 stars`}>

              {Array.from({ length: current.rating }).map((_, i) => (

                <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">

                  <path d="M10 1l2.39 6.22H19l-5.17 3.78 1.97 6.22L10 13.45l-5.8 3.77 1.97-6.22L1 7.22h6.61z" />

                </svg>

              ))}

            </div>

            <blockquote>&ldquo;{current.text}&rdquo;</blockquote>

            <footer>

              <strong>{current.name}</strong>

              <span>{current.location}</span>

            </footer>

          </article>

        </AnimateSwap>



        <div className="testimonials__dots" role="tablist" aria-label="Testimonial navigation">

          {testimonials.map((_, i) => (

            <button

              key={i}

              type="button"

              role="tab"

              aria-selected={i === active}

              aria-label={`View testimonial ${i + 1}`}

              className={i === active ? 'testimonials__dot--active' : ''}

              onClick={() => setActive(i)}

            />

          ))}

        </div>

      </div>

    </SectionShell>

  )

}

