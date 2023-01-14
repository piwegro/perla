import Loader from '../../components/common/Loader'
import Hero from '../../components/common/Hero'
import { container } from '../../styles/common/Grid.module.scss'
import styles from '../../styles/pages/user/Favourites.module.scss'
import Favourites from '../../components/user/Favourites'

const Page = async () => {
    return (
        <>
            <Loader />
            <Hero center={true}>
                <h2>Ulubione ogłoszenia</h2>
            </Hero>
            <div className={container}>
                <div className={styles.content}>
                    <h2>Lista ogłoszeń</h2>
                    <Favourites />
                </div>
            </div>
        </>
    )
}

export default Page
