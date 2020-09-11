import useSWR from 'swr'
import styles from '../styles.module.css'

export default function LazyImg({ id, brand }) {
  console.log(id, brand)
  // const fetcher = async (url) => {
  //   const res = await fetch(url)
  //   const data = await res.json()

  //   if (res.status !== 200) {
  //     throw new Error(data.message)
  //   }
  //   return data
  // }
  // const { data, error } = useSWR(
  //   () => id && `logo512.png`,
  //   fetcher
  // )

  const imgSrc = id;

  // if (error) return <div>{error.message}</div>
  // if (!data) return <div>Loading...</div>

  return (
    <li className={styles.galleryphoto}>
      {brand}<br />
      <img brand={brand} src={imgSrc} />
    </li>
  )
}
