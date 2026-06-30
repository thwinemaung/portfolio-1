import { Font } from '@react-pdf/renderer'

// react-pdf's built-in standard fonts (Helvetica etc.) can't render most
// non-ASCII glyphs (bullets, en-dashes, etc.), so we embed a real font.
// Fetched from this app's own /public/fonts via the request's own origin
// rather than via fs, since serverless bundlers don't reliably trace
// dynamic fs reads into public/ for the deployed function.
let registered = false

export function registerResumeFonts(origin: string) {
  if (registered) return
  Font.register({
    family: 'Inter',
    fonts: [
      { src: `${origin}/fonts/Inter-Regular.ttf`, fontWeight: 400 },
      { src: `${origin}/fonts/Inter-Medium.ttf`, fontWeight: 500 },
      { src: `${origin}/fonts/Inter-SemiBold.ttf`, fontWeight: 600 },
      { src: `${origin}/fonts/Inter-Bold.ttf`, fontWeight: 700 },
    ],
  })
  registered = true
}
