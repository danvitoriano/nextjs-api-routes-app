import { useRouter } from 'next/router'
import useSWR from 'swr'
import FilmData from '../../components/FilmData'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Films() {
  const { id } = useRouter().query;

  const { data, error } = useSWR(
    () => id && `/api/films/${id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (<FilmData data={data}/>
  )
}
