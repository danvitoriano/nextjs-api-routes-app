import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../../../../styles.module.css'
import LazyImg from '../../../../components/LazyImg'

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
    () => query.id && `/api/people/${query.id}/gallery`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div><ul className={styles.gallery}>
      {data.map((img, i) => (
        <LazyImg key={i} brand={img.brand} id={img.id}></LazyImg>
      ))}
    </ul>
    </div>)
}
