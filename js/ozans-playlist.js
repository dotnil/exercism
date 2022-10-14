// https://exercism.org/tracks/javascript/exercises/ozans-playlist/solutions/dotnil

export const removeDuplicates = playlist => [... new Set(playlist)]

export function hasTrack(playlist, track) {
  const set = new Set(playlist)

  return set.has(track)
}

export function addTrack(playlist, track) {
  const set = new Set(playlist)

  return [...set.add(track)]
}

export function deleteTrack(playlist, track) {
  const set = new Set(playlist)

  if ((set.delete(track)) === false) return playlist
  return [...set]
}

export function listArtists(playlist) {
  const artists = playlist.map(track => track.split(' - ')[1])

  return [...new Set(artists)]
}
