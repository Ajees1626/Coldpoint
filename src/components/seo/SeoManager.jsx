import { useEffect, useMemo } from 'react'
import { useLocation, useParams, resolveRoute } from '../../router'
import { appRoutes } from '../../router/routes'
import { applySeo } from '../../seo/applySeo'
import { resolveSeo } from '../../seo/resolveSeo'

function JsonLd({ schemas }) {
  const payload = useMemo(
    () => schemas.filter(Boolean),
    [schemas],
  )

  if (!payload.length) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload.length === 1 ? payload[0] : payload) }}
    />
  )
}

export default function SeoManager() {
  const { pathname } = useLocation()
  const params = useParams()
  const resolved = resolveRoute(appRoutes, pathname)
  const routeKey = resolved?.route.key ?? 'not-found'

  const seo = useMemo(
    () => resolveSeo(pathname, params, routeKey),
    [pathname, params, routeKey],
  )

  useEffect(() => {
    applySeo(seo)
  }, [seo])

  return <JsonLd schemas={seo.schemas} />
}
