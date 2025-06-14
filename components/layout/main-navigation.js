import Link from 'next/link'
import Logo from './logo'
import styles from './main-navigation.module.css'

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <li>
          <Link href='/posts'>Posts</Link>
          <Link href='/contact'>Contact</Link>
        </li>
      </nav>
    </header>
  )
}
