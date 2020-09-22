import { phones } from '../../../phones'

export default function personHandler({ query: { id } }, res) {
  const filtered = phones.filter((p) => p.people === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered)
  } else {
    res.status(404).json({ message: `O usuário com o id ${id} não informou números para contatos.`   })
  }
}
