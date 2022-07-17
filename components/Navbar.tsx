import Link from "next/link"
import { ActiveLink } from "./ActiveLink"
import styles from './Styles.module.css'
const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
export const Navbar = () => {

  return (
    <nav  className={styles['navbar-menu']}>
      {
        menuItems.map(item => (
          <ActiveLink key={ item.text } text={ item.text } href={ item.href }/>
        ))
      }
    </nav>
  )
}
