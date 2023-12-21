import styles from 'styles/container.module.css'

export default function container ({ children }) {
  return <div className={styles.default}>{children}</div>
}
