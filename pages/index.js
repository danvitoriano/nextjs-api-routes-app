import useSWR from 'swr'
import Person from '../components/Person'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR('/api/peoples', fetcher);

  if (error) return (<div>Failed to load </div>)
  if (!data) return (<div>Loading...</div>)

  return (
    <ul>
      <h2></h2>
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>
  )
}
