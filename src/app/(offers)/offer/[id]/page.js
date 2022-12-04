import Hero from '../../../../components/common/Hero'
import styles from '../../../../styles/pages/Offer.module.scss'
import { container } from '../../../../styles/common/Grid.module.scss'
import Button from '../../../../components/common/Button'
import Carousel from '../../../../components/offer/Carousel'

const getOffer = async id => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offer/${id}`)

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
    void getOffer(id)
}

const Page = async ({ params }) => {
    const { id } = params
    const offerData = await getOffer(id)

    return (
        <>
            <Hero center={true}>
                <h2>{offerData?.error ? 'Nie znaleziono głoszenia' : offerData.title}</h2>
            </Hero>
            {!offerData?.error ? (
                <div className={container}>
                    <div className={styles.wrapper}>
                        <div className={`${styles.box} ${styles.mainBox}`}>
                            <Carousel offerData={offerData} />
                        </div>
                        <div className={`${styles.box} ${styles.userBox}`}>
                            <div className={styles.sellerDetails}>
                                <img
                                    src='/user_avatar.png'
                                    alt='Avatar użytkownika'
                                    className={styles.sellerAvatar}
                                />
                                <h3>{offerData.seller?.name}</h3>
                                <Button element={'anchor'} href={'/'}>
                                    Wyślij wiadomość
                                </Button>

                                <Button
                                    element={'anchor'}
                                    href={`/user/${offerData.seller?.uid}`}
                                    type={'light'}>
                                    Inne ogłoszenia sprzedawcy
                                </Button>
                            </div>

                            <div className={styles.offerLocation}>
                                <h4>Lokalizacja ogłoszenia</h4>
                                <span>
                                    {offerData?.location ?? 'Ogłoszeniodawca nie podał lokalizacji'}
                                </span>
                            </div>
                        </div>
                        <div
                            className={`${styles.box} ${styles.mainBox} ${styles.offerDescription}`}>
                            <div className={styles.descTitle}>
                                <h2>Opis ogłoszenia</h2>
                                <span>{new Date('2022-10-31T18:32:19').toLocaleString()}</span>
                            </div>
                            <p>{offerData.description}</p>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Page
export const revalidate = 60
