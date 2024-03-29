import Hero from '../../../components/common/Hero'
import { container } from '../../../styles/common/Grid.module.scss'
import styles from '../../../styles/pages/Account.module.scss'
import OwnOffers from '../../../components/user/OwnOffers'
import LogOutButton from '../../../components/auth/LogOutButton'
import ProfileButton from '../../../components/user/ProfileButton'
import Loader from '../../../components/common/Loader'

const Page = async () => {
    return (
        <>
            <Loader />
            <Hero center={true}>
                <h2>Konto</h2>
            </Hero>
            <div className={container}>
                <div className={styles.wrapper}>
                    <div className={`${styles.mainBox} ${styles.box}`}>
                        <h1>Twoje ogłoszenia</h1>
                        <div className={styles.listings}>
                            <OwnOffers />
                        </div>
                    </div>
                    <div className={`${styles.sideBox} ${styles.box}`}>
                        <h3>Twoje preferowane waluty</h3>
                        <ProfileButton />
                        <LogOutButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
