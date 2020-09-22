import Link from 'next/link'

export default function Film({ film }) {
  return (
    <li>
      <Link href="/films/[id]" as={`/films/${film.id}`}>
        <a>See Film Detail {film.id}</a>
      </Link>
    </li>
  )
}
