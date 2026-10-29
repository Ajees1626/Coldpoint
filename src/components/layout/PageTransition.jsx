import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { useLocation, resolveRoute, RouteParamsProvider } from '../../router'
import { appRoutes } from '../../router/routes'
import SeoManager from '../seo/SeoManager'

const Home = lazy(() => import('../../pages/Home'))
const About = lazy(() => import('../../pages/About'))
const ServicesPage = lazy(() => import('../../pages/ServicesPage'))
const ServiceDetail = lazy(() => import('../../pages/ServiceDetail'))
const BrandsPage = lazy(() => import('../../pages/BrandsPage'))
const ServiceAreasPage = lazy(() => import('../../pages/ServiceAreasPage'))
const PricingPage = lazy(() => import('../../pages/PricingPage'))
const BlogPage = lazy(() => import('../../pages/BlogPage'))
const BlogPost = lazy(() => import('../../pages/BlogPost'))
const ContactPage = lazy(() => import('../../pages/ContactPage'))
const NotFound = lazy(() => import('../../pages/NotFound'))

const views = {
  home: Home,
  about: About,
  services: ServicesPage,
  'service-detail': ServiceDetail,
  brands: BrandsPage,
  'service-areas': ServiceAreasPage,
  pricing: PricingPage,
  blog: BlogPage,
  'blog-post': BlogPost,
  contact: ContactPage,
  'not-found': NotFound,
}

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span className="page-loader__spinner" aria-hidden="true" />
      <span className="sr-only">Loading page…</span>
    </div>
  )
}

export default function PageTransition() {
  const { pathname } = useLocation()
  const initialResolved = resolveRoute(appRoutes, pathname)
  const [display, setDisplay] = useState({
    pathname,
    key: initialResolved?.route.key ?? 'not-found',
  })
  const [exiting, setExiting] = useState(false)
  const isHome = display.pathname === '/'

  useEffect(() => {
    if (pathname === display.pathname) return
    setExiting(true)
    const timer = setTimeout(() => {
      const resolved = resolveRoute(appRoutes, pathname)
      setDisplay({
        pathname,
        key: resolved?.route.key ?? 'not-found',
      })
      setExiting(false)
    }, 260)
    return () => clearTimeout(timer)
  }, [pathname, display.pathname])

  const resolved = useMemo(
    () => resolveRoute(appRoutes, display.pathname),
    [display.pathname],
  )
  const params = resolved?.params ?? {}
  const View = views[display.key] ?? NotFound

  return (
    <main
      id="main-content"
      className={`page-content ${isHome ? 'page-content--home' : ''} ${exiting ? 'page-transition--exit' : 'page-transition'}`}
    >
      <RouteParamsProvider params={params}>
        <SeoManager />
        <Suspense fallback={<PageLoader />}>
          <View />
        </Suspense>
      </RouteParamsProvider>
    </main>
  )
}
