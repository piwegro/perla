import OfferList from './OfferList'

/** Fetches last offer from API */
const getLastOffers = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers/0`)

        if (!res.ok) {
            throw new Error(res.statusText)
        }

        return res.json()
    } catch (e) {
        return []
    }
}

/** Component containing last offers */
const LastOffers = async () => {
    const lastOffers = await getLastOffers() // get last offers

    return (
        <>
            <OfferList offers={lastOffers} />
        </>
    )
}

export default LastOffers
