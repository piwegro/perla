import Hero from '../../../../components/common/Hero'
import styles from '../../../../styles/pages/Offer.module.scss'
import { container } from '../../../../styles/common/Grid.module.scss'
import Button from '../../../../components/common/Button'
import Carousel from '../../../../components/offer/Carousel'
import FavouriteButton from '../../../../components/offer/FavouriteButton'

/** Gets the details of the offer with specified ID */
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

/** Preloads offer data to make the load time faster. */
export const preload = id => {
    void getOffer(id)
}

const Page = async ({ params }) => {
    const { id } = params // Get offer ID
    const offerData = await getOffer(id) // Get offer data

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
                                <div>
                                    <h3>{offerData.seller?.name}</h3>
                                </div>
                                <Button
                                    element={'anchor'}
                                    href={`/messages/${offerData.seller?.uid}`}>
                                    Wyślij wiadomość
                                </Button>

                                <Button
                                    element={'anchor'}
                                    href={`/user/${offerData.seller?.uid}/reviews`}
                                    type={'light'}>
                                    Opinie o użytkowniku
                                </Button>

                                <Button
                                    element={'anchor'}
                                    href={`/user/${offerData.seller?.uid}`}
                                    type={'light'}>
                                    Inne ogłoszenia użytkownika
                                </Button>

                                <Button
                                    element={'anchor'}
                                    href={`/user/${offerData.seller?.uid}`}
                                    type={'light'}>
                                    Profil użytkownika
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
                                <FavouriteButton offerID={id} />
                            </div>
                            <span className={styles.creationDate}>
                                Data dodania: {new Date('2022-10-31T18:32:19').toLocaleString()}
                            </span>

                            <p>{offerData.description}</p>

                            <hr />
                            <h2>Cena</h2>

                            <div className={styles.prices}>
                                {offerData.price.map(price => (
                                    <span key={price.currency.symbol}>
                                        {price.amount} {price.currency.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Page
export const revalidate = 60 // Cache revalidation time
