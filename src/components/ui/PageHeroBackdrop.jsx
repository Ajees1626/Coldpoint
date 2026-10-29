import SmoothAirBackdrop from './SmoothAirBackdrop'

const variants = [
  'ac-cool',
  'breeze',
  'duct',
  'vortex',
  'radial',
  'frost',
  'draft',
  'stream',
  'pulse',
  'whisper',
]

export default function PageHeroBackdrop({ variant }) {
  if (!variants.includes(variant)) return null
  return <SmoothAirBackdrop variant={variant} />
}
