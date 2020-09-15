import useSWR from 'swr'
import Person from '../components/Person'
import Link from 'next/link'
import styles from '../styles.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div id="root">
        <ul>
          <li className={styles.hello}>
          <Link href="/about">
             <a>About</a>
          </Link>
          </li>
          {data.map((p, i) => (
            <Person key={i} person={p} />
          ))}
        </ul>
    </div>
  )

}
