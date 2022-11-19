import styles from '../../styles/common/Footer.module.scss'
import { container } from '../../styles/common/Grid.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={container}>
                <p>&copy; 2022 Piwegro</p>
            </div>
        </footer>
    )
}

export default Footer
