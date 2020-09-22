import { useRouter } from 'next/router'
import useSWR from 'swr'
import Film from '../../components/Film'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data;
}

export default function Films() {
  const { data, error } = useSWR(
    () => `/api/films/`,
    fetcher
  )
  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div><ul>
      {data.map((f, i) => (
        <Film key={i} film={f} />
      ))}
    </ul>
    </div>)
}
