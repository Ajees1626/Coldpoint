import { BrowserRouter } from './router'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FloatingActions from './components/layout/FloatingActions'
import ScrollToTop from './components/layout/ScrollToTop'
import PageTransition from './components/layout/PageTransition'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="site-canvas">
        <Header />

        <div className="site-canvas__body">
          <PageTransition />
          <Footer />
        </div>
      </div>

      <FloatingActions />
    </BrowserRouter>
  )
}
