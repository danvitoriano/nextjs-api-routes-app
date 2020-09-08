import useSWR from 'swr'
import Person from '../components/Person'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Falha na Leitura</div>
  if (!data) return <div>Carregando...</div>

  return (
    <ul>
      {data.map((p, i) => (
       <Person key={i} person={p} />
      ))}
    </ul>
  )
}
