/**
 * theme/backgrounds.cjs — the wallpaper a theme brings with it.
 *
 * A theme and its wallpaper are one look, but they are two stores: the theme
 * lives in `theme/selection.cjs`, the pictures in `backgrounds/store.cjs`. This
 * module is the bridge — which picture a theme names, and which zones a switch
 * is allowed to repaint.
 *
 * Naming follows two rules, cheapest first:
 *
 *   1. the stylesheet says so: `/* @background: name.webp *\/`, which is how a
 *      hand-written theme points at a file that is not named after it;
 *   2. otherwise the seed convention `<theme id>-bg.webp`, which every bundled
 *      wallpaper follows.
 *
 * A theme may name a picture that is not on disk (the user deleted it), and a
 * theme may name none at all. Both mean the picture a switch should paint is
 * the empty name — the plain surface. That is deliberate: a theme that brings
 * no wallpaper should not leave the previous theme's image behind, because the
 * window would then be one theme's colours under another theme's picture.
 */

/** Zone a theme switch repaints. A theme is a whole-window look. */
const FOLLOW_ZONE = 'global'

/** Seeded wallpapers whose file name does not match their theme id. */
const PICTURE_OVERRIDES = {
  angelina: 'angelina-light-hero.webp',
}

/** Suffix the seed convention appends to a theme id. */
const PICTURE_SUFFIX = '-bg.webp'

/**
 * The wallpaper a theme brings.
 * @param id - Theme id, or `''` when no theme is selected.
 * @param declared - Picture named by the stylesheet, or `''` when it names none.
 * @param names - Pictures the host lists.
 * @returns The picture name, or `''` for the plain surface.
 */
function pictureForTheme(id, declared, names) {
  if (id === '') return ''
  const candidate = declared !== ''
    ? declared
    : (PICTURE_OVERRIDES[id] ?? `${id}${PICTURE_SUFFIX}`)
  return names.includes(candidate) ? candidate : ''
}

/**
 * Give the following zone the picture a theme brings.
 *
 * Only `name` moves. Opacity, blur, fit and position are the user's own
 * preferences and survive a switch untouched, so picking a theme never resets
 * how strongly the wallpaper shows. A zone that has been pinned keeps its
 * picture and is returned untouched — as are all settings, when the zone
 * already paints that picture, so nothing repaints for no reason.
 * @param settings - Per-zone settings, as stored.
 * @param picture - Picture to paint, or `''` for the plain surface.
 * @returns The settings to store, identical when nothing changed.
 */
function applyThemePicture(settings, picture) {
  const zone = settings[FOLLOW_ZONE]
  if (zone === undefined || zone.follow !== true || zone.name === picture) return settings
  return { ...settings, [FOLLOW_ZONE]: { ...zone, name: picture } }
}

module.exports = { FOLLOW_ZONE, applyThemePicture, pictureForTheme }
