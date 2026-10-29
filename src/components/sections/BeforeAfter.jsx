import { useState, useRef } from 'react'

import { beforeAfter } from '../../data/siteData'

import { Reveal } from '../ui/Motion'

import SectionShell from '../layout/SectionShell'



function ComparisonSlider({ before, after, label }) {

  const [position, setPosition] = useState(50)

  const containerRef = useRef(null)



  const handleMove = (clientX) => {

    const rect = containerRef.current?.getBoundingClientRect()

    if (!rect) return

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))

    setPosition((x / rect.width) * 100)

  }



  return (

    <figure className="compare" ref={containerRef}>

      <div className="compare__frame">

        <img src={after} alt={`${label} — after service`} className="compare__after" />

        <div className="compare__before-wrap" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>

          <img src={before} alt={`${label} — before service`} className="compare__before" />

        </div>

        <div className="compare__handle" style={{ left: `${position}%` }} aria-hidden="true">

          <span />

        </div>

        <input

          type="range"

          min="0"

          max="100"

          value={position}

          onChange={(e) => setPosition(Number(e.target.value))}

          onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}

          onTouchMove={(e) => handleMove(e.touches[0].clientX)}

          className="compare__slider"

          aria-label={`Compare before and after: ${label}`}

        />

      </div>

      <figcaption>{label}</figcaption>

    </figure>

  )

}



export default function BeforeAfter() {

  return (

    <SectionShell ariaLabelledby="gallery-heading">

      <Reveal>

        <header className="section-header section-header--center">

          <span className="section-eyebrow">Proven Results</span>

          <h2 id="gallery-heading" className="section-title">Before &amp; After</h2>

          <p className="section-subtitle">

            Measurable improvement from deep cleaning and precision maintenance protocols.

          </p>

        </header>

      </Reveal>



      <div className="gallery__grid">

        {beforeAfter.map((item) => (

          <ComparisonSlider key={item.label} {...item} />

        ))}

      </div>

    </SectionShell>

  )

}

