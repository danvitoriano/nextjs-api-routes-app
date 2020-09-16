import Link from 'next/link'

export default function Person({ person }) {
  return (
    <tr>
      <td>
          {person.name}
      </td>
      <td>
        <Link href="/person/[id]" as={`/person/${person.id}`}>Editar</Link>
      </td>
      <td>Excluir</td>
    </tr>
  )
}
