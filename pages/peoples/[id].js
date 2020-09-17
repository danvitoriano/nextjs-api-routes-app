import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Person() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/peoples/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
          <th>Films</th>
          {/* <th>Gallery</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.height}</td>
          <td>{data.mass}</td>
          <td>{data.hair_color}</td>
          <td>{data.skin_color}</td>
          <td>{data.eye_color}</td>
          <td>{data.gender}</td>
          <td>{data.films && (<Link key={i} href="/peoples/[id]/films" as={`/peoples/${data.id}/films`}>See gallery</Link>)}</td>
          {/* <td>{data.films && ( data.films.map(f,i=> <Link key={i} href="/people/[id]/gallery" as={`/people/${data.id}/gallery`}>See gallery</Link>)} </td> */}
        </tr>
      </tbody>
    </table>
  )
}
