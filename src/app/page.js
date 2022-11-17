import Hero from '../components/common/Hero'
import { container } from '../styles/common/Grid.module.scss'
import styles from '../styles/pages/Home.module.scss'
import LastOffers from '../components/search/LastOffers'

export default function Page() {
    return (
        <>
            <Hero page={'main'} />
            <div className={styles.content}>
                <div className={container}>
                    <h2>Ostatnie ogłoszenia</h2>
                    <LastOffers />
                </div>
            </div>
        </>
    )
}
