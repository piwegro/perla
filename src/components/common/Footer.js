import styles from '../../styles/common/Footer.module.scss'
import { container } from '../../styles/common/Grid.module.scss'

/** Footer component */
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={container}>
                <p>&copy; {new Date().getFullYear()} Piwegro</p>
            </div>
        </footer>
    )
}

export default Footer
