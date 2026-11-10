/**
 * backgrounds/store.cjs — the per-zone picture choice, as remembered between sessions.
 */
const { BLUR_MAX, BLUR_MIN, OPACITY_MAX, OPACITY_MIN, POSITIONS, ZONES, defaultZoneConfig } = require('./zones.cjs')
const { STORAGE_KEY_BACKGROUNDS } = require('../shared/keys.cjs')

/** Read the per-zone background settings, dropping anything out of range. */
function readSavedBackgrounds() {
  const settings = {}
  for (const zone of ZONES) settings[zone.id] = defaultZoneConfig(zone.id)
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY_BACKGROUNDS) ?? 'null')
    if (parsed === null || typeof parsed !== 'object') return settings
    for (const zone of ZONES) {
      const stored = parsed[zone.id]
      if (stored === null || typeof stored !== 'object') continue
      const config = settings[zone.id]
      if (typeof stored.name === 'string') config.name = stored.name
      // A store written before themes brought pictures has no flag; those zones
      // follow the theme, which is what the default says.
      if (typeof stored.follow === 'boolean') config.follow = stored.follow
      const opacity = Number(stored.opacity)
      if (Number.isFinite(opacity)) config.opacity = Math.min(OPACITY_MAX, Math.max(OPACITY_MIN, opacity))
      const panelOpacity = Number(stored.panelOpacity)
      if (Number.isFinite(panelOpacity)) {
        config.panelOpacity = Math.min(100, Math.max(0, panelOpacity))
      }
      const blur = Number(stored.blur)
      if (Number.isFinite(blur)) config.blur = Math.min(BLUR_MAX, Math.max(BLUR_MIN, Math.round(blur)))
      if (stored.size === 'cover' || stored.size === 'contain') config.size = stored.size
      if (POSITIONS.includes(stored.position)) config.position = stored.position
    }
  } catch {
    // A blocked or corrupt store means the defaults.
  }
  return settings
}

/**
 * Persist the per-zone settings; an all-empty set removes the entry.
 *
 * A zone that was pinned to the plain surface is not "empty": the pin is the
 * user saying they do not want the theme's picture there, so it must survive a
 * reload instead of being dropped together with the name.
 */
function writeSavedBackgrounds(settings) {
  try {
    const nothingToRemember = ZONES.every((zone) => settings[zone.id].name === ''
      && settings[zone.id].follow !== false)
    if (nothingToRemember) {
      window.localStorage.removeItem(STORAGE_KEY_BACKGROUNDS)
    } else {
      window.localStorage.setItem(STORAGE_KEY_BACKGROUNDS, JSON.stringify(settings))
    }
  } catch {
    // A blocked storage backend is a supported state for this row.
  }
}

module.exports = { readSavedBackgrounds, writeSavedBackgrounds }
