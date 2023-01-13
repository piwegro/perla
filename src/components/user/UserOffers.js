import { Suspense } from 'react'
import OfferList from '../search/OfferList'

/** Fetches offers of specified user from the API */
const getUserOffers = async id => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}/offers`)

        if (!res.ok) {
            throw new Error(res.statusText)
        }

        return res.json()
    } catch (e) {
        return []
    }
}

/** List of user's offers */
const UserOffers = async ({ id, type }) => {
    const userOffers = await getUserOffers(id) // Fetch user's offers from API

    return (
        <>
            <Suspense fallback={<div>Ładowanie ogłoszeń użytkownika...</div>}>
                <OfferList offers={userOffers} type={type} />
            </Suspense>
        </>
    )
}

export default UserOffers
