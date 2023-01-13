import Loader from '../../components/common/Loader'
import Hero from '../../components/common/Hero'
import { container } from '../../styles/common/Grid.module.scss'
import styles from '../../styles/pages/user/Favourites.module.scss'

const Page = async ({ params }) => {
    return (
        <>
            <Loader />
            <Hero center={true}>
                <h2>Ulubione ogłoszenia</h2>
            </Hero>
            <div className={container}>
                <div className={styles.content}>
                    {/*TODO: ulubione ogłoszenia*/}
                    <h2>Lista ogłoszeń</h2>
                </div>
            </div>
        </>
    )
}

export default Page
