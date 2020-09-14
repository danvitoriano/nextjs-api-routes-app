import useSWR from 'swr'
import Person from '../components/Person'
import Link from 'next/link'



const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)
  const { dataApresentation, errorApresentation } = useSWR('/apresentation', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (<>
      <Link href="/apresentation/">
          <a>Apresentation</a>
        </Link>
    <ul>
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>

   </>
  
  )
}
