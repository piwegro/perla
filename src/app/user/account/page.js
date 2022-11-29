import { Suspense } from 'react'
import { container } from '../../../styles/common/Grid.module.scss'
import styles from '../../../styles/pages/Account.module.scss'
import Hero from '../../../components/common/Hero'
import LogOutButton from '../../../components/auth/LogOutButton'
import UserOffers from '../../../components/user/UserOffers'

const Page = ({ params }) => {
    return (
        <>
            <Hero center={true}>
                <h2>Konto</h2>
            </Hero>
            <div className={container}>
                <div className={styles.wrapper}>
                    <div className={`${styles.mainBox} ${styles.box}`}>
                        <h1>Twoje ogłoszenia</h1>
                        <div className={styles.listings}></div>
                    </div>
                    <div className={`${styles.sideBox} ${styles.box}`}>
                        <LogOutButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
