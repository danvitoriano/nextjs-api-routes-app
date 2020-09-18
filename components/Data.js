import styles from '../styles.module.css'

export default function Data({label, value}){
  return (<div className={styles.data}>
  <label className={styles.label}>{label}</label>
  <div className={styles.value}>{value}</div>
</div>)
}
