import { useState } from 'react'

import { companyInfo } from '../../data/siteData'



export default function FloatingActions() {

  const [chatOpen, setChatOpen] = useState(false)



  return (

    <>

      <div className="floating-actions" aria-label="Quick contact">

        <a

          href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}

          className="floating-actions__btn floating-actions__btn--call"

          aria-label="Call now"

        >

          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">

            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />

          </svg>

        </a>

      </div>



      <div className={`chat-widget ${chatOpen ? 'chat-widget--open' : ''}`}>

        <button

          type="button"

          className="chat-widget__toggle"

          onClick={() => setChatOpen(!chatOpen)}

          aria-label={chatOpen ? 'Close chat' : 'Open live chat'}

        >

          {chatOpen ? (

            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>

          ) : (

            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>

          )}

        </button>



        {chatOpen && (

          <div className="chat-widget__panel frost-card">

            <header>

              <strong>Cold Point Support</strong>

              <span>Typically replies in 2 min</span>

            </header>

            <div className="chat-widget__bubble chat-widget__bubble--agent">

              Hi — need AC repair or installation? Our certified team is ready to assist.

            </div>

            <a

              href={`https://wa.me/${companyInfo.whatsapp}`}

              className="btn btn--primary chat-widget__action"

              target="_blank"

              rel="noopener noreferrer"

            >

              Continue on WhatsApp

            </a>

          </div>

        )}

      </div>

    </>

  )

}

