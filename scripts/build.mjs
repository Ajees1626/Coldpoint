import { spawnSync } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const distDir = join(root, 'dist')

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: 'inherit',
    shell: true,
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

console.log('→ Building production bundle (Vite)…')
run('npx', ['vite', 'build'])

console.log('→ Generating sitemap.xml…')
run('node', ['scripts/generate-sitemap.mjs'])

const required = ['index.html', 'robots.txt', 'sitemap.xml', '.htaccess', 'favicon.svg']
const missing = required.filter((file) => !existsSync(join(distDir, file)))

if (missing.length) {
  console.error(`✗ Build incomplete. Missing in dist/: ${missing.join(', ')}`)
  process.exit(1)
}

const assets = existsSync(join(distDir, 'assets'))
  ? readdirSync(join(distDir, 'assets')).length
  : 0

console.log('')
console.log('✓ Production build ready → frontend/dist/')
console.log(`  • ${required.length} deploy files verified`)
console.log(`  • ${assets} asset file(s) in dist/assets/`)
console.log('  • Upload dist/ contents to your web server root')
