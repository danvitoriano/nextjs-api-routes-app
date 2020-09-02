import Link from 'next/link'
import styles from '../styles.module.css'

export default function Person({ person }) {
  return (
    <li className={styles.hello}>
      <Link href="/person/[id]" as={`/person/${person.id}`}>
        <a>{person.name}</a>
      </Link>
    </li>
  )
}
