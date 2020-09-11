import { people } from '../../../../../data'

export default function galleryHandler({ query: { id } }, res) {
  const filtered = people.filter((p) => p.id === id)

  // User with id exists
  if (filtered.length > 0) {
    if (filtered[0].gallery.length > 0) {
      res.status(200).json(filtered[0].gallery)
    } else {
      res.status(204).json({ message: `No photos in gallery User with id: ${id}.` })
    }
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
