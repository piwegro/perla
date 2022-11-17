import OfferList from './OfferList'

const getLastOffers = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers/0`)

    // TODO: replace this with some json return
    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

const LastOffers = async () => {
    const lastOffers = await getLastOffers()

    return (
        <>
            <OfferList offers={lastOffers} />
        </>
    )
}

export default LastOffers
