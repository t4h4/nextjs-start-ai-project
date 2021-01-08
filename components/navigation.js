import Link from "next/link";
import styles from './nav.module.css'
function Navigation() {
  return (
    <nav>
      <Link href="/">
        {/* Adding Component-Level CSS with css module  */}
        <a className={styles.link}>Homepage</a> 
      </Link>
      <Link href="/about">
      {/* CSS-in-JS method */}
        <a style={{color: 'blue'}}>About</a>
      </Link>
    </nav>
  );
}

export default Navigation;
