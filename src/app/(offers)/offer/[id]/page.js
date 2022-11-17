import Hero from '../../../../components/common/Hero'
import styles from '../../../../styles/pages/Offer.module.scss'
import { container } from '../../../../styles/common/Grid.module.scss'
import Button from '../../../../components/common/Button'
import Link from 'next/link'

const getOffer = async id => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offer/${id}`)

    // TODO: replace this with some json return
    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

const Page = async ({ params }) => {
    const { id } = params
    const offerData = await getOffer(id)

    return (
        <>
            <Hero center={true}>
                <h2>{offerData.title}</h2>
            </Hero>
            <div className={container}>
                <div className={styles.wrapper}>
                    <div className={`${styles.box} ${styles.mainBox}`}>a</div>
                    <div className={`${styles.box} ${styles.userBox}`}>
                        <div className={styles.sellerDetails}>
                            <img
                                src='/user_avatar.png'
                                alt='Avatar użytkownika'
                                className={styles.sellerAvatar}
                            />
                            <h3>{offerData.seller.name}</h3>
                            <Button element={'anchor'} href={'/'}>
                                Wyślij wiadomość
                            </Button>

                            <Link
                                href={`/user/${offerData.seller.id}`}
                                className={styles.otherOffers}>
                                Inne ogłoszenia od tej osoby
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.box} ${styles.mainBox}`}>c</div>
                </div>
            </div>
        </>
    )
}

export default Page
