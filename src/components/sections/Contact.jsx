import { useState } from 'react'

import { companyInfo } from '../../data/siteData'

import ServiceIcon from '../icons/ServiceIcon'

import { Reveal } from '../ui/Motion'

import SectionShell from '../layout/SectionShell'



export default function Contact() {

  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })



  const handleSubmit = (e) => {

    e.preventDefault()

    alert('Thank you. Our team will contact you within 15 minutes.')

    setForm({ name: '', phone: '', service: '', message: '' })

  }



  return (

    <SectionShell ariaLabelledby="contact-heading">

      <Reveal>

        <header className="section-header section-header--center">

          <span className="section-eyebrow">Corporate Inquiry</span>

          <h2 id="contact-heading" className="section-title">Schedule your service</h2>

          <p className="section-subtitle">

            Submit a request or reach our support desk directly — available 24/7 for emergencies.

          </p>

        </header>

      </Reveal>



      <div className="contact__layout">

        <form className="contact__form frost-card" onSubmit={handleSubmit} noValidate>

          <div className="contact__field">

            <label htmlFor="contact-name">Full Name</label>

            <input

              id="contact-name"

              type="text"

              required

              value={form.name}

              onChange={(e) => setForm({ ...form, name: e.target.value })}

              placeholder="Your name"

            />

          </div>

          <div className="contact__field">

            <label htmlFor="contact-phone">Phone Number</label>

            <input

              id="contact-phone"

              type="tel"

              required

              value={form.phone}

              onChange={(e) => setForm({ ...form, phone: e.target.value })}

              placeholder="+91 XXXXX XXXXX"

            />

          </div>

          <div className="contact__field">

            <label htmlFor="contact-service">Service Required</label>

            <select

              id="contact-service"

              value={form.service}

              onChange={(e) => setForm({ ...form, service: e.target.value })}

            >

              <option value="">Select a service</option>

              <option value="repair">AC Repair</option>

              <option value="installation">AC Installation</option>

              <option value="maintenance">AC Maintenance</option>

              <option value="gas">Gas Filling</option>

              <option value="cleaning">Deep Cleaning</option>

            </select>

          </div>

          <div className="contact__field">

            <label htmlFor="contact-message">Message</label>

            <textarea

              id="contact-message"

              rows="4"

              value={form.message}

              onChange={(e) => setForm({ ...form, message: e.target.value })}

              placeholder="Describe your cooling requirements..."

            />

          </div>

          <button type="submit" className="btn btn--primary">Submit Request</button>

        </form>



        <aside className="contact__info">

          <div className="contact__card frost-card">

            <ServiceIcon name="phone" size={22} />

            <div>

              <strong>Phone</strong>

              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a>

            </div>

          </div>

          <div className="contact__card frost-card">

            <ServiceIcon name="location" size={22} />

            <div>

              <strong>Head Office</strong>

              <p>{companyInfo.address}</p>

            </div>

          </div>

          <div className="contact__card frost-card">

            <ServiceIcon name="support" size={22} />

            <div>

              <strong>Business Hours</strong>

              <p>{companyInfo.hours}</p>

            </div>

          </div>

          <div className="contact__map frost-card">

            <iframe

              title="Cold Point office location"

              src="https://maps.google.com/maps?q=Andheri+East+Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"

              loading="lazy"

              referrerPolicy="no-referrer-when-downgrade"

            />

          </div>

        </aside>

      </div>

    </SectionShell>

  )

}

