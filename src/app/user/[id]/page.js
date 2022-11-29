import { Suspense } from 'react'
import Hero from '../../../components/common/Hero'
import { container } from '../../../styles/common/Grid.module.scss'
import styles from '../../../styles/pages/Account.module.scss'
import AcceptedCurrencies from '../../../components/user/AcceptedCurrencies'
import Opinions from '../../../components/user/Opinions'
import UserOffers from '../../../components/user/UserOffers'

const getUser = async id => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`)

        if (!res.ok) {
            throw new Error(res.statusText)
        }

        return res.json()
    } catch (e) {
        return {
            error: true,
        }
    }
}

export const preload = id => {
    void getUser(id)
}

const Page = async ({ params }) => {
    const userData = await getUser(params.id)

    return (
        <>
            <Hero center={true}>
                <h2>
                    {userData?.error
                        ? 'Nie znaleziono użytkownika'
                        : `Profil użytkownika ${userData.name}`}
                </h2>
            </Hero>
            {!userData?.error ? (
                <div className={container}>
                    <div className={styles.wrapper}>
                        <div className={`${styles.mainBox} ${styles.box}`}>
                            <h1>Ogłoszenia użytkownika</h1>
                            <div className={styles.listings}>
                                <Suspense fallback={<p>Ładowanie ogłoszeń...</p>}>
                                    <UserOffers id={params.id} type={'user'} />
                                </Suspense>
                            </div>
                        </div>
                        <div className={`${styles.sideBox} ${styles.box}`}>
                            <h3>Preferowane waluty</h3>

                            <AcceptedCurrencies currencies={userData.accepted_currencies} />
                            <h3>Opinie o użytkowniku</h3>
                            <Opinions />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Page
