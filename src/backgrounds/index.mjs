/**
 * Host sub-plugin: Multi-Zone Backgrounds.
 */
import { backgroundsDirectory } from '../themes.mjs'
import { seedBackgrounds } from '../host/backgrounds-store.mjs'
import { dshHome } from '../host/home.mjs'
import { markSubpluginActive } from '../host/subplugins.mjs'

export const name = 'custom-theme-backgrounds'

export function apply(ctx, config) {
  ctx.effect(() => markSubpluginActive(name))
  const home = dshHome()
  const backgrounds = backgroundsDirectory(config, home)
  seedBackgrounds(backgrounds).then((names) => {
    if (names.length > 0) ctx.logger?.info?.('custom-theme-backgrounds: seeded %s', names.join(', '))
  }, (error) => {
    ctx.logger?.warn?.('custom-theme-backgrounds: preparing directory failed: %s', error.message)
  })
}
