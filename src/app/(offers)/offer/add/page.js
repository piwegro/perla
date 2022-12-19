import Hero from '../../../../components/common/Hero'
import { container } from '../../../../styles/common/Grid.module.scss'
import styles from '../../../../styles/pages/OfferAdd.module.scss'
import AddForm from '../../../../components/offer/AddForm'
import Loader from '../../../../components/common/Loader'

const getCurrencies = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/currencies`)

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
    void getCurrencies()
}

const Page = async () => {
    const currencies = await getCurrencies()

    return (
        <>
            <Loader />
            <Hero center={true}>
                <h2>Dodaj ogłoszenie</h2>
            </Hero>
            <div className={container}>
                <div className={styles.box}>
                    <AddForm currencies={currencies || []} />
                </div>
            </div>
        </>
    )
}

export default Page
