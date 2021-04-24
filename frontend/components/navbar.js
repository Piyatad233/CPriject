import Link from 'next/link'
import styles from "../styles/navbar.module.css";
const Navbar = () => (
    <div>
    <div className={styles.menu}>
        <div className={styles.menuitem}><Link href="/" ><a> <b>Home </b></a></Link> </div>
        <div className={styles.menuitem}><Link href="/register" ><a> <b>Register</b> </a></Link>  </div>
        <div className={styles.menuitem}><Link href="/login" ><a> <b>Login</b> </a></Link> </div>
        <div className={styles.menuitem}><Link href="/profile"><a> <b>Profile</b> </a></Link> </div>
        <div className={styles.menuitem}><Link href="/boader"><a> <b>Boader</b> </a></Link> </div>
        <div className={styles.menuitem}><Link href="/herolist"><a> <b>Hero Edit</b> </a></Link> </div>
        <div className={styles.menuitem}><Link href="/getConfig"><a><b> Config</b> </a></Link></div>
        <div className={styles.menuitem}><Link href="/logout"><a> <b>Logout</b> </a></Link> </div>
    </div>

    </div>
  
    
)

export default Navbar