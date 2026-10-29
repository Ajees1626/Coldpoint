import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const RouterContext = createContext(null)
const RouteParamsContext = createContext({})

export function matchRoute(pattern, pathname) {
  if (pattern === '/') {
    return pathname === '/' ? { params: {} } : null
  }

  const patternParts = pattern.split('/').filter(Boolean)
  const pathParts = pathname.split('/').filter(Boolean)

  if (patternParts.length !== pathParts.length) return null

  const params = {}
  for (let i = 0; i < patternParts.length; i += 1) {
    const part = patternParts[i]
    if (part.startsWith(':')) {
      params[part.slice(1)] = decodeURIComponent(pathParts[i])
    } else if (part !== pathParts[i]) {
      return null
    }
  }
  return { params }
}

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  const navigate = useCallback((to) => {
    const next = to.startsWith('/') ? to : `/${to}`
    if (next === window.location.pathname) return
    window.history.pushState({}, '', next)
    setPathname(next)
  }, [])

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const onClick = (event) => {
      const anchor = event.target.closest('a[href]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return
      if (anchor.target === '_blank' || event.metaKey || event.ctrlKey || event.shiftKey) return
      if (!href.startsWith('/')) return

      event.preventDefault()
      navigate(href)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  const value = useMemo(() => ({ pathname, navigate }), [pathname, navigate])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useLocation() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useLocation must be used within BrowserRouter')
  return { pathname: ctx.pathname }
}

export function useNavigate() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useNavigate must be used within BrowserRouter')
  return ctx.navigate
}

export function useParams() {
  return useContext(RouteParamsContext)
}

export function RouteParamsProvider({ params, children }) {
  return (
    <RouteParamsContext.Provider value={params}>
      {children}
    </RouteParamsContext.Provider>
  )
}

export function Link({ to, children, className = '', onClick, ...rest }) {
  const { pathname } = useLocation()
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(to))

  return (
    <a
      href={to}
      className={className}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
      {...rest}
    >
      {children}
    </a>
  )
}

export function resolveRoute(routes, pathname) {
  for (const route of routes) {
    const match = matchRoute(route.path, pathname)
    if (match) return { route, params: match.params }
  }
  return null
}
